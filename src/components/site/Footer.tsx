import { Link } from "@tanstack/react-router";
import { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  return (
    <footer className="bg-ink text-paper pt-16 sm:pt-20 pb-10 px-5 lg:px-8 mt-16 sm:mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-7">
            <h3 className="font-display text-[clamp(40px,8vw,120px)] leading-[0.85] font-black tracking-tighter uppercase">
              DON'T <span className="stroke-text" style={{ WebkitTextStroke: "1px var(--color-paper)" }}>QUIT</span><br/>
              ON <span className="text-ice">SWEAT.</span>
            </h3>
          </div>
          <div className="lg:col-span-5 lg:pt-8">
            <p className="font-editorial italic text-2xl mb-6 text-pretty">
              Get drops, restocks, and the occasional uncomfortable opinion about chafing.
            </p>
            {done ? (
              <p className="text-ice font-bold uppercase tracking-widest text-sm">
                You're in. Welcome to the dry side.
              </p>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); if (email) setDone(true); }}
                className="flex border-b border-paper/30 pb-2"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="bg-transparent flex-1 outline-none placeholder:text-paper/40 py-2"
                />
                <button className="font-bold uppercase tracking-widest text-sm hover:text-ice transition-colors">
                  Subscribe →
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pt-12 border-t border-paper/15 text-sm">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-steel mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><Link to="/products/original" className="hover:text-ice">Original 5.4oz</Link></li>
              <li><Link to="/products/original" className="hover:text-ice">Subscribe</Link></li>
              <li><Link to="/wholesale" className="hover:text-ice">Wholesale</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-steel mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-ice">About</Link></li>
              <li><Link to="/contact" className="hover:text-ice">Contact</Link></li>
              <li><a className="hover:text-ice" href="#patent">Patent</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-steel mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a className="hover:text-ice" href="#faq">FAQ</a></li>
              <li><span className="text-paper/60">Returns</span></li>
              <li><span className="text-paper/60">Shipping</span></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-steel mb-4">Contact</h4>
            <ul className="space-y-2">
              <li><a href="tel:3057698397" className="hover:text-ice">305-769-8397</a></li>
              <li><a href="mailto:info@drygoods.com" className="hover:text-ice">info@drygoods.com</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-steel mb-4">Made by</h4>
            <p className="text-paper/70">Joyce Labs LLC<br/>Raleigh, NC 27614</p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-paper/15 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[10px] uppercase tracking-[0.25em] text-steel">
          <span>© 2026 Joyce Labs LLC · US Patent 8778406B2</span>
          <span>Stay Dry · Destroy Friction</span>
        </div>
      </div>
    </footer>
  );
}
