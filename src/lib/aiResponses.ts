interface Rule {
  keywords: string[];
  response: string;
}

const rules: Rule[] = [
  {
    keywords: ['မင်္ဂလာ', 'ဟယ်လို', 'hello', 'hi', 'နေကောင်း'],
    response:
      'မင်္ဂလာပါ! ကျွန်တော် Bangkok သွားလာရေး AI လမ်းညွှန်ပါ 🚆 BTS၊ MRT၊ Airport Link (သို့) ဘတ်စ်ကားများနှင့် ပတ်သက်၍ မေးလိုသည်များ မေးနိုင်ပါသည်။ ဥပမာ - "Siam ကနေ Chatuchak ဘယ်လိုသွားရမလဲ" လို့ မေးကြည့်ပါ။',
  },
  {
    keywords: ['လေဆိပ်', 'airport', 'suvarnabhumi', 'don mueang', 'ဒွန်မွန်း'],
    response:
      'Suvarnabhumi လေဆိပ်ကို Airport Rail Link (ARL) ဖြင့် Phaya Thai ဘူတာမှ တိုက်ရိုက် ၃၀ မိနစ်ခန့်ဖြင့် ရောက်ရှိနိုင်ပြီး စျေးနှုန်းမှာ ~၄၅ ဘတ်ခန့် ဖြစ်ပါသည်။ Don Mueang လေဆိပ်အတွက်တော့ BTS/MRT မရှိသေးသဖြင့် A1/A2 airport bus (သို့) Grab/တက္ကစီ အသုံးပြုရပါမည်။',
  },
  {
    keywords: ['siam'],
    response:
      'Siam ဘူတာသည် BTS Sukhumvit နှင့် Silom လိုင်းနှစ်ခု ဆုံရာနေရာဖြစ်ပြီး Siam Paragon, MBK, Siam Square တို့နှင့် နီးကပ်ပါသည်။ စျေးဝယ်ရန်နှင့် လိုင်းပြောင်းရန် အသင့်တော်ဆုံး ဘူတာတစ်ခု ဖြစ်ပါသည်။',
  },
  {
    keywords: ['chatuchak', 'ချတူချက်', 'weekend market'],
    response:
      'Chatuchak Weekend Market သွားရန် MRT Blue Line ဖြင့် Kamphaeng Phet (သို့) Chatuchak Park ဘူတာတွင် ဆင်းနိုင်သလို BTS Sukhumvit line ဖြင့် Mo Chit ဘူတာမှလည်း လမ်းလျှောက်၍ ရောက်နိုင်ပါသည်။ စနေ၊ တနင်္ဂနွေများတွင်သာ ဖွင့်ပါသည်။',
  },
  {
    keywords: ['grand palace', 'နန်းတော်', 'wat pho', 'ဘုရားကြီး', 'wat arun'],
    response:
      'Grand Palace/Wat Pho သွားရန် MRT Blue Line ဖြင့် Sanam Chai ဘူတာတွင် ဆင်းပါက အနီးဆုံးဖြစ်ပါသည်။ Wat Arun (ဆီမှောင်ဘုရား) အတွက် Wat Pho အနီး Tha Tien ဆိပ်ကမ်းမှ ဖယ်ရီစီး၍ မြစ်ကူးရပါသည်။ Chinatown ကိုလည်း Wat Mangkon ဘူတာမှ လမ်းလျှောက်နိုင်ပါသည်။',
  },
  {
    keywords: ['chinatown', 'yaowarat', 'ရာချဝမ်', 'ချိုင်နားထောင်'],
    response:
      'Chinatown (Yaowarat) ကို MRT Blue Line ၏ Wat Mangkon ဘူတာမှတဆင့် လမ်းလျှောက်၍ ရောက်နိုင်ပါသည်။ ညနေခင်းများတွင် စားသောက်ဆိုင်များနှင့် လမ်းဘေးစျေးများ အလွန်စည်ကားပါသည်။',
  },
  {
    keywords: ['fare', 'ဈေး', 'စျေးနှုန်း', 'ပိုက်ဆံ', 'ဘတ်', 'baht', 'price'],
    response:
      'BTS/MRT စျေးနှုန်းများမှာ အနီးဆုံးခရီးအတွက် ~၁၇ ဘတ်မှ အဝေးဆုံးခရီးအတွက် ~၆၂ ဘတ်အထိ ကွာခြားနိုင်ပါသည်။ Airport Link (ARL) မှာ ~၁၅-၄၅ ဘတ်ဖြစ်ပြီး ဘတ်စ်ကားများမှာ ~၈-၃၀ ဘတ်ခန့်သာ ကျသင့်ပါသည်။ Rabbit Card (BTS) (သို့) MRT Card ဝယ်ယူထားလျှင် အဆင်ပြေပါသည်။',
  },
  {
    keywords: ['bts', 'mrt', 'ကွာခြား', 'difference', 'ဘာကွာလဲ'],
    response:
      'BTS သည် လေထဲမှ ပြေးသော Skytrain ဖြစ်ပြီး MRT သည် မြေအောက်ရထား ဖြစ်ပါသည်။ BTS မှာ Sukhumvit (အစိမ်းဖျော့) နှင့် Silom (အစိမ်းရင့်) လိုင်းနှစ်ခုရှိပြီး MRT မှာ Blue (ပြာ) နှင့် Purple (ခရမ်း) လိုင်းရှိပါသည်။ Siam (BTS) နှင့် Sala Daeng/Asok (BTS-MRT ဆက်စပ်) ဘူတာများတွင် နှစ်စနစ်လုံး ချိတ်ဆက်နိုင်ပါသည်။',
  },
  {
    keywords: ['နောက်ဆုံး', 'last train', 'ဘယ်နှစ်နာရီအထိ', 'ပိတ်', 'closing'],
    response:
      'BTS/MRT အများစုသည် နံနက် ၀၅:၃၀-၀၆:၀၀ ခန့်တွင် စတင်ပြီး သန်းခေါင် ၀၀:၀၀ ဝန်းကျင်တွင် ဝန်ဆောင်မှု ရပ်နားပါသည်။ ညနေနောက်ကျပါက Grab (App-based taxi) သို့မဟုတ် တက္ကစီ အသုံးပြုရန် အကြံပြုပါသည်။',
  },
  {
    keywords: ['rabbit', 'ကတ်', 'card', 'ငွေဖြည့်'],
    response:
      'Rabbit Card ကို BTS ဘူတာအားလုံးတွင် ဝယ်ယူနိုင်ပြီး BTS+BRT တွင် အသုံးပြုနိုင်ပါသည်။ MRT အတွက် သီးခြား MRT Card ဝယ်ယူရပါမည်။ ကတ်နှစ်မျိုးလုံးကို ငွေသားဖြင့် ဘူတာရှိ top-up စက်များတွင် ငွေဖြည့်နိုင်ပါသည်။',
  },
  {
    keywords: ['ဘတ်စ်ကား', 'bus', 'brt'],
    response:
      'Bangkok ဘတ်စ်ကားများသည် BMTA မှ လည်ပတ်ပေးပြီး စျေးအနည်းဆုံးဖြစ်သော်လည်း လမ်းကြောင်းရှုပ်ထွေးနိုင်ပါသည်။ ခရီးသွားများ အသုံးများသော လိုင်း ၂၅၊ ၁၅၊ ၈ စသည်တို့ကို "ဘတ်စ်ကား" အပိုင်းတွင် ကြည့်ရှုနိုင်ပါသည်။ Google Maps app က bus route အတိအကျ ညွှန်ပြပေးနိုင်သည်ကို အသုံးပြုရန် အကြံပြုပါသည်။',
  },
  {
    keywords: ['ဘယ်လို', 'how to go', 'ဘယ်လိုသွား', 'route', 'ကနေ'],
    response:
      'ခရီးစဉ်ရှာရန် အကောင်းဆုံးနည်းလမ်းမှာ Google Maps (သို့) Bangkok MRT/BTS app များတွင် စတင်ရာနေရာနှင့် သွားလိုရာနေရာကို ရိုက်ထည့်ကြည့်ရှုခြင်းဖြစ်ပါသည်။ ယေဘူယျအားဖြင့် BTS/MRT က မြို့လယ်ခေါင်ဒေသအတွက် အမြန်ဆုံးဖြစ်ပြီး ဘတ်စ်ကားက စျေးအသက်သာဆုံးဖြစ်ပါသည်။',
  },
];

