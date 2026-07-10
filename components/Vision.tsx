export default function Vision() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white px-6 py-16 sm:py-24"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.08),transparent_36%)]" />

      <div className="mx-auto max-w-5xl text-center">
        <div className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-600 shadow-sm">
          Our Vision
        </div>

        <h2 className="mt-6 text-3xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
          Technology Should Feel More Human
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-600 sm:mt-7 sm:text-xl sm:leading-9">
          At MangomindX Labs, we believe technology should strengthen
          relationships, preserve memories, improve communication, and make
          everyday life simpler.
        </p>

        <div className="mx-auto mt-10 max-w-3xl rounded-[2rem] border border-slate-200 bg-white px-6 py-7 shadow-[0_20px_70px_rgba(15,23,42,0.08)] sm:mt-12 sm:px-10 sm:py-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-600 sm:text-sm">
            Every product begins with one question
          </p>

          <p className="mt-5 text-2xl font-semibold leading-snug tracking-tight text-slate-950 sm:text-3xl">
            “Can this genuinely make someone’s life better?”
          </p>
        </div>
      </div>
    </section>
  );
}
