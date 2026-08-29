import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Clock, Wallet, Info, ArrowLeftRight, Train } from 'lucide-react';
import { trainLines } from '../lib/transitData';

export default function TrainSection() {
  const [activeId, setActiveId] = useState(trainLines[0].id);
  const [query, setQuery] = useState('');

  const active = trainLines.find((l) => l.id === activeId)!;

  const searchResults = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    const results: { line: (typeof trainLines)[0]; stationName: string }[] = [];
    trainLines.forEach((line) => {
      line.stations.forEach((s) => {
        if (s.nameEn.toLowerCase().includes(q) || s.nameMy.includes(query)) {
          results.push({ line, stationName: `${s.code} · ${s.nameEn}` });
        }
      });
    });
    return results.slice(0, 10);
  }, [query]);

  return (
    <section id="trains" className="relative py-24 bg-ink">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex items-center gap-2 text-jade text-xs font-semibold uppercase tracking-widest mb-3">
          <Train size={14} /> City Trains
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold">မြို့တွင်းရထားလမ်းညွှန်</h2>
        <p className="text-mist mt-3 max-w-2xl">
          BTS Skytrain၊ MRT မြေအောက်ရထားနှင့် Airport Rail Link တို့၏ လိုင်းအလိုက် ဘူတာစာရင်း၊
          အချိန်ဇယားနှင့် စျေးနှုန်းများကို ရှာဖွေကြည့်ရှုနိုင်ပါသည်။
        </p>

        {/* search */}
        <div className="mt-8 relative max-w-lg">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-mist" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="ဘူတာအမည်ရှာရန် (ဥပမာ Siam, Asok, Chatuchak)..."
            className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-panel chip text-sm text-paper placeholder:text-mist/60 focus:outline-none focus:ring-2 focus:ring-gold/40"
          />
          <AnimatePresence>
            {searchResults.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="absolute z-20 mt-2 w-full bg-panel chip rounded-2xl shadow-2xl overflow-hidden max-h-72 overflow-y-auto"
              >
                {searchResults.map((r, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setActiveId(r.line.id);
                      setQuery('');
                    }}
                    className="w-full text-left px-4 py-3 flex items-center gap-3 hover:bg-white/5 border-b border-white/5 last:border-0"
                  >
                    <span
                      className="w-2.5 h-2.5 rounded-full shrink-0"
                      style={{ backgroundColor: r.line.color }}
                    />
                    <span className="text-sm text-paper">{r.stationName}</span>
                    <span className="ml-auto text-xs text-mist">{r.line.shortMy}</span>
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* line tabs */}
        <div className="mt-10 flex flex-wrap gap-2.5">
          {trainLines.map((line) => (
            <button
              key={line.id}
              onClick={() => setActiveId(line.id)}
              className="px-4 py-2.5 rounded-full text-sm font-medium transition-all flex items-center gap-2 chip"
              style={{
                backgroundColor: activeId === line.id ? line.color : 'rgba(255,255,255,0.04)',
                color: activeId === line.id ? line.textColor : '#9aa5c4',
              }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: activeId === line.id ? line.textColor : line.color }}
              />
              {line.shortMy}
            </button>
          ))}
        </div>

        {/* active line detail */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className="mt-8 grid lg:grid-cols-5 gap-6"
          >
            <div className="lg:col-span-2 space-y-4">
              <div
                className="rounded-3xl p-6"
                style={{ background: `linear-gradient(135deg, ${active.color}22, transparent)`, border: `1px solid ${active.color}55` }}
              >
                <div className="flex items-center gap-2">
                  <span className="w-3.5 h-3.5 rounded-full" style={{ backgroundColor: active.color }} />
                  <h3 className="font-display text-xl font-semibold">{active.nameMy}</h3>
                </div>
                <p className="text-xs text-mist mt-1">{active.nameEn}</p>
                <p className="text-sm text-paper/85 mt-4 leading-relaxed">{active.note}</p>
              </div>

              <div className="grid grid-cols-1 gap-3">
                <div className="chip bg-panel rounded-2xl p-4 flex items-start gap-3">
                  <Clock size={18} className="text-gold-2 mt-0.5 shrink-0" />
                  <div>
                    <div className="text-xs text-mist">ဝန်ဆောင်ချိန်</div>
                    <div className="text-sm text-paper mt-0.5">{active.hours}</div>
                    <div className="text-xs text-mist mt-1">ထွက်ခွာသည့်ကြားချိန်: {active.frequency}</div>
                  </div>
                </div>
                <div className="chip bg-panel rounded-2xl p-4 flex items-start gap-3">
                  <Wallet size={18} className="text-jade mt-0.5 shrink-0" />
                  <div>
                    <div className="text-xs text-mist">စျေးနှုန်း</div>
                    <div className="text-sm text-paper mt-0.5">{active.fare}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="chip bg-panel rounded-3xl overflow-hidden">
                <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between">
                  <span className="text-sm font-medium text-paper/90">ဘူတာစာရင်း (အဓိကဘူတာများ)</span>
                  <span className="text-xs text-mist">{active.stations.length} ဘူတာ</span>
                </div>
                <div className="max-h-[420px] overflow-y-auto">
                  {active.stations.map((s, idx) => (
                    <div
                      key={s.code}
                      className="flex items-center gap-4 px-5 py-3.5 border-b border-white/5 last:border-0 hover:bg-white/[0.03]"
                    >
                      <div className="flex flex-col items-center">
                        <span
                          className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold font-display shrink-0"
                          style={{ backgroundColor: active.color, color: active.textColor }}
                        >
                          {s.code}
                        </span>
                        {idx !== active.stations.length - 1 && (
                          <span className="w-0.5 h-3 mt-0.5" style={{ backgroundColor: active.color + '55' }} />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-paper font-medium">{s.nameEn}</div>
                        <div className="text-xs text-mist mt-0.5">{s.nameMy}</div>
                      </div>
                      {s.interchange && (
                        <span className="flex items-center gap-1 text-[11px] text-gold-2 chip bg-gold/10 px-2.5 py-1 rounded-full shrink-0">
                          <ArrowLeftRight size={11} /> {s.interchange}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-3 flex items-start gap-2 text-xs text-mist px-1">
                <Info size={14} className="mt-0.5 shrink-0" />
                စာရင်းသည် ခရီးသွားများ အသုံးများသော အဓိကဘူတာများသာ ဖော်ပြထားပြီး ဘူတာအားလုံးကို မပါဝင်ပါ။
                တိကျသောအချိန်နှင့် စျေးနှုန်းအတွက် တရားဝင် BTS/MRT app များကို စစ်ဆေးပါ။
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
