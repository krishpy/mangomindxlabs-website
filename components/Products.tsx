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

export default function Products() {
  return (
    <section
      id="products"
      className="relative overflow-hidden bg-white px-6 py-16 text-slate-950 sm:py-24 lg:px-8"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.10),transparent_34%),linear-gradient(180deg,#ffffff_0%,#fffaf6_55%,#ffffff_100%)]" />

      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-4 py-2 text-sm font-semibold text-orange-600 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-orange-500" />
            Products
          </div>

          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Focused products for everyday life.
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            MangomindX Labs builds practical products around parenting, family
            memories, communication, and meaningful everyday needs.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {products.map((product, index) => (
            <article
              id={product.id}
              key={product.name}
              className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.07)] transition hover:-translate-y-1 hover:border-orange-200 hover:shadow-[0_24px_70px_rgba(249,115,22,0.12)]"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="rounded-full bg-orange-50 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-orange-600 ring-1 ring-orange-100">
                  {product.label}
                </span>

                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-xs font-bold text-orange-600 ring-1 ring-orange-100">
                  0{index + 1}
                </span>
              </div>

              <h3 className="mt-6 text-3xl font-semibold tracking-tight text-slate-950">
                {product.name}
              </h3>

              <p className="mt-4 text-lg font-semibold leading-snug text-slate-900">
                {product.headline}
              </p>

              <p className="mt-4 text-base leading-7 text-slate-600">
                {product.description}
              </p>

              <ul className="mt-6 space-y-3">
                {product.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-6 text-slate-700">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 border-t border-slate-100 pt-5">
                <span className="inline-flex rounded-full border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-500">
                  {product.status}
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="/products"
            className="inline-flex rounded-full border border-orange-500 px-6 py-3 text-sm font-semibold text-orange-600 transition hover:bg-orange-500 hover:text-white"
          >
            View all products
          </a>
        </div>
      </div>
    </section>
  );
}
