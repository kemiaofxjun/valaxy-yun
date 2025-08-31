<script setup lang="ts">
import { useAppStore } from 'valaxy'

import { useI18n } from 'vue-i18n'

const app = useAppStore()

const { t } = useI18n()
</script>

<template>
  <div class="post-card" m="auto" p="4">
    <div flex="~ wrap" class="m-2 items-center justify-center gap-4">
      <a
        class="flex items-center justify-center border-none!"
        href="https://afdian.com/@kemiaofx"
        target="_blank"
      >
        <SponsorBtn>
          <span>通过</span>
          <span class="flex items-center justify-center" m="x-1">
            <div i-ri-flashlight-line />爱发电
          </span>
          <span>赞助我</span>
        </SponsorBtn>
      </a>

      <a
        class="flex items-center justify-center border-none!"
        href="https://donate.kemeow.top/#"
        target="_blank"
      >
        <SponsorBtn color="green">
          <span>通过</span>
          <span class="flex items-center justify-center" m="x-1">
            <div i-ri-wechat-line />网站
          </span>
          <span>文章赞赏</span>
        </SponsorBtn>
      </a>

      <!-- <a
        class="flex items-center justify-center border-none!"
        href="https://github.com/sponsors/YunYouJun"
        target="_blank"
      >
        <SponsorBtn :color="app.isDark ? 'blue' : 'dark'">
          <span>通过</span>
          <span class="flex items-center justify-center" m="x-1">
            <div i-ri-github-line />GitHub
          </span>
          <span>赞助我</span>
        </SponsorBtn>
      </a> -->
    </div>

    <div class="p-2 flex-center">
      {{ t("tooltip") }}
    </div>
  </div>
</template>
