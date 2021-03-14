export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "%s - Maison Gratziano",
    htmlAttrs: {
      lang: "fr"
    },
    meta: [
      {
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: "Votre élégance brille lorsque votre imagination resplendi."
      }
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico"
      },
      {
        rel: "preconnect",
        href: "https://app.snipcart.com"
      },
      {
        rel: "preconnect",
        href: "https://cdn.snipcart.com"
      },
      {
        rel: "stylesheet",
        href: "https://cdn.snipcart.com/themes/v3.0.31/default/snipcart.css"
      }
    ],
    script: [
      {
        src: "https://cdn.snipcart.com/themes/v3.0.31/default/snipcart.js",
        body: true
      }
    ]
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/css/app.css"],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "nuxt-protected-mailto"
  ],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxt/content"],

  /*
   ** TailwindCSS
   */
  tailwindcss: {
    configPath: "tailwind.config.js",
    exposeConfig: false
  },

  /*
   ** Google Fonts
   */
  googleFonts: {
    display: "swap",
    families: {
      "DM Sans": true
    }
  },

  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {
    nestedProperties: ["category.name"]
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    html: {
      minify: {
        decodeEntities: false
      }
    }
  }
};
