import { Link } from "@tanstack/react-router";
import logo from "@/assets/dry-goods-logo-white.png";

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/drygoods/", icon: InstagramIcon },
  { label: "Facebook", href: "https://www.facebook.com/drygoods/", icon: FacebookIcon },
  { label: "TikTok", href: "https://www.tiktok.com/@drygoodsspray", icon: TikTokIcon },
];

export function Footer() {
  return (
    <footer className="bg-ink px-4 pb-10 pt-12 text-white sm:px-6 sm:pt-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-9 border-b border-white/15 pb-10 text-center md:grid-cols-2 md:text-left lg:grid-cols-[minmax(280px,1.5fr)_minmax(120px,0.7fr)_minmax(220px,1fr)_minmax(220px,1fr)] lg:items-start lg:gap-12">
          <div className="space-y-5">
            <a href="#top" className="mx-auto inline-flex w-fit md:mx-0" aria-label="Dry Goods home">
              <img src={logo} alt="Dry Goods Athletic Spray Powder" className="h-12 w-auto object-contain" loading="lazy" decoding="async" />
            </a>
            <p className="mx-auto max-w-sm text-sm leading-relaxed text-white/65 md:mx-0">
              Dry Goods Athletic Spray Powder keeps athletes cool, dry, and protected from friction with one clean spray.
            </p>
            <a href="/#buy" className="inline-flex w-fit rounded-full bg-sky px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-sky-deep">
              Add to cart in one tap
            </a>
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-white/45">Explore</p>
            <nav className="mt-5 grid grid-cols-1 gap-3 text-sm font-bold uppercase tracking-[0.18em] text-white/80 sm:grid-cols-2 md:grid-cols-1">
              <a href="/#buy" className="hover:text-sky">Shop</a>
              <a href="/#reviews" className="hover:text-sky">Reviews</a>
              <Link to="/blog" className="hover:text-sky">Blog</Link>
              <a href="https://www.amazon.com/dp/B003YTUWJ8" target="_blank" rel="noreferrer noopener" className="hover:text-sky">Amazon</a>
              <Link to="/contact" className="hover:text-sky">Contact</Link>
            </nav>
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-white/45">Wholesale</p>
            <div className="mt-5 space-y-3 text-sm leading-relaxed text-white/70">
              <p>For teams, retailers, training rooms, and bulk orders.</p>
              <p><a href="tel:3057698397" className="font-semibold text-white hover:text-sky">305-769-8397</a></p>
              <p><a href="mailto:info@drygoods.com" className="font-semibold text-white hover:text-sky">info@drygoods.com</a></p>
            </div>
          </div>

          <div className="lg:justify-self-end lg:text-right">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-white/45">Connect</p>
            <div className="mt-5 flex justify-center gap-3 md:justify-start lg:justify-end" aria-label="Social media links">
              {socials.map(({ label, href, icon: Icon }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer noopener" aria-label={label} className="grid size-10 place-items-center rounded-full border border-white/20 text-white transition-colors hover:border-sky hover:text-sky">
                  <Icon />
                </a>
              ))}
            </div>
            <p className="mt-6 text-sm text-white/65">
              Patent: <a href="https://patents.google.com/patent/US8778406B2/en" target="_blank" rel="noreferrer noopener" className="font-semibold text-white underline underline-offset-4 hover:text-sky">US 8,778,406 B2</a>
            </p>
          </div>
        </div>
        <div className="grid gap-4 pt-8 text-center text-xs text-white/60 md:grid-cols-[1fr_auto_1fr] md:items-center md:text-left">
          <p>Joyce Labs LLC, Raleigh, North Carolina, 2026</p>
          <Link to="/legal" className="font-bold uppercase tracking-[0.18em] text-white/70 hover:text-sky">Privacy Policy</Link>
          <p className="font-editorial italic text-white/80 md:text-right">"No mess. No waste. Just powerful protection."</p>
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
