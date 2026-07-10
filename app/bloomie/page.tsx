import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Bloomie | MangomindX Labs",
  description:
    "Bloomie helps parents build tiny daily speaking-confidence moments with children through warm voice practice, parent-friendly insights, and gentle progress tracking.",
};

const highlights = [
  "One tiny speaking moment a day",
  "Warm parent-friendly insights",
  "7-day confidence growth journey",
  "Parent-controlled privacy and saved memories",
];

const steps = [
  {
    title: "Pick today’s story",
    description:
      "Choose a simple prompt such as Today’s Story, Favorite Thing, Picture Talk, or Feelings Talk.",
  },
  {
    title: "Let your child speak naturally",
    description:
      "Record or upload a short voice moment. Bloomie is designed around calm daily practice, not tests or pressure.",
  },
  {
    title: "See one warm insight",
    description:
      "Parents see what Bloomie noticed, one gentle next step, and progress over time.",
  },
];

const trustItems = [
  {
    title: "Parent first",
    description:
      "Bloomie is for parents to guide and support their child’s speaking habit.",
  },
  {
    title: "Not a diagnosis",
    description:
      "Bloomie is a speaking-confidence companion and does not provide medical, clinical, or speech therapy diagnosis.",
  },
  {
    title: "Privacy by design",
    description:
      "Raw voice recordings are not meant to be permanently stored unless a parent chooses to save a voice memory.",
  },
];

export default function BloomiePage() {
  return (
    <main className="bg-white text-slate-950">
      <Navbar />

      <section className="relative isolate overflow-hidden px-6 pt-16 pb-14 sm:pt-24 sm:pb-20 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.12),transparent_34%),linear-gradient(180deg,#ffffff_0%,#fff8f1_58%,#ffffff_100%)]" />

        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-4 py-2 text-sm font-semibold text-orange-600 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-orange-500" />
              Bloomie
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
              Help your child speak a little more confidently every day.
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl sm:leading-9">
              Bloomie is a warm daily speaking-confidence companion for parents
              of young children. One tiny story a day. One useful parent insight.
              Visible growth over time.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="/bloomie/support"
                className="inline-flex justify-center rounded-full bg-orange-500 px-7 py-4 text-base font-semibold text-white shadow-lg shadow-orange-200 transition hover:bg-orange-600"
              >
                Bloomie Support
              </a>
              <a
                href="/bloomie/privacy"
                className="inline-flex justify-center rounded-full border border-slate-300 bg-white px-7 py-4 text-base font-semibold text-slate-700 transition hover:border-orange-500 hover:text-orange-600"
              >
                Privacy Policy
              </a>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {highlights.map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-14 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-orange-600">
              How Bloomie Works
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              Simple enough for a daily habit.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {steps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_18px_60px_rgba(15,23,42,0.06)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-50 text-sm font-bold text-orange-600 ring-1 ring-orange-100">
                  0{index + 1}
                </div>
                <h3 className="mt-6 text-2xl font-semibold tracking-tight text-slate-950">
                  {step.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-slate-600">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-14 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-orange-600">
              Parent Trust
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              Built for warm practice, not pressure.
            </h2>
          </div>

          <div className="space-y-4">
            {trustItems.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-[0_14px_45px_rgba(15,23,42,0.06)]"
              >
                <h3 className="text-xl font-semibold tracking-tight text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-2 text-base leading-7 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-14 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-orange-200 bg-orange-50/80 p-6 shadow-sm sm:p-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-orange-600">
                For App Store Review
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Need help with Bloomie?
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                Parents can contact support, read the privacy policy, review
                terms, and request account or data deletion from the links below.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href="/bloomie/support"
                className="inline-flex justify-center rounded-full bg-orange-500 px-7 py-4 text-base font-semibold text-white shadow-lg shadow-orange-200 transition hover:bg-orange-600"
              >
                Support
              </a>
              <a
                href="/bloomie/account-deletion"
                className="inline-flex justify-center rounded-full border border-orange-200 bg-white px-7 py-4 text-base font-semibold text-orange-600 transition hover:border-orange-500"
              >
                Delete Account
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
