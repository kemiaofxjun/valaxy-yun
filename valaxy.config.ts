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
        id: '2049540645',
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

  theme: 'yun',

  themeConfig: {
  banner: {
    enable: true,
    title: '喵洛阁',
    cloud: {
      enable: true,
    },
    },

    notice: {
      enable: true,
      content: '欢迎来到克喵的博客！<br>如果网站有什么问题，优先<kbd>CTRL</kbd>+<kbd>F5</kbd>刷新！<br>还有什么问题的话优先<a href="mailto:me@mail.kemeow.top" target="_blank" rel="noopener">邮箱</a>联系我。',
    },

    pages: [
      {
        name: '我的小伙伴们',
        url: '/links/',
        icon: 'i-ri-genderless-line',
        color: 'dodgerblue',
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

