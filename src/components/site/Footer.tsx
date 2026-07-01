import { Link } from "@tanstack/react-router";
import logo from "@/assets/dry-goods-logo-white.png";

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/drygoods/", icon: InstagramIcon },
  { label: "Facebook", href: "https://www.facebook.com/drygoods/", icon: FacebookIcon },
  { label: "TikTok", href: "https://www.tiktok.com/@drygoods", icon: TikTokIcon },
];

export function Footer() {
  return (
    <footer className="bg-ink text-white pt-16 pb-10 px-5 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr] pb-10 border-b border-white/15">
          <a href="#top" className="inline-flex w-fit" aria-label="Dry Goods home">
            <img src={logo} alt="Dry Goods Athletic Spray Powder" className="h-12 w-auto object-contain" loading="lazy" />
          </a>
          <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-bold uppercase tracking-widest lg:justify-center">
            <a href="/#buy" className="hover:text-sky">Shop</a>
            <Link to="/blog" className="hover:text-sky">Blog</Link>
            <a href="https://www.amazon.com/dp/B003YTUWJ8" target="_blank" rel="noreferrer noopener" className="hover:text-sky">Amazon</a>
            <Link to="/contact" className="hover:text-sky">Contact</Link>
          </nav>
          <div className="space-y-4 text-sm text-white/70 lg:text-right">
            <p className="font-bold uppercase tracking-widest text-white">Add to cart in one tap.</p>
            <p>
              Patent: <a href="https://patents.google.com/patent/US8778406B2/en" target="_blank" rel="noreferrer noopener" className="font-semibold text-white hover:text-sky underline underline-offset-4">US 8,778,406 B2</a>
            </p>
            <p>
              Wholesale inquiries: <a href="tel:3057698397" className="font-semibold text-white hover:text-sky">305-769-8397</a> · <a href="mailto:info@drygoods.com" className="font-semibold text-white hover:text-sky">info@drygoods.com</a>
            </p>
            <div className="flex gap-3 lg:justify-end" aria-label="Social media links">
              {socials.map(({ label, href, icon: Icon }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer noopener" aria-label={label} className="grid size-10 place-items-center rounded-full border border-white/20 text-white hover:border-sky hover:text-sky transition-colors">
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="pt-8 flex flex-col md:flex-row md:justify-between gap-3 text-xs text-white/60">
          <p>Joyce Labs LLC, Raleigh, North Carolina, 2026</p>
          <p className="font-editorial italic text-white/80">"No mess. No waste. Just powerful protection."</p>
        </div>
      </div>
    </footer>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <path d="M17.5 6.5h.01" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06C2 17.08 5.66 21.25 10.44 22v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.23.2 2.23.2V8.6h-1.25c-1.24 0-1.63.78-1.63 1.57v1.89h2.77l-.44 2.91h-2.33V22C18.34 21.25 22 17.08 22 12.06z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M16.7 2c.28 2.43 1.64 3.88 4.02 4.03v3.1a7.07 7.07 0 0 1-4.02-1.24v6.42c0 5.7-6.18 7.47-9.73 4.27-2.28-2.06-2.8-5.75-.99-8.28 1.81-2.53 4.98-3.14 7.15-2.14v3.25c-.47-.15-.97-.23-1.48-.19-2.38.18-3.54 2.92-2.03 4.62 1.4 1.58 4.02.9 4.02-1.64V2h3.06z" />
    </svg>
  );
}
