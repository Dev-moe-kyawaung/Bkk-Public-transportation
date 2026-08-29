import { CheckCircle2, RefreshCw, TrainFront, ShieldAlert } from 'lucide-react';

const changelog = [
  {
    date: '2025 ဇန်နဝါရီ',
    items: [
      'BTS Sukhumvit line Kheha extension ဘူတာစာရင်း ထည့်သွင်းမှု',
      'AI Assistant အတွက် ခရီးစဉ်မေးခွန်း အသစ်များ ထပ်တိုးထည့်သွင်းခြင်း',
    ],
  },
  {
    date: '2024 နိုဝင်ဘာ',
    items: ['MRT Purple Line Nonthaburi extension အချက်အလက် အသစ်ပြောင်းလဲမှု', 'ဘတ်စ်ကားလိုင်း ၆ ခု ဒေတာသစ်ဖြည့်စွက်'],
  },
  {
    date: '2024 စက်တင်ဘာ',
    items: ['Rabbit Card & MRT Card သတင်းအချက်များ အသေးစိတ် ထည့်သွင်းခြင်း', 'AI Assistant စတင်မိတ်ဆက်'],
  },
];

export default function UpdateFooter() {
  return (
    <section id="update" className="relative py-24 bg-ink">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex items-center gap-2 text-jade text-xs font-semibold uppercase tracking-widest mb-3">
          <RefreshCw size={14} /> Last Update
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold">နောက်ဆုံးအချက်အလက် အခြေအနေ</h2>

        <div className="mt-8 chip bg-panel rounded-3xl p-6 flex flex-col sm:flex-row sm:items-center gap-4 sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="w-11 h-11 rounded-xl bg-jade/15 text-jade flex items-center justify-center">
              <CheckCircle2 size={22} />
            </span>
            <div>
              <div className="text-sm text-mist">အချက်အလက် နောက်ဆုံးပြင်ဆင်ရက်</div>
              <div className="font-display text-lg font-semibold text-paper">၂၀၂၅ ခုနှစ် ဇန်နဝါရီလ</div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs chip bg-gold/10 text-gold-2 px-4 py-2 rounded-full">
            <TrainFront size={14} /> Data version v1.4
          </div>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {changelog.map((log) => (
            <div key={log.date} className="chip bg-panel rounded-2xl p-5">
              <div className="text-xs font-semibold text-gold-2 mb-3">{log.date}</div>
              <ul className="space-y-2">
                {log.items.map((item, i) => (
                  <li key={i} className="text-xs text-mist flex items-start gap-2 leading-relaxed">
                    <span className="w-1 h-1 rounded-full bg-mist mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 chip bg-crimson/10 border border-crimson/30 rounded-2xl p-5 flex items-start gap-3">
          <ShieldAlert size={20} className="text-crimson shrink-0 mt-0.5" />
          <p className="text-xs text-paper/80 leading-relaxed">
            ဤဝဘ်ဆိုက်ရှိ ဘူတာစာရင်း၊ အချိန်ဇယားနှင့် စျေးနှုန်းအချက်အလက်များသည် ယေဘူယျ လမ်းညွှန်ချက်များသာဖြစ်ပြီး
            အစိုးရဌာန/ကုမ္ပဏီများမှ တရားဝင် ကြေညာချက်နှင့် အနည်းငယ်ကွာခြားနိုင်ပါသည်။ တိကျသောအချိန်ဇယား၊ ဂိတ်ပြောင်းရွှေ့မှု
            သို့မဟုတ် ယာယီပိတ်ခြင်းများအတွက် BTS Skytrain / MRTA / Airport Rail Link တို့၏ တရားဝင် app (သို့) ဝဘ်ဆိုက်များတွင်
            နောက်ဆုံးအခြေအနေကို စစ်ဆေးပါရန် အကြံပြုအပ်ပါသည်။
          </p>
        </div>
      </div>

      <footer className="mt-20 border-t border-white/10 pt-10 pb-6">
        <div className="max-w-7xl mx-auto px-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-gold to-gold-2 text-ink flex items-center justify-center">
              <TrainFront size={16} />
            </span>
            <span className="font-display text-sm text-paper/80">BKK သွားလာရေး လမ်းညွှန်</span>
          </div>
          <p className="text-xs text-mist">© 2025 Bangkok Transit Guide (MM) — ခရီးသွားများအတွက် ချစ်စွာဖြင့် ပြုစုထားသည်</p>
        </div>
      </footer>
    </section>
  );
}
