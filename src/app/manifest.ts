// src/app/manifest.ts
import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'رهیاب - مرکز تلفن و سانترال',
    short_name: 'رهیاب',
    description: 'شرکت رهیاب - تولید و فروش مرکز تلفن، سانترال و تجهیزات ارتباطی',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#253359', 
    orientation: 'portrait',
    scope: '/',
    lang: 'fa',
    dir: 'rtl',
    icons: [
      {
        src: '/favicon-48x48.png',
        sizes: '48x48',
        type: 'image/png',
      },
      {
        src: '/favicon-96x96.png',
        sizes: '96x96',
        type: 'image/png',
      },
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/logo.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    shortcuts: [
      {
        name: 'محصولات',
        short_name: 'محصولات',
        description: 'مشاهده محصولات رهیاب',
        url: '/products',
        icons: [{ src: '/android-chrome-192x192.png', sizes: '192x192' }],
      },
      {
        name: 'تماس با ما',
        short_name: 'تماس',
        description: 'ارتباط با رهیاب',
        url: '/contactUs',
        icons: [{ src: '/android-chrome-192x192.png', sizes: '192x192' }],
      },
    ],
  }
}