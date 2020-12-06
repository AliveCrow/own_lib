module.exports = {
  title: '不甘当下',
  description: "Vue,Vuepress",
  theme: 'antdocs',
  base: '/lib/',
  //添加到header里面的内容
  head: [
    ['link', { rel: 'icon', href: '/img/avatar.png' }],
    ['link', { rel: 'stylesheet', href: '/css/index.css' }],

  ],
  host: 'localhost',
  port: '8000',
  markdown: {
    lineNumbers: true
  },
  //主题配置
  themeConfig: {
    logo: '/img/avatar.png',
    smoothScroll: true, //平滑滚动
    //导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '前端学习笔记', link: '/guide/' },
      {
        text: '代码片段', ariaLabel: 'Snippets',
        items: [
          { text: 'Chinese', link: '/language/chinese/' },
          { text: 'Japanese', link: '/language/japanese/' }
        ]
      },
      { text: '面试相关', link: 'https://goo11gle.com' },
      { text: '个人博客', link: 'https://google.com' },
    ],
    sidebarDepth: 1, // 为2 则将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    sidebar: [
      {
        title: 'Group 1',   // 必要的
        path: '/foo/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/'
        ]
      },
      {
        title: 'Group 2',
        children: [ /* ... */],
        initialOpenGroupIndex: -1 // 可选的, 默认值是 0
      }
    ]
  },
  plugins: [
    ['homebadge', {
      selector: '.hero',
      repoLink: 'https://github.com/zpfz/vuepress-theme-antdocs',
      badgeLink: 'https://img.shields.io/github/stars/zpfz/vuepress-theme-antdocs?style=social',
      badgeGroup: [
        'https://img.shields.io/badge/build-passing-brightgreen?style=flat-square',
        'https://img.shields.io/npm/dt/vuepress-theme-antdocs?style=flat-square&color=red',
        'https://img.shields.io/github/license/zpfz/vuepress-theme-antdocs?style=flat-square&color=blue',
        'https://img.shields.io/npm/v/vuepress-theme-antdocs?style=flat-square'
      ]
    }],
    // 页面滚动时自动激活侧边栏链接的插件
    ['@vuepress/active-header-links']
  ],
}