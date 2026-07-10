import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Bloomie Privacy Policy | MangomindX Labs",
  description:
    "Privacy policy for Bloomie, including parent consent, child voice handling, account data, saved memories, and deletion requests.",
};

const updatedDate = "July 2026";

const sections = [
  {
    title: "1. What Bloomie is",
    body: [
      "Bloomie is a parent-facing speaking-confidence companion for children. It helps parents create small voice moments, understand speaking progress, and support daily confidence-building practice.",
      "Bloomie is not a medical device, speech therapy service, diagnosis tool, or replacement for a qualified professional.",
    ],
  },
  {
    title: "2. Who controls the child account",
    body: [
      "Bloomie is intended to be used by a parent or legal guardian. The parent creates or manages the family account and child profile.",
      "Parents are responsible for making sure they have permission to record, upload, or analyze a child’s voice.",
    ],
  },
  {
    title: "3. Information we may collect",
    body: [
      "Parent account information such as name, email address, phone number, sign-in provider, and authentication identifiers.",
      "Child profile information such as first name or nickname, age range, language, parent-selected focus, and optional profile photo if the parent chooses to add one.",
      "Voice activity information such as audio uploaded or recorded by the parent, transcript, speaking signals, result summaries, progress history, and saved memory status.",
      "Device and service information such as app version, device type, notification token, crash/debug information, request IDs, and basic usage events needed to operate and improve the service.",
    ],
  },
  {
    title: "4. How voice recordings are handled",
    body: [
      "Bloomie is designed to analyze a child’s voice moment and show parent-friendly feedback.",
      "Raw child audio is not intended to be permanently stored by default. If saved voice memories are available, the parent must choose to save the audio as a memory.",
      "Transcripts, speaking signals, insights, and progress history may be stored so parents can see the child’s voice journey over time.",
    ],
  },
  {
    title: "5. How we use information",
    body: [
      "To create and manage the parent account and child profiles.",
      "To transcribe and analyze voice moments and show parent-friendly insights.",
      "To show progress, history, reminders, and saved moments chosen by the parent.",
      "To provide support, improve reliability, prevent abuse, and keep the service secure.",
    ],
  },
  {
    title: "6. Sharing information",
    body: [
      "We do not sell children’s personal information.",
      "We do not use children’s voice data for third-party advertising.",
      "We may use trusted service providers for hosting, authentication, database storage, notifications, support, transcription, and security. These providers are used only to operate Bloomie and are not allowed to use the data for their own advertising purposes.",
      "We may disclose information if required by law, to protect safety, or to enforce our terms.",
    ],
  },
  {
    title: "7. Parent controls",
    body: [
      "Parents can request access, correction, export, or deletion of account and child profile information.",
      "Parents can request deletion of saved voice memories and voice activity history.",
      "Parents can request full account deletion using the account deletion page or by contacting support.",
    ],
  },
  {
    title: "8. Data retention",
    body: [
      "We keep account, child profile, transcript, insights, and progress information while the account is active or as needed to provide Bloomie.",
      "If a parent deletes an account, we will delete or de-identify personal information unless we must keep limited information for legal, security, fraud prevention, or accounting reasons.",
    ],
  },
  {
    title: "9. Children’s privacy",
    body: [
      "Bloomie is built around parent-led use. We ask parents to provide consent before recording, uploading, or analyzing a child’s voice.",
      "If you believe a child’s information was provided without proper permission, contact us so we can review and delete it where appropriate.",
    ],
  },
  {
    title: "10. Contact",
    body: [
      "For privacy questions, support requests, or deletion requests, contact: hello@mangomindx.com",
    ],
  },
];

export default function BloomiePrivacyPage() {
  return (
    <main className="bg-white text-slate-950">
      <Navbar />

      <section className="relative isolate overflow-hidden px-6 pt-16 pb-12 sm:pt-24 sm:pb-16 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.12),transparent_34%),linear-gradient(180deg,#ffffff_0%,#fff8f1_58%,#ffffff_100%)]" />
        <div className="mx-auto max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-4 py-2 text-sm font-semibold text-orange-600 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-orange-500" />
            Bloomie Privacy
          </div>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
            Privacy Policy
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Last updated: {updatedDate}. This policy explains how Bloomie handles
            parent account data, child profile data, voice moments, saved memories,
            and support requests.
          </p>
        </div>
      </section>

      <section className="px-6 py-12 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="rounded-[2rem] border border-orange-200 bg-orange-50/80 p-6 text-sm leading-7 text-slate-700 sm:p-8">
            This is a store-readiness draft for public website use. Before final
            submission, review it against the actual Bloomie app behavior,
            service providers, storage setup, and your legal obligations in each
            launch country.
          </div>

          {sections.map((section) => (
            <article key={section.title} className="border-b border-slate-200 pb-8 last:border-b-0">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                {section.title}
              </h2>
              <div className="mt-4 space-y-4 text-base leading-8 text-slate-600">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
