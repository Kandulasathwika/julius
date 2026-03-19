import { Resend } from "resend";

function getResendClient() {
  const key = process.env.RESEND_API_KEY;
  if (!key || key.includes("REPLACE_ME")) {
    return null;
  }
  return new Resend(key);
}

export const resend = getResendClient();
