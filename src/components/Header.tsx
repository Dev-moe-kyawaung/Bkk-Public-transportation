import { useEffect, useState } from 'react';
import { Menu, X, TrainFront } from 'lucide-react';

const navItems = [
  { id: 'trains', label: 'မြို့တွင်းရထား' },
  { id: 'bus', label: 'ဘတ်စ်ကား' },
  { id: 'schedule', label: 'အချိန်ဇယား' },
  { id: 'map', label: 'မြေပုံ' },
  { id: 'ai', label: 'AI အကူအညီ' },
  { id: 'update', label: 'နောက်ဆုံးအခြေအနေ' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-ink/90 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 flex items-center justify-between">
        <button onClick={() => go('top')} className="flex items-center gap-2 group">
          <span className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-gold to-gold-2 text-ink shadow-lg shadow-gold/20">
            <TrainFront size={20} strokeWidth={2.4} />
          </span>
          <span className="font-display font-semibold text-lg tracking-wide text-paper">
            BKK <span className="text-gold-2">သွားလာရေး</span>
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => go(item.id)}
              className="px-3.5 py-2 rounded-full text-sm text-mist hover:text-paper hover:bg-white/5 transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          className="md:hidden text-paper p-2 rounded-lg hover:bg-white/5"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden mt-3 px-5 pb-4 flex flex-col gap-1 bg-ink/95 backdrop-blur-md border-b border-white/10">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => go(item.id)}
              className="text-left px-3 py-3 rounded-lg text-sm text-paper/90 hover:bg-white/5 border-b border-white/5 last:border-0"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
