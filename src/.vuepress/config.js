const navbar = [
  {
    text: '前端',
    children: [
      {
        text: 'CSS总结',
        link: '/css/CSS总结.md'
      },
      {
        text: '前端兼容性总结',
        link: '/javascript/前端兼容性总结.md'
      },
      {
        text: '前端面试总结',
        link: '/javascript/面试总结.md'
      },
      {
        text: 'typescript学习笔记',
        link: '/typescript/ts.md'
      }
    ]
  },
  {
    text: '基础',
    children: [

    ]
  },
  {
    text: '后端',
    children: [

    ]
  },
]
module.exports = {
  base: "/myblog/",
  title: 'linxing blog',
  description: 'there is no end to learning',
  lang: 'zh-CN',
  themeConfig: {
    logo: '/logo.png',
    repo: 'https://github.com/linxing1026',
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页',
    docsDir: 'src',
    lastUpdatedText: '最近更新时间',
    docsBranch: 'master',
    contributorsText: '贡献者列表',
    navbar: navbar,
    tip: '提示',
    warning: '注意',
    danger: '警告',
  },
  plugins:[
    [
        '@vuepress/plugin-search',
        {
            locales:{
              '/':{
                  placeholder:'搜索'
              }
            },
            hotKeys:['s','/']
        }
    ]
  ]
}
