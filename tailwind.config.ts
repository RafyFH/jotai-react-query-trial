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
        background: "var(--background)",
        foreground: "var(--foreground)",
        "palletedark1": "#021526",
        "palletedark2": "#03346E",
        "palletedark3": "#6EACDA",
        "palletedark4": "#E2E2B6",
        "pallete1": "#FDFFE2",
        "pallete2": "#83B4FF",
        "pallete3": "#5A72A0",
        "pallete4": "#1A2130",
      },
    },
  },
  plugins: [],
};
export default config;
