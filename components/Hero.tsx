import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-white">
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-[-120px] top-[-60px] h-[520px] w-[520px] rounded-full bg-orange-100 opacity-60 blur-3xl" />
        <div className="absolute bottom-[-120px] left-[-120px] h-[380px] w-[380px] rounded-full bg-emerald-100 opacity-35 blur-3xl" />
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 px-6 pt-8 pb-14 sm:gap-12 sm:px-8 sm:pt-14 sm:pb-20 lg:min-h-[78vh] lg:flex-row lg:px-12 lg:pt-16 lg:pb-16">
        <div className="w-full max-w-2xl text-left">
          <div className="inline-flex max-w-full rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-medium leading-6 text-orange-700">
            <span className="sm:hidden">Thoughtful products for everyday life</span>
            <span className="hidden sm:inline">
              Thoughtfully building products that improve everyday life
            </span>
          </div>

          <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl xl:text-[5.8rem]">
            Thoughtfully Building
            <br />
            Products That Matter
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:mt-8">
            We create thoughtful digital products that strengthen families,
            preserve memories, improve communication, and solve meaningful
            everyday problems.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:flex-wrap">
            <a
              href="#products"
              className="inline-flex justify-center rounded-full bg-orange-500 px-7 py-4 text-base font-semibold text-white shadow-lg shadow-orange-200 transition-all duration-300 hover:scale-105 hover:bg-orange-600 hover:shadow-2xl sm:px-8 sm:text-lg"
            >
              Explore Our Products
            </a>

            <a
              href="#about"
              className="inline-flex justify-center rounded-full border border-slate-300 px-7 py-4 text-base font-semibold text-slate-700 transition-all duration-300 hover:border-orange-500 hover:text-orange-500 sm:px-8 sm:text-lg"
            >
              Learn More
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 sm:mt-10">
            {["Bloomie", "FamFame", "ToneCheck"].map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="relative flex w-full max-w-2xl items-center justify-center pt-4 sm:pt-0">
          <div className="absolute h-[260px] w-[260px] rounded-full bg-gradient-to-br from-orange-200 via-white to-emerald-200 opacity-50 blur-3xl sm:h-[360px] sm:w-[360px]" />

          <Image
            src="/images/mangomindx-logo-transparent.svg"
            alt="MangomindX Labs"
            width={820}
            height={320}
            priority
            className="relative z-10 h-auto w-full max-w-[500px] object-contain drop-shadow-2xl sm:max-w-[610px]"
          />
        </div>
      </div>
    </section>
  );
}
