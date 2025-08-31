<template>
  <div id="friend-circle-lite-root"></div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // 设置全局配置
  if (typeof window.UserConfig === 'undefined') {
    window.UserConfig = {
      private_api_url: 'https://fc.kemeow.top/',
      page_turning_number: 24,
      error_img: 'https://pic.imgdb.cn/item/6695daa4d9c307b7e953ee3d.jpg',
    }
  }

  // 动态加载 CSS 和 JS
  const loadScript = (src) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script')
      script.src = src
      script.onload = resolve
      script.onerror = reject
      document.body.appendChild(script)
    })
  }

  const loadStyle = (href) => {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = href
    document.head.appendChild(link)
  }

  loadStyle('https://fastly.jsdelivr.net/gh/willow-god/Friend-Circle-Lite/main/fclite.min.css')
  loadScript('https://fastly.jsdelivr.net/gh/willow-god/Friend-Circle-Lite/main/fclite.min.js')
})
</script>

<style scoped>
#friend-circle-lite-root {
  padding: 1rem;
}
</style>
