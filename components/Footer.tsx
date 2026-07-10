import Image from "next/image";

const companyLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const productLinks = [
  { label: "Bloomie", href: "/products#bloomie" },
  { label: "FamFame", href: "/products#famfame" },
  { label: "ToneCheck", href: "/products#tonecheck" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:py-12 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_0.7fr_0.7fr]">
          <div>
            <a href="/" className="inline-flex items-center -ml-2">
              <Image
                src="/images/logo.png"
                alt="MangomindX Labs"
                width={320}
                height={100}
                className="h-auto w-[250px] object-contain object-left sm:w-[270px]"
                priority={false}
              />
            </a>

            <p className="mt-1 max-w-md text-sm leading-7 text-slate-600">
              A focused product lab building practical intelligence for parenting,
              memories, communication, and everyday life.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-950">Company</h3>

            <ul className="mt-5 space-y-4">
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-slate-600 transition hover:text-orange-600"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-950">Products</h3>

            <ul className="mt-5 space-y-4">
              {productLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-slate-600 transition hover:text-orange-600"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-slate-200 pt-6 text-xs text-slate-500 sm:mt-12 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 MangomindX Labs. All rights reserved.</p>
          <p>Built with focus, warmth, and practical intelligence.</p>
        </div>
      </div>
    </footer>
  );
}
