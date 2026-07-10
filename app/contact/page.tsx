import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact | MangomindX Labs",
  description:
    "Contact MangomindX Labs for product testing, partnerships, collaboration, and early access conversations.",
};

const contactReasons = [
  {
    title: "Product testing",
    description:
      "Try early product experiences and share practical feedback before public launch.",
  },
  {
    title: "Partnerships",
    description:
      "Explore collaboration around parenting, memory, communication, and thoughtful digital products.",
  },
  {
    title: "Careers and builders",
    description:
      "Reach out if you want to help design, build, test, or grow focused products under the mX brand.",
  },
];

const contactSteps = [
  "Tell us what you want to discuss.",
  "Share which product or idea you are interested in.",
  "We will respond with the clean next step.",
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <Navbar />

      <section className="relative isolate overflow-hidden px-6 pt-16 pb-14 sm:pt-24 sm:pb-20 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.12),transparent_34%),linear-gradient(180deg,#ffffff_0%,#fff8f1_52%,#ffffff_100%)]" />
        <div className="absolute right-[-140px] top-[-100px] -z-10 h-[420px] w-[420px] rounded-full bg-orange-100/70 blur-3xl" />

        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-4 py-2 text-sm font-semibold text-orange-600 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-orange-500" />
              Contact
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
              Start a focused conversation.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl sm:leading-9">
              Reach out for product testing, collaboration, partnerships, or early access. Keep it simple. Tell us what you are building toward.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:hello@mangomindx.com?subject=MangomindX%20Labs%20conversation"
                className="inline-flex justify-center rounded-full bg-orange-500 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-orange-200 transition hover:bg-orange-600"
              >
                Email Us
              </a>
              <a
                href="/products"
                className="inline-flex justify-center rounded-full border border-slate-300 bg-white px-7 py-3.5 text-base font-semibold text-slate-700 transition hover:border-orange-300 hover:text-orange-600"
              >
                View Products
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-10 sm:py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {contactReasons.map((item) => (
            <article
              key={item.title}
              className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_18px_60px_rgba(15,23,42,0.07)] transition hover:-translate-y-1 hover:border-orange-200 hover:shadow-[0_26px_80px_rgba(249,115,22,0.12)]"
            >
              <div className="mb-5 h-10 w-10 rounded-2xl bg-orange-50 ring-1 ring-orange-100" />
              <h2 className="text-xl font-semibold tracking-tight text-slate-950">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 pt-4 pb-20 sm:pb-28 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[2.25rem] border border-slate-200 bg-slate-950 p-7 text-white shadow-[0_28px_90px_rgba(15,23,42,0.18)] sm:p-10 lg:grid-cols-[1fr_0.85fr] lg:p-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-300">
              How to reach us
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Send a clear note. We will keep the next step practical.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
              Mention the product, the reason you are reaching out, and the outcome you want. That is enough to begin.
            </p>

            <a
              href="mailto:hello@mangomindx.com?subject=MangomindX%20Labs%20conversation"
              className="mt-8 inline-flex rounded-full bg-orange-500 px-7 py-3.5 text-base font-semibold text-white transition hover:bg-orange-600"
            >
              hello@mangomindx.com
            </a>
          </div>

          <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-300">
              Good message structure
            </p>
            <div className="mt-6 space-y-4">
              {contactSteps.map((step, index) => (
                <div key={step} className="flex gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold text-slate-950">
                    {index + 1}
                  </div>
                  <p className="pt-1 text-sm leading-7 text-slate-300">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
