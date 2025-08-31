<template>
  <div>
    <div v-if="loading">加载中...</div>
    <div v-else-if="error">加载失败：{{ error }}</div>
    <div v-else class="book-list">
      <Book v-for="book in books" :key="book.title" :book="book" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Book from './Book.vue'

const books = ref([])
const loading = ref(true)
const error = ref(null)

onMounted(async () => {
  try {
    const res = await fetch('/data/books.json')
    books.value = await res.json()
  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
.book-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1rem;
}
</style>
