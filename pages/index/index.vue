<script setup lang="ts">
import type {VideoItem} from '~/types/video'
// 通过useFetch获取频道列表数据
const {data:channelList}=await useFetch('/api/channel',{ method:'GET' })

// 获取视频列表数据
// useHead设置请求不携带referrer信息防止防盗链机制不显示图片
await useHead({
  meta: [ { 
    name:'referrer',
    content:'no-referrer'
  }]
})
const {data:videoList}=await useFetch('/api/video')

// 显示列表
const list = ref<VideoItem[]>([]);
// 加载状态
const loading = ref(false);
// 是否加载完成
const finished = ref(false);
// 页码
let page=1
let pageSize=20
// 滚动触底触发
const onLoad=() => {
  console.log(`滚动触底`);
  // 根据页码提取数据
  const data=videoList.value?.slice((page-1)*pageSize,page*pageSize) as VideoItem[]
  list.value.push(...data)
  // 页码累加
  page++
  // 加载结束
  loading.value=false
  if(videoList.value?.length==list.value.length){
    finished.value=true
  }
}

// 初始化加载-主动请求前20条数据，用于首屏渲染，方便SEO抓取到数据
onLoad()
</script>

<template>
  
  <!-- 频道模块 -->
  <van-tabs>
    <van-tab v-for="item in channelList" :key="item.id" :title="item.name" />
  </van-tabs>
  <!-- 视频列表 -->
  <van-list
  v-model:loading="loading"
  :finished="finished"
  finished-text="没有更多了"
  @load="onLoad"
  >
    <div class="video-list">
      <AppVideo v-for="item in list" :key="item.aid" :item="item" />
    </div>
  </van-list>
</template>

<style lang="scss">


// 视频列表
.video-list {
  display: flex;
  flex-wrap: wrap;
  padding: 10px 5px;
}


</style>