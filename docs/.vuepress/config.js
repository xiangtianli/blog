/*
 * @Author: your name
 * @Date: 2020-06-30 14:32:59
 * @LastEditTime: 2020-07-02 13:24:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vuepresss/docs/.vuepress/config.js
 */ 
module.exports = {
  title: '李想天的笔记薄',
  description: 'it人笔记，前端工程师',
  theme: '@vuepress/blog',
  themeConfig: {
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: 'Last Updated',
    nav: [
      { text: '首页', link: '/' },
      { text: '分类', link: '/tag/'},
      { text: '关于我', link: '/about' },
      { text: 'Github', link: 'https://github.com/xiangtianli' }
    ],
    footer: {
      contact: [
        {
          type: 'github',
          link: 'https://github.com/xiangtianli',
        },
      ],
      copyright: [
        {
          text: 'Privacy Policy',
          link: 'https://policies.google.com/privacy?hl=en-US',
        },
        {
          text: 'MIT Licensed | Copyright © 2020-present Lxt 晋ICP备19010278号-1',
          link: '',
        },
      ],
    },
    smoothScroll: true
  },
  plugins: [
    ['@vuepress/blog', {
      directories: [
        {
          id: 'post',
          title: '首页',
          dirname: '_posts',
          path: '/',
          pagination: {
            lengthPerPage: 10,
          }
        },
      ],
      frontmatters: [
        {
          id: 'tag',
          keys: ['tags','tag'],
          path: '/tag/',
          layout: 'Tags',
          scopeLayout: 'Tag',
          title: '分类'
        },
      ],
      sitemap: {
        hostname: 'https://www.lxtblock.top'
      }
    }]
  ]
}