import { Link } from "@tanstack/react-router";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useCart } from "@/lib/cart-store";
import logo from "@/assets/logo.png.asset.json";

const sections = [
  { href: "#why", label: "Why" },
  { href: "#buy", label: "Shop" },
  { href: "#reviews", label: "Reviews" },
  { href: "mailto:tim@drygoods.com", label: "Contact" },
];

export function Nav() {
  const { setOpen, count } = useCart();
  const [menu, setMenu] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  const c = mounted ? count() : 0;

  useEffect(() => {
    document.body.style.overflow = menu ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menu]);

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-paper/90 backdrop-blur-md border-b border-ink/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-3">
        <Link to="/" onClick={() => setMenu(false)} className="flex items-center gap-2 shrink-0" aria-label="Dry Goods home">
          <img src={logo.url} alt="Dry Goods" className="h-9 w-auto" />
        </Link>
        <div className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-wide">
          {sections.map(s => (
            <a key={s.href} href={s.href} className="hover:text-sky transition-colors">{s.label}</a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <a
            href="#buy"
            className="hidden sm:inline-flex items-center bg-sky text-white px-4 py-2.5 text-xs font-bold uppercase tracking-widest hover:bg-sky-deep transition-colors rounded-full"
          >
            Shop Now
          </a>
          <button
            onClick={() => setOpen(true)}
            className="relative p-2.5 min-h-[40px] min-w-[40px] grid place-items-center hover:text-sky"
            aria-label="Open cart"
          >
            <ShoppingBag className="size-5" />
            {c > 0 && <span className="absolute -top-0.5 -right-0.5 bg-sky text-white text-[10px] font-bold rounded-full size-5 grid place-items-center">{c}</span>}
          </button>
          <button
            onClick={() => setMenu(v => !v)}
            className="md:hidden p-2.5 -mr-2 min-h-[40px] min-w-[40px] grid place-items-center"
            aria-label={menu ? "Close menu" : "Open menu"}
            aria-expanded={menu}
          >
            {menu ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {menu && (
        <div className="md:hidden fixed inset-x-0 top-16 bottom-0 bg-paper z-30 overflow-y-auto">
          <ul className="flex flex-col py-2">
            {sections.map(s => (
              <li key={s.href} className="border-b border-ink/10">
                <a
                  href={s.href}
                  onClick={() => setMenu(false)}
                  className="block px-6 py-5 font-display text-2xl font-black uppercase tracking-tight hover:bg-sky hover:text-white"
                >
                  {s.label}
                </a>
              </li>
            ))}
            <li className="px-6 py-6">
              <a href="#buy" onClick={() => setMenu(false)} className="block text-center bg-sky text-white py-4 font-bold uppercase tracking-widest rounded-full">
                Shop Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
