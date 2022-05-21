module.exports = {
  locales: {
    '/':{
      lang: 'zh-CN',
      title: '自动翻页脚本-东方永页机',
      description: '兼容性最强的浏览器自动翻页油猴脚本工具软件，覆盖了互联网上90%的网页翻页需求，让你的浏览器开挂！'
    },
    '/en/':{
      lang: 'en-US',
      title: 'Pagetual',
      description: 'Most compatible Auto pager script ever! Auto loading paginated web pages for 90% of all sites!'
    }
  },
  head: [
    ['link', { rel: 'icon', href: '/img/tj.png' }],
  ],
  base: '/PagetualGuide/',
  themeConfig: {
  	locales: {
      '/en/': {
        selectText: '选择语言',
        label: 'English',
        ariaLabel: 'Languages',
        sidebar: [
          '/en/',
          '/en/setup',
          '/en/useage',
          '/en/rule'
        ]
      },
      '/': {
        selectText: 'Languages',
        label: '简体中文',
        sidebar: [
          '/',
          '/setup',
          '/useage',
          '/rule'
        ]
      }
    },
    nav:[
      {text: 'Github', link: 'https://github.com/hoothin/UserScripts/tree/master/Pagetual' },
      {text: 'Greasyfork', link: 'https://greasyfork.org/scripts/438684-pagetual'},
      {text: 'Email', link: 'mailto:rixixi@gmail.com'}      
    ],
    sidebarDepth: 2
  }
}