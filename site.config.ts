import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  url: 'https://yun.kemeow.top/',
  lang: 'zh-CN',
  title: '喵洛阁',
  timezone: 'Asia/Shanghai',
  author: {
    avatar: 'https://img.314926.xyz/images/2025/08/09/kemiaofxjun.webp',
    email: 'me@mail.kemeow.top',
    link: 'https://yun.kemeow.top',
    name: '克喵爱吃卤面',
    status: {
      emoji: '📖',
      message: '我还在不断努力中。。。',
    },
  },
  subtitle: '我们不但是守护者，还是一群时刻对抗失控和疯狂的可怜虫。',
  description: '愿你看轻一切真相后，依旧热爱你的家人和朋友。',

  pageSize: 7,

  lastUpdated: true,

  license: {
    enabled: true,
    language: '',
    type: 'by-nc-sa',
  },

    search: {
    enable: true,
    type: 'fuse',
  },
  fuse: {
    /**
     * 设置搜索的文件路径
     */
    // pattern: 'pages/**/*.md',
    options: {
      keys: ['title', 'tags', 'categories', 'excerpt', 'content'],
      /**
       * @default 0.6
       * @see https://www.fusejs.io/api/options.html#threshold
       * 设置匹配阈值，越低越精确
       */
      // threshold: 0.6,
      /**
       * @default false
       * @see https://www.fusejs.io/api/options.html#ignoreLocation
       * 忽略位置
       * 这对于搜索文档全文内容有用，若无需全文搜索，则无需设置此项
       */
      ignoreLocation: true,
    },
  },

  comment: {
    enable: true,
  },

  frontmatter: {
    time_warning: 180 * 24 * 60 * 60 * 1000,
  },

  cdn: {
    prefix: 'https://unpkg.com/',
  },

  mediumZoom: {
    enable: true,
    selector: '',
    options: {},
  },

  vanillaLazyload: {
    enable: true,
    options: {},
  },

  statistics: {
    enable: true,
    readTime: {
      speed: {
        cn: 300,
        en: 100,
      },
    },
  },

  social: [
    {
      name: 'RSS',
      link: '/atom.xml',
      icon: 'i-ri-rss-line',
      color: 'orange',
    },
    {
      name: 'QQ',
      link: 'https://qm.qq.com/q/6SICgaZ5kY',
      icon: 'i-ri-qq-line',
      color: '#12B7F5',
    },
    {
      name: 'GitHub',
      link: 'https://github.com/kemiaofxjun',
      icon: 'i-ri-github-line',
      color: '#6e5494',
    },
    // {
    //   name: '微博',
    //   link: 'https://weibo.com/jizhideyunyoujun',
    //   icon: 'i-ri-weibo-line',
    //   color: '#E6162D',
    // },
    // {
    //   name: '豆瓣',
    //   link: 'https://www.douban.com/people/yunyoujun/',
    //   icon: 'i-ri-douban-line',
    //   color: '#007722',
    // },
    {
      name: '网易云音乐',
      link: 'https://music.163.com/#/user/home?id=1725716511',
      icon: 'i-ri-netease-cloud-music-line',
      color: '#C20C0C',
    },
    // {
    //   name: '知乎',
    //   link: 'https://www.zhihu.com/people/yunyoujun/',
    //   icon: 'i-ri-zhihu-line',
    //   color: '#0084FF',
    // },
    {
      name: '哔哩哔哩',
      link: 'https://space.bilibili.com/3546643173477234',
      icon: 'i-ri-bilibili-line',
      color: '#FF8EB3',
    },
    // {
    //   name: '微信公众号',
    //   link: 'https://cdn.yunyoujun.cn/img/about/white-qrcode-and-search.jpg',
    //   icon: 'i-ri-wechat-2-line',
    //   color: '#1AAD19',
    // },
    {
      name: 'Twitter',
      link: 'https://twitter.com/kemiaofxjun',
      icon: 'i-ri-twitter-x-fill',
      color: 'black',
    },
    {
      name: 'Telegram Channel',
      link: 'https://t.me/kemiaofx_me',
      icon: 'i-ri-telegram-line',
      color: '#0088CC',
    },
    {
      name: 'E-Mail',
      link: 'mailto:me@mail.kemeow.top',
      icon: 'i-ri-mail-line',
      color: '#8E71C1',
    },
    {
      name: 'Travelling',
      link: 'https://www.travellings.cn/go.html',
      icon: 'i-ri-train-line',
      color: 'var(--va-c-text)',
    },
  ],

  sponsor: {
    enable: true,
    title: '我很可爱，请给我钱！',
    methods: [
      {
        name: '支付宝',
        url: 'https://img.314926.xyz/images/2025/07/12/alipay.webp',
        color: '#00A3EE',
        icon: 'i-ri-alipay-line',
      },
      // {
      //   name: 'QQ 支付',
      //   url: 'https://cdn.yunyoujun.cn/img/donate/qqpay-qrcode.png',
      //   color: '#12B7F5',
      //   icon: 'i-ri-qq-line',
      // },
      {
        name: '微信支付',
        url: 'https://img.314926.xyz/images/2025/07/12/wechat.webp',
        color: '#2DC100',
        icon: 'i-ri-wechat-pay-line',
      },
    ],
  },
})