const fallback =
  'ဒီမေးခွန်းအတွက် တိကျသောအချက်အလက် မရှိသေးပါ 🙏 "လေဆိပ်"၊ "Siam"၊ "Chatuchak"၊ "ဈေးနှုန်း"၊ "Rabbit Card" (သို့) "BTS vs MRT" ကဲ့သို့ စကားလုံးများဖြင့် ထပ်မံမေးမြန်းကြည့်ပါ။ တိကျသော အချိန်ဇယားများအတွက် တရားဝင် BTS/MRT app များကို စစ်ဆေးရန် အကြံပြုပါသည်။';

export function getAIResponse(input: string): string {
  const q = input.toLowerCase();
  for (const rule of rules) {
    if (rule.keywords.some((k) => q.includes(k.toLowerCase()))) {
      return rule.response;
    }
  }
  return fallback;
}

export const suggestedQuestions = [
  'Siam ကနေ Chatuchak ဘယ်လိုသွားရမလဲ',
  'လေဆိပ်ကို ဘယ်လိုသွားရမလဲ',
  'BTS နဲ့ MRT ဘာကွာလဲ',
  'Rabbit Card ဘယ်လိုသုံးရလဲ',
  'ဈေးနှုန်းဘယ်လောက်လဲ',
  'Grand Palace ဘယ်ဘူတာနီးလဲ',
];
