export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'intern-x',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    
        { rel: 'stylesheet', href: '/assets/css/bootstrap.min.css' },
        { rel: 'stylesheet', href: '/assets/css/style.css' },
    
        { rel: 'stylesheet', href: '/assets/css/owl.carousel.min.css' },
        { rel: 'stylesheet', href: '/assets/css/flaticon.css' },
    
        { rel: 'stylesheet', href: '/assets/css/price_rangs.css' },
        { rel: 'stylesheet', href: '/assets/css/slicknav.css' },
    
        { rel: 'stylesheet', href: '/assets/css/animate.min.css' },
        { rel: 'stylesheet', href: '/assets/css/magnific-popup.css' },
        { rel: 'stylesheet', href: '/assets/css/fontawesome-all.min.css' },
        { rel: 'stylesheet', href: '/assets/css/themify-icons.css' },
    
        { rel: 'stylesheet', href: '/assets/css/slick.css' },
        { rel: 'stylesheet', href: '/assets/css/nice-select.css' },
    
    

    ],
    script:[
      {src:"/assets/js/main.js"}
    ]
  },
 loading:{ color:"#182550", height:'4px', duration:5000},
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/pwa',
  ],
  pwa: {
    manifest: {
      name: 'Intern-X',
      lang: 'en',
      useWebmanifestExtension: false
    }
  },  
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
