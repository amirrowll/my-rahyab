import PanasonicProductDetail from "@/products/PanasonicPage/PanasonicProductDetail";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "تلفن سانترال پاناسونیک KX-TA616 | 6 خط شهری 16 داخلی",
    description: "سانترال پاناسونیک KX-TA616 با 6 خط شهری و 16 داخلی، قابل ارتقاء به 8 خط شهری و 24 داخلی. مناسب شرکتهای کوچک با امکانات کامل",
  };
}

export default function KXTA616Page() {
  const productData = {
    id: "kx-ta616",
    name: "KX-TA616",
    model: "KX-TA616",
    title: "تلفن سانترال پاناسونیک مدل KX-TA616",
    fullName: "تلفن سانترال پاناسونیک مدل KX-TA616",
    image: "/imageLanding/ta616.png",
    category: "کم ظرفیت",
    capacity: "6 خط شهری / 16 داخلی",
    shortDesc: "سانترال کم ظرفیت با قابلیت ارتقاء برای شرکتهای کوچک",
    fullDesc: `تلفن سانترال پاناسونیک KX-TA616 از 6 خط شهری پشتیبانی می کند و امکان تعریف 16 کاربر برای آن وجود دارد. از امکانات به روز شده این دستگاه می توان به امکان تعریف شدن دستگاه فکس به عنوان یک داخلی اشاره کرد.`,
    
    specs: {
      slots: "2 اسلات",
      maxLines: "8 خط",
      maxExtensions: "24 داخلی",
      expansion: "کارت 2x8",
    },

    features: [
      "6 خط شهری و 16 خط داخلی",
      "قابل ارتقاء به 8 خط شهری و 24 داخلی با کارت 2x8",
      "پشتیبانی از گوشی های آنالوگ پاناسونیک",
      "امکان تعریف فکس به عنوان داخلی",
      "قابلیت ترانسفر تماس با گوشی آنالوگ",
      "دسترسی به 8 خط با گوشی های آنالوگ",
      "مناسب سازمانها و ادارات کوچک",
      "قابلیت ارتقاء با کارت های جانبی",
    ],

    suitable: [
      "شرکتهای کوچک",
      "دفاتر اداری",
      "کسب و کارهای خانگی",
    ],
  };

  return <PanasonicProductDetail product={productData as any} />;
}
