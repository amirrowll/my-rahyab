import { MetadataRoute } from 'next'
import { voipPhones } from '@/data/voipPhones'
import { gateways } from '@/data/gateways'
import { blogPosts } from '@/data/blogPosts'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://myrahyab.ir'
  const lastModified = new Date()

  // محصولات رهیاب
  const rahyabProducts = [
    { slug: 'rahyab/RX-608', priority: 0.9 },
    { slug: 'rahyab/RX-112', priority: 0.9 },
    { slug: 'rahyab/RX-40', priority: 0.85 },
    { slug: 'rahyab/RXD-320', priority: 0.85 },
    { slug: 'rahyab/RXD-1400', priority: 0.85 },
  ]

  // تلفنهای VoIP
  const voipUrls = voipPhones.map(phone => ({
    url: `${baseUrl}/products/voip/${phone.id}`,
    lastModified: lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // گیتویها
  const gatewayUrls = gateways.map(gateway => ({
    url: `${baseUrl}/products/gateways/${gateway.id}`,
    lastModified: lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // محصولات پاناسونیک
  const panasonicProducts = [
    'kx-tda600', 'kx-tda620', 'kx-tda200', 'kx-tda100d',
    'kx-tde600', 'kx-tde200', 'kx-tde100',
    'ns500', 'ns300', 'ncp500', 'ncp1000',
    'kx-tem824', 'kx-tes824', 'kx-ta616'
  ]

  const panasonicUrls = panasonicProducts.map(product => ({
    url: `${baseUrl}/products/panasonic/${product}`,
    lastModified: lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }))

  // دستهبندی تلفنها
  const phoneCategories = ['digital', 'ip', 'sip', 'analog', 'wireless', 'conference', 'hybrid']
  const phoneCategoryUrls = phoneCategories.map(cat => ({
    url: `${baseUrl}/products/phones/${cat}`,
    lastModified: lastModified,
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }))

  const productUrls = rahyabProducts.map(product => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified: lastModified,
    changeFrequency: 'monthly' as const,
    priority: product.priority,
  }))

  // مقالات تخصصی و وبلاگ
  const blogUrls = blogPosts.map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: lastModified,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  return [
    {
      url: baseUrl,
      lastModified: lastModified,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: lastModified,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/products/rahyab`,
      lastModified: lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/products/panasonic`,
      lastModified: lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/products/voip`,
      lastModified: lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/products/gateways`,
      lastModified: lastModified,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/products/all`,
      lastModified: lastModified,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    ...productUrls,
    ...voipUrls,
    ...gatewayUrls,
    ...panasonicUrls,
    ...phoneCategoryUrls,
    {
      url: `${baseUrl}/blog`,
      lastModified: lastModified,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    ...blogUrls,
    {
      url: `${baseUrl}/contactUs`,
      lastModified: lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}