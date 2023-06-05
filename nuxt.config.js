export default {
  server: {
    host: "0",
    // host: "localhost",
  },
  ssr: true,

  components: true,

  head: {
    title: "Alus",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover",
      },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
      { name: "robots", content: "index, follow" },
      {
        hid: "description",
        name: "description",
        content: "Alus",
      },
      {
        name: "keywords",
        content: "Alus",
      },
      {
        hid: "og:image",
        name: "og:image",
        content: "https://bot.alus.us/SEO_Inst_+_Fb.png",
      },
      {
        hid: "og:description",
        name: "og:description",
        content: "Alus",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css",
      },
    ],
  },

  css: ["~/assets/scss/index.scss"],

  styleResources: {
    scss: ["~assets/scss/_responsive.scss", "~assets/scss/_variables.scss"],
  },

  plugins: [
    {
      src: "~/plugins/plugins.js",
    },
  ],

  modules: ["@nuxtjs/axios"],

  buildModules: ["@nuxtjs/style-resources"],

  build: {
    scss: {
      implementation: require("sass"),
    },
    extend(config, ctx) {
      config.module.rules.push({
        enforce: "pre",
        test: /\.txt$/,
        loader: "raw-loader",
        exclude: /(node_modules)/,
      });
    },
  },

  // pageTransition: "page-transition",
  // router: {
  //   scrollBehavior() {
  //     return { top: 0 };
  //   },
  // },

  axios: {
    baseURL: "http://bot.midera.fun:8000",
  },
};
