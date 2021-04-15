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
    [
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
  ],
};