"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export type ContactFormData = {
  name: string
  email: string
  businessName: string
  service: string
  message: string
}

export type ContactResult = {
  success: boolean
  error?: string
}

export async function submitContact(data: ContactFormData): Promise<ContactResult> {
  // Basic validation
  if (!data.name?.trim() || !data.email?.trim() || !data.businessName?.trim()) {
    return { success: false, error: "Please fill in all required fields." }
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return { success: false, error: "Please enter a valid email address." }
  }

  try {
    await resend.emails.send({
      from: "Titan Automations <noreply@titan-automations.com>",
      to: "info@titan-automations.com",
      replyTo: data.email,
      subject: `New enquiry — ${data.businessName} (${data.name})`,
      text: [
        "New enquiry from titan-automations.com",
        "",
        `Name:     ${data.name}`,
        `Business: ${data.businessName}`,
        `Email:    ${data.email}`,
        `Service:  ${data.service || "Not specified"}`,
        "",
        "Message:",
        data.message?.trim() || "(No message provided)",
      ].join("\n"),
    })

    return { success: true }
  } catch (err) {
    console.error("Resend error:", err)
    return {
      success: false,
      error: "Something went wrong. Email us directly at info@titan-automations.com.",
    }
  }
}
