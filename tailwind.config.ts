// // tailwind.config.js
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       fontFamily: {
//         righteous: ['"Righteous"', "sans-serif"],
//         lobster: ['"Lobster"', "cursive"],
//         ptmono: ['"PT Mono"', "monospace"],
//       },
//     },
//   },
//   plugins: [],
// };
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        righteous: ['"Righteous"', "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
