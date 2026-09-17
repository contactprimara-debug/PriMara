"use server";

import { cookies } from "next/headers";
import { LEAD_PING_COOKIE } from "@/lib/leadPing";

/* Clears the one-shot conversion flag after the ping has fired.
   Safe to expose as a server action: it can only REMOVE the flag, never
   grant it, so a bot calling it achieves nothing but disarming itself.
   The cookie's 60s maxAge is the backstop if this call never lands. */
export async function clearLeadPingFlag(): Promise<void> {
  try {
    cookies().delete(LEAD_PING_COOKIE);
  } catch {
    // expiry handles it
  }
}
