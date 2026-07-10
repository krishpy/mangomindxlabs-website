export default function ContactStrip() {
  return (
    <section id="contact" className="relative overflow-hidden bg-white pt-8 pb-14 sm:pt-10 sm:pb-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.12),transparent_34%)]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-orange-200 bg-slate-950 px-6 py-10 shadow-[0_30px_100px_rgba(15,23,42,0.22)] sm:px-10 sm:py-14 lg:px-14">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />
          <div className="absolute -bottom-28 left-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange-300 sm:text-sm">
                Let’s build useful intelligence
              </p>

              <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                Have an idea, partnership, or product conversation?
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                MangomindX Labs builds practical intelligence products across
                parenting, memories, and communication. Reach out if you want to
                collaborate, test, or talk product.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href="mailto:hello@mangomindx.com"
                className="inline-flex items-center justify-center rounded-full bg-orange-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 transition hover:bg-orange-600"
              >
                Contact Us
              </a>

              <a
                href="#products"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
              >
                View Products
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
