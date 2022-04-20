import CodepenSnippet from '../../components/CodepenSnippet.vue'
import { defineClientAppEnhance } from '@vuepress/client'
export default defineClientAppEnhance(({ app, router, siteData }) => {
  app.component('CodepenSnippet', CodepenSnippet)
})
