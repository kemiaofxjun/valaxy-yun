<script setup lang="ts">
import { ref } from 'vue'
import { HitokotoType, useAddonHitokoto } from 'valaxy-addon-hitokoto'

const { hitokoto, fetchHitokoto } = useAddonHitokoto()
const isLoading = ref(false)

async function manualRefresh() {
  isLoading.value = true
  await fetchHitokoto()
  isLoading.value = false
}
</script>

<template>
  <span>一言: {{ hitokoto.hitokoto }}</span>
  <span>来自: {{ hitokoto.from }}</span>
  <button :disabled="isLoading" @click="manualRefresh">
    {{ isLoading ? '刷新中...' : '手动刷新' }}
  </button>
</template>
