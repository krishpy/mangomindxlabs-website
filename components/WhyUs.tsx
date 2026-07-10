const values = [
  {
    title: "Human First",
    desc: "Every product begins with understanding real people, real families, and real everyday challenges.",
  },
  {
    title: "Privacy Matters",
    desc: "We design with trust at the center. Your personal moments and conversations always remain yours.",
  },
  {
    title: "Built to Evolve",
    desc: "We continuously improve our products through thoughtful feedback, learning, and innovation.",
  },
  {
    title: "Designed for Everyone",
    desc: "Simple, accessible experiences built across ages, languages, and cultures.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
            Why MangomindX
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Technology Built Around People
          </h2>

          <p className="mt-6 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            We create thoughtful products that make everyday life simpler,
            warmer, and more meaningful.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:mt-14 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {values.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-8"
            >
              <div className="mb-5 h-2 w-14 rounded-full bg-orange-500 sm:mb-6" />

              <h3 className="text-2xl font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600 sm:mt-5">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
