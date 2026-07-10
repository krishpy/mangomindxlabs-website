import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Careers | MangomindX Labs",
  description:
    "Explore future builder opportunities at MangomindX Labs across product, design, engineering, content, and growth.",
};

const focusAreas = [
  {
    title: "Product builders",
    description:
      "People who can turn messy real-life problems into simple, usable product experiences.",
  },
  {
    title: "Design thinkers",
    description:
      "People who care about calm interfaces, warm brand systems, clear flows, and emotional trust.",
  },
  {
    title: "Engineers",
    description:
      "People who can build reliable web, mobile, backend, data, and automation systems with care.",
  },
  {
    title: "Story and content creators",
    description:
      "People who can shape product stories, launch content, user education, and thoughtful communication.",
  },
];

const principles = [
  "Small teams with clear ownership",
  "Useful products before flashy demos",
  "Calm execution and honest feedback",
  "Warm design with practical outcomes",
];

const futureRoles = [
  "Product Designer",
  "Frontend Engineer",
  "Mobile Engineer",
  "Backend Engineer",
  "Product Marketer",
  "Content and Story Lead",
];

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <Navbar />

      <section className="relative isolate overflow-hidden px-6 pt-16 pb-14 sm:pt-24 sm:pb-20 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.12),transparent_34%),linear-gradient(180deg,#ffffff_0%,#fff8f1_58%,#ffffff_100%)]" />
        <div className="absolute right-[-140px] top-[-100px] -z-10 h-[420px] w-[420px] rounded-full bg-orange-100/70 blur-3xl" />

        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-4 py-2 text-sm font-semibold text-orange-600 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-orange-500" />
              Careers
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
              Build products that feel useful, calm, and human.
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl sm:leading-9">
              MangomindX Labs is early. We are not opening a large hiring funnel yet, but we are building a circle of thoughtful builders who care about parenting, memories, communication, and everyday life.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:hello@mangomindx.com?subject=Careers%20at%20MangomindX%20Labs"
                className="inline-flex justify-center rounded-full bg-orange-500 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-orange-200 transition hover:bg-orange-600"
              >
                Introduce Yourself
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
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-4">
          {focusAreas.map((area) => (
            <article
              key={area.title}
              className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_18px_60px_rgba(15,23,42,0.07)] transition hover:-translate-y-1 hover:border-orange-200 hover:shadow-[0_26px_80px_rgba(249,115,22,0.12)]"
            >
              <div className="mb-5 h-10 w-10 rounded-2xl bg-orange-50 ring-1 ring-orange-100" />
              <h2 className="text-xl font-semibold tracking-tight text-slate-950">
                {area.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {area.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 py-8 sm:py-14 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-600">
              How We Work
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              We value clarity, taste, and steady execution.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              The best people for mX are not just task finishers. They care about why a product exists, who it helps, and how it should feel in a real person’s day.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {principles.map((principle) => (
              <div
                key={principle}
                className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="mb-4 h-8 w-8 rounded-full bg-orange-50 ring-1 ring-orange-100" />
                <p className="text-base font-semibold text-slate-900">
                  {principle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pt-8 pb-20 sm:pb-28 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[2.25rem] border border-slate-200 bg-slate-950 p-7 text-white shadow-[0_28px_90px_rgba(15,23,42,0.18)] sm:p-10 lg:grid-cols-[1fr_0.85fr] lg:p-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-300">
              Future Openings
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              No large hiring round yet. But the right builders should still reach out.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
              We are preparing the foundation first: product quality, brand clarity, launch pages, and early user validation. As the products mature, these are the kinds of roles we expect to open.
            </p>

            <a
              href="mailto:hello@mangomindx.com?subject=Careers%20at%20MangomindX%20Labs"
              className="mt-8 inline-flex rounded-full bg-orange-500 px-7 py-3.5 text-base font-semibold text-white transition hover:bg-orange-600"
            >
              hello@mangomindx.com
            </a>
          </div>

          <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-300">
              Roles We May Need
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {futureRoles.map((role) => (
                <span
                  key={role}
                  className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-slate-100"
                >
                  {role}
                </span>
              ))}
            </div>

            <p className="mt-6 text-sm leading-7 text-slate-300">
              Send a short note with what you are good at, what you have built, and which mX product you are most interested in.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
