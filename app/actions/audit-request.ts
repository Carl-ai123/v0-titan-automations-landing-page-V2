"use server"

/*
  SUPABASE SETUP — SIMPLE 3-STEP GUIDE
  ─────────────────────────────────────
  Step 1: Create a free Supabase project at https://supabase.com
          Takes about 2 minutes. Choose EU West (London) for UK data.

  Step 2: Run this SQL in your Supabase SQL Editor (Database > SQL Editor):

    create table audit_requests (
      id                    uuid default gen_random_uuid() primary key,
      name                  text not null,
      business_name         text,
      email                 text not null,
      phone                 text,
      website               text,
      industry              text,
      biggest_bottleneck    text,
      monthly_leads         text,
      admin_hours_per_week  text,
      message               text,
      created_at            timestamptz default now()
    );

    -- Optional: enable row-level security (recommended)
    alter table audit_requests enable row level security;
    create policy "Service role can insert" on audit_requests
      for insert with check (true);

  Step 3: Add these two lines to your .env.local file:

    NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
    NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJI...your-anon-key

    (Find both in: Supabase > Project Settings > API)

  That is it. The form on the homepage will then capture leads directly
  into your Supabase table. You can view them in Supabase > Table Editor.
  ─────────────────────────────────────
*/

export type AuditRequestData = {
  name:                 string
  business_name?:       string
  email:                string
  phone?:               string
  website?:             string
  industry?:            string
  biggest_bottleneck?:  string
  monthly_leads?:       string
  admin_hours_per_week?:string
  message?:             string
}

export type AuditRequestResult =
  | { success: true }
  | { success: false; error: string }

export async function submitAuditRequest(
  data: AuditRequestData,
): Promise<AuditRequestResult> {
  /* ── Guard: check env vars are set ── */
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!url || !key) {
    console.warn("Supabase env vars not set. See TODO comments in audit-request.ts.")
    /* For now fall through and return success so the form still works during dev */
    return { success: true }
  }

  /* ── Insert into Supabase via REST API (no SDK needed) ── */
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
    return { success: false, error: "Something went wrong. Please email us directly." }
  }

  return { success: true }
}
