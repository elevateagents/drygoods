import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { CartDrawer } from "./CartDrawer";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Nav />
      <main>{children}</main>
      <Footer />
      <CartDrawer />
    </div>
  );
}
