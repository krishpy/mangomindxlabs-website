import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About | MangomindX Labs",
  description:
    "Learn about MangomindX Labs, a focused product lab building practical intelligence for parenting, memories, communication, and everyday life.",
};

const beliefs = [
  {
    title: "Human first",
    description:
      "Products should feel calm, useful, and personal. The experience should make people feel supported, not overwhelmed.",
  },
  {
    title: "Focused products",
    description:
      "We do not build generic tools. Each product is shaped around a clear user, a real habit, and one meaningful problem.",
  },
  {
    title: "Warm technology",
    description:
      "Good technology should quietly strengthen relationships, preserve memories, improve communication, and simplify everyday life.",
  },
];

const values = [
  "Clarity before complexity",
  "Trust before scale",
  "Usefulness before noise",
  "Warmth before flash",
];

const productFamily = [
  {
    name: "Bloomie",
    role: "Helping parents build tiny daily speaking-confidence moments with children.",
  },
  {
    name: "FamFame",
    role: "Helping families preserve stories, relationships, elder memories, and personal history.",
  },
  {
    name: "ToneCheck",
    role: "Helping people communicate with more clarity, calm, and emotional awareness.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-white text-slate-950">
      <Navbar />

      <section className="relative isolate overflow-hidden px-6 pt-16 pb-14 sm:pt-24 sm:pb-20 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.12),transparent_34%),linear-gradient(180deg,#ffffff_0%,#fff8f1_58%,#ffffff_100%)]" />

        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-4 py-2 text-sm font-semibold text-orange-600 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-orange-500" />
              About MangomindX Labs
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
              Building practical intelligence products that feel more human.
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl sm:leading-9">
              MangomindX Labs is a focused product lab creating thoughtful digital
              products around parenting, family memories, communication, and
              everyday life.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-14 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-orange-600">
              Our Story
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              We started with problems that deserve calmer products.
            </h2>
          </div>

          <div className="space-y-6 text-base leading-8 text-slate-600 sm:text-lg">
            <p>
              Many digital products are powerful, but they often feel noisy,
              cold, or complicated. MangomindX Labs was created to move in the
              opposite direction: simple products that feel useful, warm, and
              trustworthy.
            </p>
            <p>
              Our product family begins with areas where people need more than
              automation. Parents need confidence and continuity. Families need
              memory and preservation. People need clearer communication in the
              moments that matter.
            </p>
            <p>
              The goal is not to build more screens. The goal is to build
              products people return to because they feel calmer, clearer, and
              genuinely helpful.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-14 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-orange-600">
              What Guides Us
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              Every product should make everyday life simpler, warmer, or clearer.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {beliefs.map((belief) => (
              <article
                key={belief.title}
                className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_18px_60px_rgba(15,23,42,0.06)]"
              >
                <div className="h-1.5 w-12 rounded-full bg-orange-500" />
                <h3 className="mt-6 text-2xl font-semibold tracking-tight text-slate-950">
                  {belief.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-slate-600">
                  {belief.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-14 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div className="rounded-[2rem] border border-orange-200 bg-orange-50/80 p-7 shadow-sm sm:p-9">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-orange-600">
              Product Family
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Three products, one shared direction.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              Each product serves a different everyday need, but they all follow
              the same principle: practical intelligence should feel personal,
              trustworthy, and easy to use.
            </p>
          </div>

          <div className="space-y-4">
            {productFamily.map((product) => (
              <article
                key={product.name}
                className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-[0_14px_45px_rgba(15,23,42,0.06)]"
              >
                <h3 className="text-xl font-semibold tracking-tight text-slate-950">
                  {product.name}
                </h3>
                <p className="mt-2 text-base leading-7 text-slate-600">
                  {product.role}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-6 py-14 text-white sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-orange-400">
              Our Standard
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
              Build fewer things. Make them matter more.
            </h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {values.map((value) => (
              <div
                key={value}
                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-base font-semibold text-slate-100"
              >
                {value}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
