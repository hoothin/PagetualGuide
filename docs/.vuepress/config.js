module.exports = {
  locales: {
    '/':{
      lang: 'zh-TW',
      title: '東方永頁機',
      description: '最强自動翻頁脚本，基於油猴插件，覆蓋了互聯網上90%的網頁翻頁需求，實乃居家旅行必備良配。'
    },
    '/cn/':{
      lang: 'zh-CN',
      title: '东方永页机',
      description: '最强自动翻页脚本，基于油猴插件，覆盖了互联网上90%的网页翻页需求，实乃居家旅行必备工具。'
    },
    '/en/':{
      lang: 'en-US',
      title: 'Pagetual',
      description: 'Most compatible Auto pager script ever! Auto loading paginated web pages for 90% of all sites like google, forums, manga sites and others WITHOUT ANY RULES under most circumstances while turning page with browser.'
    }
  },
  head: [
    ['link', { rel: 'icon', href: '/img/tj.png' }],
    ['script', {src: '/js/base.js'}],
    ['style', {type: 'text/css'}, '.no-sidebar .dropdown-wrapper{display: none}'],
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
        selectText: '選擇語言',
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
                '/en/rules/iframeInit',
                '/en/rules/filter',
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
                '/en/rules/delay',
                '/en/rules/manualMode',
                '/en/rules/openInNewTab',
                '/en/rules/pageElementCss',
                '/en/rules/initRun',
                '/en/rules/sideController',
                '/en/rules/listenUrlChange',
                '/en/rules/clickMode',
                '/en/rules/preloadImages',
                '/en/rules/hookUrl',
                '/en/rules/child-script'
              ]
            }
          ]
        }
      },
      '/cn/': {
        selectText: 'Languages',
        label: '简体中文',
        sidebar: {
          '/cn/': [
            {
              title: '安装指南',
              path: '/cn/setup'
            },
            {
              title: '使用指南',
              path: '/cn/useage'
            },
            {
              title: '自定义规则',
              path: '/cn/rule',
              collapsable: true,
              children: [
                '/cn/rules/url',
                '/cn/rules/pinUrl',
                '/cn/rules/enable',
                '/cn/rules/include',
                '/cn/rules/exclude',
                '/cn/rules/wait',
                '/cn/rules/waitElement',
                '/cn/rules/action',
                '/cn/rules/nextLink',
                '/cn/rules/nextLinkByUrl',
                '/cn/rules/nextLinkByJs',
                '/cn/rules/stopSign',
                '/cn/rules/pageElement',
                '/cn/rules/pageElementByJs',
                '/cn/rules/replaceElement',
                '/cn/rules/lazyImgSrc',
                '/cn/rules/css',
                '/cn/rules/insert',
                '/cn/rules/insertPos',
                '/cn/rules/init',
                '/cn/rules/pagePre',
                '/cn/rules/pageInit',
                '/cn/rules/pageAction',
                '/cn/rules/iframeInit',
                '/cn/rules/filter',
                '/cn/rules/loadMore',
                '/cn/rules/sleep',
                '/cn/rules/rate',
                '/cn/rules/autoLoadNum',
                '/cn/rules/listenHashChange',
                '/cn/rules/refreshByClick',
                '/cn/rules/pageNum',
                '/cn/rules/pageBar',
                '/cn/rules/pageBarText',
                '/cn/rules/autoClick',
                '/cn/rules/history',
                '/cn/rules/lockScroll',
                '/cn/rules/wheel',
                '/cn/rules/fitWidth',
                '/cn/rules/delay',
                '/cn/rules/manualMode',
                '/cn/rules/openInNewTab',
                '/cn/rules/pageElementCss',
                '/cn/rules/initRun',
                '/cn/rules/sideController',
                '/cn/rules/listenUrlChange',
                '/cn/rules/clickMode',
                '/cn/rules/preloadImages',
                '/cn/rules/hookUrl',
                '/cn/rules/child-script'
              ]
            }
          ]
        }
      },
      '/': {
        selectText: 'Languages',
        label: '正體中文',
        sidebar: {
          '/': [
            {
              title: '安裝指南',
              path: '/setup'
            },
            {
              title: '使用指南',
              path: '/useage'
            },
            {
              title: '自定義規則',
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
                '/rules/iframeInit',
                '/rules/filter',
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
                '/rules/delay',
                '/rules/manualMode',
                '/rules/openInNewTab',
                '/rules/pageElementCss',
                '/rules/initRun',
                '/rules/sideController',
                '/rules/listenUrlChange',
                '/rules/clickMode',
                '/rules/preloadImages',
                '/rules/hookUrl',
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
      {text: '愛發電', link: 'https://afdian.net/@hoothin'},
      {text: 'Email', link: 'mailto:rixixi@gmail.com'}      
    ],
    sidebarDepth: 3
  }
}