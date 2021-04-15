module.exports = {
  theme: "antdocs",
  title: "文档中心",
  description: "个人项目文档中心.",
  base: "/",
  head: [
    ["link", { rel: "icon", href: "/assets/logo.png" }]
  ],
  markdown: {
    lineNumbers: false,
  },
  themeConfig: {
    smoothScroll: true,
    nav: require("./config/nav"),
    sidebar: require("./config/sidebar"),
    lastUpdated: "上次更新时间",
    repo: "https://github.com/zpfz/vuepress-creator",
    editLinks: false,
  },
  plugins: [
    [ // 基于github issue的评论插件
      'gitalk-maker',
      {
        gitalkConfig: {
          clientID: 'a2858e44e6f579dcfe33',
          clientSecret: 'dca80a474aab4b0017bd6d5c8531777d0dd24bd1',
          repo: 'project-book',
          owner: 'go-developer',
          admin: ['go-developer'],
          // id: location.pathname, // 无法配置默认用 location.pathname
          distractionFreeMode: false, // Facebook-like distraction free mode
        },
      },
    ],
    [ // 代码样式插件
      'demo-code',
      {
        jsLibs: [
          // umd
          'https://unpkg.com/tua-storage/dist/TuaStorage.umd.js',
        ],
        cssLibs: [
          'https://unpkg.com/animate.css@3.7.0/animate.min.css',
        ],
        showText: 'show code',
        hideText: 'hide',
        styleStr: 'text-decoration: underline;',
        minHeight: 200,
        onlineBtns: {
          codepen: true,
          jsfiddle: true,
          codesandbox: true,
        },
        codesandbox: {
          deps: { 'lodash': 'latest' },
          json: '',
          query: '',
          embed: '',
        },
        demoCodeMark: 'demo-code',
        copyOptions: { align: 'top', selector: '.demo-and-code-wrapper div[class*="language-"] pre' },
      }],
    [ // 阅读时长组件
      'vuepress-plugin-reading-time',
      {
        excludes: ['/about', '/tag/.*']
      }],
    [ // 页面内锚点插件
      'vuepress-plugin-right-anchor',
      {
        showDepth: 5,
        ignore: [
          '/',
          '/api/'
          // 更多...
        ],
        expand: {
          default: true,
          trigger: 'hover'
        },
        customClass: 'palette',
        disableGlobalUI: false,
      }
    ],
    [ // 回到顶部插件
      'vuepress-plugin-gotop-plus', {
        // 是否在移动设备上显示(default: true)
        mobileShow: false,
        // 回到页首元素显示触发的高度阈值(default: 50)
        threshold: 50
      }
    ],
    [ // 为当前页面生成二维码
      'qrcode',
      {
        labelText: '生成二维码', // displayed text
        size: 'small' // QR code size
      }],
    [
      '@vuepress/active-header-links', {
        sidebarLinkSelector: '.sidebar-link',
        headerAnchorSelector: '.header-anchor'
      }],
  ]
};