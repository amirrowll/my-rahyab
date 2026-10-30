/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://myrahyab.ir',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/api/*', '/admin/*'],
  
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
    ],
    additionalSitemaps: [
      'https://myrahyab.ir/sitemap.xml',
    ],
  },

  transform: async (config, path) => {
    // اولویت بندی صفحات
    let priority = 0.7;
    let changefreq = 'weekly';

    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    } else if (path.startsWith('/blog')) {
      priority = 0.9;
      changefreq = 'daily';
    } else if (path.includes('/products/rahyab') || path.includes('/products/panasonic')) {
      priority = 0.9;
      changefreq = 'weekly';
    } else if (path.includes('/products/voip') || path.includes('/products/gateways') || path.includes('/products/phones')) {
      priority = 0.85;
      changefreq = 'weekly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
};
