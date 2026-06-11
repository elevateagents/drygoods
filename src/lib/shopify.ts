// Shopify Storefront API client + cart mutations.
export const SHOPIFY_API_VERSION = "2025-07";
export const SHOPIFY_STORE_PERMANENT_DOMAIN = "drygoods-2m5dc.myshopify.com";
export const SHOPIFY_STOREFRONT_URL = `https://${SHOPIFY_STORE_PERMANENT_DOMAIN}/api/${SHOPIFY_API_VERSION}/graphql.json`;
export const SHOPIFY_STOREFRONT_TOKEN = "933364520437fbbc4fe0690aa26c695c";

export const PRODUCT_ID = "gid://shopify/Product/9222925025506";
export const VARIANT_IDS = {
  onetime: "gid://shopify/ProductVariant/47886836236514",
  monthly: "gid://shopify/ProductVariant/47886836269282",
  weekly: "gid://shopify/ProductVariant/47886836302050",
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
    console.error("Shopify Storefront API: payment required. Upgrade plan at https://admin.shopify.com");
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

const CART_CREATE = `
  mutation cartCreate($input: CartInput!) {
    cartCreate(input: $input) {
      cart {
        id checkoutUrl
        lines(first: 100) { edges { node { id merchandise { ... on ProductVariant { id } } } } }
      }
      userErrors { field message }
    }
  }
`;

const CART_LINES_ADD = `
  mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart { id lines(first: 100) { edges { node { id merchandise { ... on ProductVariant { id } } } } } }
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

export async function createShopifyCart(variantId: string, quantity: number) {
  const data = await storefrontApiRequest<any>(CART_CREATE, {
    input: { lines: [{ quantity, merchandiseId: variantId }] },
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

export async function addLineToShopifyCart(cartId: string, variantId: string, quantity: number) {
  const data = await storefrontApiRequest<any>(CART_LINES_ADD, {
    cartId,
    lines: [{ quantity, merchandiseId: variantId }],
  });
  const errs: UserError[] = data?.data?.cartLinesAdd?.userErrors || [];
  if (isCartNotFoundError(errs)) return { success: false, cartNotFound: true } as const;
  if (errs.length) {
    console.error("cartLinesAdd errors", errs);
    return { success: false } as const;
  }
  const lines = data?.data?.cartLinesAdd?.cart?.lines?.edges || [];
  const newLine = lines.find((l: any) => l.node.merchandise.id === variantId);
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
