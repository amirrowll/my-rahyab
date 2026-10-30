import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://myrahyab.ir'

  return {
    rules: [
      {
        userAgent: '*', // برای همه ربات‌ها
        allow: '/', // اجازه کرال کردن همه صفحات
        disallow: [
          '/api/', // مسیرهای API
          '/admin/', // پنل ادمین
          '/private/', // فایل‌های خصوصی
        ],
      },
      {
        userAgent: 'Googlebot', // قوانین ویژه گوگل
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl, // دامنه اصلی
  }
}