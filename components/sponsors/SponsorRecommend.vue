<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div flex="~ col" class="items-center">
    <div class="relative flex flex-col animate-fade-in animate-duration-1000 animate-iteration-1 items-center justify-center">
      <img
        class="fade-in xiao-yun-q z-2 m-auto inline-flex shadow-none! m-0!"
        src="https://img.314926.xyz/images/2025/08/13/no-background-kemiaofxjun.webp"
        alt="克喵爱吃卤面"
      >
      <p class="absolute bottom-0">
        如果你觉得我的分享不错，
        可以给我赞助一下~
      </p>
    </div>
    <RouterLink to="/projects/" class="border-none!">
      <div
        font="semibold"
        p="x-4 y-1"
        border="~ purple-300"
        class="inline-block items-center justify-center rounded-full text-sm text-purple-600 hover:(border-transparent bg-purple-600 text-white) dark:(text-purple-300) focus:(outline-none ring-2 ring-offset-2 ring-purple-600)"
      >
        {{ t('我的项目') }}
      </div>
    </RouterLink>
  </div>
</template>

<style>
.xiao-yun-q {
  width: 200px;
  aspect-ratio: 1;
}
</style>
