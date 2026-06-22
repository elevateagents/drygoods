import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { CartDrawer } from "./CartDrawer";
import { MobileBuyBar } from "./MobileBuyBar";
import { useCartSync } from "@/hooks/useCartSync";

export function Layout({ children }: { children: React.ReactNode }) {
  useCartSync();
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Nav />
      <main className="pt-16 pb-24 md:pb-0">{children}</main>
      <Footer />
      <CartDrawer />
      <MobileBuyBar />
    </div>
  );
}
