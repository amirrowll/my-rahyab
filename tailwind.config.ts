import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/products/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  // ⭐ حذف کلاس‌های استفاده نشده در Production
  safelist: [
    'animate-pulse',
    'group-hover:scale-110',
    'hover:shadow-xl',
  ],

  theme: {
    screens: {
      mobile: "380px",
      mobileNum: "500px",
      headerMobile: "560px",
      sm: "640px",
      md: "768px",
      tablet: "850px",
      lg: "1024px",
      titleNav: "1160px",
      xl: "1280px",
      containerPage: "1440px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#253359", // ⭐ رنگ اصلی برند
      },
      fontFamily: {
        xblack: ["x-black", "sans-serif"],
        xbold: ["x-bold", "sans-serif"],
        xdemibold: ["x-demibold", "sans-serif"],
        xextrabold: ["x-extrabold", "sans-serif"],
        xlightbold: ["x-lightbold", "sans-serif"],
        xlight: ["x-light", "sans-serif"],
        xmedium: ["x-medium", "sans-serif"],
        xregular: ["x-regular", "sans-serif"],
        xthin: ["x-thin", "sans-serif"],
        xultralight: ["x-ultralight", "sans-serif"],
      },
      // ⭐ انیمیشن‌های سفارشی
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require("daisyui"),
  ],
  daisyui: {
    themes: ["light"],
    // ⭐ فقط light theme رو نگه دار
    darkTheme: false,
    logs: false,
  },
} satisfies Config;