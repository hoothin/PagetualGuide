module.exports = {
  locales: {
    '/':{
      lang: 'zh-CN',
      title: '网页自动翻页脚本',
      description: '东方永页机 - 最强的浏览器自动翻页油猴脚本，本工具基于油猴插件，覆盖了互联网上90%的网页翻页需求，让你的浏览器开挂！'
    },
    '/en/':{
      lang: 'en-US',
      title: 'Pagetual',
      description: 'Most compatible Auto pager script ever! Auto loading paginated web pages for 90% of all sites!'
    }
  },
  head: [
    ['link', { rel: 'icon', href: '/img/tj.png' }],
    ['script', {src: '/js/base.js'}],
    ['script', 
      {
        "crossorigin": "anonymous",
        async: true,
        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3321669220169470"
      }
    ]
  ],
  base: '/PagetualGuide/',
  themeConfig: {
  	locales: {
      '/en/': {
        selectText: '选择语言',
        label: 'English',
        ariaLabel: 'Languages',
        sidebar: {
          '/en/': [
            {
              title: 'Installation',
              path: '/en/setup'
            },
            {
              title: 'User manual',
              path: '/en/useage'
            },
            {
              title: 'Custom rules',
              path: '/en/rule',
              collapsable: true,
              children: [
                '/en/rules/url',
                '/en/rules/pinUrl',
                '/en/rules/enable',
                '/en/rules/include',
                '/en/rules/exclude',
                '/en/rules/wait',
                '/en/rules/waitElement',
                '/en/rules/action',
                '/en/rules/nextLink',
                '/en/rules/nextLinkByUrl',
                '/en/rules/nextLinkByJs',
                '/en/rules/stopSign',
                '/en/rules/pageElement',
                '/en/rules/pageElementByJs',
                '/en/rules/replaceElement',
                '/en/rules/lazyImgSrc',
                '/en/rules/css',
                '/en/rules/insert',
                '/en/rules/insertPos',
                '/en/rules/init',
                '/en/rules/pagePre',
                '/en/rules/pageInit',
                '/en/rules/pageAction',
                '/en/rules/loadMore',
                '/en/rules/sleep',
                '/en/rules/rate',
                '/en/rules/autoLoadNum',
                '/en/rules/listenHashChange',
                '/en/rules/refreshByClick',
                '/en/rules/pageNum',
                '/en/rules/pageBar',
                '/en/rules/pageBarText',
                '/en/rules/autoClick',
                '/en/rules/history',
                '/en/rules/lockScroll',
                '/en/rules/wheel',
                '/en/rules/fitWidth',
                '/en/rules/pageElementStyle',
                '/en/rules/delay',
                '/en/rules/manualMode',
                '/en/rules/child-script']
            }
          ]
        }
      },
      '/': {
        selectText: 'Languages',
        label: '简体中文',
        sidebar: {
          '/': [
            {
              title: '安装指南',
              path: '/setup'
            },
            {
              title: '使用指南',
              path: '/useage'
            },
            {
              title: '自定义规则',
              path: '/rule',
              collapsable: true,
              children: [
                '/rules/url',
                '/rules/pinUrl',
                '/rules/enable',
                '/rules/include',
                '/rules/exclude',
                '/rules/wait',
                '/rules/waitElement',
                '/rules/action',
                '/rules/nextLink',
                '/rules/nextLinkByUrl',
                '/rules/nextLinkByJs',
                '/rules/stopSign',
                '/rules/pageElement',
                '/rules/pageElementByJs',
                '/rules/replaceElement',
                '/rules/lazyImgSrc',
                '/rules/css',
                '/rules/insert',
                '/rules/insertPos',
                '/rules/init',
                '/rules/pagePre',
                '/rules/pageInit',
                '/rules/pageAction',
                '/rules/loadMore',
                '/rules/sleep',
                '/rules/rate',
                '/rules/autoLoadNum',
                '/rules/listenHashChange',
                '/rules/refreshByClick',
                '/rules/pageNum',
                '/rules/pageBar',
                '/rules/pageBarText',
                '/rules/autoClick',
                '/rules/history',
                '/rules/lockScroll',
                '/rules/wheel',
                '/rules/fitWidth',
                '/rules/pageElementStyle',
                '/rules/delay',
                '/rules/manualMode',
                '/rules/child-script'
              ]
            }
          ]
        }
      }
    },
    nav:[
      {text: 'Github', link: 'https://github.com/hoothin/UserScripts/tree/master/Pagetual' },
      {text: 'Greasyfork', link: 'https://greasyfork.org/scripts/438684-pagetual'},
      {text: 'Email', link: 'mailto:rixixi@gmail.com'}      
    ],
    sidebarDepth: 3
  }
}