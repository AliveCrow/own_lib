module.exports = {
  title: 'AliveRow',
  theme: 'antdocs',
  base: '/own_lib/',
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
      { text: '前端学习笔记', link: '/notes/' },
      { text: '每日整理', link: '/daysort/' },
      { text: '面试相关', link: '/interview/' },
      {
        text: 'Snippets', ariaLabel: 'Snippets',
        items: [
          { text: 'HTML', link: '/snippets/HTML/' },
          { text: 'CSS', link: '/snippets/CSS/' },
          { text: 'JavaScript', link: '/snippets/JavaScript/' },
          { text: 'Vue', link: '/snippets/Vue/' },
          { text: 'Node', link: '/snippets/Node/' },
          { text: 'WeChatApp', link: '/snippets/WeChatApp/' },
        ]
      },
      {
        text: '个人项目',
        items: [
          { text: 'AliveMusic', link: 'http://alivemusic.dreamsakula.top/' },
          { text: 'AliveNote', link: 'http://alivenote.dreamsakula.top/' },
          { text: 'GritUI', link: 'http://aliveui.dreamsakula.top/#/' },
        ]
      },
      {
        text: '其他',
        items: [
          { text: 'GitHub', link: 'https://github.com/AliveCrow' },
          { text: '博客', link: 'https://dreamsakula.top/' },
          { text: 'TODO', link: '/todo/' }
        ]
      },
    ],
    sidebarDepth: 3, // 为2 则将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    sidebar: {
      // 面试
      '/notes/': [
        '/notes/',
        {
          title: 'HTML',
          path: '/notes/HTML/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          // collapsable: false, // 可选的, 默认值是 true,
          // sidebarDepth: 3,    // 可选的, 默认值是 1
        },
        {
          title: 'CSS',
          path: '/notes/CSS/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在

        },
        {
          title: 'JavaScript',
          path: '/notes/JavaScript/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在

        },
        {
          title: 'Vue',
          path: '/notes/Vue/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在

        },
        {
          title: 'Webpack',
          path: '/notes/Webpack/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在

        },
        {
          title: 'Node',
          path: '/notes/Node/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        },
      ],
      '/daysort/': [
        '/daysort/'
      ],
      '/interview/': [
        '/interview/',
      ],
      '/snippets/HTML/': [
        '/snippets/HTML/'
      ],
      '/snippets/CSS/': [
        '/snippets/CSS/'
      ],
      '/snippets/JavaScript/': [
        '/snippets/JavaScript/'
      ],
      '/snippets/Vue/': [
        '/snippets/Vue/'
      ],
      '/snippets/Node/': [
        '/snippets/Node/'
      ],
      '/snippets/WeChatApp/': [
        '/snippets/WeChatApp/'
      ],
    }
  },
  plugins: [
    // 页面滚动时自动激活侧边栏链接的插件
    ['@vuepress/active-header-links'],
    ['@vuepress/back-to-top'],
  ],
}