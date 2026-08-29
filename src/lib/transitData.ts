export interface Station {
  code: string;
  nameEn: string;
  nameMy: string;
  interchange?: string;
}

export interface TrainLine {
  id: string;
  nameMy: string;
  nameEn: string;
  shortMy: string;
  color: string;
  textColor: string;
  hours: string;
  frequency: string;
  fare: string;
  note: string;
  stations: Station[];
}

export const trainLines: TrainLine[] = [
  {
    id: 'bts-sukhumvit',
    nameMy: 'BTS ဆူခွမ်းဝစ် လိုင်း (အစိမ်းရင့်)',
    nameEn: 'BTS Sukhumvit Line',
    shortMy: 'BTS အစိမ်းဖျော့',
    color: '#8fd14f',
    textColor: '#0a0f1e',
    hours: 'နံနက် ၀၅:၃၀ - သန်းခေါင် ၀၀:၀၀',
    frequency: 'အလှုံပြည့် ၃-၅ မိနစ် / ရိုးရိုးအချိန် ၅-၈ မိနစ်',
    fare: '၁၇ - ၆၂ ဘတ် (အကွာအဝေးအလိုက်)',
    note: 'Mo Chit မှ Kheha အထိ၊ Siam တွင် Silom လိုင်းနှင့် ဆက်စပ်သည်။ လေဆိပ်သွားရန် Phaya Thai ဘူတာမှ Airport Rail Link ကူးရသည်။',
    stations: [
      { code: 'N8', nameEn: 'Mo Chit', nameMy: 'မိုချစ် (ချတူချက်စျေး)' },
      { code: 'N7', nameEn: 'Saphan Khwai', nameMy: 'သဖန်ခွိုင်' },
      { code: 'N5', nameEn: 'Ari', nameMy: 'အာရီ' },
      { code: 'N3', nameEn: 'Victory Monument', nameMy: 'အောင်ပွဲကျောက်တိုင်' },
      { code: 'N2', nameEn: 'Phaya Thai', nameMy: 'ဖရာယာထိုင် (Airport Link ဆက်စပ်)', interchange: 'ARL' },
      { code: 'N1', nameEn: 'Ratchathewi', nameMy: 'ရာချသေဝီ' },
      { code: 'CEN', nameEn: 'Siam', nameMy: 'ဆီယမ် (Silom လိုင်းဆက်စပ်)', interchange: 'BTS Silom' },
      { code: 'E1', nameEn: 'Chit Lom', nameMy: 'ချစ်လုံ (စျေးဝယ်ရပ်ကွက်)' },
      { code: 'E3', nameEn: 'Nana', nameMy: 'နာနာ' },
      { code: 'E4', nameEn: 'Asok', nameMy: 'အသုက် (MRT Sukhumvit ဆက်စပ်)', interchange: 'MRT Blue' },
      { code: 'E5', nameEn: 'Phrom Phong', nameMy: 'ဖရုံဖုန်း (EmQuartier)' },
      { code: 'E6', nameEn: 'Thong Lo', nameMy: 'သွန်လော်' },
      { code: 'E9', nameEn: 'On Nut', nameMy: 'အွန်နွတ်' },
      { code: 'E13', nameEn: 'Bang Na', nameMy: 'ဘန်နာ' },
      { code: 'E23', nameEn: 'Kheha', nameMy: 'ခေဟာ (အဆုံးဘူတာ)' },
    ],
  },
  {
    id: 'bts-silom',
    nameMy: 'BTS စီလုံ လိုင်း (အစိမ်းရင့်)',
    nameEn: 'BTS Silom Line',
    shortMy: 'BTS အစိမ်းရင့်',
    color: '#0f6b3c',
    textColor: '#ffffff',
    hours: 'နံနက် ၀၅:၃၀ - သန်းခေါင် ၀၀:၀၀',
    frequency: 'အလှုံပြည့် ၃-၅ မိနစ် / ရိုးရိုးအချိန် ၅-၈ မိနစ်',
    fare: '၁၇ - ၄၇ ဘတ် (အကွာအဝေးအလိုက်)',
    note: 'National Stadium မှ Bang Wa အထိ၊ Saphan Taksin ဘူတာမှ Chao Phraya မြစ်သွား ဖယ်ရီစီးနင်းနိုင်သည်။',
    stations: [
      { code: 'W1', nameEn: 'National Stadium', nameMy: 'အမျိုးသားကွင်း (MBK)' },
      { code: 'CEN', nameEn: 'Siam', nameMy: 'ဆီယမ် (Sukhumvit လိုင်းဆက်စပ်)', interchange: 'BTS Sukhumvit' },
      { code: 'S1', nameEn: 'Ratchadamri', nameMy: 'ရာချဒမ်ရီ' },
      { code: 'S2', nameEn: 'Sala Daeng', nameMy: 'ဆာလာဒဲန်း (MRT Silom ဆက်စပ်)', interchange: 'MRT Blue' },
      { code: 'S3', nameEn: 'Chong Nonsi', nameMy: 'ချောင်နွန်ဆီ (Sathorn ရုံးရပ်ကွက်)' },
      { code: 'S6', nameEn: 'Saphan Taksin', nameMy: 'သဖန်တက်ဆင် (မြစ်ဖျားဆိပ်ကမ်း)' },
      { code: 'S8', nameEn: 'Krung Thon Buri', nameMy: 'ကရုံတွန်ဘူရီ' },
      { code: 'S12', nameEn: 'Bang Wa', nameMy: 'ဘန်ဝါ (အဆုံးဘူတာ)' },
    ],
  },
  {
    id: 'mrt-blue',
    nameMy: 'MRT လိုင်းစက်ဝိုင်း (ပြာရောင်)',
    nameEn: 'MRT Blue Line',
    shortMy: 'MRT ပြာ',
    color: '#1e4c9a',
    textColor: '#ffffff',
    hours: 'နံနက် ၀၆:၀၀ - သန်းခေါင် ၀၀:၀၀',
    frequency: 'အလှုံပြည့် ၄-၆ မိနစ် / ရိုးရိုးအချိန် ၆-၁၀ မိနစ်',
    fare: '၁၇ - ၄၂ ဘတ် (အကွာအဝေးအလိုက်)',
    note: 'စက်ဝိုင်းပုံစံ လိုင်းဖြစ်ပြီး Bang Sue မှ Hua Lamphong ကိုဖြတ်ကာ ပြန်ဆက်သွားသည်။ Chatuchak စျေး၊ Chinatown (Wat Mangkon)၊ Grand Palace အနီး Sanam Chai ဘူတာများ ရှိသည်။',
    stations: [
      { code: 'BL01', nameEn: 'Tao Poon', nameMy: 'ထောပွန် (Purple လိုင်းဆက်စပ်)', interchange: 'MRT Purple' },
      { code: 'BL11', nameEn: 'Chatuchak Park', nameMy: 'ချတူချက်ပန်းခြံ (စျေးရှစ်ရက်ကွင်းအနီး)' },
      { code: 'BL12', nameEn: 'Kamphaeng Phet', nameMy: 'ကမ်ဖန်ဖက် (Chatuchak Weekend Market)' },
      { code: 'BL21', nameEn: 'Sukhumvit', nameMy: 'ဆူခွမ်းဝစ် (Asok ဆက်စပ်)', interchange: 'BTS Sukhumvit' },
      { code: 'BL22', nameEn: 'Phetchaburi', nameMy: 'ဖက်ချဘူရီ (Airport Link ဆက်စပ်)', interchange: 'ARL' },
      { code: 'BL26', nameEn: 'Silom', nameMy: 'စီလုံ (Sala Daeng ဆက်စပ်)', interchange: 'BTS Silom' },
      { code: 'BL28', nameEn: 'Hua Lamphong', nameMy: 'ဟွာလမ်ဖုန်း (ဘူတာကြီး/Chinatown အနီး)' },
      { code: 'BL29', nameEn: 'Wat Mangkon', nameMy: 'ဝပ်မန်းကွန် (ရုံးချိန်၊ Chinatown)' },
      { code: 'BL31', nameEn: 'Sanam Chai', nameMy: 'ဆနမ်ချိုင် (နန်းတော်ကြီးအနီး)' },
      { code: 'BL33', nameEn: 'Bang Phai', nameMy: 'ဘန်းဖိုင်' },
    ],
  },
  {
    id: 'mrt-purple',
    nameMy: 'MRT ခရမ်းရောင် လိုင်း',
    nameEn: 'MRT Purple Line',
    shortMy: 'MRT ခရမ်း',
    color: '#8e44ad',
    textColor: '#ffffff',
    hours: 'နံနက် ၀၅:၃၀ - ည ၂၀:၀၀ (extension ၂၄:၀၀ အထိ)',
    frequency: '၅ - ၁၀ မိနစ်',
    fare: '၁၇ - ၄၂ ဘတ်',
    note: 'Tao Poon မှ Khlong Bang Phai (Nonthaburi ခရိုင်) အထိ ရောက်ရှိပြီး Blue လိုင်းနှင့် Tao Poon ဘူတာတွင် ဆက်စပ်နိုင်သည်။',
    stations: [
      { code: 'PP01', nameEn: 'Khlong Bang Phai', nameMy: 'ခလုံဘန်ဖိုင် (အစတိုင်)' },
      { code: 'PP11', nameEn: 'Bang Yai', nameMy: 'ဘန်ရိုင်း' },
      { code: 'PP16', nameEn: 'Nonthaburi Civic Center', nameMy: 'နွန်ထဘူရီ မြို့တော်ရုံး' },
      { code: 'PP19', nameEn: 'Tao Poon', nameMy: 'ထောပွန် (Blue လိုင်းဆက်စပ်)', interchange: 'MRT Blue' },
    ],
  },
  {
    id: 'arl',
    nameMy: 'လေဆိပ်ရထား (Airport Rail Link)',
    nameEn: 'Airport Rail Link (ARL)',
    shortMy: 'ARL အနီရောင်',
    color: '#b3272d',
    textColor: '#ffffff',
    hours: 'နံနက် ၀၅:၃၀ - သန်းခေါင် ၀၀:၀၀',
    frequency: '၁၀ - ၁၅ မိနစ်',
    fare: '၁၅ - ၄၅ ဘတ် (Phaya Thai မှ Suvarnabhumi အထိ ~၄၅ ဘတ်၊ ~၃၀ မိနစ်ခန့်)',
    note: 'Suvarnabhumi လေဆိပ်နှင့် မြို့ထဲ ဆက်သွယ်ပေးသည့် အမြန်ဆုံးနည်းလမ်း။ Phaya Thai (BTS)၊ Makkasan (MRT Phetchaburi) တို့တွင် ဆက်စပ်နိုင်သည်။',
    stations: [
      { code: 'A1', nameEn: 'Phaya Thai', nameMy: 'ဖရာယာထိုင် (BTS ဆက်စပ်)', interchange: 'BTS Sukhumvit' },
      { code: 'A2', nameEn: 'Ratchaprarop', nameMy: 'ရာချပရော့' },
      { code: 'A3', nameEn: 'Makkasan', nameMy: 'မက္ကဆန် (MRT ဆက်စပ်)', interchange: 'MRT Blue' },
      { code: 'A5', nameEn: 'Hua Mak', nameMy: 'ဟွာမက်' },
      { code: 'A6', nameEn: 'Lat Krabang', nameMy: 'လက်ကရာဘန်း' },
      { code: 'A8', nameEn: 'Suvarnabhumi Airport', nameMy: 'သုဝဏ္ဏဘူမိ လေဆိပ် (အဆုံးဘူတာ)' },
    ],
  },
];

