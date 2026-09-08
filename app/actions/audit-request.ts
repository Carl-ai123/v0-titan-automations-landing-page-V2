"use server"

import { z } from "zod"

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

export async function submitAuditRequest(
  data: AuditRequestData,
): Promise<AuditRequestResult> {
  const parsed = auditRequestSchema.safeParse(data)
  if (!parsed.success) {
    return { success: false, error: "Please check your name, email and message length, then try again." }
  }
  // Only validated, known database fields are forwarded. The honeypot stays out of storage.
  const payload = auditRequestSchema.omit({ website_url: true }).parse(parsed.data)
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
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(10000),
    })

    if (!res.ok) {
      console.error("Audit request save failed with status", res.status)
      return failure
    }

    return { success: true }
  } catch {
    console.error("Audit request save failed: network error or timeout")
    return failure
  }
}
