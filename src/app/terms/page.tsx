import type { Metadata } from "next";
import { company } from "@/lib/data";
import { B, ContactCard, InlineLink, LegalShell, Section, Sub } from "@/components/legal/parts";

export const metadata: Metadata = {
  title: `Terms and Conditions — ${company.brand}`,
  description: `The terms that apply when you use the ${company.brand} website and services.`,
};

export default function TermsPage() {
  return (
    <LegalShell title="Terms and Conditions">
      <Section title="1. Acceptance of Terms">
        <p>
          By accessing or using the {company.brand} website (operated by {company.operator},
          &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), you agree to be bound by these
          Terms and Conditions. If you do not agree, please do not use this website or our
          services.
        </p>
      </Section>

      <Section title="2. Use of the Website">
        <p>
          This website is provided to give information about our white-label technical build
          services for agencies and to let visitors request a project or book a call. You agree to
          use this website only for lawful purposes and not to submit false, misleading, or
          fraudulent information through any of our forms.
        </p>
      </Section>

      <Section title="3. Intellectual Property">
        <p>
          All content on this website — including text, graphics, logos, and the {company.brand}{" "}
          name and mark — is the property of {company.operator} and may not be copied, reproduced,
          or distributed without our written permission.
        </p>
      </Section>

      <Section title="4. User Submissions and Communication Consent">
        <p>
          When you submit a form on this website, you provide accurate contact information and
          consent to be contacted by {company.brand} by phone, SMS/text message, and email regarding
          your inquiry. See our <InlineLink href="/privacy-policy">Privacy Policy</InlineLink> for
          details on how we handle and use that information.
        </p>
      </Section>

      <Section title="5. SMS Terms of Service">
        <Sub title="5.1 Program Description">
          By submitting your phone number through our website forms and opting in, you agree to
          receive SMS/text messages from {company.brand} related to your inquiry, scheduled calls,
          and service updates.
        </Sub>
        <Sub title="5.2 Opt-In and Consent">
          Consent is collected via checkbox opt-in on our website forms. Consent to receive SMS
          messages is not a condition of any purchase or service.
        </Sub>
        <Sub title="5.3 Message Frequency">
          Message frequency varies based on your interactions with us (for example, a scheduling
          confirmation or a follow-up after you request information).
        </Sub>
        <Sub title="5.4 Message and Data Rates">
          Message and data rates may apply. Contact your wireless carrier for details on your
          specific plan.
        </Sub>
        <Sub title="5.5 Opt-Out">
          You can cancel SMS messages at any time by texting <B>STOP</B>. After you send STOP, we
          will send you a message confirming that you have been unsubscribed, and you will no
          longer receive SMS messages from us.
        </Sub>
        <Sub title="5.6 Help">
          If you are experiencing issues, text <B>HELP</B> or contact us at {company.email} or{" "}
          {company.phone}.
        </Sub>
        <Sub title="5.7 Carrier Liability">Carriers are not liable for delayed or undelivered messages.</Sub>
        <Sub title="5.8 Privacy">
          We will not sell, rent, or share your mobile information or SMS consent data with third
          parties or affiliates for marketing purposes. See our{" "}
          <InlineLink href="/privacy-policy">Privacy Policy</InlineLink> for full details.
        </Sub>
        <Sub title="5.9 Modifications">
          We reserve the right to modify or discontinue the SMS program at any time, with or
          without notice.
        </Sub>
      </Section>

      <Section title="6. Services & Billing">
        <p>
          Project work is scoped with you and billed on an hourly basis at the rate confirmed with
          you directly before work begins. Any change to scope or rate is agreed with you in
          advance.
        </p>
      </Section>

      <Section title="7. Client Responsibilities">
        <p>
          If you use our services to build or operate automated communications for your own
          clients or customers, you are responsible for ensuring your use complies with applicable
          telemarketing and anti-spam laws, including Canada&apos;s Anti-Spam Legislation (CASL) and
          the Telephone Consumer Protection Act (TCPA), including obtaining proper consent from
          your own customers before messaging them.
        </p>
      </Section>

      <Section title="8. Third-Party Links">
        <p>
          This website may link to third-party sites or services we do not control. We are not
          responsible for the content, policies, or practices of any third-party site.
        </p>
      </Section>

      <Section title="9. Disclaimers and Limitation of Liability">
        <p>
          This website and our services are provided &ldquo;as is&rdquo; without warranties of any
          kind. To the fullest extent permitted by law, {company.operator} is not liable for any
          indirect, incidental, or consequential damages arising from your use of this website or
          our services.
        </p>
      </Section>

      <Section title="10. Governing Law">
        <p>
          These Terms are governed by the laws of the Province of Ontario and the federal laws of
          Canada applicable therein, without regard to conflict-of-law principles.
        </p>
      </Section>

      <Section title="11. Changes to Terms">
        <p>
          We may update these Terms periodically. Continued use of this website after changes are
          posted constitutes acceptance of the revised Terms.
        </p>
      </Section>

      <Section title="12. Contact Us">
        <p>If you have any questions about these Terms, please contact us at:</p>
        <ContactCard />
      </Section>
    </LegalShell>
  );
}
