import { AnimatePresence, motion } from "framer-motion";
import { X, Minus, Plus, Loader2 } from "lucide-react";
import { useEffect } from "react";
import { useCart, PLAN_META } from "@/lib/cart-store";
import canHero from "@/assets/product-white.png.asset.json";

const FREE_SHIP = 35;

export function CartDrawer() {
  const { open, setOpen, lines, setQty, remove, subtotal, checkoutUrl, isLoading, isSyncing, syncCart } = useCart();
  const total = subtotal();
  const remaining = Math.max(0, FREE_SHIP - total);
  const progress = Math.min(100, (total / FREE_SHIP) * 100);

  useEffect(() => {
    if (open) void syncCart();
  }, [open, syncCart]);

  const busy = isLoading || isSyncing;

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-ink/50 z-50"
            onClick={() => setOpen(false)}
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", ease: [0.32, 0.72, 0, 1], duration: 0.45 }}
            className="fixed right-0 top-0 bottom-0 w-full sm:w-[440px] bg-paper z-50 flex flex-col shadow-2xl"
          >
            <header className="flex items-center justify-between px-6 py-5 border-b border-ink/10">
              <h2 className="font-sans text-2xl font-black uppercase tracking-tight">
                Your Kit
              </h2>
              <button onClick={() => setOpen(false)} aria-label="Close cart">
                <X className="size-5" />
              </button>
            </header>

            {lines.length > 0 && (
              <div className="px-6 py-4 border-b border-ink/10 bg-ice/30">
                <div className="flex justify-between text-xs font-semibold uppercase tracking-widest mb-2">
                  <span>{remaining > 0 ? `$${remaining.toFixed(2)} to free shipping` : "Free shipping unlocked"}</span>
                </div>
                <div className="h-1.5 bg-ink/10 overflow-hidden">
                  <div className="h-full bg-ink transition-all" style={{ width: `${progress}%` }} />
                </div>
              </div>
            )}

            <div className="flex-1 overflow-y-auto px-6 py-6">
              {lines.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center gap-4">
                  <div className="font-editorial italic text-2xl">Empty.</div>
                  <p className="text-sm text-steel max-w-xs">
                    Sweat doesn't take days off. Add a can.
                  </p>
                  <button
                    onClick={() => setOpen(false)}
                    className="mt-2 bg-ink text-paper px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-heat"
                  >
                    Keep Shopping
                  </button>
                </div>
              ) : (
              <ul className="space-y-6">
                  {lines.map((l: import("@/lib/cart-store").CartLine) => (
                    <li key={l.id} className="flex gap-4">
                      <div className="size-20 bg-ice/40 shrink-0 grid place-items-center">
                        <img src={canHero.url} alt="" className="h-16 w-auto" />
                      </div>
                      <div className="flex-1">
                        <p className="font-sans font-bold tracking-tight text-sm leading-tight">{l.title}</p>
                        <p className="text-xs text-steel uppercase tracking-widest mt-1">
                          {PLAN_META[l.plan].label}
                          {PLAN_META[l.plan].sub && (
                            <span className="text-cool ml-2">{PLAN_META[l.plan].sub}</span>
                          )}
                        </p>
                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center border border-ink/20">
                            <button onClick={() => setQty(l.id, l.qty - 1)} className="px-2 py-1 hover:bg-ink hover:text-paper">
                              <Minus className="size-3" />
                            </button>
                            <span className="px-3 text-sm font-bold">{l.qty}</span>
                            <button onClick={() => setQty(l.id, l.qty + 1)} className="px-2 py-1 hover:bg-ink hover:text-paper">
                              <Plus className="size-3" />
                            </button>
                          </div>
                          <p className="font-sans font-bold">${(l.price * l.qty).toFixed(2)}</p>
                        </div>
                        <button onClick={() => remove(l.id)} className="text-[10px] uppercase tracking-widest text-steel hover:text-heat mt-2">
                          Remove
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {lines.length > 0 && (
              <footer className="border-t border-ink/10 px-6 py-5 space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="uppercase tracking-widest font-semibold">Subtotal</span>
                  <span className="font-sans font-bold">${total.toFixed(2)}</span>
                </div>
                {checkoutUrl && !busy ? (
                  <a
                    href={checkoutUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="w-full bg-ice text-ink py-4 font-sans font-black uppercase tracking-tight text-lg border-2 border-ink hover:bg-ink hover:text-ice transition-colors inline-flex items-center justify-center gap-2"
                  >
                    Checkout →
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={() => void syncCart()}
                    disabled={busy}
                    className="w-full bg-ice text-ink py-4 font-sans font-black uppercase tracking-tight text-lg border-2 border-ink hover:bg-ink hover:text-ice transition-colors disabled:opacity-60 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
                  >
                    <Loader2 className="size-5 animate-spin" />
                  </button>
                )}
                <p className="text-[10px] uppercase tracking-widest text-steel text-center">
                  Shipping & taxes calculated at checkout
                </p>
              </footer>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
