import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand Color Palette
        'nyanza': '#d8f3dc',
        'celadon': '#b7e4c7',
        'mint': '#74c69d',
        'sea-green': '#40916c',
        'dartmouth-green': '#2d6a4f',
        'dark-green': '#081c15',
        
        // Legacy primary colors (mapped to brand palette)
        primary: {
          50: '#d8f3dc',  // nyanza
          100: '#d8f3dc',
          200: '#ceedd3',
          300: '#b7e4c7', // celadon
          400: '#95d5b2',
          500: '#74c69d', // mint
          600: '#52b788',
          700: '#40916c', // sea-green
          800: '#2d6a4f', // dartmouth-green
          900: '#1b4332',
        },
        natural: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#081c15', // dark-green
        },
      },
    },
  },
  plugins: [],
};
export default config;

