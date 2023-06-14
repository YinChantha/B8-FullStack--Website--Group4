module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        // laptop size
        "lg": "1440px",
        // phone size
        "sm": "375px",
      },
      borderWidth: {
        0.5: "0.5px",
        1: "1px",
        1.5: "1.5px",
      },
      padding: {
        4.5: "18px",
        100: "117.5px",
        17: "70px",
      },
      gap: {
        41: "167px",
        81: "325px",
      },
      width: {
        76: "1216px",
        41.2: "659px",
        68: "272px",
        97: "390px",
        98: "472px",
        
        43: "768px",
      },
      maxWidth: {
        42: "720px",
      },
      spacing: {
        38: "152px",
      },
      borderRadius: {
        "4xl": "28px",
      },
      colors: {
        "primary-25": "#FFF8F8",
      },
    },
    fontfamily: {
      inter: ["Inter", "sans-serif"],
    },
  },

  plugins: [],
};