export interface BusRoute {
  number: string;
  type: 'ရိုးရိုး' | 'A/C' | 'BRT';
  from: string;
  to: string;
  fromMy: string;
  toMy: string;
  highlights: string;
  fare: string;
}

export const busRoutes: BusRoute[] = [
  {
    number: '25',
    type: 'ရိုးရိုး',
    from: 'Victory Monument',
    to: 'Wat Pho / Tha Tien',
    fromMy: 'အောင်ပွဲကျောက်တိုင်',
    toMy: 'ဝပ်ဖို (ဘုရားကြီး) / သာတျန်ဆိပ်',
    highlights: 'Siam, Chinatown, Grand Palace ဘက်ကို ဖြတ်သန်း၊ ခရီးသွားများ များစွာစီးနင်းသည့်လိုင်း',
    fare: '၈ - ၂၅ ဘတ်',
  },
  {
    number: '15',
    type: 'ရိုးရိုး',
    from: 'Democracy Monument',
    to: 'Siam / Chidlom',
    fromMy: 'ဒီမိုကရေစီကျောက်တိုင်',
    toMy: 'ဆီယမ် / ချစ်လုံ',
    highlights: 'ရှေးဟောင်းမြို့ဟောင်း Rattanakosin ဒေသမှ ခေတ်မီစျေးဝယ်ရပ်ကွက်ထိ',
    fare: '၈ - ၂၀ ဘတ်',
  },
  {
    number: '2',
    type: 'A/C',
    from: 'Pak Khlong Talat',
    to: 'Bang Na',
    fromMy: 'ပက်ခလုံစျေး (ပန်းစျေး)',
    toMy: 'ဘန်နာ',
    highlights: 'Sukhumvit လမ်းမကြီးတစ်လျှောက် BTS ဘူတာများနှင့် ပေါင်းစပ်သွားနိုင်',
    fare: '၁၅ - ၃၀ ဘတ်',
  },
  {
    number: '3',
    type: 'ရိုးရိုး',
    from: 'Ratchawong (Chinatown)',
    to: 'Chatuchak Market',
    fromMy: 'ရာချဝမ်း (Chinatown)',
    toMy: 'ချတူချက်စျေး',
    highlights: 'မြို့ဟောင်းမှ ဆက်ဆန့်စျေးကြီးထိ တိုက်ရိုက်ချိတ်ဆက်ပေးသည့်လိုင်း',
    fare: '၈ - ၂၅ ဘတ်',
  },
  {
    number: '8',
    type: 'ရိုးရိုး',
    from: 'Saphan Phut',
    to: 'On Nut (BTS)',
    fromMy: 'သဖန်ဖွတ် (Memorial Bridge)',
    toMy: 'အွန်နွတ် (BTS)',
    highlights: 'Wat Pho, Wat Arun အနီးမှတဆင့် Sukhumvit အရှေ့ပိုင်းထိ ရောက်ရှိစေသည်',
    fare: '၈ - ၂၅ ဘတ်',
  },
  {
    number: 'BRT',
    type: 'BRT',
    from: 'Sathorn',
    to: 'Ratchaphruek',
    fromMy: 'ဆာသွန် (Chong Nonsi BTS ဆက်စပ်)',
    toMy: 'ရာချဖရွတ်',
    highlights: 'သီးသန့်လမ်းကြောင်း Bus Rapid Transit၊ Chong Nonsi BTS ဘူတာနှင့် တိုက်ရိုက်ချိတ်ဆက်',
    fare: '၁၀ - ၂၀ ဘတ် (Rabbit Card သုံးနိုင်)',
  },
];

