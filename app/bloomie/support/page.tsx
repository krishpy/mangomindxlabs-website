import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Bloomie Support | MangomindX Labs",
  description:
    "Support page for Bloomie parents, including help with sign-in, voice moments, privacy, account deletion, and contact details.",
};

const supportTopics = [
  {
    title: "Sign-in and account help",
    description:
      "For trouble with Google sign-in, mobile login, parent profile, or child profiles, contact support with your registered email or phone number.",
  },
  {
    title: "Voice recording or upload help",
    description:
      "Make sure microphone permission is enabled, the child speaks clearly for at least a short moment, and the app has a stable internet connection.",
  },
  {
    title: "Result is still processing",
    description:
      "Some voice moments may take longer to process. Open Moments and pull to refresh. If it stays stuck, contact support with the approximate time of the recording.",
  },
  {
    title: "Privacy or saved memories",
    description:
      "Parents can ask us to delete saved voice memories, transcripts, child profiles, or the full account.",
  },
];

export default function BloomieSupportPage() {
  return (
    <main className="bg-white text-slate-950">
      <Navbar />

      <section className="relative isolate overflow-hidden px-6 pt-16 pb-14 sm:pt-24 sm:pb-20 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.12),transparent_34%),linear-gradient(180deg,#ffffff_0%,#fff8f1_58%,#ffffff_100%)]" />
        <div className="mx-auto max-w-5xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-4 py-2 text-sm font-semibold text-orange-600 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-orange-500" />
            Bloomie Support
          </div>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
            Help for parents using Bloomie.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl sm:leading-9">
            Need help with sign-in, recording, results, privacy, or account
            deletion? Start here.
          </p>
        </div>
      </section>

      <section className="px-6 py-14 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2">
          {supportTopics.map((topic) => (
            <article
              key={topic.title}
              className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_18px_60px_rgba(15,23,42,0.06)]"
            >
              <div className="h-1.5 w-12 rounded-full bg-orange-500" />
              <h2 className="mt-6 text-2xl font-semibold tracking-tight text-slate-950">
                {topic.title}
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                {topic.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 px-6 py-14 text-white sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-orange-400">
              Contact
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
              Email Bloomie support.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
              Include your registered parent email or phone number, device type,
              and a short description of the issue.
            </p>
          </div>

          <a
            href="mailto:hello@mangomindx.com?subject=Bloomie%20Support%20Request"
            className="inline-flex justify-center rounded-full bg-orange-500 px-7 py-4 text-base font-semibold text-white shadow-lg shadow-orange-950/30 transition hover:bg-orange-600"
          >
            hello@mangomindx.com
          </a>
        </div>
      </section>

      <section className="px-6 py-12 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-slate-600 sm:flex-row sm:gap-6">
          <a className="hover:text-orange-600" href="/bloomie/privacy">Privacy Policy</a>
          <a className="hover:text-orange-600" href="/bloomie/terms">Terms</a>
          <a className="hover:text-orange-600" href="/bloomie/account-deletion">Account Deletion</a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
