// Shopify Storefront API client + cart mutations.
export const SHOPIFY_API_VERSION = "2025-07";
export const SHOPIFY_STORE_PERMANENT_DOMAIN = "drygoods-2m5dc.myshopify.com";
export const SHOPIFY_STOREFRONT_URL = `https://${SHOPIFY_STORE_PERMANENT_DOMAIN}/api/${SHOPIFY_API_VERSION}/graphql.json`;
export const SHOPIFY_STOREFRONT_TOKEN = "b943984c00f9b9c9af388d077235f643";

export const PRODUCT_ID = "gid://shopify/Product/9222925025506";
// Single variant — subscriptions are applied via sellingPlanId
export const VARIANT_ID = "gid://shopify/ProductVariant/47886836236514";
export const SELLING_PLANS = {
  monthly: "gid://shopify/SellingPlan/5394759906", // 15% off
  weekly: "gid://shopify/SellingPlan/5394825442", // 20% off
} as const;

export type UserError = { field: string[] | null; message: string };

export async function storefrontApiRequest<T = any>(
  query: string,
  variables: Record<string, unknown> = {}
): Promise<{ data?: T; errors?: { message: string }[] } | null> {
  const res = await fetch(SHOPIFY_STOREFRONT_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": SHOPIFY_STOREFRONT_TOKEN,
    },
    body: JSON.stringify({ query, variables }),
  });
  if (res.status === 402) {
    console.error("Shopify Storefront API: payment required.");
    return null;
  }
  if (!res.ok) throw new Error(`Shopify HTTP ${res.status}`);
  const json = await res.json();
  if (json.errors) console.error("Shopify GraphQL errors:", json.errors);
  return json;
}

export function formatCheckoutUrl(checkoutUrl: string): string {
  try {
    const url = new URL(checkoutUrl);
    url.searchParams.set("channel", "online_store");
    return url.toString();
  } catch {
    return checkoutUrl;
  }
}

export function isCartNotFoundError(errs: UserError[]): boolean {
  return errs.some((e) => {
    const m = e.message.toLowerCase();
    return m.includes("cart not found") || m.includes("does not exist");
  });
}

export type CartLineInput = {
  variantId: string;
  quantity: number;
  sellingPlanId?: string;
};

function toLine(input: CartLineInput) {
  const line: Record<string, unknown> = {
    quantity: input.quantity,
    merchandiseId: input.variantId,
  };
  if (input.sellingPlanId) line.sellingPlanId = input.sellingPlanId;
  return line;
}

const CART_CREATE = `
  mutation cartCreate($input: CartInput!) {
    cartCreate(input: $input) {
      cart {
        id checkoutUrl
        lines(first: 100) { edges { node { id merchandise { ... on ProductVariant { id } } sellingPlanAllocation { sellingPlan { id } } } } }
      }
      userErrors { field message }
    }
  }
`;

const CART_LINES_ADD = `
  mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart { id lines(first: 100) { edges { node { id merchandise { ... on ProductVariant { id } } sellingPlanAllocation { sellingPlan { id } } } } } }
      userErrors { field message }
    }
  }
`;

const CART_LINES_UPDATE = `
  mutation cartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
    cartLinesUpdate(cartId: $cartId, lines: $lines) {
      cart { id }
      userErrors { field message }
    }
  }
`;

const CART_LINES_REMOVE = `
  mutation cartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
      cart { id }
      userErrors { field message }
    }
  }
`;

export const CART_QUERY = `
  query cart($id: ID!) {
    cart(id: $id) { id totalQuantity checkoutUrl }
  }
`;

export async function createShopifyCart(input: CartLineInput) {
  const data = await storefrontApiRequest<any>(CART_CREATE, {
    input: { lines: [toLine(input)] },
  });
  const errs: UserError[] = data?.data?.cartCreate?.userErrors || [];
  if (errs.length) {
    console.error("cartCreate errors", errs);
    return null;
  }
  const cart = data?.data?.cartCreate?.cart;
  if (!cart?.checkoutUrl) return null;
  const lineId = cart.lines.edges[0]?.node?.id;
  if (!lineId) return null;
  return { cartId: cart.id as string, checkoutUrl: formatCheckoutUrl(cart.checkoutUrl), lineId: lineId as string };
}

export async function addLineToShopifyCart(cartId: string, input: CartLineInput) {
  const data = await storefrontApiRequest<any>(CART_LINES_ADD, {
    cartId,
    lines: [toLine(input)],
  });
  const errs: UserError[] = data?.data?.cartLinesAdd?.userErrors || [];
  if (isCartNotFoundError(errs)) return { success: false, cartNotFound: true } as const;
  if (errs.length) {
    console.error("cartLinesAdd errors", errs);
    return { success: false } as const;
  }
  const lines = data?.data?.cartLinesAdd?.cart?.lines?.edges || [];
  const newLine = lines.find((l: any) => {
    const sameVariant = l.node.merchandise.id === input.variantId;
    const samePlan = (l.node.sellingPlanAllocation?.sellingPlan?.id ?? null) === (input.sellingPlanId ?? null);
    return sameVariant && samePlan;
  });
  return { success: true, lineId: newLine?.node?.id as string | undefined } as const;
}

export async function updateShopifyCartLine(cartId: string, lineId: string, quantity: number) {
  const data = await storefrontApiRequest<any>(CART_LINES_UPDATE, {
    cartId,
    lines: [{ id: lineId, quantity }],
  });
  const errs: UserError[] = data?.data?.cartLinesUpdate?.userErrors || [];
  if (isCartNotFoundError(errs)) return { success: false, cartNotFound: true } as const;
  if (errs.length) {
    console.error("cartLinesUpdate errors", errs);
    return { success: false } as const;
  }
  return { success: true } as const;
}

export async function removeLineFromShopifyCart(cartId: string, lineId: string) {
  const data = await storefrontApiRequest<any>(CART_LINES_REMOVE, {
    cartId,
    lineIds: [lineId],
  });
  const errs: UserError[] = data?.data?.cartLinesRemove?.userErrors || [];
  if (isCartNotFoundError(errs)) return { success: false, cartNotFound: true } as const;
  if (errs.length) {
    console.error("cartLinesRemove errors", errs);
    return { success: false } as const;
  }
  return { success: true } as const;
}
