import { defaultTheme } from 'vuepress'
import { seoPlugin } from "vuepress-plugin-seo2";
import { getDirname, path } from '@vuepress/utils'
import googleAdSensePlugin from 'vuepress-plugin-google-adsense2';
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics';
import { sitemapPlugin } from "vuepress-plugin-sitemap2";
import 'default-passive-events';

const __dirname = getDirname(import.meta.url)

export default {
  locales: {
    '/':{
      lang: 'en-us',
      title: 'Pagetual',
      description: 'Auto Pager Script Seamlessly Merges Next Pages for Infinite Scroll. This popular userscript is compatible with Chrome, Firefox, Edge, and Safari, making it an essential extension for boosting browsing efficiency.'
    },
    '/ja/':{
      lang: 'ja',
      title: '東方永頁機',
      description: '最強のオープンソース自動ページめくりスクリプトとして、これはGreasemonkeyプラグインのまさに神器です。次のページを自動的に読み込むことで、インターネット上の90%のページめくりニーズをカバーします。'
    },
    '/tw/':{
      lang: 'zh-tw',
      title: '東方永頁機',
      description: '🇹🇼最強自動翻頁腳本，自動加載下一頁，基於油猴插件，覆蓋了 90% 的網頁翻頁需求，無論在移动端还是 PC 端，它都是您必備的效率工具。它將為您提供卓越的便利功能，提升您的瀏覽體驗。'
    },
    '/cn/':{
      lang: 'zh-cn',
      title: '东方永页机 - 无限翻页脚本',
      description: '最强自动翻页脚本，自动加载并拼接下一页到当前页面，油猴插件脚本神器，懒人必备。覆盖了互联网上 90% 的网页翻页需求，无论是在移动端还是 PC 端，都是您必备的效率工具。拥有卓越的便利功能和强大的自定义规则，提升浏览体验。'
    },
    '/de/':{
      lang: 'de',
      title: 'Pagetual',
      description: 'Auto-Pager-Skript zum automatischen Zusammenführen der nächsten Seite für Infinity Scroll, ein beliebtes Benutzerskript für Chrome / Firefox / Edge / Safari. Wesentliche Effizienzerweiterung.'
    },
    '/es/':{
      lang: 'es',
      title: 'Pagetual',
      description: 'Carga automática de las siguientes páginas web paginadas e inserción en la página actual. Admite miles de sitios web sin ninguna regla.'
    },
    '/fr/':{
      lang: 'fr',
      title: 'Pagetual',
      description: 'Chargement automatique des pages Web paginées suivantes et insertion dans la page en cours. Prend en charge des milliers de sites Web sans aucune règle.'
    },
    '/pt/':{
      lang: 'pt',
      title: 'Pagetual',
      description: 'O script de virada de página mais poderoso, com carregamento automático da próxima página, baseado no plugin TumbleMonkey, cobre 90% das necessidades de virada de página. Seja no celular ou no PC, é a sua ferramenta essencial para eficiência. Ele oferece excelentes funções práticas e aprimora sua experiência de navegação.'
    },
    '/ru/':{
      lang: 'ru',
      title: 'Pagetual',
      description: 'Автоматическая подгрузка следующих страниц и вставка их содержимого в текущую страницу. Поддерживает тысячи сайтов даже с настройками по умолчанию.'
    },
    '/ko/':{
      lang: 'ko',
      title: '東方永頁機',
      description: '페이지가 매겨진 다음 웹 페이지를 자동으로 로드하고 현재 페이지에 삽입합니다. 규칙 없이 수천 개의 웹 사이트를 지원합니다.'
    },
    '/vi/':{
      lang: 'vi',
      title: 'Pagetual',
      description: 'Tự động tìm các trang web được phân trang tiếp theo và chèn vào trang hiện tại để cuộn vô hạn. Hỗ trợ hàng ngàn trang web mà không cần bất kỳ quy tắc nào.'
    }
  },
  head: [
    ["link", { rel: "shortcut icon", href: "/img/fav.ico" }],
    ["link", { rel: "icon", type: "image/x-icon", size: "16x16 32x32", href: "/img/fav.ico" }],
    ['link', { rel: 'stylesheet', href: '/jsoneditor/jsoneditor.min.css',  type: "text/css" }],
    ["script",
      {
        async: true,
        src: "/js/adsense.js",
      }],
    ['link', { rel: 'stylesheet', href: '/css/head.css',  type: "text/css" }],
    ["meta", { property: "og:image", itemprop: "image", content: 'https://pagetual.hoothin.com/img/share.png'}],
    ["meta", { name: "keywords", content: 'infinity scroll, infinite scroll, unlimited scroll, endless page, endless scrolling, auto pager, load more, web pagination, never ending scroll, eternal scroll, 東方永頁機, 东方永页机, AutoPagerize, tampermonkey, css selector cheat sheet, userscripts, AutoPager, PageZipper, Auto Pagerize, weAutoPagerize, uAutoPagerize, NextPage, pagination, wedata, SITEINFO, second page, 2nd page, next page, compatibile, manga loader, 自动翻页, Super-preloader, Super_preloaderPlus_one_New_改, super preload, 网页拼页, 加载分页, endless google' }]
  ],
  base: '/',
  shouldPrefetch: false,
  theme: defaultTheme({
  	locales: {
      '/': {
        selectLanguageName: 'English',
        label: 'English',
        sidebar: {
          '/': [
            {
              text: 'Introduction',
              collapsible: false,
              children: [
                {
                  text: 'What is Pagetual',
                  link: '/infinite-scrolling-auto-page'
                },
                '/setup'
              ]
            },
            '/usage',
            {
              text: 'Advanced custom',
              link: '/rule',
              collapsible: true,
              children: [
                '/xpath',
                '/css-selector-cheat-sheet',
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
        },
        navbar:[
          {text: 'Github', link: 'https://github.com/hoothin/UserScripts/tree/master/Pagetual' },
          {
            text: '❤️Sponsor',
            children: [
              {
                text: 'Ko-fi',
                link: 'https://ko-fi.com/hoothin'
              },
              {
                text: 'Afdian',
                link: 'https://afdian.com/@hoothin'
              },
              {
                text: 'Become sponsor',
                link: '/sponsor'
              }
            ]
          },
          {text: '💞LoveGame', link: 'https://lovegame.hoothin.com/' },
          {text: '🕊️Twitter', link: 'https://twitter.com/intent/follow?screen_name=HoothinDev' },
           {
             text: 'Related Links',
             children: [
               {
                 text: 'Discord group',
                 link: 'https://discord.com/invite/keqypXC6wD'
               },
               {
                 text: 'SearchJumper',
                 link: 'https://search.hoothin.com'
               },
               {
                 text: 'Fullscreen Text',
                 link: 'https://led.hoothin.com'
               },
               {
                 text: 'Japan online tools',
                 link: 'https://jp.hoothin.com'
               },
              {
                text: 'Tools hub',
                link: 'https://tool.hoothin.com'
              },
               {
                 text: 'Twitter Video Downloader',
                 link: 'https://twitter.hoothin.com'
               }
             ]
           }
        ]
      },
      '/cn/': {
        selectLanguageName: '简体中文',
        label: '简体中文',
        sidebar: {
          '/cn/': [
            {
              text: '介绍',
              collapsible: false,
              children: [
                {
                  text: '什么是东方永页机？',
                  link: '/cn/zi-dong-xia-yi-ye'
                },
                '/cn/setup'
              ]
            },
            '/cn/usage',
            {
              text: '高级自定义',
              link: '/cn/rule',
              collapsible: true,
              children: [
                '/cn/xpath',
                '/cn/css-selector-cheat-sheet',
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
        },
        navbar:[
          {text: 'Github仓库', link: 'https://github.com/hoothin/UserScripts/tree/master/Pagetual' },
          {
            text: '❤️赞助',
            children: [
              {
                text: 'Ko-fi',
                link: 'https://ko-fi.com/hoothin'
              },
              {
                text: '爱发电',
                link: 'https://afdian.com/@hoothin'
              },
              {
                text: '成为赞助商',
                link: '/cn/sponsor'
              }
            ]
          },
          {text: '💞情侣飞行棋', link: 'https://lovegame.hoothin.com/zh-CN' },
          {
            text: '友情链接',
            children: [
              {
                text: 'Discord 群组',
                link: 'https://discord.com/invite/keqypXC6wD'
              },
              {
                text: '搜索酱',
                link: 'https://search.hoothin.com'
              },
              {
                text: '全屏大字',
                link: 'https://led.hoothin.com'
              },
              {
                text: '日本在线工具',
                link: 'https://jp.hoothin.com'
              },
              {
                text: '实用在线工具箱',
                link: 'https://tool.hoothin.com'
              },
              {
                text: '推特视频下载器',
                link: 'https://twitter.hoothin.com'
              }
            ]
          }
        ]
      },
      '/ja/': {
        selectLanguageName: '日本語',
        label: '日本語',
        sidebar: {
          '/ja/': [
            {
              text: 'はじめに',
              collapsible: false,
              children: [
                '/ja/whatIs',
                '/ja/setup'
              ]
            },
            '/ja/usage',
            {
              text: '高度なカスタマイズ',
              link: '/ja/rule',
              collapsible: true,
              children: [
                '/ja/xpath',
                '/ja/css-selector-cheat-sheet',
                '/ja/rules/url',
                '/ja/rules/pinUrl',
                '/ja/rules/enable',
                '/ja/rules/include',
                '/ja/rules/exclude',
                '/ja/rules/wait',
                '/ja/rules/waitElement',
                '/ja/rules/action',
                '/ja/rules/nextLink',
                '/ja/rules/nextLinkByUrl',
                '/ja/rules/nextLinkByJs',
                '/ja/rules/stopSign',
                '/ja/rules/pageElement',
                '/ja/rules/pageElementByJs',
                '/ja/rules/replaceElement',
                '/ja/rules/lazyImgSrc',
                '/ja/rules/css',
                '/ja/rules/insert',
                '/ja/rules/insertPos',
                '/ja/rules/init',
                '/ja/rules/pagePre',
                '/ja/rules/pageInit',
                '/ja/rules/pageAction',
                '/ja/rules/iframeInit',
                '/ja/rules/filter',
                '/ja/rules/loadMore',
                '/ja/rules/sleep',
                '/ja/rules/rate',
                '/ja/rules/autoLoadNum',
                '/ja/rules/listenHashChange',
                '/ja/rules/refreshByClick',
                '/ja/rules/pageNum',
                '/ja/rules/pageBar',
                '/ja/rules/pageBarText',
                '/ja/rules/autoClick',
                '/ja/rules/history',
                '/ja/rules/lockScroll',
                '/ja/rules/wheel',
                '/ja/rules/fitWidth',
                '/ja/rules/delay',
                '/ja/rules/manualMode',
                '/ja/rules/openInNewTab',
                '/ja/rules/pageElementCss',
                '/ja/rules/initRun',
                '/ja/rules/sideController',
                '/ja/rules/listenUrlChange',
                '/ja/rules/clickMode',
                '/ja/rules/preloadImages',
                '/ja/rules/hookUrl',
                '/ja/rules/child-script'
              ]
            }
          ]
        },
        navbar:[
          {text: 'Github', link: 'https://github.com/hoothin/UserScripts/tree/master/Pagetual' },
          {
            text: '❤️協賛',
            children: [
              {
                text: 'Ko-fi',
                link: 'https://ko-fi.com/hoothin'
              },
              {
                text: '愛發電',
                link: 'https://afdian.com/@hoothin'
              },
              {
                text: 'スポンサーになる',
                link: '/ja/sponsor'
              }
            ]
          },
          {text: '🕊️Twitter', link: 'https://twitter.com/intent/follow?screen_name=HoothinDev' },
           {
             text: '関連サイト',
             children: [
               {
                 text: 'Discord グループ',
                 link: 'https://discord.com/invite/keqypXC6wD'
               },
               {
                 text: 'SearchJumper',
                 link: 'https://search.hoothin.com'
               },
               {
                 text: '全画面テキスト',
                 link: 'https://led.hoothin.com'
               },
               {
                 text: '日本オンラインツール',
                 link: 'https://jp.hoothin.com'
               },
              {
                text: 'Tools hub',
                link: 'https://tool.hoothin.com'
              },
               {
                 text: 'Twitterビデオダウンローダー',
                 link: 'https://twitter.hoothin.com'
               }
             ]
           }
        ]
      },
      '/de/': {
        selectLanguageName: 'Deutsch',
        label: 'Deutsch',
        sidebar: {
          '/de/': [
            {
              text: 'Einführung',
              collapsible: false,
              children: [
                {
                  text: 'Was ist Pagetual',
                  link: '/de/whatIs'
                },
                '/de/setup'
              ]
            },
            '/de/usage',
            {
              text: 'Brauch',
              link: '/de/rule',
              collapsible: true,
              children: [
                '/de/xpath',
                '/de/css-selector-cheat-sheet',
                '/de/rules/url',
                '/de/rules/pinUrl',
                '/de/rules/enable',
                '/de/rules/include',
                '/de/rules/exclude',
                '/de/rules/wait',
                '/de/rules/waitElement',
                '/de/rules/action',
                '/de/rules/nextLink',
                '/de/rules/nextLinkByUrl',
                '/de/rules/nextLinkByJs',
                '/de/rules/stopSign',
                '/de/rules/pageElement',
                '/de/rules/pageElementByJs',
                '/de/rules/replaceElement',
                '/de/rules/lazyImgSrc',
                '/de/rules/css',
                '/de/rules/insert',
                '/de/rules/insertPos',
                '/de/rules/init',
                '/de/rules/pagePre',
                '/de/rules/pageInit',
                '/de/rules/pageAction',
                '/de/rules/iframeInit',
                '/de/rules/filter',
                '/de/rules/loadMore',
                '/de/rules/sleep',
                '/de/rules/rate',
                '/de/rules/autoLoadNum',
                '/de/rules/listenHashChange',
                '/de/rules/refreshByClick',
                '/de/rules/pageNum',
                '/de/rules/pageBar',
                '/de/rules/pageBarText',
                '/de/rules/autoClick',
                '/de/rules/history',
                '/de/rules/lockScroll',
                '/de/rules/wheel',
                '/de/rules/fitWidth',
                '/de/rules/delay',
                '/de/rules/manualMode',
                '/de/rules/openInNewTab',
                '/de/rules/pageElementCss',
                '/de/rules/initRun',
                '/de/rules/sideController',
                '/de/rules/listenUrlChange',
                '/de/rules/clickMode',
                '/de/rules/preloadImages',
                '/de/rules/hookUrl',
                '/de/rules/child-script'
              ]
            }
          ]
        },
        navbar:[
          {text: 'Github', link: 'https://github.com/hoothin/UserScripts/tree/master/Pagetual' },
          {
            text: '❤️Sponsor',
            children: [
              {
                text: 'Ko-fi',
                link: 'https://ko-fi.com/hoothin'
              },
              {
                text: '愛發電',
                link: 'https://afdian.com/@hoothin'
              },
              {
                text: 'Sponsor werden',
                link: '/de/sponsor'
              }
            ]
          },
          {text: '🕊️Twitter', link: 'https://twitter.com/intent/follow?screen_name=HoothinDev' },
          {
             text: 'Related Links',
             children: [
               {
                 text: 'Discord group',
                 link: 'https://discord.com/invite/keqypXC6wD'
               },
               {
                 text: 'SearchJumper',
                 link: 'https://search.hoothin.com'
               },
               {
                 text: 'Fullscreen Text',
                 link: 'https://led.hoothin.com'
               },
               {
                 text: 'Japan Online Tools',
                 link: 'https://jp.hoothin.com'
               },
              {
                text: 'Tools hub',
                link: 'https://tool.hoothin.com'
              },
               {
                 text: 'Twitter Video Downloader',
                 link: 'https://twitter.hoothin.com'
               }
             ]
           }
        ]
      },
      '/tw/': {
        selectLanguageName: '正體中文',
        label: '正體中文',
        sidebar: {
          '/tw/': [
            {
              text: '介紹',
              collapsible: false,
              children: [
                {
                  text: '什麽是東方永頁機？',
                  link: '/tw/whatIs'
                },
                '/tw/setup'
              ]
            },
          	'/tw/usage',
            {
              text: '進階自訂',
              link: '/tw/rule',
              collapsible: true,
              children: [
                '/tw/xpath',
                '/tw/css-selector-cheat-sheet',
                '/tw/rules/url',
                '/tw/rules/pinUrl',
                '/tw/rules/enable',
                '/tw/rules/include',
                '/tw/rules/exclude',
                '/tw/rules/wait',
                '/tw/rules/waitElement',
                '/tw/rules/action',
                '/tw/rules/nextLink',
                '/tw/rules/nextLinkByUrl',
                '/tw/rules/nextLinkByJs',
                '/tw/rules/stopSign',
                '/tw/rules/pageElement',
                '/tw/rules/pageElementByJs',
                '/tw/rules/replaceElement',
                '/tw/rules/lazyImgSrc',
                '/tw/rules/css',
                '/tw/rules/insert',
                '/tw/rules/insertPos',
                '/tw/rules/init',
                '/tw/rules/pagePre',
                '/tw/rules/pageInit',
                '/tw/rules/pageAction',
                '/tw/rules/iframeInit',
                '/tw/rules/filter',
                '/tw/rules/loadMore',
                '/tw/rules/sleep',
                '/tw/rules/rate',
                '/tw/rules/autoLoadNum',
                '/tw/rules/listenHashChange',
                '/tw/rules/refreshByClick',
                '/tw/rules/pageNum',
                '/tw/rules/pageBar',
                '/tw/rules/pageBarText',
                '/tw/rules/autoClick',
                '/tw/rules/history',
                '/tw/rules/lockScroll',
                '/tw/rules/wheel',
                '/tw/rules/fitWidth',
                '/tw/rules/delay',
                '/tw/rules/manualMode',
                '/tw/rules/openInNewTab',
                '/tw/rules/pageElementCss',
                '/tw/rules/initRun',
                '/tw/rules/sideController',
                '/tw/rules/listenUrlChange',
                '/tw/rules/clickMode',
                '/tw/rules/preloadImages',
                '/tw/rules/hookUrl',
                '/tw/rules/child-script'
              ]
            }
          ]
        },
        navbar:[
          {text: 'Github', link: 'https://github.com/hoothin/UserScripts/tree/master/Pagetual' },
          {
            text: '❤️贊助',
            children: [
              {
                text: 'Ko-fi',
                link: 'https://ko-fi.com/hoothin'
              },
              {
                text: '愛發電',
                link: 'https://afdian.com/@hoothin'
              },
              {
                text: '成爲贊助商',
                link: '/tw/sponsor'
              }
            ]
          },
          {text: '🕊️Twitter', link: 'https://twitter.com/intent/follow?screen_name=HoothinDev' },
           {
             text: '友情連結',
             children: [
               {
                 text: 'Discord 群組',
                 link: 'https://discord.com/invite/keqypXC6wD'
               },
               {
                 text: '搜尋醬',
                 link: 'https://search.hoothin.com'
               },
               {
                 text: '全螢幕大字',
                 link: 'https://led.hoothin.com'
               },
               {
                 text: '日本線上工具',
                 link: 'https://jp.hoothin.com'
               },
              {
                text: 'Tools hub',
                link: 'https://tool.hoothin.com'
              },
               {
                 text: 'Twitter 影片下載器',
                 link: 'https://twitter.hoothin.com'
               }
             ]
           }
        ]
      },
      '/es/': {
        selectLanguageName: 'Español',
        label: 'Español',
        sidebar: {
          '/es/': [
            {
              text: 'introducir',
              collapsible: false,
              children: [
                {
                  text: '¿Qué es Pagetual?',
                  link: '/es/whatIs'
                },
                '/es/setup'
              ]
            },
            '/es/usage',
            {
              text: 'Personalización avanzada',
              link: '/es/rule',
              collapsible: true,
              children: [
                '/es/xpath',
                '/es/css-selector-cheat-sheet',
                '/es/rules/url',
                '/es/rules/pinUrl',
                '/es/rules/enable',
                '/es/rules/include',
                '/es/rules/exclude',
                '/es/rules/wait',
                '/es/rules/waitElement',
                '/es/rules/action',
                '/es/rules/nextLink',
                '/es/rules/nextLinkByUrl',
                '/es/rules/nextLinkByJs',
                '/es/rules/stopSign',
                '/es/rules/pageElement',
                '/es/rules/pageElementByJs',
                '/es/rules/replaceElement',
                '/es/rules/lazyImgSrc',
                '/es/rules/css',
                '/es/rules/insert',
                '/es/rules/insertPos',
                '/es/rules/init',
                '/es/rules/pagePre',
                '/es/rules/pageInit',
                '/es/rules/pageAction',
                '/es/rules/iframeInit',
                '/es/rules/filter',
                '/es/rules/loadMore',
                '/es/rules/sleep',
                '/es/rules/rate',
                '/es/rules/autoLoadNum',
                '/es/rules/listenHashChange',
                '/es/rules/refreshByClick',
                '/es/rules/pageNum',
                '/es/rules/pageBar',
                '/es/rules/pageBarText',
                '/es/rules/autoClick',
                '/es/rules/history',
                '/es/rules/lockScroll',
                '/es/rules/wheel',
                '/es/rules/fitWidth',
                '/es/rules/delay',
                '/es/rules/manualMode',
                '/es/rules/openInNewTab',
                '/es/rules/pageElementCss',
                '/es/rules/initRun',
                '/es/rules/sideController',
                '/es/rules/listenUrlChange',
                '/es/rules/clickMode',
                '/es/rules/preloadImages',
                '/es/rules/hookUrl',
                '/es/rules/child-script'
              ]
            }
          ]
        },
        navbar:[
          {text: 'Github', link: 'https://github.com/hoothin/UserScripts/tree/master/Pagetual' },
          {
            text: '❤️Sponsor',
            children: [
              {
                text: 'Ko-fi',
                link: 'https://ko-fi.com/hoothin'
              },
              {
                text: '爱发电',
                link: 'https://afdian.com/@hoothin'
              },
              {
                text: 'Sponsor',
                link: '/es/sponsor'
              }
            ]
          },
          {text: '🕊️Twitter', link: 'https://twitter.com/intent/follow?screen_name=HoothinDev' },
          {
            text: 'Related Links',
            children: [
              {
                text: 'Discord group',
                link: 'https://discord.com/invite/keqypXC6wD'
              },
              {
                text: 'SearchJumper',
                link: 'https://search.hoothin.com'
              },
              {
                text: 'Fullscreen Text',
                link: 'https://led.hoothin.com'
              },
              {
                text: 'Japan online tools',
                link: 'https://jp.hoothin.com'
              },
              {
                text: 'Tools hub',
                link: 'https://tool.hoothin.com'
              },
              {
                text: 'Twitter Video Downloader',
                link: 'https://twitter.hoothin.com'
              }
            ]
          }
        ]
      },
      '/fr/': {
        selectLanguageName: 'Français',
        label: 'Français',
        sidebar: {
          '/fr/': [
            {
              text: 'introduire',
              collapsible: false,
              children: [
                {
                  text: 'Qu\'est-ce que Pagetual ?',
                  link: '/fr/whatIs'
                },
                '/fr/setup'
              ]
            },
            '/fr/usage',
            {
              text: 'Personnalisation avancée',
              link: '/fr/rule',
              collapsible: true,
              children: [
                '/fr/xpath',
                '/fr/css-selector-cheat-sheet',
                '/fr/rules/url',
                '/fr/rules/pinUrl',
                '/fr/rules/enable',
                '/fr/rules/include',
                '/fr/rules/exclude',
                '/fr/rules/wait',
                '/fr/rules/waitElement',
                '/fr/rules/action',
                '/fr/rules/nextLink',
                '/fr/rules/nextLinkByUrl',
                '/fr/rules/nextLinkByJs',
                '/fr/rules/stopSign',
                '/fr/rules/pageElement',
                '/fr/rules/pageElementByJs',
                '/fr/rules/replaceElement',
                '/fr/rules/lazyImgSrc',
                '/fr/rules/css',
                '/fr/rules/insert',
                '/fr/rules/insertPos',
                '/fr/rules/init',
                '/fr/rules/pagePre',
                '/fr/rules/pageInit',
                '/fr/rules/pageAction',
                '/fr/rules/iframeInit',
                '/fr/rules/filter',
                '/fr/rules/loadMore',
                '/fr/rules/sleep',
                '/fr/rules/rate',
                '/fr/rules/autoLoadNum',
                '/fr/rules/listenHashChange',
                '/fr/rules/refreshByClick',
                '/fr/rules/pageNum',
                '/fr/rules/pageBar',
                '/fr/rules/pageBarText',
                '/fr/rules/autoClick',
                '/fr/rules/history',
                '/fr/rules/lockScroll',
                '/fr/rules/wheel',
                '/fr/rules/fitWidth',
                '/fr/rules/delay',
                '/fr/rules/manualMode',
                '/fr/rules/openInNewTab',
                '/fr/rules/pageElementCss',
                '/fr/rules/initRun',
                '/fr/rules/sideController',
                '/fr/rules/listenUrlChange',
                '/fr/rules/clickMode',
                '/fr/rules/preloadImages',
                '/fr/rules/hookUrl',
                '/fr/rules/child-script'
              ]
            }
          ]
        },
        navbar:[
          {text: 'Github', link: 'https://github.com/hoothin/UserScripts/tree/master/Pagetual' },
          {
            text: '❤️Sponsor',
            children: [
              {
                text: 'Ko-fi',
                link: 'https://ko-fi.com/hoothin'
              },
              {
                text: '爱发电',
                link: 'https://afdian.com/@hoothin'
              },
              {
                text: 'Sponsor',
                link: '/fr/sponsor'
              }
            ]
          },
          {text: '🕊️Twitter', link: 'https://twitter.com/intent/follow?screen_name=HoothinDev' },
          {
            text: 'Related Links',
            children: [
              {
                text: 'Discord group',
                link: 'https://discord.com/invite/keqypXC6wD'
              },
              {
                text: 'SearchJumper',
                link: 'https://search.hoothin.com'
              },
              {
                text: 'Fullscreen Text',
                link: 'https://led.hoothin.com'
              },
              {
                text: 'Japan online tools',
                link: 'https://jp.hoothin.com'
              },
              {
                text: 'Tools hub',
                link: 'https://tool.hoothin.com'
              },
              {
                text: 'Twitter Video Downloader',
                link: 'https://twitter.hoothin.com'
              }
            ]
          }
        ]
      },
      '/ko/': {
        selectLanguageName: '한국인',
        label: '한국인',
        sidebar: {
          '/ko/': [
            {
              text: '소개하다',
              collapsible: false,
              children: [
                {
                  text: 'Pagetual이란 무엇인가요?',
                  link: '/ko/whatIs'
                },
                '/ko/setup'
              ]
            },
            '/ko/usage',
            {
              text: '고급 사용자 정의',
              link: '/ko/rule',
              collapsible: true,
              children: [
                '/ko/xpath',
                '/ko/css-selector-cheat-sheet',
                '/ko/rules/url',
                '/ko/rules/pinUrl',
                '/ko/rules/enable',
                '/ko/rules/include',
                '/ko/rules/exclude',
                '/ko/rules/wait',
                '/ko/rules/waitElement',
                '/ko/rules/action',
                '/ko/rules/nextLink',
                '/ko/rules/nextLinkByUrl',
                '/ko/rules/nextLinkByJs',
                '/ko/rules/stopSign',
                '/ko/rules/pageElement',
                '/ko/rules/pageElementByJs',
                '/ko/rules/replaceElement',
                '/ko/rules/lazyImgSrc',
                '/ko/rules/css',
                '/ko/rules/insert',
                '/ko/rules/insertPos',
                '/ko/rules/init',
                '/ko/rules/pagePre',
                '/ko/rules/pageInit',
                '/ko/rules/pageAction',
                '/ko/rules/iframeInit',
                '/ko/rules/filter',
                '/ko/rules/loadMore',
                '/ko/rules/sleep',
                '/ko/rules/rate',
                '/ko/rules/autoLoadNum',
                '/ko/rules/listenHashChange',
                '/ko/rules/refreshByClick',
                '/ko/rules/pageNum',
                '/ko/rules/pageBar',
                '/ko/rules/pageBarText',
                '/ko/rules/autoClick',
                '/ko/rules/history',
                '/ko/rules/lockScroll',
                '/ko/rules/wheel',
                '/ko/rules/fitWidth',
                '/ko/rules/delay',
                '/ko/rules/manualMode',
                '/ko/rules/openInNewTab',
                '/ko/rules/pageElementCss',
                '/ko/rules/initRun',
                '/ko/rules/sideController',
                '/ko/rules/listenUrlChange',
                '/ko/rules/clickMode',
                '/ko/rules/preloadImages',
                '/ko/rules/hookUrl',
                '/ko/rules/child-script'
              ]
            }
          ]
        },
        navbar:[
          {text: 'Github', link: 'https://github.com/hoothin/UserScripts/tree/master/Pagetual' },
          {
            text: '❤️Sponsor',
            children: [
              {
                text: 'Ko-fi',
                link: 'https://ko-fi.com/hoothin'
              },
              {
                text: '爱发电',
                link: 'https://afdian.com/@hoothin'
              },
              {
                text: 'Sponsor',
                link: '/ko/sponsor'
              }
            ]
          },
          {text: '🕊️Twitter', link: 'https://twitter.com/intent/follow?screen_name=HoothinDev' },
          {
            text: 'Related Links',
            children: [
              {
                text: 'Discord group',
                link: 'https://discord.com/invite/keqypXC6wD'
              },
              {
                text: 'SearchJumper',
                link: 'https://search.hoothin.com'
              },
              {
                text: 'Fullscreen Text',
                link: 'https://led.hoothin.com'
              },
              {
                text: 'Japan online tools',
                link: 'https://jp.hoothin.com'
              },
              {
                text: 'Tools hub',
                link: 'https://tool.hoothin.com'
              },
              {
                text: 'Twitter Video Downloader',
                link: 'https://twitter.hoothin.com'
              }
            ]
          }
        ]
      },
      '/pt/': {
        selectLanguageName: 'Português',
        label: 'Português',
        sidebar: {
          '/pt/': [
            {
              text: 'introduzir',
              collapsible: false,
              children: [
                {
                  text: 'O que é Pagetual?',
                  link: '/pt/whatIs'
                },
                '/pt/setup'
              ]
            },
            '/pt/usage',
            {
              text: 'Personalização avançada',
              link: '/pt/rule',
              collapsible: true,
              children: [
                '/pt/xpath',
                '/pt/css-selector-cheat-sheet',
                '/pt/rules/url',
                '/pt/rules/pinUrl',
                '/pt/rules/enable',
                '/pt/rules/include',
                '/pt/rules/exclude',
                '/pt/rules/wait',
                '/pt/rules/waitElement',
                '/pt/rules/action',
                '/pt/rules/nextLink',
                '/pt/rules/nextLinkByUrl',
                '/pt/rules/nextLinkByJs',
                '/pt/rules/stopSign',
                '/pt/rules/pageElement',
                '/pt/rules/pageElementByJs',
                '/pt/rules/replaceElement',
                '/pt/rules/lazyImgSrc',
                '/pt/rules/css',
                '/pt/rules/insert',
                '/pt/rules/insertPos',
                '/pt/rules/init',
                '/pt/rules/pagePre',
                '/pt/rules/pageInit',
                '/pt/rules/pageAction',
                '/pt/rules/iframeInit',
                '/pt/rules/filter',
                '/pt/rules/loadMore',
                '/pt/rules/sleep',
                '/pt/rules/rate',
                '/pt/rules/autoLoadNum',
                '/pt/rules/listenHashChange',
                '/pt/rules/refreshByClick',
                '/pt/rules/pageNum',
                '/pt/rules/pageBar',
                '/pt/rules/pageBarText',
                '/pt/rules/autoClick',
                '/pt/rules/history',
                '/pt/rules/lockScroll',
                '/pt/rules/wheel',
                '/pt/rules/fitWidth',
                '/pt/rules/delay',
                '/pt/rules/manualMode',
                '/pt/rules/openInNewTab',
                '/pt/rules/pageElementCss',
                '/pt/rules/initRun',
                '/pt/rules/sideController',
                '/pt/rules/listenUrlChange',
                '/pt/rules/clickMode',
                '/pt/rules/preloadImages',
                '/pt/rules/hookUrl',
                '/pt/rules/child-script'
              ]
            }
          ]
        },
        navbar:[
          {text: 'Github', link: 'https://github.com/hoothin/UserScripts/tree/master/Pagetual' },
          {
            text: '❤️Sponsor',
            children: [
              {
                text: 'Ko-fi',
                link: 'https://ko-fi.com/hoothin'
              },
              {
                text: '爱发电',
                link: 'https://afdian.com/@hoothin'
              },
              {
                text: 'Sponsor',
                link: '/pt/sponsor'
              }
            ]
          },
          {text: '🕊️Twitter', link: 'https://twitter.com/intent/follow?screen_name=HoothinDev' },
          {
            text: 'Related Links',
            children: [
              {
                text: 'Discord group',
                link: 'https://discord.com/invite/keqypXC6wD'
              },
              {
                text: 'SearchJumper',
                link: 'https://search.hoothin.com'
              },
              {
                text: 'Fullscreen Text',
                link: 'https://led.hoothin.com'
              },
              {
                text: 'Japan online tools',
                link: 'https://jp.hoothin.com'
              },
              {
                text: 'Tools hub',
                link: 'https://tool.hoothin.com'
              },
              {
                text: 'Twitter Video Downloader',
                link: 'https://twitter.hoothin.com'
              }
            ]
          }
        ]
      },
      '/ru/': {
        selectLanguageName: 'Русский',
        label: 'Русский',
        sidebar: {
          '/ru/': [
            {
              text: 'представлять',
              collapsible: false,
              children: [
                {
                  text: 'Что такое Pagetual?',
                  link: '/ru/whatIs'
                },
                '/ru/setup'
              ]
            },
            '/ru/usage',
            {
              text: 'Расширенная настройка',
              link: '/ru/rule',
              collapsible: true,
              children: [
                '/ru/xpath',
                '/ru/css-selector-cheat-sheet',
                '/ru/rules/url',
                '/ru/rules/pinUrl',
                '/ru/rules/enable',
                '/ru/rules/include',
                '/ru/rules/exclude',
                '/ru/rules/wait',
                '/ru/rules/waitElement',
                '/ru/rules/action',
                '/ru/rules/nextLink',
                '/ru/rules/nextLinkByUrl',
                '/ru/rules/nextLinkByJs',
                '/ru/rules/stopSign',
                '/ru/rules/pageElement',
                '/ru/rules/pageElementByJs',
                '/ru/rules/replaceElement',
                '/ru/rules/lazyImgSrc',
                '/ru/rules/css',
                '/ru/rules/insert',
                '/ru/rules/insertPos',
                '/ru/rules/init',
                '/ru/rules/pagePre',
                '/ru/rules/pageInit',
                '/ru/rules/pageAction',
                '/ru/rules/iframeInit',
                '/ru/rules/filter',
                '/ru/rules/loadMore',
                '/ru/rules/sleep',
                '/ru/rules/rate',
                '/ru/rules/autoLoadNum',
                '/ru/rules/listenHashChange',
                '/ru/rules/refreshByClick',
                '/ru/rules/pageNum',
                '/ru/rules/pageBar',
                '/ru/rules/pageBarText',
                '/ru/rules/autoClick',
                '/ru/rules/history',
                '/ru/rules/lockScroll',
                '/ru/rules/wheel',
                '/ru/rules/fitWidth',
                '/ru/rules/delay',
                '/ru/rules/manualMode',
                '/ru/rules/openInNewTab',
                '/ru/rules/pageElementCss',
                '/ru/rules/initRun',
                '/ru/rules/sideController',
                '/ru/rules/listenUrlChange',
                '/ru/rules/clickMode',
                '/ru/rules/preloadImages',
                '/ru/rules/hookUrl',
                '/ru/rules/child-script'
              ]
            }
          ]
        },
        navbar:[
          {text: 'Github', link: 'https://github.com/hoothin/UserScripts/tree/master/Pagetual' },
          {
            text: '❤️Sponsor',
            children: [
              {
                text: 'Ko-fi',
                link: 'https://ko-fi.com/hoothin'
              },
              {
                text: '爱发电',
                link: 'https://afdian.com/@hoothin'
              },
              {
                text: 'Sponsor',
                link: '/ru/sponsor'
              }
            ]
          },
          {text: '🕊️Twitter', link: 'https://twitter.com/intent/follow?screen_name=HoothinDev' },
          {
            text: 'Related Links',
            children: [
              {
                text: 'Discord group',
                link: 'https://discord.com/invite/keqypXC6wD'
              },
              {
                text: 'SearchJumper',
                link: 'https://search.hoothin.com'
              },
              {
                text: 'Fullscreen Text',
                link: 'https://led.hoothin.com'
              },
              {
                text: 'Japan online tools',
                link: 'https://jp.hoothin.com'
              },
              {
                text: 'Tools hub',
                link: 'https://tool.hoothin.com'
              },
              {
                text: 'Twitter Video Downloader',
                link: 'https://twitter.hoothin.com'
              }
            ]
          }
        ]
      },
      '/vi/': {
        selectLanguageName: 'Tiếng Việt',
        label: 'Tiếng Việt',
        sidebar: {
          '/vi/': [
            {
              text: 'giới thiệu',
              collapsible: false,
              children: [
                {
                  text: 'Pagetual là gì?',
                  link: '/vi/whatIs'
                },
                '/vi/setup'
              ]
            },
            '/vi/usage',
            {
              text: 'Tùy chỉnh nâng cao',
              link: '/vi/rule',
              collapsible: true,
              children: [
                '/vi/xpath',
                '/vi/css-selector-cheat-sheet',
                '/vi/rules/url',
                '/vi/rules/pinUrl',
                '/vi/rules/enable',
                '/vi/rules/include',
                '/vi/rules/exclude',
                '/vi/rules/wait',
                '/vi/rules/waitElement',
                '/vi/rules/action',
                '/vi/rules/nextLink',
                '/vi/rules/nextLinkByUrl',
                '/vi/rules/nextLinkByJs',
                '/vi/rules/stopSign',
                '/vi/rules/pageElement',
                '/vi/rules/pageElementByJs',
                '/vi/rules/replaceElement',
                '/vi/rules/lazyImgSrc',
                '/vi/rules/css',
                '/vi/rules/insert',
                '/vi/rules/insertPos',
                '/vi/rules/init',
                '/vi/rules/pagePre',
                '/vi/rules/pageInit',
                '/vi/rules/pageAction',
                '/vi/rules/iframeInit',
                '/vi/rules/filter',
                '/vi/rules/loadMore',
                '/vi/rules/sleep',
                '/vi/rules/rate',
                '/vi/rules/autoLoadNum',
                '/vi/rules/listenHashChange',
                '/vi/rules/refreshByClick',
                '/vi/rules/pageNum',
                '/vi/rules/pageBar',
                '/vi/rules/pageBarText',
                '/vi/rules/autoClick',
                '/vi/rules/history',
                '/vi/rules/lockScroll',
                '/vi/rules/wheel',
                '/vi/rules/fitWidth',
                '/vi/rules/delay',
                '/vi/rules/manualMode',
                '/vi/rules/openInNewTab',
                '/vi/rules/pageElementCss',
                '/vi/rules/initRun',
                '/vi/rules/sideController',
                '/vi/rules/listenUrlChange',
                '/vi/rules/clickMode',
                '/vi/rules/preloadImages',
                '/vi/rules/hookUrl',
                '/vi/rules/child-script'
              ]
            }
          ]
        },
        navbar:[
          {text: 'Github', link: 'https://github.com/hoothin/UserScripts/tree/master/Pagetual' },
          {
            text: '❤️Sponsor',
            children: [
              {
                text: 'Ko-fi',
                link: 'https://ko-fi.com/hoothin'
              },
              {
                text: '爱发电',
                link: 'https://afdian.com/@hoothin'
              },
              {
                text: 'Sponsor',
                link: '/vi/sponsor'
              }
            ]
          },
          {text: '🕊️Twitter', link: 'https://twitter.com/intent/follow?screen_name=HoothinDev' },
          {
            text: 'Related Links',
            children: [
              {
                text: 'Discord group',
                link: 'https://discord.com/invite/keqypXC6wD'
              },
              {
                text: 'SearchJumper',
                link: 'https://search.hoothin.com'
              },
              {
                text: 'Fullscreen Text',
                link: 'https://led.hoothin.com'
              },
              {
                text: 'Japan online tools',
                link: 'https://jp.hoothin.com'
              },
              {
                text: 'Tools hub',
                link: 'https://tool.hoothin.com'
              },
              {
                text: 'Twitter Video Downloader',
                link: 'https://twitter.hoothin.com'
              }
            ]
          }
        ]
      }
    },
    sidebarDepth: 3,
    nextLinks: true,
    prevLinks: true,
    aside: true
  }),
  plugins: [
    seoPlugin({
      hostname: 'https://pagetual.hoothin.com',
      autoDescription: false,
      author: {
        name: 'Hoothin',
        email: 'rixixi@gmail.com'
      },
      canonical: page => 'https://pagetual.hoothin.com' + ((/[^\/]%/.test(page.path) && page.path.replace(/\.html/, '') + '.html') || page.path),
      customHead: (head, page) => {
        // 获取当前页面对应的英文版本路径（x-default）
        let defaultPath = page.path;
        if (defaultPath.indexOf('/article/') !== -1 || defaultPath.indexOf('zi-dong-xia-yi-ye') !== -1) return;
        // 如果是非英文页面，移除语言前缀得到英文版本路径
        const langPrefixes = ['/cn/', '/ja/', '/tw/', '/de/', '/es/', '/fr/', '/pt/', '/ru/', '/ko/', '/vi/'];
        for (const prefix of langPrefixes) {
          if (defaultPath.startsWith(prefix)) {
            defaultPath = defaultPath.substring(prefix.length - 1);
            break;
          }
        }

        // 添加 x-default hreflang
        head.push(['link', {
          rel: 'alternate',
          hreflang: 'x-default',
          href: 'https://pagetual.hoothin.com' + defaultPath
        }]);
      }
    }),
    googleAnalyticsPlugin({
      id: 'G-RK2BPL3B0G',
    }),
    sitemapPlugin({
      hostname: 'pagetual.hoothin.com',
    })
  ],
  alias: {
    '@theme/Sidebar.vue': path.resolve(__dirname, './theme/components/Sidebar.vue'),
  },
}