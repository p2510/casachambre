// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   ssr:true,
   app: {
    head: {
      charset: "utf-16",
      viewport: "width=500, initial-scale=1",
      title: "CasaChambre ",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "Casa chambre est un endroit qui vous permet de trouver des chambres rapidement pour la communanuté subsahérienne au Maroc sur la ville de CasaBlanca rapidement ." },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [{ rel: "icon", type: "image/x-png", href: "/favicon.png" }],
    },
  },
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: "123",
    // Keys within public are also exposed client-side
    public: {
      apiBase: "https://6v0wcbgl.directus.app/items/",
    },
  },
  routeRules: {
    "/": { ssr: true },
    "/dashboard": { ssr: true},
    "/faq": { ssr: true },
    "/tarif": { ssr: true },
  },
  modules: [
    '@nuxtjs/tailwindcss',
  
  ],
})
