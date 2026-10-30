// next.config.ts
import type { NextConfig } from "next";

const isDevelopment = process.env.NODE_ENV === 'development';

const config: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // فقط در production static export میشه
  ...(isDevelopment ? {} : { output: "export" }),
  
  images: {
    ...(isDevelopment 
      ? {
          formats: ["image/avif", "image/webp"],
          deviceSizes: [640, 750, 828, 1080, 1200, 1920],
        }
      : {
          unoptimized: true,
          formats: ["image/avif", "image/webp"],
        }
    ),
  },
  
  compress: true,
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: !isDevelopment,
  
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }

    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: 'asset/resource',
    });

    return config;
  },

  env: {
    SITE_URL: 'https://myrahyab.ir',
    SITE_NAME: 'رهیاب',
    CONTACT_PHONE: '021-88440345',
  },
};

export default config;