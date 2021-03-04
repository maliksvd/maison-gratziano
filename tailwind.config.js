module.exports = {
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === "production",
    content: [
      "components/**/*.vue",
      "layouts/**/*.vue",
      "pages/**/*.vue",
      "assets/**/*.css",
      "plugins/**/*.js",
      "nuxt.config.js"
    ]
  },
  theme: {
    extend: {
      colors: {
        "beige-100": "#F2D4C2",
        "beige-200": "#D9896C",
        "beige-300": "#A6523F",
        "red-alternative": "#590B0B"
      }
    }
  },
  variants: {},
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true
  }
};
