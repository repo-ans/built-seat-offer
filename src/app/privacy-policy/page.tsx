import type { Metadata } from "next";
import { company } from "@/lib/data";
import { B, Callout, ContactCard, LegalShell, List, Section } from "@/components/legal/parts";

export const metadata: Metadata = {
  title: `Privacy Policy — ${company.brand}`,
  description: `How ${company.brand}, operated by ${company.operator}, collects, uses, and safeguards your information.`,
};

export default function PrivacyPolicyPage() {
  return (
    <LegalShell title="Privacy Policy">
      <Section title="1. Introduction">
        <p>
          At {company.brand}, operated by {company.operator} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
          &ldquo;our&rdquo;), your privacy matters to us. This Privacy Policy explains how we
          collect, use, and safeguard your information when you interact with our website,
          services, and communications.
        </p>
      </Section>

      <Section title="2. Information We Collect">
        <p>We may collect the following types of information:</p>
        <List>
          <li>
            <B>Personal Information:</B> Name, agency or business name, email address, phone
            number, project details, and other information you provide via our forms.
          </li>
          <li>
            <B>Usage Data:</B> IP address, browser type, pages visited, and — where enabled —
            marketing identifiers passed through URL parameters (such as UTM parameters, Google
            Click ID, or Facebook Click ID).
          </li>
          <li>
            <B>Communication Data:</B> Text message and email interactions, form submissions, and
            call records.
          </li>
        </List>
      </Section>

      <Section title="3. How We Use Your Information">
        <p>We may use your information to:</p>
        <List>
          <li>Respond to your inquiries and scope the project you request</li>
          <li>Provide updates about our build services</li>
          <li>Send appointment reminders or follow-ups via SMS, email, or phone</li>
          <li>Analyze site traffic and improve our services</li>
          <li>Comply with legal obligations or resolve disputes</li>
        </List>
      </Section>

      <Section title="4. Sharing Your Information">
        <p>We do not sell your personal information. We may share information with:</p>
        <List>
          <li>Internal staff and contractors under confidentiality agreements</li>
          <li>
            Third-party service providers (such as GoHighLevel, our CRM and messaging platform,
            plus analytics and hosting providers) strictly to perform services on our behalf
          </li>
          <li>Legal authorities if required by law</li>
        </List>
        <Callout title="Non-Sharing Clause">
          <p>
            No mobile information will be shared with third parties or affiliates for marketing or
            promotional purposes. Information sharing to subcontractors in support services, such
            as customer service, is permitted. All other use case categories exclude text
            messaging originator opt-in data and consent — this information will not be shared
            with any third parties.
          </p>
        </Callout>
      </Section>

      <Section title="5. Communication & Consent">
        <p>
          By submitting your information through our website forms, you consent to receive
          communications from {company.brand} via phone, SMS/text message, and email.
        </p>
        <List>
          <li>
            <B>Marketing Messages:</B> Promotions, offers, and service opportunities require your
            express written consent via checkbox opt-in on our forms.
          </li>
          <li>
            <B>Non-Marketing Messages:</B> Appointment reminders, service updates, and follow-ups
            require your express consent via checkbox opt-in.
          </li>
          <li>Consent to receive SMS messages is not a condition of any purchase or service.</li>
          <li>
            You may opt out of SMS at any time by replying <B>STOP</B> to any message. After
            opting out, you will receive one final confirmation message.
          </li>
          <li>
            For help, reply <B>HELP</B> to any message or contact us at {company.email} or call{" "}
            {company.phone}.
          </li>
        </List>
      </Section>

      <Section title="6. SMS/Text Messaging Terms">
        <p>
          {company.brand} offers an SMS messaging program to provide service updates, scheduling
          messages, and follow-ups related to your project inquiry.
        </p>
        <List>
          <li>
            By opting in, you agree to receive recurring text messages from us at the mobile
            number you provided.
          </li>
          <li>Message frequency varies based on your interactions with us.</li>
          <li>Message and data rates may apply. Contact your wireless carrier for pricing details.</li>
          <li>
            You can opt out at any time by texting <B>STOP</B>. You will receive one final
            confirmation message.
          </li>
          <li>
            For assistance, text <B>HELP</B> or contact us at {company.email} or {company.phone}.
          </li>
          <li>
            We will not sell, rent, or share your phone number or SMS consent information with any
            third parties or affiliates for marketing purposes.
          </li>
          <li>
            Your data may be shared with service providers (such as our CRM and messaging
            platform) solely for delivering the messages you consented to receive.
          </li>
          <li>Participating carriers are not liable for delayed or undelivered messages.</li>
        </List>
      </Section>

      <Section title="7. TCPA Compliance">
        <p>
          {company.brand} complies with the Telephone Consumer Protection Act (TCPA) and all
          applicable federal and provincial regulations governing text message and telephone
          communications.
        </p>
        <List>
          <li>
            We only send text messages to individuals who have provided prior express consent (for
            informational messages) or prior express written consent (for marketing messages)
            through our website forms.
          </li>
          <li>
            We honor all opt-out requests promptly. Upon receiving a STOP message, we will cease
            sending further communications within a reasonable timeframe.
          </li>
          <li>
            If you believe you have received a message in error, please contact us immediately at{" "}
            {company.email} or call {company.phone}.
          </li>
        </List>
      </Section>

      <Section title="8. Cookies & Analytics">
        <p>
          This site may use analytics and advertising conversion tools (such as Google Analytics
          or ad-platform pixels) to understand site usage and measure advertising performance.
          These services may set cookies or use similar technologies. You can control cookie
          behavior through your browser settings.
        </p>
      </Section>

      <Section title="9. Data Security">
        <p>
          We implement reasonable technical and organizational measures to protect your
          information against unauthorized access, loss, or misuse.
        </p>
      </Section>

      <Section title="10. Your Rights">
        <p>
          You may request access to, correction of, or deletion of your personal data at any time
          by contacting us.
        </p>
      </Section>

      <Section title="11. Updates to This Policy">
        <p>
          We may update this Privacy Policy periodically. Updates will be reflected on this page
          with a revised effective date.
        </p>
      </Section>

      <Section title="12. Contact Us">
        <p>If you have any questions about this Privacy Policy, please contact us at:</p>
        <ContactCard />
      </Section>
    </LegalShell>
  );
}
