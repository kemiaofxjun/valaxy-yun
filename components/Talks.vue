<template>
  <div id="artitalk_main"></div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // 引入 Artitalk 脚本
  const script = document.createElement('script')
  script.src = 'https://unpkg.com/artitalk'
  script.async = true
  script.setAttribute('data-pjax', '')
  script.onload = () => {
    // 初始化 Artitalk
    new Artitalk({
      appId: '20In9roWavNrTMj76UmVEALE-MdYXbMMI',
      appKey: 'Y8DPaodZp5fsFEFLMTwj2QEk',
      serverURL: 'https://artitalk.314926.xyz',
      pageSize: 50,
      shuoPla: '分享你的心情吧～',
      motion: 1,
      atComment: 1,
      bgImg: '',
      color1: '#ffffff',
      color2: '#ffffff',
      color3: '#3b9a9c',
    })
  }
  document.body.appendChild(script)
})
</script>

<style scoped>
#artitalk_main {
  margin-top: 2rem;
}
</style>
