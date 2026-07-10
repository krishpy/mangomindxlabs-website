import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Delete Bloomie Account | MangomindX Labs",
  description:
    "Request deletion of a Bloomie account, child profiles, voice history, transcripts, saved memories, and related data.",
};

const deleteItems = [
  "Parent account profile",
  "Child profiles connected to the account",
  "Voice moment history, transcripts, insights, and progress data",
  "Saved voice memories, if any were saved",
  "Notification tokens connected to the account",
];

export default function BloomieAccountDeletionPage() {
  return (
    <main className="bg-white text-slate-950">
      <Navbar />

      <section className="relative isolate overflow-hidden px-6 pt-16 pb-14 sm:pt-24 sm:pb-20 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.12),transparent_34%),linear-gradient(180deg,#ffffff_0%,#fff8f1_58%,#ffffff_100%)]" />
        <div className="mx-auto max-w-5xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-4 py-2 text-sm font-semibold text-orange-600 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-orange-500" />
            Bloomie Account Deletion
          </div>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
            Request deletion of your Bloomie account and data.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl sm:leading-9">
            Parents can request deletion of their Bloomie account, child profiles,
            voice activity history, transcripts, insights, and saved voice memories.
          </p>
        </div>
      </section>

      <section className="px-6 py-14 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-orange-600">
              What To Send
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              Email us from your registered parent account.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
              This helps us verify that the deletion request is coming from the
              parent or guardian who controls the Bloomie family account.
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_18px_60px_rgba(15,23,42,0.06)] sm:p-9">
            <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
              Send this email
            </h3>
            <div className="mt-5 rounded-2xl bg-slate-50 p-5 text-sm leading-7 text-slate-700 ring-1 ring-slate-200">
              <p><strong>To:</strong> hello@mangomindx.com</p>
              <p><strong>Subject:</strong> Delete my Bloomie account</p>
              <p className="mt-4"><strong>Message:</strong></p>
              <p>Please delete my Bloomie account and related child profile data. My registered email or phone number is: [add here].</p>
            </div>
            <a
              href="mailto:hello@mangomindx.com?subject=Delete%20my%20Bloomie%20account&body=Please%20delete%20my%20Bloomie%20account%20and%20related%20child%20profile%20data.%20My%20registered%20email%20or%20phone%20number%20is%3A%20"
              className="mt-6 inline-flex rounded-full bg-orange-500 px-7 py-4 text-base font-semibold text-white shadow-lg shadow-orange-200 transition hover:bg-orange-600"
            >
              Send deletion request
            </a>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-14 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-orange-600">
              Data Covered
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              What deletion normally includes.
            </h2>
          </div>

          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {deleteItems.map((item) => (
              <li
                key={item}
                className="rounded-[1.5rem] border border-slate-200 bg-white p-5 text-base font-medium leading-7 text-slate-700 shadow-[0_12px_40px_rgba(15,23,42,0.05)]"
              >
                {item}
              </li>
            ))}
          </ul>

          <p className="mt-8 max-w-4xl text-sm leading-7 text-slate-500">
            Some limited records may be retained where required for legal,
            security, fraud-prevention, accounting, or dispute-resolution reasons.
            If retained, they will not be used to provide Bloomie’s child voice
            journey features.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
