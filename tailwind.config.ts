import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          'home-background': "url('https://wallpaperaccess.com/full/1153643.jpg')",
      },
      colors: {
        'custom-blue': '#1877f2',
        'bg-color': '#f0f2f5',
        'green-btn': '#42b72a',
        'background': '#93B1A6',
        'box-color': '#5C8374',
        'custom-btn': '#183D3D',
        'custom-header': '#183D3D',
      },
    },
  },
  plugins: [],
};
export default config;
