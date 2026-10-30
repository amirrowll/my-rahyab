import PanasonicProductDetail from "@/products/PanasonicPage/PanasonicProductDetail";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "تلفن سانترال پاناسونیک KX-TEM824 | 6 خط شهری 16 داخلی",
    description: "سانترال پاناسونیک KX-TEM824 با 6 خط شهری و 16 داخلی، قابل ارتقاء به 8 خط شهری و 24 داخلی. دارای اپراتور گویا 3 مرحله ای و کالر آیدی",
  };
}

export default function KXTEM824Page() {
  const productData = {
    id: "kx-tem824",
    name: "KX-TEM824",
    model: "KX-TEM824",
    title: "تلفن سانترال پاناسونیک مدل KX-TEM824",
    fullName: "تلفن سانترال پاناسونیک مدل KX-TEM824",
    image: "/imageLanding/tem824.png",
    category: "کم ظرفیت",
    capacity: "6 خط شهری / 16 داخلی",
    shortDesc: "سانترال کم ظرفیت با اپراتور گویا و کالر آیدی",
    fullDesc: `دستگاه سانترال پاناسونیک مدل KX-TEM824 6 خط شهری و 16 خط داخلی را فراهم می کند که از این جهت مناسب شرکتهای کوچک با تعداد کارکنان کم است. البته لازم به ذکر است این دستگاه قابلیت ارتقای ظرفیت تا 8 خط شهری و 24 خط داخلی را دارد.`,

    specs: {
      slots: "3 اسلات",
      maxLines: "8 خط",
      maxExtensions: "24 داخلی",
      expansion: "قابل ارتقاء",
    },

    features: [
      "6 خط شهری و 16 خط داخلی",
      "قابل ارتقاء به 8 خط شهری و 24 داخلی",
      "واحد پذیرش خودکار 3 مرحله ای با راهنمای صوتی",
      "قابلیت استفاده از سیستم اپراتور گویا",
      "سیستم نمایشگر کالرآیدی",
      "قابلیت نصب دستگاه صندوق صوتی",
      "استفاده از تلفن های هایبرید و آنالوگ",
      "سیستم پیغام گیر پیش ساخته",
      "دسترسی مستقیم به سیستم داخلی (DISA)",
      "پیام گیر (BV)",
      "نمایشگر مشخصات تماس گیرنده",
      "امکان نصب نرم افزار کنترل تماس",
      "مسیر دهی پیامهای کوتاه SMS",
      "توزیع یکنواخت تماس (UCD)",
      "آیفون، درب باز کن و زنگ درب",
      "مدیریت عالی تماس های ورودی",
    ],

    suitable: [
      "شرکتهای کوچک",
      "دفاتر اداری",
      "مجموعه های متوسط",
    ],
  };

  return <PanasonicProductDetail product={productData as any} />;
}
