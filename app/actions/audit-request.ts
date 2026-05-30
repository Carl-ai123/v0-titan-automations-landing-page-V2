"use server"

export type AuditRequestData = {
  name:                 string
  business_name?:       string
  email:                string
  phone?:               string
  industry?:            string
  biggest_bottleneck?:  string
}

export type AuditRequestResult =
  | { success: true }
  | { success: false; error: string }

export async function submitAuditRequest(
  data: AuditRequestData,
): Promise<AuditRequestResult> {
  const url = "https://gshufnmwgevkbhxmerdy.supabase.co"
  const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdzaHVmbm13Z2V2a2JoeG1lcmR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk1MTg4NTAsImV4cCI6MjA5NTA5NDg1MH0.ARKSg0S5ODuvEYHVScTs3yJtgk2q0NktcMo6Y2CSk68"

  const res = await fetch(`${url}/rest/v1/audit_requests`, {
    method:  "POST",
    headers: {
      "Content-Type":  "application/json",
      "apikey":        key,
      "Authorization": `Bearer ${key}`,
      "Prefer":        "return=minimal",
    },
    body: JSON.stringify(data),
  })

  if (!res.ok) {
    const text = await res.text()
    console.error("Supabase insert failed:", text)
    return { success: false, error: "Something went wrong. Please email info@titan-automations.com directly." }
  }

  return { success: true }
}
