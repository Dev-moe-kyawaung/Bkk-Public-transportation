import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, Train, Bus, MapPin } from 'lucide-react';

export default function Hero() {
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden bg-noise">
      <div className="absolute inset-0">
        <img
          src="/images/hero-bts.jpg"
          alt="Bangkok BTS skyline"
          className="w-full h-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/70 to-ink" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/40 to-transparent" />
      </div>

      {/* decorative floating line dots */}
      <div className="absolute top-28 right-10 hidden lg:block animate-float-slow">
        <div className="w-3 h-3 rounded-full bg-jade pulse-dot" />
      </div>
      <div className="absolute bottom-40 right-32 hidden lg:block animate-float-slow" style={{ animationDelay: '1s' }}>
        <div className="w-2.5 h-2.5 rounded-full bg-gold pulse-dot" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 pt-28 pb-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full chip bg-white/5 text-xs text-gold-2 font-medium mb-6"
        >
          <Sparkles size={14} /> Bangkok ခရီးသွားများအတွက် အပြည့်အစုံ လမ်းညွှန်
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display font-semibold text-4xl sm:text-5xl lg:text-6xl leading-[1.15] max-w-4xl"
        >
          Bangkok မြို့တွင်း <span className="text-gold-2">ဘတ်စ်ကား</span> &{' '}
          <span className="text-jade">ရထား</span> လမ်းညွှန်
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-mist text-base sm:text-lg max-w-2xl leading-relaxed"
        >
          BTS, MRT, Airport Rail Link နှင့် ဘတ်စ်ကားလိုင်းများကို မြန်မာဘာသာဖြင့် တစ်နေရာတည်းတွင်
          စစ်ဆေးနိုင်ပါသည်။ ဘူတာအမည်များ၊ အချိန်ဇယား၊ စျေးနှုန်းနှင့် AI အကူအညီပါ ပါဝင်သည်။
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-9 flex flex-wrap gap-3"
        >
          <button
            onClick={() => go('trains')}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gold-2 text-ink font-semibold text-sm hover:bg-gold transition-colors shadow-lg shadow-gold/20"
          >
            <Train size={17} /> ရထားလမ်းညွှန်ကြည့်ရန်
          </button>
          <button
            onClick={() => go('bus')}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full chip bg-white/5 text-paper font-semibold text-sm hover:bg-white/10 transition-colors"
          >
            <Bus size={17} /> ဘတ်စ်ကားလိုင်းများ
          </button>
          <button
            onClick={() => go('ai')}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full chip bg-white/5 text-paper font-semibold text-sm hover:bg-white/10 transition-colors"
          >
            <Sparkles size={17} /> AI ကို မေးမြန်းရန်
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl"
        >
          {[
            { label: 'ရထားလိုင်း', value: '5' },
            { label: 'ဘူတာအရေအတွက်', value: '190+' },
            { label: 'ဘတ်စ်ကားလိုင်း', value: '6' },
            { label: 'ရန်ကုန်စျေး', value: '17฿~' },
          ].map((s) => (
            <div key={s.label} className="chip bg-white/5 rounded-2xl px-4 py-3">
              <div className="font-display text-2xl font-semibold text-gold-2">{s.value}</div>
              <div className="text-xs text-mist mt-0.5">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <button
        onClick={() => go('trains')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-mist hover:text-paper flex flex-col items-center gap-1 text-xs"
      >
        <MapPin size={14} />
        <ArrowDown size={18} className="animate-bounce" />
      </button>
    </section>
  );
}
