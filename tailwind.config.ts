import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000',  // Custom primary color for branding or highlights
        secondary: '#555555', // Custom secondary color for accents
        accent: '#1F5591', // Adjust for the blue shade used
      
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'sans-serif'], // Custom sans-serif font
        mono: ['var(--font-geist-mono)', 'monospace'],  // Custom monospace font
      },
    },
  },
  plugins: [],
};

export default config;

