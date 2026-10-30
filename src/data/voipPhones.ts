export interface VoIPPhone {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: string;
  image: string;
  features: string[];
  specs: Record<string, string | number | boolean>;
  description: string;
}

export const voipPhones: VoIPPhone[] = [
  {
    id: "grandstream-gxp2130",
    name: "Grandstream GXP2130",
    brand: "Grandstream",
    category: "تلفن تحت شبکه",
    price: "تماس بگیرید",
    image: "/imageLanding/Grandstream GXP2130.png",
    features: [
      "حداکثر 3 حساب SIP",
      "پشتیبانی از PoE",
      "قابلیت کنفرانس صوتی 4 طرفه",
      "8 کلید BLF / کلید شماره گیری دو رنگ",
      "پشتیبانی هدست EHS"
    ],
    specs: {
      dimensions: "85×211×193 میلیمتر",
      type: "رومیزی",
      power: "PoE / Adaptor",
      sip: "بله"
    },
    description: "تلفن تحت شبکه GXP2130 یک تلفن میان رده از شرکت گرنداستریم است که برای مدیریت حجم تماسهای متوسط و بالا، یک انتخاب عالی به شمار میرود."
  },
  {
    id: "panasonic-nt321",
    name: "Panasonic KX-NT321",
    brand: "Panasonic",
    category: "سانترال تحت شبکه",
    price: "تماس بگیرید",
    image: "/imageLanding/Panasonic KX-NT321.png",
    features: [
      "دارای نمایشگر نورانی تک سطری",
      "دارای بلندگوی شفاف دو طرفه",
      "دارای 8 کلید قابل برنامه ریزی",
      "پشتیبانی از POE"
    ],
    specs: {
      dimensions: "200x280x190 میلیمتر",
      sip: "خیر",
      sipAccounts: "0",
      conference: "بله"
    },
    description: "گوشی سانترال تحت شبکه KX-NT321 با نمایشگر یک سطری سیاه و سفید، بلندگوی دیجیتال قوی و ظرفیت ۸ کلید CO قابل تغییر."
  },
  {
    id: "snom-d710",
    name: "Snom D710",
    brand: "Snom",
    category: "تلفن ویپ",
    price: "تماس بگیرید",
    image: "/imageLanding/Snom D710.png",
    features: [
      "پشتیبانی از 4 حساب SIP",
      "کیفیت صدای HD در گوشی و اسپیکر",
      "صفحه نمایش سیاه و سفید با نور پسزمینه",
      "پشتیبانی از فناوری PoE",
      "با قابلیت اتصال به هدست",
      "پایان تولید؛ جایگزین: D715"
    ],
    specs: {
      dimensions: "185×90×220 میلیمتر",
      type: "رومیزی",
      sip: "بله",
      sipAccounts: "4"
    },
    description: "تلفن ویپ اسنوم مدل D710 یک تلفن کاربردی و مقرون به صرفه است که با پشتیبانی از 4 حساب SIP، مناسب مجموعههای کوچک و متوسط است."
  },
  {
    id: "yealink-vp59",
    name: "Yealink VP59",
    brand: "Yealink",
    category: "تلفن تصویری",
    price: "تماس بگیرید",
    image: "/imageLanding/Yealink VP59.png",
    features: [
      "پشتیبانی از Wi-Fi، بلوتوث، USB و اندروید 7.1",
      "16 حساب Voip",
      "کنفرانس صوتی / تصویری پنج طرفه",
      "کنفرانس ویدیویی سه طرفه",
      "پشتیبانی از PoE",
      "صفحه نمایشگر لمسی 1024x800 pixel"
    ],
    specs: {
      dimensions: "273x226x285 میلیمتر",
      type: "رومیزی",
      power: "PoE / Adaptor",
      sip: "بله"
    },
    description: "یکی از پرچمداران شرکت یالینک، تلفن تحت شبکه مدل VP59 بوده که بیشتر برای مدیران و کارمندان حرفهای طراحی شده است."
  },
  {
    id: "snom-d713",
    name: "Snom D713",
    brand: "Snom",
    category: "تلفن ویپ",
    price: "تماس بگیرید",
    image: "/imageLanding/Snom D713.png",
    features: [
      "پشتیبانی از 6 حساب SIP",
      "کیفیت صدای HD با اسپیکر فولدوپلکس",
      "صفحه نمایش رنگی 2.8 اینچی",
      "پشتیبانی از فناوری PoE",
      "دارای یک پورت گیگ",
      "با قابلیت اتصال به هدست"
    ],
    specs: {
      dimensions: "205×185×40 میلیمتر",
      type: "رومیزی",
      sip: "بله",
      sipAccounts: "6"
    },
    description: "تلفن ویپ اسنوم مدل D713 یک محصول حرفهای است که میتواند نیازهای ارتباطی مجموعههای کوچک و متوسط را برآورده نماید."
  },
  {
    id: "yealink-t54w",
    name: "Yealink SIP-T54W",
    brand: "Yealink",
    category: "تلفن تحت شبکه",
    price: "تماس بگیرید",
    image: "/imageLanding/Yealink SIP-T54W.png",
    features: [
      "پشتیبانی از Wi-Fi، بلوتوث و USB",
      "پشتیبانی از PoE",
      "16 حساب Voip",
      "صفحه نمایشگر رنگی 480x272-pixel",
      "پشتیبانی هدست EHS"
    ],
    specs: {
      dimensions: "233x222x186 میلیمتر",
      type: "رومیزی",
      power: "PoE / Adaptor",
      sip: "بله"
    },
    description: "تلفن تحت شبکه SIP-T54W یکی از محصولات پیشرفته و حرفهای شرکت یالینک محسوب میشود."
  },
  {
    id: "snom-d120",
    name: "Snom D120",
    brand: "Snom",
    category: "تلفن ویپ",
    price: "تماس بگیرید",
    image: "/imageLanding/Snom D120.png",
    features: [
      "پشتیبانی از 2 اکانت SIP و 2 تماس همزمان",
      "کیفیت صدای HD در گوشی و اسپیکر",
      "صفحه نمایش سیاه و سفید با نور پسزمینه",
      "پشتیبانی از فناوری PoE",
      "با قابلیت اتصال به هدست",
      "پشتیبانی از کنفرانس صوتی 3 طرفه"
    ],
    specs: {
      dimensions: "205×161×32 میلیمتر",
      type: "رومیزی",
      sip: "بله",
      sipAccounts: "2"
    },
    description: "تلفن ویپ اسنوم مدل D120 با پشتیبانی از 2 اکانت SIP و 2 تماس همزمان، یک تلفن اقتصادی کارآمد است."
  },
  {
    id: "yealink-w60p",
    name: "Yealink SIP-W60P",
    brand: "Yealink",
    category: "بیسیم تحت شبکه",
    price: "تماس بگیرید",
    image: "/imageLanding/Yealink SIP-W60P.png",
    features: [
      "پشتیبانی از +ECO Mode",
      "پشتیبانی از 8 تماس همزمان",
      "قابلیت اضافه کردن 8 هندست به پایه",
      "دارای لایههای امنیتی TLS و SRTP",
      "قابلیت سازگاری با سمعک",
      "دارای 50 متر برد داخلی و 300 متر خارجی"
    ],
    specs: {
      dimensions: "20×53×175 میلیمتر",
      power: "Adaptor",
      type: "بیسیم",
      sip: "بله"
    },
    description: "تلفن تحت شبکه بی سیم یالینک مدل SIP-W60P از یک دستگاه بیس W60 و یک گوشی بیسیم W56H تشکیل شده است."
  },
  {
    id: "grandstream-gxp2170",
    name: "Grandstream GXP2170",
    brand: "Grandstream",
    category: "تلفن تحت شبکه",
    price: "تماس بگیرید",
    image: "/imageLanding/Grandstream GXP2170.png",
    features: [
      "پشتیبانی از 6 حساب SIP و 12 تماس همزمان",
      "مجهز به فناوری از PoE",
      "دارای کیفیت صدای HD",
      "پشتیبانی از کنفرانس 5 طرفه",
      "مجهز به دفترچه مخاطبین اختصاصی",
      "پشتیبانی از بلوتوث و USB",
      "صفحه نمایش رنگی 4.3 اینچ"
    ],
    specs: {
      dimensions: "46×206×228 میلیمتر",
      type: "رومیزی",
      power: "PoE / Adaptor",
      sip: "بله"
    },
    description: "گوشی گرنداستریم مدل GXP2170 یک از بهترین مدل تلفن های مدیریتی سطح بالا است."
  },
  {
    id: "yealink-t33g",
    name: "Yealink SIP-T33G",
    brand: "Yealink",
    category: "تلفن تحت شبکه",
    price: "تماس بگیرید",
    image: "/imageLanding/Yealink SIP-T33G.png",
    features: [
      "کنفرانس 5 طرفه",
      "صدای فول HD",
      "تکنولوژی فیلتر صدای مزاحم",
      "فراهم کردن 4 عدد اکانت VoIP",
      "پشتیبانی از کدک های استاندارد سیپ"
    ],
    specs: {
      dimensions: "42×146×186 میلیمتر",
      type: "رومیزی",
      power: "PoE / Adaptor",
      sip: "بله"
    },
    description: "تلفن تحت شبکه SIP-T33G محصول ارائه شده از شرکت یالینک است. محصولات سری T3 یالینک از تراشه قدرتمندتری نسبت به سری T2 برخوردار هستند."
  },
  {
    id: "yealink-t53w",
    name: "Yealink SIP-T53W",
    brand: "Yealink",
    category: "تلفن تحت شبکه",
    price: "تماس بگیرید",
    image: "/imageLanding/Yealink SIP-T53W.png",
    features: [
      "پشتیبانی از Wi-Fi، بلوتوث و USB",
      "12 حساب Voip",
      "2 پورت شبکه گیگابیت",
      "پشتیبانی از PoE",
      "صفحه نمایش گرافیکی LCD 360x160 pixel"
    ],
    specs: {
      dimensions: "212x210x174 میلیمتر",
      type: "رومیزی",
      power: "PoE / Adaptor",
      sip: "بله"
    },
    description: "تلفن تحت شبکه یالینک SIP-T53W از 12 حساب ویپ و 2 پورت شبکه گیگابایت پشتیبانی می کند."
  },
  {
    id: "gigaset-a540-ip",
    name: "Gigaset A540 IP",
    brand: "Gigaset",
    category: "بیسیم تحت شبکه",
    price: "تماس بگیرید",
    image: "/imageLanding/Gigaset A540 IP.png",
    features: [
      "شامل یک گوشی بیسیم و یک پایه",
      "پشتیبانی از 6 اکانت SIP و یک خط آنالوگ",
      "شارژدهی گوشی در زمان مکالمه تا 18 ساعت",
      "برد در فضای داخلی تا 50 متر",
      "کیفیت صدای HD همراه با اسپیکر",
      "صفحه نمایش 1.8 اینچی با پسزمینه رنگی"
    ],
    specs: {
      battery: "مکالمه: 18 ساعت، انتظار: 200 ساعت",
      dimensions: "گوشی: 155×50×28، پایه: 132×105×46",
      type: "بیسیم",
      dect: "بله"
    },
    description: "تلفن بیسیم A540 IP از برند آلمانی گیگاست، از فناوری دکت استفاده میکند و همزمان میتواند هم آنالوگ و هم تحت شبکه باشد."
  },
  {
    id: "panasonic-nt346",
    name: "Panasonic KX-NT346",
    brand: "Panasonic",
    category: "سانترال تحت شبکه",
    price: "تماس بگیرید",
    image: "/imageLanding/Panasonic KX-NT346.png",
    features: [
      "دارای نمایشگر نورانی 6 سطری",
      "دارای 24 کلید قابل برنامه ریزی",
      "دارای بلندگوی شفاف Full Duplex",
      "قابلیت پشتیبانی از ماژول بلوتوث",
      "پشتیبانی از POE"
    ],
    specs: {
      dimensions: "240x330x310 میلیمتر",
      sip: "خیر",
      sipAccounts: "0",
      conference: "بله"
    },
    description: "گوشی سانترال تحت شبکه مدل KX-NT346 با نمایشگر شش خطی، بلندگوی دیجیتال قوی و ظرفیت ۲۴ کلید CO قابل تغییر."
  },
  {
    id: "grandstream-wp820",
    name: "Grandstream WP820",
    brand: "Grandstream",
    category: "بیسیم تحت شبکه",
    price: "تماس بگیرید",
    image: "/imageLanding/Grandstream WP820.png",
    features: [
      "پشتیبانی از 2 خط شهری و 2 اکانت سیپ",
      "WiFi دو بانده به همراه فناوری بلوتوث",
      "کیفیت صدای HD و حذف سر و صدای محیط",
      "پشتیبانی از اپلیکیشنهای اندروید",
      "دارای خروجی هدست و پورت USB"
    ],
    specs: {
      dimensions: "21×52×168 میلیمتر",
      power: "Adaptor",
      type: "بیسیم",
      sip: "بله"
    },
    description: "تلفن بی سیم تحت شبکه گرنداستریم مدل wp 820 یک تلفن وای فای قابل حمل است که برای شرکت هایی مانند خرده فروشی های با مساحت زیاد کاربرد دارد."
  },
  {
    id: "gigaset-e630a-go",
    name: "Gigaset E630A GO",
    brand: "Gigaset",
    category: "بیسیم تحت شبکه",
    price: "تماس بگیرید",
    image: "/imageLanding/Gigaset E630A GO.png",
    features: [
      "پشتیبانی از 6 اکانت SIP و یک خط آنالوگ",
      "شارژدهی در زمان مکالمه تا 14 ساعت",
      "برد در فضای داخلی 50 متر",
      "کیفیت صدای HD با اسپیکر فولدوپلکس",
      "صفحه نمایش رنگی 1.8 اینچی",
      "ضدآب، ضد گرد و غبار، مقاوم در برابر ضربه"
    ],
    specs: {
      battery: "مکالمه: 14 ساعت، انتظار: 310 ساعت",
      dimensions: "154x52x30 میلیمتر",
      type: "بیسیم",
      dect: "بله",
      country: "آلمان"
    },
    description: "تلفن گیگاست مدل E630A GO یکی از محصولات برجسته این برند است که به خصوص برای محیطهای کاری و خانههای پررفتوآمد طراحی شده است. این تلفن بیسیم تحت شبکه دارای بدنهای مستحکم و مقاوم در برابر ضربه، گرد و غبار و پاشیده شدن آب است."
  },
  {
    id: "yealink-t31p",
    name: "Yealink SIP-T31P",
    brand: "Yealink",
    category: "تلفن تحت شبکه",
    price: "تماس بگیرید",
    image: "/imageLanding/Yealink SIP-T31P.png",
    features: [
      "کیفیت صدای HD",
      "دارای POE",
      "کنفرانس 5 طرفه",
      "2 عدد پورت اترنت",
      "پشتیبانی از کدک Opus",
      "فراهم کردن 2 عدد اکانت VoIP"
    ],
    specs: {
      dimensions: "50×162×189 میلیمتر",
      type: "رومیزی",
      power: "PoE / Adaptor",
      sip: "بله"
    },
    description: "تلفن یالینک SIP-T31P یکی از محصولات مقرون به صرفه و در عین حال باکیفیت یالینک محسوب میشود. این تلفن تحت شبکه با پشتیبانی از دو حساب VoIP برای مجموعههای کاری کوچک و متوسط، یک انتخاب فوقالعاده است."
  },
  {
    id: "panasonic-nt551",
    name: "Panasonic KX-NT551",
    brand: "Panasonic",
    category: "سانترال تحت شبکه",
    price: "تماس بگیرید",
    image: "/imageLanding/Panasonic KX-NT551.png",
    features: [
      "دارای نمایشگر نورانی تک سطری",
      "دارای 8 کلید قابل برنامه ریزی",
      "دارای بلندگوی شفاف Full Duplex",
      "پشتیبانی از POE"
    ],
    specs: {
      dimensions: "170×160×205 میلیمتر",
      sip: "خیر",
      sipAccounts: "0",
      conference: "بله"
    },
    description: "KX-NT551 یک تلفن تحت شبکه است که توسط شرکت پاناسونیک، تولید و به بازار عرضه میشود. این محصول با پشتیبانی از تکنولوژی VoIP میتواند صدا را در بستر شبکه انتقال دهد."
  },
  {
    id: "panasonic-nt511",
    name: "Panasonic KX-NT511",
    brand: "Panasonic",
    category: "سانترال تحت شبکه",
    price: "تماس بگیرید",
    image: "/imageLanding/Panasonic KX-NT511.png",
    features: [
      "دارای حالت Eco",
      "دارای 3 کلید قابل برنامه ریزی",
      "دارای بلندگوی شفاف Full Duplex",
      "دارای آداپتور AC",
      "دارای صدای HD"
    ],
    specs: {
      dimensions: "71×59×175 میلیمتر",
      sip: "خیر",
      sipAccounts: "0",
      conference: "بله"
    },
    description: "تلفن تحت شبکه KX-NT511P یکی از محصولات میان رده شرکت پاناسونیک محسوب میشود. این تلفن، برای استفاده در شرکتهای کوچک و متوسط با حجم پایین تماسها، طراحی و روانه بازار شده است."
  },
  {
    id: "panasonic-nt543",
    name: "Panasonic KX-NT543",
    brand: "Panasonic",
    category: "سانترال تحت شبکه",
    price: "تماس بگیرید",
    image: "/imageLanding/Panasonic KX-NT543.png",
    features: [
      "دارای نمایشگر نورانی 3 سطری",
      "دارای 24 کلید قابل برنامه ریزی",
      "دارای بلندگوی شفاف Full Duplex",
      "قابلیت پشتیبانی از هدستهای بیسیم EHS",
      "پشتیبانی از POE"
    ],
    specs: {
      dimensions: "267x170x180 میلیمتر",
      sip: "خیر",
      sipAccounts: "0",
      conference: "بله"
    },
    description: "KX-NT543 یکی از تلفنهای تحت شبکه پاناسونیک محسوب میشود که در سانترالهای پرظرفیت پاناسونیک از قبیل NS و TDE مورد استفاده قرار میگیرد."
  },
  {
    id: "panasonic-hdv100",
    name: "Panasonic KX-HDV100",
    brand: "Panasonic",
    category: "تلفن SIP",
    price: "تماس بگیرید",
    image: "/imageLanding/Panasonic KX-HDV100.png",
    features: [
      "دارای یک اکانت SIP",
      "دارای نمایشگر 2.3 اینچی",
      "بهره گیری از تکنولوژی صدای HD",
      "دارای یک پورت شبکه با سرعت 10/100",
      "دارای 2 کلید قابل برنامه ریزی",
      "عدم پشتیبانی از POE"
    ],
    specs: {
      dimensions: "148×165×167 میلیمتر",
      sip: "بله",
      sipAccounts: "1",
      conference: "بله"
    },
    description: "تلفن تحت شبکه KX-HDV100 سادهترین مدل از سری HDV تلفنهای پاناسونیک محسوب میشود. این محصول از یک اکانت SIP برخوردار است و با توجه به قیمت مناسب و قابلیتهایی که دارد، یک انتخاب عالی برای مجموعههای کاری کوچک و متوسط، به شمار میرود."
  },
  {
    id: "panasonic-hdv130",
    name: "Panasonic KX-HDV130",
    brand: "Panasonic",
    category: "تلفن SIP",
    price: "تماس بگیرید",
    image: "/imageLanding/Panasonic KX-HDV130.png",
    features: [
      "دارای دو اکانت SIP",
      "دارای نمایشگر 2.3 اینچی نورانی",
      "بهره گیری از تکنولوژی صدای HD",
      "دارای دو پورت شبکه با سرعت 10/100",
      "دارای 2 کلید قابل برنامه ریزی",
      "پشتیبانی از POE"
    ],
    specs: {
      dimensions: "167x165x148 میلیمتر",
      sip: "بله",
      sipAccounts: "2",
      conference: "بله"
    },
    description: "تلفن تحت شبکه KX-HDV130 یکی از مدلهای باکیفیت پاناسونیک محسوب میشود. این تلفن به صورت کامل از پروتکل SIP پشتیبانی میکند."
  },
  {
    id: "panasonic-nt546",
    name: "Panasonic KX-NT546",
    brand: "Panasonic",
    category: "سانترال تحت شبکه",
    price: "تماس بگیرید",
    image: "/imageLanding/Panasonic KX-NT546.png",
    features: [
      "دارای نمایشگر نورانی 6 سطری",
      "دارای 24 کلید قابل برنامه ریزی",
      "دارای بلندگوی شفاف Full Duplex",
      "قابلیت پشتیبانی از هدستهای بیسیم EHS",
      "پشتیبانی از POE"
    ],
    specs: {
      dimensions: "267x170x180 میلیمتر",
      sip: "خیر",
      sipAccounts: "0",
      conference: "بله"
    },
    description: "تلفن تحت شبکه KX-NT546 یکی از بهترین و باکیفیتترین محصولات شرکت پاناسونیک محسوب میشود. این تلفن برای استفاده در مراکزی که با سانترالهای تحت شبکه Panasonic راهاندازه شدهاند، طراحی و روانه باز شده است."
  },
  {
    id: "panasonic-nt553",
    name: "Panasonic KX-NT553",
    brand: "Panasonic",
    category: "سانترال تحت شبکه",
    price: "تماس بگیرید",
    image: "/imageLanding/Panasonic KX-NT553.png",
    features: [
      "دارای نمایشگر نورانی 3 سطری",
      "دارای نمایشگر نورانی برای نمایش کارکرد دکمه های کناری تلفن",
      "دارای بلندگوی شفاف Full Duplex",
      "پشتیبانی از POE",
      "برنامه ریزی کلید های کاربری تلفن در 2 حالت مختلف"
    ],
    specs: {
      dimensions: "267x170x180 میلیمتر",
      sip: "خیر",
      sipAccounts: "0",
      conference: "بله"
    },
    description: "تلفن تحت شبکه KX-NT553 یکی از مدلهای خوشساخت و حرفهای شرکت پاناسونیک محسوب میشود. این محصول برای انتقال صدا از کابل شبکه استفاده میکند."
  },
  {
    id: "panasonic-ut136",
    name: "Panasonic KX-UT136",
    brand: "Panasonic",
    category: "تلفن SIP",
    price: "تماس بگیرید",
    image: "/imageLanding/Panasonic KX-UT136.png",
    features: [
      "دارای 4 اکانت SIP",
      "دارای نمایشگر نورانی 6 سطری",
      "دارای بلندگوی شفاف Full Duplex",
      "دارای 24 کلید قابل برنامه ریزی",
      "بهره گیری از تکنولوژی صدای HD",
      "پشتیبانی از POE"
    ],
    specs: {
      dimensions: "267x170x180 میلیمتر",
      sip: "بله",
      sipAccounts: "4",
      conference: "بله"
    },
    description: "گوشی تلفن سانترال KX-UT136 ازجمله این گوشی هااست.سری تلفن های KX-UT توانسته کیفیت صدای بالایی را برای مصرف کنندگان خود به ارمغان آورد."
  },
  {
    id: "panasonic-ut113",
    name: "Panasonic KX-UT113",
    brand: "Panasonic",
    category: "تلفن SIP",
    price: "تماس بگیرید",
    image: "/imageLanding/Panasonic KX-UT113.png",
    features: [
      "دارای دو اکانت SIP",
      "دارای نمایشگر 3 سطری",
      "بهره گیری از تکنولوژی صدای HD",
      "دارای دو پورت شبکه با سرعت 10/100",
      "پشتیبانی از POE"
    ],
    specs: {
      dimensions: "205x160x170 میلیمتر",
      sip: "بله",
      sipAccounts: "1",
      conference: "بله"
    },
    description: "تلفن تحت شبکه KX-UT113 از مدلهای سیپ (SIP) پاناسونیک محسوب میشود. این محصول، علاوه بر سانترالهای تحت شبکه Panasonic مانند سری TDE و NS، با سیپ سرورهایی مانند ایزابل نیز به خوبی سازگار است."
  },
  {
    id: "grandstream-dp720",
    name: "Grandstream DP720",
    brand: "Grandstream",
    category: "بیسیم تحت شبکه",
    price: "تماس بگیرید",
    image: "/imageLanding/Grandstream DP720.png",
    features: [
      "کیفیت صدای Full HD هم در گوشی و هم اسپیکر",
      "دارای کنفرانس سه طرفه",
      "پشتیبانی از 10 عدد SIP account",
      "فناوری DECT و رمزگذاری هوشمند برای تماسها",
      "بُرد 300 متر در فضای خارجی و 50 متر در فضای داخلی"
    ],
    specs: {
      dimensions: "26×50×155 میلیمتر",
      power: "Adaptor",
      type: "بیسیم",
      sip: "بله"
    },
    description: "تلفن بیسیم تحت شبکه گرند استریم مدل DP720 یکی از سری تلفنهای بیسیم شرکت گرنداستریم است. این تلفن که جزئی از تلفنهای تحت شبکه نیز محسوب میشود، به دلیل عملکرد مناسب و امکاناتی که دارد مورد توجه شرکتهای بزرگ و کوچک قرار گرفته است."
  },
  {
    id: "panasonic-ut123",
    name: "Panasonic KX-UT123",
    brand: "Panasonic",
    category: "تلفن SIP",
    price: "تماس بگیرید",
    image: "/imageLanding/Panasonic KX-UT123.png",
    features: [
      "دارای نمایشگر نورانی 3 سطر",
      "بهره گیری از تکنولوژی صدای HD",
      "دارای دو پورت شبکه با سرعت 10/100",
      "دارای بلندگوی شفاف Full Duplex",
      "پشتیبانی از POE"
    ],
    specs: {
      dimensions: "205x160x170 میلیمتر",
      sip: "بله",
      sipAccounts: "2",
      conference: "بله"
    },
    description: "تلفن تحت شبکه KX-UT123 یکی از مدلهای سیپ پاناسونیک است. این تلفن از نظر ظاهری و امکانات، شباهت بسیار زیادی به مدل KX-UT113 دارد."
  },
  {
    id: "panasonic-nt343",
    name: "Panasonic KX-NT343",
    brand: "Panasonic",
    category: "سانترال تحت شبکه",
    price: "تماس بگیرید",
    image: "/imageLanding/Panasonic KX-NT343.png",
    features: [
      "دارای نمایشگر نورانی 3 سطری",
      "دارای 24 کلید قابل برنامه ریزی",
      "دارای بلندگوی شفاف Full Duplex",
      "قابلیت پشتیبانی از ماژول بلوتوث",
      "پشتیبانی از POE"
    ],
    specs: {
      dimensions: "240x330x310 میلیمتر",
      sip: "خیر",
      sipAccounts: "0",
      conference: "بله"
    },
    description: "تلفن سانترال پاناسونیک مدل KX-NT343 یک تلفن تحت شبکه است که سازگار با سیستم های سانترال سری TDA و TDE و NS است."
  },
  {
    id: "grandstream-wp822",
    name: "Grandstream WP822",
    brand: "Grandstream",
    category: "بیسیم تحت شبکه",
    price: "تماس بگیرید",
    image: "/imageLanding/Grandstream WP822.png",
    features: [
      "پشتیبانی از 2 اکانت SIP و 2 تماس همزمان",
      "پشتیبانی از وایفای 5 دوبانده",
      "شارژدهی در زمان مکالمه تا 8 ساعت",
      "کیفیت صدای HD با اسپیکر فولدوپلکس",
      "صفحه نمایش رنگی 2.4 اینچی",
      "قابلیت اتصال به هدست"
    ],
    specs: {
      battery: "مکالمه: 8 ساعت، انتظار: 200 ساعت",
      dimensions: "26×52×164 میلیمتر",
      type: "بیسیم",
      dect: "خیر"
    },
    description: "تلفن بیسیم تحت شبکه گرنداستریم WP822 از فناوری وایفای برای برقراری تماس استفاده میکند، یعنی با کابل به شبکه وصل نمیشود و نحوه اتصال آن از طریق امواج WiFi است."
  },
  {
    id: "grandstream-gxp1625",
    name: "Grandstream GXP1625",
    brand: "Grandstream",
    category: "تلفن تحت شبکه",
    price: "تماس بگیرید",
    image: "/imageLanding/Grandstream GXP1625.png",
    features: [
      "صفحه نمایشگر LCD گرافیکی 48*132 پیکسلی",
      "کنفرانس صوتی سه طرفه",
      "پشتیبانی هدست EHS",
      "پشتیبانی از PoE",
      "2 حساب SIP",
      "دو پورت شبکه 10/100Mbps"
    ],
    specs: {
      dimensions: "76×184×209 میلیمتر",
      type: "رومیزی",
      power: "PoE / Adaptor",
      sip: "بله"
    },
    description: "تلفن گرند استریم 1625 یک تلفن ویپ کارمندی مقرون به صرفه با کیفیت بالا و قابل اعتماد برای مشاغل کوچک با حجم مکالمه سبک تا متوسط است."
  },
  {
    id: "grandstream-gxp2160",
    name: "Grandstream GXP2160",
    brand: "Grandstream",
    category: "تلفن تحت شبکه",
    price: "تماس بگیرید",
    image: "/imageLanding/Grandstream GXP2160.png",
    features: [
      "حداکثر 6 حساب SIP و 6 خط",
      "کنفرانس صوتی حداکثر 5 طرفه",
      "24 کلید BLF قابل برنامه ریزی",
      "پشتیبانی از هدست EHS",
      "پشتیبانی از پورت شبکه گیگابایت",
      "بلوتوث داخلی یکپارچه",
      "صدای HD روی بلندگو و گوشی"
    ],
    specs: {
      dimensions: "46×206×275 میلیمتر",
      type: "رومیزی",
      power: "PoE / Adaptor",
      sip: "بله"
    },
    description: "تلفن گرنداستریم GXP2160 یک تلفن خوشساخت و حرفهای از این شرکت است که برای استفاده در سطح پیشرفته و مدیریتی، یک انتخاب هوشمندانه خواهد بود."
  },
  {
    id: "grandstream-gxp2140",
    name: "Grandstream GXP2140",
    brand: "Grandstream",
    category: "تلفن تحت شبکه",
    price: "تماس بگیرید",
    image: "/imageLanding/Grandstream GXP2140.png",
    features: [
      "نمایشگر 480x272 TFT LCD پیکسلی",
      "4 حساب SIP",
      "پشتیبانی حداکثر 4 ماژول توسعه",
      "قابلیت کنفرانس صوتی 5 طرفه",
      "پشتیبانی از بلوتوث و USB"
    ],
    specs: {
      dimensions: "46×206×228 میلیمتر",
      type: "رومیزی",
      power: "PoE / Adaptor",
      sip: "بله"
    },
    description: "تلفن تحت شبکه GXP2140 یکی از محصولات مدیریتی و حرفهای و مناسب اپراتور است. این تلفن مدل IP PHONE از 4 حساب SIP برخوردار است."
  }
];
