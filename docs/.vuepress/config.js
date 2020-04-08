module.exports = {
  title: 'Zazzzf',
  description: '有志者，事竟成',
  locales: { '/': { lang: 'zh' } },
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
  ],
  dest: './dist',
  theme: 'reco',
  plugins: [
    [
      'vuepress-plugin-helper-live2d', {
        live2d: {
          // 是否启用(关闭请设置为false)(default: true)
          enable: true,
          // 模型名称(default: hibiki)>>>取值请参考：
          // https://github.com/JoeyBling/hexo-theme-yilia-plus/wiki/live2d%E6%A8%A1%E5%9E%8B%E5%8C%85%E5%B1%95%E7%A4%BA
          model: 'hibiki',
          display: {
            position: "right", // 显示位置：left/right(default: 'right')
            width: 135, // 模型的长度(default: 135)
            height: 300, // 模型的高度(default: 300)
            hOffset: 65, //  水平偏移(default: 65)
            vOffset: 0, //  垂直偏移(default: 0)
          },
          mobile: {
            show: false // 是否在移动设备上显示(default: false)
          },
          react: {
            opacity: 0.8 // 模型透明度(default: 0.8)
          }
        }
      }
    ]
  ],
  themeConfig: {
    type: 'blog',
    huawei: false,
    // 自动形成侧边导航
    sidebar: 'auto',
    nav: [
      { text: '主页', link: '/', icon: 'reco-home' },
      { text: '组件库', link: '/Collect/组件收藏', icon: 'reco-npm' },
      // { text: '时间线', link: '/timeLine/', icon: 'reco-date' },
      { text: 'GitHub', link: 'https://github.com/zazzzf', icon: 'reco-github' },
    ],
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: '分类', // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: '标签', // 默认 “标签”
      },
    },
    sidebarDepth: 3,
    // 文档更新时间
    lastUpdated: false,
    authorAvatar: '/avatar.jpg',
    author: 'Zazzzf',
    startYear: '2019',
    logo: '/avatar.jpg',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 评论
    valineConfig: {
      appId: 'xrRaFEwHt8ucbSNRqmecIok3-gzGzoHsz',
      appKey: '75BFKGH9skI9BL5TwqRsCS1q',
      placeholder: '欢迎评论 😁～',
      avatar: 'wavatar',
      notify: true,
    },
  },
  markdown: {
    lineNumbers: true
  },
};
