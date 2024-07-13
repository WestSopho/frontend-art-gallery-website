import { Linden_Hill } from "next/font/google";
import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "D5966C": "#D5966C",
      "151515": "#151515",
      "444444": "#444444", 
      "FFFFFF": "#FFFFFF",
    },
    extend: {
      fontFamily: {
        "big-shoulders": ['var(--font-big-shoulders)', 'sans'],
        "outfit": ['var(--font-outfit)', 'sans'],
      }
    }
  },
  plugins: [
    plugin(function ({ addUtilities }){
      addUtilities({
        '.heading-xl': {
          fontSize: '96px', 
          lineHeight: '88px',
          fontFamily: 'var(--font-big-shoulders)', 
          fontWeight: '900'
        },
        '.heading-l': {
          fontSize: '70px', 
          lineHeight: '70px',
          fontFamily: 'var(--font-big-shoulders)',
          fontWeight: '900'
        },
        '.heading-m': {
          fontSize: '60px',
          lineHeight: '50px',
          fontFamily: 'var(--font-big-shoulders)',
          fontWeight: '900'
        }, 
        '.heading-s': {
          fontSize: '36px', 
          lineHeight: '36px',
          fontFamily: 'var(--font-big-shoulders)',
          fontWeight: '900'
        }, 
        '.body-m': {
          fontSize: '22px', 
          lineHeight: '32px', 
          fontFamily: 'var(--font-outfit)',
          fontWeight: '300'
        }, 
        '.body-s': {
          fontSize: '18px', 
          lineHeight: '28px', 
          fontFamily: 'var(--font-outfit)',
          fontWeight: '300'
        }
      })
    })
  ],
};
export default config;
