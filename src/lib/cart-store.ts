import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import {
  VARIANT_IDS,
  createShopifyCart,
  addLineToShopifyCart,
  updateShopifyCartLine,
  removeLineFromShopifyCart,
  storefrontApiRequest,
  CART_QUERY,
  formatCheckoutUrl,
} from "@/lib/shopify";

export type Plan = "onetime" | "monthly" | "weekly";

export const PLAN_META: Record<Plan, { label: string; price: number; sub?: string; variantId: string }> = {
  onetime: { label: "One-time", price: 19.99, variantId: VARIANT_IDS.onetime },
  monthly: { label: "Subscribe Monthly", price: 16.99, sub: "Save 15%", variantId: VARIANT_IDS.monthly },
  weekly: { label: "Subscribe Weekly", price: 15.99, sub: "Save 20%", variantId: VARIANT_IDS.weekly },
};

const PLAN_BY_VARIANT: Record<string, Plan> = Object.fromEntries(
  (Object.keys(PLAN_META) as Plan[]).map((p) => [PLAN_META[p].variantId, p])
);

export type CartLine = {
  id: string; // variantId
  lineId: string | null; // Shopify cart line id
  plan: Plan;
  qty: number;
  title: string;
  price: number;
};

const TITLE = "DryGoods™ Athletic Spray";

type CartState = {
  open: boolean;
  lines: CartLine[];
  cartId: string | null;
  checkoutUrl: string | null;
  isLoading: boolean;
  isSyncing: boolean;
  setOpen: (v: boolean) => void;
  add: (plan: Plan, qty?: number) => Promise<void>;
  setQty: (id: string, qty: number) => Promise<void>;
  remove: (id: string) => Promise<void>;
  clear: () => void;
  syncCart: () => Promise<void>;
  checkout: () => void;
  subtotal: () => number;
  count: () => number;
};

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      open: false,
      lines: [],
      cartId: null,
      checkoutUrl: null,
      isLoading: false,
      isSyncing: false,

      setOpen: (v) => set({ open: v }),

      add: async (plan, qty = 1) => {
        const meta = PLAN_META[plan];
        const variantId = meta.variantId;
        const { cartId, lines } = get();
        const existing = lines.find((l) => l.id === variantId);

        set({ isLoading: true, open: true });
        try {
          if (!cartId) {
            const result = await createShopifyCart(variantId, qty);
            if (!result) return;
            set({
              cartId: result.cartId,
              checkoutUrl: result.checkoutUrl,
              lines: [
                { id: variantId, lineId: result.lineId, plan, qty, title: TITLE, price: meta.price },
              ],
            });
          } else if (existing && existing.lineId) {
            const newQty = existing.qty + qty;
            const r = await updateShopifyCartLine(cartId, existing.lineId, newQty);
            if (r.success) {
              set({
                lines: get().lines.map((l) => (l.id === variantId ? { ...l, qty: newQty } : l)),
              });
            } else if (r.cartNotFound) {
              get().clear();
            }
          } else {
            const r = await addLineToShopifyCart(cartId, variantId, qty);
            if (r.success) {
              set({
                lines: [
                  ...get().lines,
                  { id: variantId, lineId: r.lineId ?? null, plan, qty, title: TITLE, price: meta.price },
                ],
              });
            } else if (r.cartNotFound) {
              get().clear();
            }
          }
        } finally {
          set({ isLoading: false });
        }
      },

      setQty: async (id, qty) => {
        if (qty <= 0) {
          await get().remove(id);
          return;
        }
        const { cartId, lines } = get();
        const line = lines.find((l) => l.id === id);
        if (!cartId || !line?.lineId) return;
        set({ isLoading: true });
        try {
          const r = await updateShopifyCartLine(cartId, line.lineId, qty);
          if (r.success) {
            set({ lines: get().lines.map((l) => (l.id === id ? { ...l, qty } : l)) });
          } else if (r.cartNotFound) {
            get().clear();
          }
        } finally {
          set({ isLoading: false });
        }
      },

      remove: async (id) => {
        const { cartId, lines } = get();
        const line = lines.find((l) => l.id === id);
        if (!cartId || !line?.lineId) {
          set({ lines: lines.filter((l) => l.id !== id) });
          return;
        }
        set({ isLoading: true });
        try {
          const r = await removeLineFromShopifyCart(cartId, line.lineId);
          if (r.success || r.cartNotFound) {
            const next = get().lines.filter((l) => l.id !== id);
            if (next.length === 0) get().clear();
            else set({ lines: next });
          }
        } finally {
          set({ isLoading: false });
        }
      },

      clear: () => set({ lines: [], cartId: null, checkoutUrl: null }),

      syncCart: async () => {
        const { cartId, isSyncing } = get();
        if (!cartId || isSyncing) return;
        set({ isSyncing: true });
        try {
          const data = await storefrontApiRequest<any>(CART_QUERY, { id: cartId });
          if (!data) return;
          const cart = data?.data?.cart;
          if (!cart || cart.totalQuantity === 0) {
            get().clear();
          } else if (cart.checkoutUrl) {
            set({ checkoutUrl: formatCheckoutUrl(cart.checkoutUrl) });
          }
        } finally {
          set({ isSyncing: false });
        }
      },

      checkout: () => {
        const url = get().checkoutUrl;
        if (url) window.open(url, "_blank");
      },

      subtotal: () => get().lines.reduce((s, l) => s + l.price * l.qty, 0),
      count: () => get().lines.reduce((s, l) => s + l.qty, 0),
    }),
    {
      name: "drygoods-cart",
      storage: createJSONStorage(() => localStorage),
      partialize: (s) => ({
        lines: s.lines,
        cartId: s.cartId,
        checkoutUrl: s.checkoutUrl,
      }),
    }
  )
);

export { PLAN_BY_VARIANT };
