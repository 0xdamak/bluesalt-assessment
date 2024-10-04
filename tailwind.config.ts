import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
        geistSans: ["var(--font-geist-sans)"],
        geistMono: ["var(--font-geist-mono)"],
        ibmPlexSans: ["var(--font-ibm-plex-sans)"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        black: "#1C1C1C",
      },
    },
  },
  plugins: [],
};
export default config;
