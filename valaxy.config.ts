import type { UserThemeConfig } from 'valaxy-theme-yun'
import { defineValaxyConfig } from 'valaxy'
import { addonAbbrlink } from 'valaxy-addon-abbrlink'
import { addonBangumi } from 'valaxy-addon-bangumi'
import { addonComponents } from 'valaxy-addon-components'
import { addonLightGallery } from 'valaxy-addon-lightgallery'
// import { addonAlgolia } from 'valaxy-addon-algolia'
import { addonMeting } from 'valaxy-addon-meting'
import { addonFace } from 'valaxy-addon-face'
import { addonHitokoto } from 'valaxy-addon-hitokoto'
import { addonWaline } from 'valaxy-addon-waline'
// import BookList from './components/BookList.vue'

// add icons what you will need
const safelist = [
  'i-ri-home-line',
]

const colors = ['purple', 'green', 'blue', 'dark']
colors.forEach((c) => {
  safelist.push(...[
    `border-${c}-300`,
    `text-${c}-600`,
    `hover:bg-${c}-600`,
    `dark:text-${c}-300`,
    `focus:ring-${c}-300`,
  ])
})


/**
 * User Config
 */
export default defineValaxyConfig<UserThemeConfig>({
  // site config see site.config.ts

  addons: [
    addonAbbrlink(),
    addonBangumi({
      api: 'https://yi_xiao_jiu-bangumi.web.val.run',
      bilibiliUid: '3546643173477234',
      bgmEnabled: false,
    }),
    addonComponents(),
    addonLightGallery(),
    // addonAlgolia({
    //   appId: '',
    //   apiKey: '',
    //   indexName: '',
    // }),
        addonMeting({

      global: true,
      /** @see https://github.com/metowolf/MetingJS */
          props: {
        api: 'https://meting.051531.xyz/meting',
        id: '1466975169',
        server: 'netease',
        type: 'song',
          },
        options: {
          animationIn: true,
          autoHidden: false,
          lyricHidden: false
  }
    }),
    addonFace({
      // 配置
      defaultSuffix: 'webp'
    }),
    addonHitokoto({
      api: 'https://yun.kemeow.top/api/hitokoto',
    }),
    addonWaline({
      serverURL: 'https://waline.kemeow.top',
    }),
  ],

    siteConfig: {
    // 启用评论
    comment: {
      enable: true
    },
  },

  modules: {
    rss: {
      enable: true,
      fullText: false,
    },
  },

    vite: {
    plugins: [
      // 自动导入组件插件（通常 Valaxy 已内置）
    ]
  },

  theme: 'yun',

  // components: {
  //   BookList
  // },

  themeConfig: {
  banner: {
    enable: true,
    title: '喵洛阁',
    cloud: {
      enable: true,
    },
    },

    nav: [
      { text: '我的文章', link: '/posts/', icon: 'i-ri-article-line' },
      { text: '标签', link: '/tags/', icon: 'i-ri-bookmark-3-line' },
      { text: '分类', link: '/categories/', icon: 'i-ri-folder-3-line' },
      { text: '项目列表', link: '/projects', icon: 'i-ri-gallery-view' },
      { text: '我的书房', link: '/book', icon: 'i-ri-git-repository-line' },
    { text: '我的追番', link: '/bangumi', icon: 'i-ri-bilibili-fill' },
    { text: '友情链接', link: '/links/', icon: 'i-ri-link' },
    { text: '朋友圈', link: '/fc/', icon: 'i-ri-wechat-line' },
    { text: '微语', link: '/talks/', icon: 'i-ri-chat-3-line' },
    // { text: '老婆列表', link: '/girls/', icon: 'i-ri-women-line' },
    { text: '赞助者们', link: '/sponsors/', icon: 'i-ri-heart-line' },
  ],

    notice: {
      enable: true,
      content: '欢迎来到克喵的博客！<br>如果网站有什么问题，优先<kbd>CTRL</kbd>+<kbd>F5</kbd>刷新！<br>还有什么问题的话优先<a href="mailto:me@mail.kemeow.top" target="_blank" rel="noopener">邮箱</a>联系我。',
    },

    pages: [
      {
        name: '标签',
        url: '/tags/',
        icon: 'i-ri-bookmark-3-line',
        color: 'yallow',
      },
      {
        name: '分类',
        url: '/categories/',
        icon: 'i-ri-folder-3-line',
        color: 'green',
      },
      {
        name: '我的小伙伴们',
        url: '/links/',
        icon: 'i-ri-genderless-line',
        color: 'dodgerblue',
      },
      {
        name: '鱼塘',
        url: '/fc/',
        icon: 'i-ri-wechat-line',
        color: 'hotpink',
      },
      {
        name: '赞助者',
        url: '/sponsors/',
        icon: 'i-ri-heart-line',
        color: 'violet',
      },
      {
        name: '微语',
        url: '/talks/',
        icon: 'i-ri-chat-3-line',
        color: 'blue',
      },
      {
        name: '项目列表',
        url: '/projects/',
        icon: 'i-ri-gallery-view',
        color: 'green',
      },
      {
        name: '我的书房',
        url: '/book/',
        icon: 'i-ri-git-repository-line',
        color: 'yellow',
      },
      {
        name: '我的追番',
        url: '/bangumi/',
        icon: 'i-ri-bilibili-fill',
        color: 'blue',
      },
      // {
      //   name: '喜欢的女孩子',
      //   url: '/girls/',
      //   icon: 'i-ri-women-line',
      //   color: 'hotpink',
      // },
    ],

    footer: {
      since: 2025,
      beian: {
        enable: true,
        icp: '萌ICP备20250530号',
      },
    },
  },

  unocss: { safelist },
})

