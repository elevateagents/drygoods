import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-ink text-white pt-16 pb-10 px-5 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 pb-10 border-b border-white/15">
          <a href="#top" className="font-display font-black tracking-tight text-2xl">
            DRY<span className="text-sky">·</span>GOODS<span className="text-sky align-super text-xs">™</span>
          </a>
          <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-bold uppercase tracking-widest">
            <a href="/#buy" className="hover:text-sky">Shop</a>
            <a href="https://www.amazon.com/dp/B003YTUWJ8" target="_blank" rel="noreferrer noopener" className="hover:text-sky">Amazon</a>
            <Link to="/contact" className="hover:text-sky">Contact</Link>
          </nav>
        </div>
        <div className="pt-8 flex flex-col md:flex-row md:justify-between gap-3 text-xs text-white/60">
          <p>© 2026 Dry+Goods™ · drygoods.com</p>
          <p className="font-editorial italic text-white/80">"No mess. No waste. Just powerful protection."</p>
        </div>
      </div>
    </footer>
  );
}
