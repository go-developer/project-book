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
};