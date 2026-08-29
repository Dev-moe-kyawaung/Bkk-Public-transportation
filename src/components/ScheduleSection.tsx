import { motion } from 'framer-motion';
import { Clock3, AlarmClock, CalendarDays, TrafficCone } from 'lucide-react';
import { trainLines } from '../lib/transitData';

const tips = [
  {
    title: 'ရုံးချိန် အလှုံပြည့် (Peak Hour)',
    time: '၀၇:၀၀ - ၀၉:၀၀ နှင့် ၁၇:၀၀ - ၁၉:၃၀',
    detail: 'ဤအချိန်များတွင် ရထားများ လူပြည့်နေတတ်ပြီး ဘတ်စ်ကားများမှာ လမ်းကြောင်းကျပ်ပြီး နှေးတတ်သည်။ ဖြစ်နိုင်လျှင် ရှောင်ရှားပါ။',
    color: '#e2432b',
    icon: TrafficCone,
  },
  {
    title: 'ရိုးရိုးအချိန် (Off-Peak)',
    time: '၁၀:၀၀ - ၁၆:၀၀',
    detail: 'ရထားလိုင်းများ သက်တောင့်သက်သာ စီးနင်းနိုင်ပြီး ခရီးစဉ်အချိန်ကိုလည်း ပိုတိကျစွာ ခန့်မှန်းနိုင်သည်။',
    color: '#22c19a',
    icon: Clock3,
  },
  {
    title: 'နောက်ဆုံးရထား/ကား',
    time: 'သန်းခေါင် ၀၀:၀၀ ဝန်းကျင်',
    detail: 'BTS/MRT အများစုသည် သန်းခေါင်ယံတွင် ရပ်နားသည်။ ညနေနောက်ပိုင်း ခရီးထွက်ရန် Grab/တက္ကစီ စီစဉ်ထားပါ။',
    color: '#f2b705',
    icon: AlarmClock,
  },
  {
    title: 'အားလပ်ရက် / ပွဲတော်များ',
    time: 'Songkran, ပီတည်းနှစ်သစ်ကူး စသည်',
    detail: 'အခမ်းအနားကြီးများတွင် အချို့ဘူတာများ ယာယီပိတ်ခြင်း သို့မဟုတ် လိုင်းအထူးဇယားလည်ပတ်ခြင်း ဖြစ်တတ်သည်။',
    color: '#8e44ad',
    icon: CalendarDays,
  },
];

export default function ScheduleSection() {
  return (
    <section id="schedule" className="relative py-24 bg-ink">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex items-center gap-2 text-gold-2 text-xs font-semibold uppercase tracking-widest mb-3">
          <Clock3 size={14} /> Timetable
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold">အချိန်ဇယားနှင့် ခရီးစဉ် အကြံပြုချက်</h2>
        <p className="text-mist mt-3 max-w-2xl">
          လိုင်းအားလုံး၏ ပုံမှန်ဝန်ဆောင်ချိန်များနှင့် ခရီးစဉ်စီစဉ်ရာတွင် အထောက်အကူဖြစ်စေမည့် အချက်များ။
        </p>

        <div className="mt-10 overflow-x-auto rounded-3xl chip">
          <table className="w-full text-sm min-w-[640px]">
            <thead>
              <tr className="bg-panel text-mist text-xs uppercase tracking-wider">
                <th className="text-left px-5 py-4 font-medium">လိုင်း</th>
                <th className="text-left px-5 py-4 font-medium">ဝန်ဆောင်ချိန်</th>
                <th className="text-left px-5 py-4 font-medium">ထွက်ခွာကြားချိန်</th>
                <th className="text-left px-5 py-4 font-medium">စျေးနှုန်း</th>
              </tr>
            </thead>
            <tbody>
              {trainLines.map((l) => (
                <tr key={l.id} className="border-t border-white/5 hover:bg-white/[0.02]">
                  <td className="px-5 py-4 flex items-center gap-2.5 whitespace-nowrap">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: l.color }} />
                    <span className="text-paper font-medium">{l.shortMy}</span>
                  </td>
                  <td className="px-5 py-4 text-paper/85">{l.hours}</td>
                  <td className="px-5 py-4 text-paper/85">{l.frequency}</td>
                  <td className="px-5 py-4 text-gold-2">{l.fare}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 gap-5">
          {tips.map((tip, i) => (
            <motion.div
              key={tip.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="chip bg-panel rounded-2xl p-5 flex gap-4"
            >
              <span
                className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: tip.color + '22', color: tip.color }}
              >
                <tip.icon size={20} />
              </span>
              <div>
                <div className="text-sm font-semibold text-paper">{tip.title}</div>
                <div className="text-xs text-gold-2 mt-0.5">{tip.time}</div>
                <p className="text-xs text-mist mt-2 leading-relaxed">{tip.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
