// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  // 开启调试工具
  devtools: { enabled: true },
  // 应用模块
  modules: ["@vant/nuxt"],
  // 移动端适配
  postcss: {
    plugins: {
      "postcss-px-to-viewport": {
        viewportWidth: 375,
      },
    },
  },
});
