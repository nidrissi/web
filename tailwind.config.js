module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            hr: {
              "margin-top": "12px",
              "margin-bottom": "12px"
            },
            a: {
              "text-decoration": "none",
              "&:hover": { "text-decoration": "underline" },
            },
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require('@tailwindcss/aspect-ratio'),
  ],
};
