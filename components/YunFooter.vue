<script lang="ts" setup>
import { useScriptTag } from '@vueuse/core'
import YunFooter from '../components/customfooter.vue'
import { useIntervalFn } from '@vueuse/core'
import { useAddonHitokoto } from 'valaxy-addon-hitokoto'

const { hitokoto, fetchHitokoto } = useAddonHitokoto()

useIntervalFn(() => {
  fetchHitokoto()
}, 6000)

useScriptTag('//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js')
</script>

<template>

  <YunFooter>
  <span>一言: {{ hitokoto.hitokoto }}</span>
  <span>来自: {{ hitokoto.from }}</span>
  
    <div>本站总访问量 <span id="busuanzi_value_site_pv" /> 次</div>
    <div>本站访客数 <span id="busuanzi_value_site_uv" /> 人次</div>
        <VCLiveTime start-time="2025-08-30">
      <template #live-time-before>
        <span>本站已运行</span>
      </template>
      <template #live-time-after>
        <span>感谢你来到我的博客！</span>
      </template>
    </VCLiveTime>
  </YunFooter>
</template>
