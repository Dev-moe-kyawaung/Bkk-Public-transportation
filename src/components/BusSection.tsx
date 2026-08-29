import { motion } from 'framer-motion';
import { Bus, MapPinned, CircleDollarSign } from 'lucide-react';
import { busRoutes, fareCards } from '../lib/transitData';

const typeColor: Record<string, string> = {
  'ရိုးရိုး': '#e2432b',
  'A/C': '#22c19a',
  BRT: '#f2b705',
};

export default function BusSection() {
  return (
    <section id="bus" className="relative py-24 bg-ink-2">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex items-center gap-2 text-crimson text-xs font-semibold uppercase tracking-widest mb-3">
          <Bus size={14} /> City Bus
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold">ဘတ်စ်ကားလိုင်း & ဂိတ်လမ်းညွှန်</h2>
        <p className="text-mist mt-3 max-w-2xl">
          BMTA ဘတ်စ်ကားများသည် Bangkok တစ်မြို့လုံးကို ဈေးအနည်းဆုံးဖြင့် လွှမ်းခြုံပေးထားပြီး
          ခရီးသွားများ အသုံးများသော လိုင်းအချို့ကို အောက်တွင်ဖော်ပြထားပါသည်။
        </p>

        <div className="mt-10 grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {busRoutes.map((route, i) => (
            <motion.div
              key={route.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="chip bg-panel rounded-3xl p-5 flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="flex items-center justify-between">
                <span
                  className="font-display font-bold text-lg px-3.5 py-1.5 rounded-xl"
                  style={{ backgroundColor: typeColor[route.type] + '22', color: typeColor[route.type] }}
                >
                  #{route.number}
                </span>
                <span className="text-[11px] chip bg-white/5 px-2.5 py-1 rounded-full text-mist">
                  {route.type}
                </span>
              </div>

              <div className="flex items-start gap-2">
                <MapPinned size={16} className="text-gold-2 mt-0.5 shrink-0" />
                <div className="text-sm">
                  <div className="text-paper">{route.fromMy}</div>
                  <div className="text-[11px] text-mist">{route.from}</div>
                </div>
              </div>
              <div className="ml-2 border-l-2 border-dashed border-white/15 h-4" />
              <div className="flex items-start gap-2">
                <MapPinned size={16} className="text-jade mt-0.5 shrink-0" />
                <div className="text-sm">
                  <div className="text-paper">{route.toMy}</div>
                  <div className="text-[11px] text-mist">{route.to}</div>
                </div>
              </div>

              <p className="text-xs text-mist leading-relaxed border-t border-white/10 pt-3">
                {route.highlights}
              </p>

              <div className="flex items-center gap-1.5 text-xs text-gold-2 font-medium">
                <CircleDollarSign size={13} /> {route.fare}
              </div>
            </motion.div>
          ))}
        </div>

        {/* fare cards */}
        <div className="mt-16">
          <h3 className="font-display text-xl font-semibold mb-1">ငွေပေးချေမှု နည်းလမ်းများ</h3>
          <p className="text-mist text-sm mb-6">ခရီးသွားလာရာတွင် အသုံးဝင်သည့် ကတ်နှင့် လက်မှတ်အမျိုးအစားများ</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {fareCards.map((card) => (
              <div key={card.name} className="chip bg-panel rounded-2xl p-5">
                <div className="font-display font-semibold text-sm text-gold-2">{card.nameMy}</div>
                <p className="text-xs text-mist mt-2 leading-relaxed">{card.desc}</p>
                <div className="mt-3 text-[11px] chip bg-white/5 inline-block px-2.5 py-1 rounded-full text-paper/80">
                  {card.usedFor}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
