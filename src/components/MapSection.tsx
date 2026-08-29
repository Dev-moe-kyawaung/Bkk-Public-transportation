import { MapPin, Navigation } from 'lucide-react';
import { trainLines } from '../lib/transitData';

export default function MapSection() {
  return (
    <section id="map" className="relative py-24 bg-ink-2">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex items-center gap-2 text-jade text-xs font-semibold uppercase tracking-widest mb-3">
          <MapPin size={14} /> Map
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold">မြေပုံ ကြည့်ရှုရန်</h2>
        <p className="text-mist mt-3 max-w-2xl">
          Bangkok မြို့တွင်း ဘူတာများ တည်နေရာနှင့် လိုင်းအမျိုးအစားအလိုက် အရောင်ခွဲခြားစာရင်း
        </p>

        <div className="mt-10 grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3 chip rounded-3xl overflow-hidden bg-panel h-[420px] relative">
            <iframe
              title="Bangkok Transit Map"
              src="https://maps.google.com/maps?q=Siam%20BTS%20Station%2C%20Bangkok%2C%20Thailand&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full grayscale-[20%] contrast-[1.05]"
              loading="lazy"
            />
            <a
              href="https://www.google.com/maps/search/Bangkok+BTS+MRT+Station"
              target="_blank"
              rel="noreferrer"
              className="absolute bottom-4 right-4 chip bg-ink/90 backdrop-blur px-4 py-2.5 rounded-full text-xs flex items-center gap-2 text-gold-2 hover:bg-ink"
            >
              <Navigation size={13} /> Google Map တွင်ဖွင့်ရန်
            </a>
          </div>

          <div className="lg:col-span-2 chip rounded-3xl bg-panel p-6">
            <h3 className="font-display text-lg font-semibold mb-4">လိုင်းရောင် စာရင်း</h3>
            <div className="space-y-3">
              {trainLines.map((l) => (
                <div key={l.id} className="flex items-center gap-3 pb-3 border-b border-white/5 last:border-0 last:pb-0">
                  <span
                    className="w-4 h-4 rounded-full shrink-0 ring-2 ring-offset-2 ring-offset-panel"
                    style={{ backgroundColor: l.color, boxShadow: `0 0 12px ${l.color}66` }}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="text-sm text-paper truncate">{l.nameMy}</div>
                    <div className="text-[11px] text-mist truncate">{l.nameEn}</div>
                  </div>
                  <span className="text-[11px] text-mist shrink-0">{l.stations.length} ဘူတာ</span>
                </div>
              ))}
            </div>
            <div className="mt-5 text-xs text-mist leading-relaxed chip bg-white/5 rounded-xl p-4">
              💡 <span className="text-paper/80">အကြံပြုချက်:</span> ဘူတာအမည်ကို Google Maps တွင် ရှာလျှင် "BTS" (သို့) "MRT"
              ဟူသော စာလုံးကို ဘူတာအမည်နောက်တွင် ထည့်ရှာပါက ပိုမိုတိကျစွာ တွေ့ရှိနိုင်ပါသည်။
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
