module.exports = {
  theme: "antdocs2",
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
    repo: "https://github.com/go-developer",
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
    [ // 回到顶部插件
      'vuepress-plugin-gotop-plus', {
        // 是否在移动设备上显示(default: true)
        mobileShow: false,
        // 回到页首元素显示触发的高度阈值(default: 50)
        threshold: 50
      }
    ],
    ['vuepress-plugin-code-copy', true], // 代码复制插件
    [ // 第三方搜索插件
      "thirdparty-search",
      {
        thirdparty: [
          // 可选，默认 []
          {
            title: "在谷歌中搜索",
            frontUrl: "https://www.google.com/search?q="
          },
          {
            title: "在百度中搜索", // 在搜索结果显示的文字
            frontUrl: "https://www.baidu.com/s?wd=", // 搜索链接的前面部分
            behindUrl: "" // 搜索链接的后面部分，可选，默认 ''
          },
          {
            title: "在360中搜索",
            frontUrl: "https://www.so.com/s?q="
          },
          {
            title: "在必应中搜索",
            frontUrl: "https://cn.bing.com/search?q="
          }
        ]
      }
    ],
    ['fulltext-search'], // 支持全文搜索,此插件和第三方搜索插件冲突,谁生效
  ]
};