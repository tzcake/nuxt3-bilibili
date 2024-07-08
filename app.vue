<template>
  <div>
    <!-- Nuxt自带基于文件的路由系统 -->
    <!-- NuxtLink相当于RouterLink -->
    <!-- NuxtPage相当于RouterView -->
    <!-- 首页 index/index.vue -->
    <NuxtLink to="/">首页</NuxtLink>
    <!-- 视频页 video/index.vue -->
    <NuxtLink to="/video">视频页</NuxtLink>
    <!-- Nuxt 页面路由，相当于RouterView -->
    <NuxtPage />
  </div>
</template>
