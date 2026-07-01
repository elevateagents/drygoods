import { ShoppingCart } from "lucide-react";
import { useCart } from "@/lib/cart-store";

export function MobileBuyBar() {
  const { add } = useCart();
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur border-t border-ink/10 px-4 py-3 shadow-[0_-4px_20px_-4px_rgba(0,0,0,0.08)]">
      <div className="flex items-center gap-3 max-w-3xl mx-auto">
        <div className="min-w-0">
          <p className="text-[10px] font-bold uppercase tracking-widest text-ink/55 leading-tight">Dry Goods Athletic Spray Powder</p>
          <p className="font-bold text-ink text-base leading-tight">$19.99</p>
        </div>
        <button
          onClick={() => add("onetime", 1)}
          className="ml-auto flex-1 inline-flex items-center justify-center gap-2 bg-sky hover:bg-sky-deep transition-colors text-white px-4 py-3 text-sm font-bold uppercase tracking-wide rounded-full shadow-lg shadow-sky/30"
        >
          <ShoppingCart className="size-4" /> Add to Cart
        </button>
      </div>
    </div>
  );
}