export interface FareCard {
  name: string;
  nameMy: string;
  desc: string;
  usedFor: string;
}

export const fareCards: FareCard[] = [
  {
    name: 'Rabbit Card',
    nameMy: 'ရာဘစ်ကတ် (Rabbit Card)',
    desc: 'BTS၊ BRT နှင့် ဆိုင်ရာမြေအောက်ဆိုင်များတွင် အသုံးပြုနိုင်သော stored-value ကတ်',
    usedFor: 'BTS + BRT + ဆိုင်ခန်းများ',
  },
  {
    name: 'MRT Card',
    nameMy: 'MRT ကတ် (ပြာ/ခရမ်းလိုင်း)',
    desc: 'MRT ဘူတာတိုင်းတွင် ဝယ်ယူနိုင်ပြီး ငွေဖြည့်၍ အသုံးပြုနိုင်သည်',
    usedFor: 'MRT Blue + Purple',
  },
  {
    name: 'Single Journey Token',
    nameMy: 'တစ်ကြိမ်စာလက်မှတ် (Token/Card)',
    desc: 'တစ်ကြိမ်ခရီးစဉ်တွက် ဘူတာတွင် တိုက်ရိုက်ဝယ်ယူ၍ သုံးနိုင်သည့် နည်းလမ်း',
    usedFor: 'BTS/MRT/ARL အားလုံး',
  },
  {
    name: 'Tourist Pass',
    nameMy: 'ခရီးသွားလက်မှတ် (1-3 Day Pass)',
    desc: 'တစ်နေ့လျှင် အကန့်အသတ်မရှိ စီးနင်းနိုင်သော ခရီးသွားအထူးလက်မှတ်',
    usedFor: 'BTS သီးသန့် (ရုံးအရောင်းစင်တာများတွင်ဝယ်ယူနိုင်)',
  },
];
