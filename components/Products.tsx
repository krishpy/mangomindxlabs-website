import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Products | MangomindX Labs",
  description:
    "Explore MangomindX Labs products for parenting, family memories, and communication clarity.",
};

const products = [
  {
    id: "bloomie",
    name: "Bloomie",
    label: "Speaking Confidence",
    headline: "A warm daily speaking habit for children.",
    description:
      "Bloomie helps parents create tiny speaking moments, notice confidence growth, and build a simple voice journey over time.",
    points: [
      "One small speaking moment a day",
      "Parent-friendly confidence insights",
      "7-day visible growth journey",
      "Built for warmth, trust, and habit",
    ],
    status: "In active build",
  },
  {
    id: "famfame",
    name: "FamFame",
    label: "Family Memory",
    headline: "Preserve family stories before they disappear.",
    description:
      "FamFame helps families capture elder memories, relationships, personal stories, and legacy moments in a simple family archive.",
    points: [
      "Record elder stories",
      "Organize family relationships",
      "Preserve memories by person and moment",
      "Create a meaningful family history layer",
    ],
    status: "Concept to build",
  },
  {
    id: "tonecheck",
    name: "ToneCheck",
    label: "Communication Clarity",
    headline: "Make important messages clearer before sending.",
    description:
      "ToneCheck helps people rewrite everyday communication with more clarity, calm, confidence, and emotional awareness.",
    points: [
      "Improve tone before sending",
      "Make messages clearer and calmer",
      "Useful for work, family, and sensitive conversations",
      "Designed for quick everyday decisions",
    ],
    status: "Planned",
  },
];

const principles = [
  "Human-first design",
  "Simple everyday usefulness",
  "Warm and trustworthy experience",
  "Focused product thinking",
];

export default function ProductsPage() {
  return (
    <main className="bg-white text-slate-950">
      <Navbar />

      <section className="relative isolate overflow-hidden px-6 pt-16 pb-14 sm:pt-24 sm:pb-20 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.12),transparent_34%),linear-gradient(180deg,#ffffff_0%,#fff8f1_58%,#ffffff_100%)]" />

        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-4 py-2 text-sm font-semibold text-orange-600 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-orange-500" />
              Products
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
              Focused products for everyday life.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl sm:leading-9">
              MangomindX Labs builds practical intelligence products around
              parenting, memories, communication, and meaningful everyday needs.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {principles.map((item) => (
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
        <div className="mx-auto max-w-7xl space-y-8">
          {products.map((product, index) => (
            <article
              id={product.id}
              key={product.name}
              className="grid gap-8 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_20px_70px_rgba(15,23,42,0.07)] transition hover:-translate-y-1 hover:border-orange-200 hover:shadow-[0_26px_80px_rgba(249,115,22,0.12)] sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10"
            >
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-orange-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-600 ring-1 ring-orange-100">
                    {product.label}
                  </span>

                  <span className="rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-500">
                    {product.status}
                  </span>
                </div>

                <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                  {product.name}
                </h2>

                <p className="mt-5 text-xl font-semibold leading-snug text-slate-900">
                  {product.headline}
                </p>

                <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                  {product.description}
                </p>
              </div>

              <div className="rounded-[1.5rem] bg-slate-50 p-5 ring-1 ring-slate-200 sm:p-6">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Product Focus
                  </p>
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-sm font-bold text-orange-600 shadow-sm ring-1 ring-orange-100">
                    0{index + 1}
                  </span>
                </div>

                <ul className="mt-6 space-y-4">
                  {product.points.map((point) => (
                    <li key={point} className="flex gap-3 text-base leading-7 text-slate-700">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 pt-4 pb-16 sm:pb-24 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-orange-200 bg-orange-50/80 p-6 shadow-sm sm:p-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-orange-600">
                Product Direction
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Build fewer things, but make them feel useful and trusted.
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                Every product under MangomindX Labs should solve a clear human
                problem, feel easy to understand, and earn trust through repeated
                everyday value.
              </p>
            </div>

            <a
              href="/#contact"
              className="inline-flex justify-center rounded-full bg-orange-500 px-7 py-4 text-base font-semibold text-white shadow-lg shadow-orange-200 transition hover:bg-orange-600"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
