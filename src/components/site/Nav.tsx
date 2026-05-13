import { Link } from "@tanstack/react-router";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useCart } from "@/lib/cart-store";

export function Nav() {
  const { setOpen, count } = useCart();
  const [menu, setMenu] = useState(false);
  const c = count();

  useEffect(() => {
    document.body.style.overflow = menu ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menu]);

  const links = [
    { to: "/products/original", label: "Shop" },
    { to: "/about", label: "About" },
    { to: "/wholesale", label: "Wholesale" },
    { to: "/contact", label: "Contact" },
  ] as const;

  return (
    <nav className="sticky top-0 z-40 bg-paper/85 backdrop-blur-md border-b border-ink/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-8 h-14 flex items-center justify-between gap-3">
        <Link to="/" onClick={() => setMenu(false)} className="font-display font-black tracking-tighter text-xl shrink-0">
          DRY<span className="text-heat">+</span>GOODS
        </Link>
        <div className="hidden md:flex gap-8 text-sm font-semibold uppercase tracking-wide">
          {links.map(l => (
            <Link key={l.to} to={l.to} className="hover:text-heat transition-colors" activeProps={{ className: "text-heat" }}>
              {l.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setOpen(true)}
            className="flex items-center gap-2 bg-ink text-paper px-3 py-2.5 min-h-[40px] text-xs font-bold uppercase tracking-widest hover:bg-heat transition-colors"
            aria-label="Open cart"
          >
            <ShoppingBag className="size-4" />
            <span className="hidden sm:inline">Cart</span>
            {c > 0 && <span className="bg-ice text-ink px-1.5 ml-0.5">{c}</span>}
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
        <div className="md:hidden fixed inset-x-0 top-14 bottom-0 bg-paper z-30 overflow-y-auto">
          <ul className="flex flex-col py-2">
            {links.map(l => (
              <li key={l.to} className="border-b border-ink/10">
                <Link
                  to={l.to}
                  onClick={() => setMenu(false)}
                  className="block px-5 py-5 font-display text-2xl font-black uppercase tracking-tight hover:bg-ink hover:text-paper"
                  activeProps={{ className: "text-heat" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
