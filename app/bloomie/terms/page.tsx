import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Bloomie Terms | MangomindX Labs",
  description:
    "Terms of use for Bloomie, a parent-led speaking-confidence companion for children.",
};

const terms = [
  {
    title: "1. Parent-led use",
    body: "Bloomie is intended for use by parents or legal guardians who create and manage the family account and child profiles.",
  },
  {
    title: "2. Consent to record or upload voice moments",
    body: "By recording or uploading a child’s voice, you confirm that you are the child’s parent or legal guardian, or that you have permission to do so.",
  },
  {
    title: "3. Not medical or clinical advice",
    body: "Bloomie supports speaking-confidence practice and parent awareness. It does not provide medical, clinical, speech therapy, or diagnostic advice.",
  },
  {
    title: "4. Responsible use",
    body: "Do not upload content that is unlawful, harmful, abusive, invasive of another person’s privacy, or unrelated to your family’s permitted use of Bloomie.",
  },
  {
    title: "5. Availability and changes",
    body: "Bloomie may change over time. Features may be added, changed, paused, or removed as we improve the product.",
  },
  {
    title: "6. Contact",
    body: "For support or terms questions, contact hello@mangomindx.com.",
  },
];

export default function BloomieTermsPage() {
  return (
    <main className="bg-white text-slate-950">
      <Navbar />

      <section className="relative isolate overflow-hidden px-6 pt-16 pb-12 sm:pt-24 sm:pb-16 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.12),transparent_34%),linear-gradient(180deg,#ffffff_0%,#fff8f1_58%,#ffffff_100%)]" />
        <div className="mx-auto max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-4 py-2 text-sm font-semibold text-orange-600 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-orange-500" />
            Bloomie Terms
          </div>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
            Terms of Use
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Last updated: July 2026. These terms are a plain-language draft for
            Bloomie’s parent-led speaking-confidence experience.
          </p>
        </div>
      </section>

      <section className="px-6 py-12 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="rounded-[2rem] border border-orange-200 bg-orange-50/80 p-6 text-sm leading-7 text-slate-700 sm:p-8">
            Review these terms with legal counsel before production launch,
            especially because Bloomie involves children, voice recordings, and
            parent-managed accounts.
          </div>

          {terms.map((term) => (
            <article key={term.title} className="border-b border-slate-200 pb-8 last:border-b-0">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                {term.title}
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                {term.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
