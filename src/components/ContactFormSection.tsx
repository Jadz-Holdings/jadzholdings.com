import { ContactForm } from "@/components/ContactForm";

/**
 * Static Firebase Hosting export has no server runtime for Resend.
 * Keep mailto/tel as the working contact path (same practical posture as spaavs.com).
 * When moving to App Hosting / Functions later, restore env-gated delivery here.
 */
export function ContactFormSection() {
  return <ContactForm deliveryConfigured={false} />;
}
