import { Link, useRouter } from "@tanstack/react-router";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useCart } from "@/lib/cart-store";
import logo from "@/assets/dry-goods-logo.svg.asset.json";

const sections = [
  { href: "/about", label: "About", route: true },
  { href: "/#buy", label: "Shop" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/#faq", label: "FAQ" },
  { href: "/blog", label: "Blog", route: true },
  { href: "/contact", label: "Contact", route: true },
];

export function Nav() {
  const { setOpen, count } = useCart();
  const [menu, setMenu] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  useEffect(() => { setMounted(true); }, []);
  const c = mounted ? count() : 0;

  useEffect(() => {
    document.body.style.overflow = menu ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menu]);

  const onLogoClick = (e: React.MouseEvent) => {
    setMenu(false);
    if (router.state.location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-ink/10 bg-white/95 backdrop-blur shadow-sm">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-2 px-4 sm:px-6 lg:px-8">
          <Link to="/" onClick={onLogoClick} className="flex shrink-0 items-center gap-2" aria-label="Dry Goods Athletic Spray Powder home">
            <img
              src={logo.url}
              alt="Dry Goods Athletic Spray Powder"
              width={144}
              height={36}
              className="h-7 w-auto max-w-[150px] sm:h-8 md:h-9"
              style={{ imageRendering: "auto" }}
              decoding="async"
              fetchPriority="high"
            />
          </Link>
          <div className="hidden gap-5 text-sm font-bold uppercase tracking-wide md:flex lg:gap-7">
            {sections.map((s) => (
              <a key={s.href} href={s.href} className="transition-colors hover:text-sky">{s.label}</a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <a
              href="/#buy"
              className="hidden rounded-full bg-sky px-4 py-2.5 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-sky-deep sm:inline-flex items-center"
            >
              Shop
            </a>
            <button
              onClick={() => setOpen(true)}
              className="relative grid min-h-[44px] min-w-[44px] place-items-center p-2.5 hover:text-sky"
              aria-label="Open cart"
            >
              <ShoppingBag className="size-7" strokeWidth={2.25} />
              {c > 0 && <span className="absolute top-0 right-0 grid size-5 place-items-center rounded-full bg-sky text-[10px] font-bold text-white">{c}</span>}
            </button>
            <button
              onClick={() => setMenu((v) => !v)}
              className="-mr-2 grid min-h-[40px] min-w-[40px] place-items-center p-2.5 md:hidden"
              aria-label={menu ? "Close menu" : "Open menu"}
              aria-expanded={menu}
            >
              {menu ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </nav>

      {menu && (
        <div className="fixed inset-x-0 bottom-0 top-16 z-[60] overflow-y-auto overscroll-contain bg-paper md:hidden">
          <ul className="flex flex-col py-2">
            {sections.map((s) => (
              <li key={s.href} className="border-b border-ink/10">
                <a
                  href={s.href}
                  onClick={() => setMenu(false)}
                  className="block px-6 py-5 font-display text-[clamp(1.6rem,8vw,2rem)] font-black uppercase tracking-tight hover:bg-sky hover:text-white"
                >
                  {s.label}
                </a>
              </li>
            ))}
            <li className="px-6 py-6">
              <a href="/#buy" onClick={() => setMenu(false)} className="block rounded-full bg-sky py-4 text-center font-bold uppercase tracking-[0.18em] text-white">
                Shop
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
