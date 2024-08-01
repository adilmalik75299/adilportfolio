/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        'dm': '320px',  // min-width: 320px
        'hm': '500px',  // min-width: 520px
        'min-dm': {'min': '320px'},  // min-width: 320px
        'max-md': {'max': '767px'},  // max-width: 767px
        'dm-md': {'min': '320px', 'max': '767px'},  // min-width: 320px and max-width: 767px
        'dm-hm':{'min':'320px','max':'500px'},
      },
    },
  },
  plugins: [],
};
