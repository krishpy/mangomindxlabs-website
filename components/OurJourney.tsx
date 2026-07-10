const journeyItems = [
  {
    step: "01",
    label: "The Beginning",
    title: "Started with one simple belief.",
    description:
      "Technology should not feel cold, noisy, or complicated. It should quietly help families, creators, and everyday people live better.",
  },
  {
    step: "02",
    label: "The Lab",
    title: "MangomindX Labs was shaped as a product studio.",
    description:
      "Instead of building one generic tool, we chose to build focused products around parenting, memories, communication, and practical intelligence.",
  },
  {
    step: "03",
    label: "Bloomie",
    title: "A warmer way to support children’s speaking confidence.",
    description:
      "Bloomie helps parents create tiny speaking moments, notice progress, and build a daily habit around their child’s voice journey.",
  },
  {
    step: "04",
    label: "FamFame",
    title: "Preserving family memories before they disappear.",
    description:
      "FamFame is built around family stories, relationships, elder memories, and the emotional value of keeping personal history alive.",
  },
  {
    step: "05",
    label: "ToneCheck",
    title: "Helping people communicate with more clarity.",
    description:
      "ToneCheck focuses on everyday communication, helping messages feel clearer, calmer, and more thoughtful before they are sent.",
  },
  {
    step: "06",
    label: "Today",
    title: "Building a focused product family under one trusted brand.",
    description:
      "MangomindX Labs is now moving from ideas into polished product experiences, clear positioning, and launch-ready public pages.",
  },
];

export default function OurJourney() {
  return (
    <section
      id="journey"
      className="relative isolate overflow-hidden bg-white pt-24 pb-12 sm:pt-32 sm:pb-16"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.10),transparent_32%),linear-gradient(180deg,#ffffff_0%,#fff8f1_45%,#ffffff_100%)]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-start gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="pt-0">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-4 py-2 text-sm font-semibold text-orange-600 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-orange-500" />
              Our Journey
            </div>

            <h2 className="mt-6 max-w-xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              From one belief to a focused product lab.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              MangomindX Labs is building practical intelligence products that
              feel human, useful, and emotionally meaningful.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {["Bloomie", "FamFame", "ToneCheck"].map((product) => (
                <span
                  key={product}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:border-orange-200 hover:text-orange-600"
                >
                  {product}
                </span>
              ))}
            </div>
          </div>

          <div className="relative pt-0">
            <div className="absolute left-5 top-5 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-orange-300 via-slate-200 to-transparent sm:block" />

            <div className="space-y-5">
              {journeyItems.map((item) => (
                <article
                  key={item.step}
                  className="group relative rounded-[2rem] border border-slate-200 bg-white/90 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.07)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-[0_26px_80px_rgba(249,115,22,0.13)] sm:ml-12 sm:p-8"
                >
                  <div className="absolute -left-[3.25rem] top-8 hidden h-10 w-10 items-center justify-center rounded-full border border-orange-200 bg-white text-sm font-bold text-orange-600 shadow-sm sm:flex">
                    {item.step}
                  </div>

                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.24em] text-orange-600">
                        {item.label}
                      </p>

                      <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
                        {item.title}
                      </h3>

                      <p className="mt-4 text-base leading-7 text-slate-600">
                        {item.description}
                      </p>
                    </div>

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-sm font-bold text-orange-600 ring-1 ring-orange-100 transition group-hover:bg-orange-500 group-hover:text-white">
                      {item.step}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-6 rounded-[2rem] border border-orange-200 bg-orange-50/80 p-6 shadow-sm sm:ml-12 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-orange-600">
                What We Are Building Toward
              </p>

              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
                A trusted product family for modern families and everyday life.
              </h3>

              <p className="mt-4 text-base leading-7 text-slate-600">
                The goal is simple: build products that people return to because
                they feel useful, calm, personal, and worth trusting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}