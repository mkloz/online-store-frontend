/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        xs: "375px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1920px",
      },
      fontFamily: {
        lato: "var(--font-lato)",
        bruno: "var(--font-bruno)",
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        bg: {
          primary: "var(--color-bg-primary)",
          secondary: "var(--color-bg-secondary)",
        },
        text: {
          primary: "var(--color-text-primary)",
          secondary: "var(--color-text-secondary)",
          light: "var(--color-text-light)",
          disabled: "var(--color-text-disabled)",
        },
        btn: {
          primary: "var(--color-btn-primary)",
          secondary: "var(--color-btn-secondary)",
        },
        red: "var(--color-red)",
        yellow: "var(--color-yellow)",
        green: "var(--color-green)",
        gray: "var(--color-gray)",
        purple: {
          200: "var(--color-purple-200)",
          700: "var(--color-purple-700)",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        jump: {
          "0%, 30%, 75%": { transform: "translateY(0px)" },
          "50%": {
            transform: "translateY(-200%)",
            "animation-timing-function": "ease-in",
          },
        },
        morph: {
          "0%, 10%, 40%, 70%, 85%, 100%": { transform: "scaleY(1)" },
          "20%, 25%": {
            transform: "scaleY(0.6) scaleX(1.3)",
            "animation-timing-function": "ease-in-out",
          },
          "30%": {
            transform: "scaleY(1.15) scaleX(0.9)",
            "animation-timing-function": "ease-in-out",
          },
          "75%": { transform: "scaleY(0.8) scaleX(1.2)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        jump: "jump 1.75s ease-in-out infinite",
        morph: "morph 1.75s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
