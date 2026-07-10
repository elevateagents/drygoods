import { ShoppingCart } from "lucide-react";
import { useCart } from "@/lib/cart-store";

export function MobileBuyBar() {
  const { add } = useCart();
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ink/10 bg-white/95 px-3 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-4px_20px_-4px_rgba(0,0,0,0.08)] backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-3xl items-center gap-2 sm:gap-3">
        <div className="min-w-0 max-w-[42%] sm:max-w-[46%]">
          <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-ink/55 leading-tight sm:text-[10px]">Dry Goods Athletic Spray Powder</p>
          <p className="text-sm font-bold leading-tight text-ink sm:text-base">$19.99</p>
        </div>
        <button
          onClick={() => add("onetime", 1)}
          className="ml-auto inline-flex min-h-12 min-w-0 flex-1 items-center justify-center gap-1.5 rounded-full bg-sky px-3 py-3 text-sm font-bold uppercase tracking-[0.14em] text-white shadow-lg shadow-sky/30 transition-colors hover:bg-sky-deep"
        >
          <ShoppingCart className="size-4 shrink-0" /> <span className="truncate">Add to Cart</span>
        </button>
      </div>
    </div>
  );
}
