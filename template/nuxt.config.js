const path = require('path')
//const vuxLoader = require('vux-loader')

module.exports = {

  projectName:"",


  wrpSgHostUrl:"http://sgi.wyqcd.net:7777/api/invoke?SID=",

  /*
  ** Headers of the page
  */
  head: {
    // title: 'teldmobile',
    titleTemplate: '%s',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' },
      { 'http-equiv': 'x-dns-prefetch-control', content: 'on' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],

    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/teld.ico' },
      { rel: 'dns-prefetch', href: '//sgi.wyqcd.cn' },
      { rel: 'alternate', media: 'only screen and (max-width: 640px)', href: '//web.wyqcd.cn' }
  
    ],
    script:[
      { src: '/app.setting.js', defer: false },
      { src:'//res.wx.qq.com/open/js/jweixin-1.4.0.js',defer: false}
        // 可加装的容器url
        // TeldApp_JSSDK_Url : "//cv.teld.cn/static/original/js/jteld.js?v=2.0",
        // WX_JSSDK_Url : "//res.wx.qq.com/open/js/jweixin-1.4.0.js",
        // Alipay_JSSDK_Url : "//gw.alipayobjects.com/as/g/h5-lib/alipayjsapi/3.1.1/alipayjsapi.min.js",
        // GaoDeMapUrl:"https://webapi.amap.com/maps?v=1.4.15&key=db9741b828f4ac811937b1793ce4b950&plugin=AMap.ToolBar&callback=MapInit",
        // UseGaoDeMapUIURL:"https://webapi.amap.com/ui/1.0/main.js?v=1.0.11",
    ]
  },
  css: [
    '~/assets/custom-pc.scss',
    '~/assets/custom-mobile.less'
  ],
  // postcss:{ TODO://
  //   plugins: {
  //     'postcss-pxtorem': {
  //       rootValue: 75,
  //       exclude: "cd"///node_modules\/(?!teld-component-proxy)/i
  //     }
  //   },
  // },
  plugins: [
    //需要pc端组件时引入，不需要的场合，为了性能，请注释
    {
      src: '@@/plugins/components/pc',
      ssr: true
    },
    //需要移动端组件时引入，不需要的场合，为了性能，请注释
    {
      src: '@@/plugins/components/mobile',
      ssr: true
    },
    //需要图表组件时引入，不需要的场合，为了性能，请注释
    {
      src: '@@/node_modules/@teld/component-proxy/export/chart',
      ssr: false
    },
    {
      src: '~/plugins/teld-plugins',
      ssr: false
    }
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    analyze:false,

    filenames: {
      vendor: '[name].js',
      app: '[name].js',
      manifest:'manifest.js'
    },

    uglify:true,

    /*
    ** Run ESLint on save
    */
    // extend (config, { isDev, isClient }) {
    //   if (isDev && isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // }

  },

  router: {
    extendRoutes (routes, resolve) {

      routes.push({name: 'pc测试', path: '/travel/p000001', component: resolve(__dirname, 'pages/travel/test/pc/index.vue')})
      routes.push({name: 'mobile测试', path: '/travel/m000001', component: resolve(__dirname, 'pages/travel/test/mobile/index.vue')})
    }
  },

}
