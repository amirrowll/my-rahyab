export interface Gateway {
  id: string;
  name: string;
  model: string;
  brand: string;
  image?: string;
  price?: number;
  fxsPorts?: number;
  fxoPorts?: number;
  e1Ports?: number;
  ethernetPorts?: number;
  ethernetSpeed?: string;
  features: string[];
  systemFeatures?: string[];
  hardwareFeatures?: string[];
  softwareFeatures?: string[];
  networkFeatures?: string[];
  securityFeatures?: string[];
  specs: {
    network?: {
      ports: string;
      speed: string;
      protocols: string[];
      nat?: boolean;
    };
    voice?: {
      codecs: string[];
      conferencing?: string;
      fax?: string;
      callerID?: boolean;
    };
    security?: {
      encryption: string[];
      protocols: string[];
    };
    sip?: {
      profiles: number;
      accounts?: number;
      failover?: boolean;
    };
    physical?: {
      dimensions?: string;
      weight?: string;
      power?: string;
      mounting?: string[];
      display?: string;
    };
  };
  description: string;
  useCases?: string[];
}

export const gateways: Gateway[] = [
  {
    id: "ht814",
    name: "گیت وی گرنداستریم HT814",
    model: "HT814",
    image: "/imageLanding/HT814.png",
    brand: "Grandstream",
    fxsPorts: 4,
    ethernetPorts: 2,
    ethernetSpeed: "گیگابیت",
    features: ["4 پورت FXS", "کنفرانس 3 طرفه", "روتر NAT گیگابیتی", "2 پورت اترنت", "کیفیت صدای عالی"],
    specs: {
      network: { ports: "2 پورت اترنت گیگابیت", speed: "10/100/1000 Mbps", protocols: ["SIP", "TCP", "UDP", "RTP"], nat: true },
      voice: { codecs: ["G.711", "G.723", "G.729", "G.722"], conferencing: "3 طرفه روی هر پورت", fax: "T.38", callerID: true },
      security: { encryption: ["SRTP", "TLS", "HTTPS"], protocols: ["SRTP", "TLS/SIPS"] },
      sip: { profiles: 2, failover: true },
      physical: { mounting: ["رومیزی"] }
    },
    description: "گیت وی HT814 برای کاربران خانگی یا اداری که قصد اتصال دستگاههای آنالوگ به شبکههای VoIP را دارند، طراحی شده است.",
    useCases: ["دفاتر کوچک", "خانگی", "شرکتهای کوچک"]
  },
  {
    id: "gxw4232",
    name: "گیت وی ویپ گرنداستریم GXW4232",
    model: "GXW4232",
    image: "/imageLanding/GXW4232.png",
    brand: "Grandstream",
    fxsPorts: 32,
    ethernetPorts: 1,
    features: ["32 پورت FXS", "کنفرانس 3 طرفه", "نمایشگر 128×32", "امنیت بالا", "قابلیت نصب روی رک"],
    specs: {
      network: { ports: "1 پورت اترنت", speed: "10/100/1000 Mbps", protocols: ["SIP", "TCP", "UDP"] },
      voice: { codecs: ["G.711", "G.723", "G.729", "G.722", "iLBC"], conferencing: "3 طرفه", fax: "T.38", callerID: true },
      security: { encryption: ["SRTP", "TLS", "HTTPS"], protocols: ["SRTP", "TLS"] },
      sip: { profiles: 2, failover: true },
      physical: { display: "128×32 نورانی", mounting: ["رک", "دیوار"] }
    },
    description: "گیتوی حرفهای با 32 پورت FXS برای کسبوکارهای کوچک تا متوسط",
    useCases: ["شرکتهای متوسط", "مراکز تماس کوچک"]
  },
  {
    id: "ht801",
    name: "گیت وی گرنداستریم HT801",
    model: "HT801",
    image: "/imageLanding/HT801.png",
    brand: "Grandstream",
    fxsPorts: 1,
    ethernetPorts: 1,
    features: ["1 پورت FXS", "کنفرانس 3 طرفه", "فکس T.38", "وزن 108 گرم", "مقرون به صرفه"],
    specs: {
      network: { ports: "1 پورت اترنت", speed: "10/100 Mbps", protocols: ["SIP"] },
      voice: { codecs: ["G.711", "G.723", "G.729", "G.722"], conferencing: "3 طرفه", fax: "T.38", callerID: true },
      security: { encryption: ["SRTP", "TLS"], protocols: ["SRTP", "TLS"] },
      sip: { profiles: 1, failover: true },
      physical: { weight: "108 گرم", mounting: ["رومیزی"] }
    },
    description: "گیت وی تک پورت مقرون به صرفه برای خانه و دفاتر کوچک",
    useCases: ["خانگی", "دفاتر کوچک"]
  },
  {
    id: "gxw4248",
    name: "گیت وی ویپ گرنداستریم GXW4248",
    model: "GXW4248",
    image: "/imageLanding/GXW4248.png",
    brand: "Grandstream",
    fxsPorts: 48,
    ethernetPorts: 1,
    features: ["48 پورت FXS", "LCD گرافیکی 128×32", "4 پروفایل SIP", "کنفرانس 3 طرفه", "QoS"],
    specs: {
      network: { ports: "1 پورت اترنت گیگابیت", speed: "10/100/1000 Mbps", protocols: ["SIP", "MGCP"] },
      voice: { codecs: ["G.711", "G.722", "G.729"], conferencing: "3 طرفه", fax: "T.38", callerID: true },
      security: { encryption: ["SRTP", "TLS"], protocols: ["SRTP", "TLS"] },
      sip: { profiles: 4, failover: true },
      physical: { display: "LCD 128×32", mounting: ["رک", "دیوار"] }
    },
    description: "گیتوی حرفهای 48 پورت برای شرکتهای بزرگ",
    useCases: ["شرکتهای بزرگ", "مراکز تماس"]
  },
  {
    id: "gxw4104",
    name: "گیت وی ویپ گرند استریم GXW4104",
    model: "GXW4104",
    image: "/imageLanding/GXW4104.png",
    brand: "Grandstream",
    fxoPorts: 4,
    ethernetPorts: 2,
    features: ["4 پورت FXO", "اتصال خطوط شهری", "2 پورت اترنت", "3 پروفایل SIP", "فکس T.38"],
    specs: {
      network: { ports: "2 پورت اترنت", speed: "10/100 Mbps", protocols: ["SIP"] },
      voice: { codecs: ["G.711", "G.723", "G.729"], fax: "T.38", callerID: true },
      security: { encryption: ["SRTP"], protocols: ["SRTP"] },
      sip: { profiles: 3 },
      physical: { mounting: ["رومیزی"] }
    },
    description: "گیت وی FXO برای اتصال 4 خط شهری به سیستم VoIP",
    useCases: ["شرکتهای کوچک", "دفاتر"]
  },
  {
    id: "gxw4108",
    name: "گیت وی ویپ گرند استریم GXW4108",
    model: "GXW4108",
    image: "/imageLanding/GXW4108.png",
    brand: "Grandstream",
    fxoPorts: 8,
    ethernetPorts: 2,
    features: ["8 پورت FXO", "اتصال 8 خط شهری", "2 پورت اترنت", "فکس T.38", "3 اکانت SIP"],
    specs: {
      network: { ports: "2 پورت اترنت", speed: "10/100 Mbps", protocols: ["SIP"] },
      voice: { codecs: ["G.711", "G.723", "G.729", "G.722"], fax: "T.38", callerID: true },
      security: { encryption: ["SRTP"], protocols: ["SRTP"] },
      sip: { profiles: 3 },
      physical: { mounting: ["رومیزی"] }
    },
    description: "گیت وی FXO برای اتصال 8 خط شهری به مرکز تلفن IP",
    useCases: ["شرکتهای متوسط", "مراکز چند شعبهای"]
  },
  {
    id: "ht841",
    name: "گیت وی گرنداستریم HT841",
    model: "HT841",
    image: "/imageLanding/HT841.png",
    brand: "Grandstream",
    fxsPorts: 1,
    fxoPorts: 4,
    features: ["1 پورت FXS + 4 پورت FXO", "Lifeline", "3 پروفایل SIP", "رمزنگاری AES", "TR069"],
    specs: {
      network: { ports: "2 پورت اترنت", speed: "100 Mbps", protocols: ["SIP"] },
      voice: { codecs: ["G.711", "G.729"], conferencing: "3 طرفه", fax: "T.38", callerID: true },
      security: { encryption: ["AES", "SRTP", "TLS"], protocols: ["SRTP", "TLS"] },
      sip: { profiles: 3 },
      physical: { mounting: ["رومیزی"] }
    },
    description: "گیت وی ترکیبی با قابلیت Lifeline برای شرایط اضطراری",
    useCases: ["دفاتر", "شرکتهای کوچک"]
  },
  {
    id: "ht813",
    name: "گیت وی گرنداستریم HT813",
    model: "HT813",
    image: "/imageLanding/HT813.png",
    brand: "Grandstream",
    fxsPorts: 1,
    fxoPorts: 1,
    features: ["1 پورت FXS + 1 پورت FXO", "Lifeline", "2 پروفایل SIP", "رمزنگاری AES", "فوقالعاده کوچک"],
    specs: {
      network: { ports: "2 پورت اترنت گیگابیت", speed: "100 Mbps", protocols: ["SIP"] },
      voice: { codecs: ["G.711", "G.729", "Opus"], conferencing: "3 طرفه", fax: "T.38", callerID: true },
      security: { encryption: ["AES", "SRTP", "TLS"], protocols: ["SRTP", "TLS", "HTTPS"] },
      sip: { profiles: 2 },
      physical: { mounting: ["رومیزی"] }
    },
    description: "ATA هیبریدی با یک پورت FXS و یک پورت FXO",
    useCases: ["خانگی", "دفاتر کوچک"]
  },
  {
    id: "ht818",
    name: "گیت وی گرنداستریم HT818",
    model: "HT818",
    image: "/imageLanding/HT818.png",
    brand: "Grandstream",
    fxsPorts: 8,
    ethernetPorts: 2,
    ethernetSpeed: "گیگابیت",
    features: ["8 پورت FXS", "2 پورت گیگابیت", "رمزگذاری AES", "کنفرانس 3 طرفه", "روتر NAT"],
    specs: {
      network: { ports: "2 پورت اترنت گیگابیت", speed: "10/100/1000 Mbps", protocols: ["SIP"], nat: true },
      voice: { codecs: ["G.711", "G.722", "G.729", "Opus"], conferencing: "3 طرفه", fax: "T.38", callerID: true },
      security: { encryption: ["AES", "SRTP", "TLS"], protocols: ["SRTP", "TLS"] },
      sip: { profiles: 2, failover: true },
      physical: { mounting: ["رومیزی"] }
    },
    description: "گیت وی 8 پورت با امنیت بالا و رمزگذاری AES",
    useCases: ["شرکتهای کوچک تا متوسط"]
  },
  {
    id: "gxw4501",
    name: "گیت وی گرنداستریم GXW4501",
    model: "GXW4501",
    image: "/imageLanding/GXW4501.png",
    brand: "Grandstream",
    e1Ports: 1,
    ethernetPorts: 2,
    ethernetSpeed: "گیگابیت",
    features: ["1 دهانه T1/E1/J1", "30 تماس همزمان", "2 پورت USB 3.0", "LCD گرافیکی", "روتر NAT"],
    specs: {
      network: { ports: "2 پورت اترنت گیگابیت", speed: "10/100/1000 Mbps", protocols: ["SIP", "SS7", "PRI", "MFC R2"], nat: true },
      voice: { codecs: ["G.711", "G.729", "G.722", "iLBC"], fax: "T.38", callerID: true },
      security: { encryption: ["SRTP", "TLS"], protocols: ["SRTP", "TLS"] },
      sip: { profiles: 2, failover: true },
      physical: { display: "LCD گرافیکی", mounting: ["رومیزی", "دیوار"] }
    },
    description: "درگاه دیجیتال E1 برای اتصال ترانکهای دیجیتال به VoIP",
    useCases: ["شرکتهای بزرگ", "مراکز تماس"]
  },
  {
    id: "ht802",
    name: "گیت وی ویپ گرنداستریم HT802",
    model: "HT802",
    image: "/imageLanding/HT802.png",
    brand: "Grandstream",
    fxsPorts: 2,
    ethernetPorts: 1,
    features: ["2 پورت FXS", "کنفرانس 3 طرفه", "مقرون به صرفه", "نصب آسان", "فکس T.38"],
    specs: {
      network: { ports: "1 پورت اترنت", speed: "10/100 Mbps", protocols: ["SIP"] },
      voice: { codecs: ["G.711", "G.723", "G.729", "G.722"], conferencing: "3 طرفه روی هر پورت", fax: "T.38", callerID: true },
      security: { encryption: ["SRTP", "TLS"], protocols: ["SRTP", "TLS"] },
      sip: { profiles: 2, failover: true },
      physical: { mounting: ["رومیزی"] }
    },
    description: "گیت وی 2 پورت ساده و مقرون به صرفه",
    useCases: ["خانگی", "شرکتهای کوچک", "دفاتر کوچک"]
  },
  {
    id: "ht812",
    name: "گیت وی گرند استریم HT812",
    model: "HT812",
    image: "/imageLanding/HT812.png",
    brand: "Grandstream",
    fxsPorts: 2,
    ethernetPorts: 2,
    ethernetSpeed: "گیگابیت",
    features: ["2 پورت FXS", "2 پورت گیگابیت", "کیفیت HD", "رمزگذاری TLS/SRTP", "روتر NAT"],
    specs: {
      network: { ports: "2 پورت اترنت گیگابیت", speed: "10/100/1000 Mbps", protocols: ["SIP"], nat: true },
      voice: { codecs: ["G.711", "G.729", "Opus"], conferencing: "3 طرفه", fax: "T.38", callerID: true },
      security: { encryption: ["SRTP", "TLS"], protocols: ["SRTP", "TLS"] },
      sip: { profiles: 2, failover: true },
      physical: { mounting: ["رومیزی"] }
    },
    description: "مبدل آنالوگ به IP با کیفیت HD",
    useCases: ["خانگی", "دفاتر", "شرکتهای کوچک"]
  },
  {
    id: "gxw4224",
    name: "گیت وی گرنداستریم GXW4224",
    model: "GXW4224",
    image: "/imageLanding/GXW4224.png",
    brand: "Grandstream",
    fxsPorts: 24,
    ethernetPorts: 1,
    ethernetSpeed: "گیگابیت",
    features: ["24 پورت FXS", "خروجی 50 پین", "صفحه نمایش 132×48", "کنفرانس 3 طرفه", "نصب رک/دسکتاپ"],
    specs: {
      network: { ports: "1 پورت اترنت گیگابیت", speed: "10/100/1000 Mbps", protocols: ["SIP"] },
      voice: { codecs: ["G.711", "G.729", "Opus"], conferencing: "3 طرفه روی هر پورت", fax: "T.38", callerID: true },
      security: { encryption: ["SRTP", "TLS", "HTTPS"], protocols: ["SRTP", "TLS"] },
      sip: { profiles: 2 },
      physical: { display: "132×48 با نور پسزمینه", mounting: ["رک", "دسکتاپ"] }
    },
    description: "گیت وی حرفهای 24 پورت برای مشاغل متوسط",
    useCases: ["شرکتهای متوسط", "دفاتر بزرگ"]
  },
  {
    id: "gxw4216",
    name: "گیت وی آنالوگ به ویپ گرنداستریم GXW4216",
    model: "GXW4216",
    image: "/imageLanding/GXW4216.png",
    brand: "Grandstream",
    fxsPorts: 16,
    ethernetPorts: 1,
    ethernetSpeed: "گیگابیت",
    features: ["16 پورت FXS", "4 پروفایل SIP", "حساب SIP مستقل", "حذف نویز خودکار", "امنیت بالا"],
    specs: {
      network: { ports: "1 پورت اترنت گیگابیت", speed: "10/100/1000 Mbps", protocols: ["SIP"] },
      voice: { codecs: ["G.711", "G.729", "G.722"], conferencing: "3 طرفه", fax: "T.38", callerID: true },
      security: { encryption: ["SRTP", "TLS", "HTTPS"], protocols: ["SRTP", "TLS"] },
      sip: { profiles: 4, accounts: 16 },
      physical: { mounting: ["رک", "دسکتاپ"] }
    },
    description: "گیت وی 16 پورت نسل جدید برای مشاغل کوچک و متوسط",
    useCases: ["شرکتهای کوچک تا متوسط"]
  },
  {
    id: "ht881",
    name: "گیت وی گرنداستریم HT881",
    model: "HT881",
    image: "/imageLanding/HT881.png",
    brand: "Grandstream",
    fxsPorts: 1,
    fxoPorts: 8,
    features: ["1 پورت FXS + 8 پورت FXO", "Lifeline", "3 پروفایل SIP", "رمزنگاری AES", "TR069"],
    specs: {
      network: { ports: "2 پورت اترنت", speed: "100 Mbps", protocols: ["SIP"] },
      voice: { codecs: ["G.711", "G.729"], conferencing: "3 طرفه", fax: "T.38", callerID: true },
      security: { encryption: ["AES", "SRTP", "TLS"], protocols: ["SRTP", "TLS"] },
      sip: { profiles: 3 },
      physical: { mounting: ["رومیزی"] }
    },
    description: "گیت وی FXO با 8 پورت برای اتصال خطوط شهری",
    useCases: ["شرکتهای متوسط", "دفاتر دورافتاده"]
  },
  {
    id: "mx60e-g-32fxo",
    name: "گیت وی FXO نیوراک 32 پورت MX60E-G-32FXO",
    model: "MX60E-G-32FXO",
    image: "/imageLanding/MX60E-G-32FXO.png",
    brand: "Newrock",
    fxoPorts: 32,
    ethernetPorts: 2,
    ethernetSpeed: "گیگابیت",
    features: ["32 پورت FXO", "32 تماس همزمان", "2 پورت گیگابیت", "حذف اکو", "VPN (L2TP/OpenVPN)"],
    specs: {
      network: { ports: "2 پورت Gigabit Ethernet", speed: "10/100/1000 Mbps", protocols: ["SIP", "MGCP"] },
      voice: { codecs: ["G.711", "G.729a", "G.722"], fax: "T.38", callerID: true },
      security: { encryption: ["SRTP", "TLS"], protocols: ["SRTP", "TLS"] },
      sip: { profiles: 2, failover: true },
      physical: { mounting: ["رک"] }
    },
    description: "گیت وی حرفهای 32 پورت FXO برای مراکز تماس و شرکتهای بزرگ",
    useCases: ["مراکز تماس", "شرکتهای بزرگ", "سازمانهای بزرگ"]
  }
];
