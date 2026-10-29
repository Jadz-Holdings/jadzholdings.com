import { connection } from "next/server";
import { ContactForm } from "@/components/ContactForm";

export async function ContactFormSection() {
  await connection();
  const deliveryConfigured = Boolean(
    process.env.RESEND_API_KEY && process.env.CONTACT_TO_EMAIL,
  );

  return <ContactForm deliveryConfigured={deliveryConfigured} />;
}
