import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0F5FAE",
        secondary: "#4D9BE6",
        light: "#F4F8FC",
        dark: "#183B56",
      },
      boxShadow: {
        soft: "0 16px 45px rgba(15, 95, 174, 0.10)",
        card: "0 12px 32px rgba(24, 59, 86, 0.08)",
      },
      backgroundImage: {
        "hero-medical":
          "linear-gradient(90deg, rgba(5, 44, 82, .94) 0%, rgba(15, 95, 174, .82) 46%, rgba(15, 95, 174, .28) 100%), url('https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=2200&q=88')",
        "mri-medical":
          "linear-gradient(90deg, rgba(5, 44, 82, .94), rgba(15, 95, 174, .58)), url('https://images.unsplash.com/photo-1516841273335-e39b37888115?auto=format&fit=crop&w=2200&q=88')",
        "ctc-medical":
          "linear-gradient(90deg, rgba(5, 44, 82, .94), rgba(15, 95, 174, .58)), url('https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=2200&q=88')",
      },
    },
  },
  plugins: [],
};

export default config;
