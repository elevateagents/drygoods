import { Link } from "@tanstack/react-router";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart-store";

export function Nav() {
  const { setOpen, count } = useCart();
  const c = count();
  return (
    <nav className="sticky top-0 z-40 bg-paper/85 backdrop-blur-md border-b border-ink/10">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 h-14 flex items-center justify-between">
        <Link to="/" className="font-display font-black tracking-tighter text-xl">
          DRY<span className="text-heat">+</span>GOODS
        </Link>
        <div className="hidden md:flex gap-8 text-sm font-semibold uppercase tracking-wide">
          <Link to="/products/original" className="hover:text-heat transition-colors" activeProps={{ className: "text-heat" }}>
            Shop
          </Link>
          <Link to="/about" className="hover:text-heat transition-colors" activeProps={{ className: "text-heat" }}>
            About
          </Link>
          <Link to="/wholesale" className="hover:text-heat transition-colors" activeProps={{ className: "text-heat" }}>
            Wholesale
          </Link>
          <Link to="/contact" className="hover:text-heat transition-colors" activeProps={{ className: "text-heat" }}>
            Contact
          </Link>
        </div>
        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 bg-ink text-paper px-3 py-2 text-xs font-bold uppercase tracking-widest hover:bg-heat transition-colors"
          aria-label="Open cart"
        >
          <ShoppingBag className="size-4" />
          Cart {c > 0 && <span className="bg-ice text-ink px-1.5 ml-1">{c}</span>}
        </button>
      </div>
    </nav>
  );
}
