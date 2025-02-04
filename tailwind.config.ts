import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        color1: "rgb(var(--dark),.75)", //xám 
        color2: "rgb(var(--dark))", //xám 
        color3: "rgba(255,190,11)",
        color4: "rgb(var(--vz-warning-rgb))",
        color5: "#fff5da",
      },
      width:{
        '80px': "80px",
      },
      maxHeight: {
        // '20%': '20%',
        '70%': '70%',
        '80%': '80%',
      },
      minHeight: {
        '10%': '10%',
        '70%': '70%',
        // '80%': '80%',
      }
    },
  },
  plugins: [],
} satisfies Config;
