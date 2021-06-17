module.exports = {
  mode: 'jit',
  purge: ["./src/**/*.{js,jsx,ts,tsx,md}", "./content/**/*.{js,jsx,ts,tsx,md}"],
  darkMode: "media",
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            // color: theme("colors.gray.700"),
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
        dark: {
          css: {
            color: theme("colors.gray.300"),
            a: {
              color: theme("colors.indigo.300"),
            },
            h1: {
              color: theme("colors.gray.200"),
            },
            h2: {
              color: theme("colors.gray.200"),
            },
            h3: {
              color: theme("colors.gray.200"),
            },
            h4: {
              color: theme("colors.gray.200"),
            },
            h5: {
              color: theme("colors.gray.200"),
            },
            h6: {
              color: theme("colors.gray.200"),
            },
            th: {
              color: theme("colors.gray.200"),
            },
            code: {
              color: theme("colors.gray.100"),
            },
            strong: {
              color: theme("colors.gray.100"),
            },
            blockquote: {
              color: theme("colors.gray.100")
            },
          }
        }
      }),
    },
  },
  variants: {
    typography: ["dark"],
  },
  plugins: [
    require("@tailwindcss/typography"),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
};
