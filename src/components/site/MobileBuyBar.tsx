import { ShoppingCart } from "lucide-react";
import { useCart } from "@/lib/cart-store";

export function MobileBuyBar() {
  const { add } = useCart();
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur border-t border-ink/10 px-3 py-3 shadow-[0_-4px_20px_-4px_rgba(0,0,0,0.08)]">
      <div className="flex items-center gap-2 max-w-3xl mx-auto">
        <div className="min-w-0 max-w-[44%]">
          <p className="text-[9px] font-bold uppercase tracking-wide text-ink/55 leading-tight">Dry Goods Athletic Spray Powder</p>
          <p className="font-bold text-ink text-base leading-tight">$19.99</p>
        </div>
        <button
          onClick={() => add("onetime", 1)}
          className="ml-auto flex-1 inline-flex min-w-0 items-center justify-center gap-1.5 bg-sky hover:bg-sky-deep transition-colors text-white px-3 py-3 text-sm font-bold uppercase tracking-wide rounded-full shadow-lg shadow-sky/30"
        >
          <ShoppingCart className="size-4 shrink-0" /> <span className="truncate">Add to Cart</span>
        </button>
      </div>
    </div>
  );
}
