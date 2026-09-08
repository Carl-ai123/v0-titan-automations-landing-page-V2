"use server"

import { z } from "zod"
import { randomUUID } from "node:crypto"

const auditRequestSchema = z.object({
  name: z.string().trim().min(1).max(120),
  business_name: z.string().trim().max(200).optional(),
  email: z.string().trim().email().max(254),
  phone: z.string().trim().max(50).optional(),
  industry: z.string().trim().max(100).optional(),
  biggest_bottleneck: z.string().trim().max(3000).optional(),
  website_url: z.string().max(0).optional(),
})

export type AuditRequestData = {
  name:                 string
  business_name?:       string
  email:                string
  phone?:               string
  industry?:            string
  biggest_bottleneck?:  string
  website_url?:         string
}

export type AuditRequestResult =
  | { success: true }
  | { success: false; error: string }

async function notifyOwner(id: string, data: AuditRequestData): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error("Audit notification not sent", { enquiryId: id, reason: "missing_resend_api_key" })
    return
  }

  // The recipient and sender are server-owned; visitors can only supply Reply-To.
  const body = JSON.stringify({
    from: "Titan Automations <noreply@titan-automations.com>",
    to: ["carl@titan-automations.com"],
    reply_to: data.email,
    subject: "New website enquiry — Titan Automations",
    text: [
      "A new enquiry has been saved from titan-automations.com.",
      "",
      `Name: ${data.name}`,
      `Business: ${data.business_name || "Not provided"}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone || "Not provided"}`,
      `Industry: ${data.industry || "Not provided"}`,
      "",
      "Biggest bottleneck:",
      data.biggest_bottleneck || "Not provided",
      "",
      `Enquiry reference: ${id}`,
      "Reply to this email to contact the enquirer.",
      "This enquiry does not confirm a Calendly booking.",
    ].join("\n"),
  })

  // Retry network/server failures once, using the same key to prevent duplicate email.
  for (let attempt = 0; attempt < 2; attempt++) {
    try {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json",
          "Idempotency-Key": `audit-enquiry/${id}`,
        },
        body,
        signal: AbortSignal.timeout(5000),
      })
      if (response.ok) {
        const receipt = await response.json()
        if (typeof receipt.id === "string" && receipt.id.length > 0) {
          console.info("Audit notification accepted", { enquiryId: id, emailId: receipt.id })
          return
        }
        console.error("Audit notification not confirmed", { enquiryId: id, reason: "missing_email_id" })
        return
      }
      if (response.status < 500 || attempt === 1) {
        console.error("Audit notification not sent", { enquiryId: id, status: response.status })
        return
      }
    } catch {
      if (attempt === 1) {
        console.error("Audit notification not confirmed", { enquiryId: id, reason: "network_error_or_timeout" })
      }
    }
  }
}

export async function submitAuditRequest(
  data: AuditRequestData,
): Promise<AuditRequestResult> {
  const parsed = auditRequestSchema.safeParse(data)
  if (!parsed.success) {
    return { success: false, error: "Please check your name, email and message length, then try again." }
  }
  // Only validated, known database fields are forwarded. The honeypot stays out of storage.
  const payload = auditRequestSchema.omit({ website_url: true }).parse(parsed.data)
  const id = randomUUID()
  const failure: AuditRequestResult = {
    success: false,
    error: "We couldn't save your enquiry. Please try again or email info@titan-automations.com directly.",
  }
  const url = "https://gshufnmwgevkbhxmerdy.supabase.co"
  const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdzaHVmbm13Z2V2a2JoeG1lcmR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk1MTg4NTAsImV4cCI6MjA5NTA5NDg1MH0.ARKSg0S5ODuvEYHVScTs3yJtgk2q0NktcMo6Y2CSk68"

  try {
    const res = await fetch(`${url}/rest/v1/audit_requests`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "apikey": key,
        "Authorization": `Bearer ${key}`,
        "Prefer": "return=minimal",
      },
      body: JSON.stringify({ id, ...payload }),
      signal: AbortSignal.timeout(10000),
    })

    if (!res.ok) {
      console.error("Audit request save failed with status", res.status)
      return failure
    }

  } catch {
    console.error("Audit request save failed: network error or timeout")
    return failure
  }

  // Email failure must not turn a saved enquiry into a form failure and encourage resubmission.
  await notifyOwner(id, payload)
  return { success: true }
}
