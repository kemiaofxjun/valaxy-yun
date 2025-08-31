<template>
  <div class="book-card">
    <img :src="book.cover" :alt="book.title" class="cover" />
    <div class="info">
      <h3>{{ book.title }}</h3>
      <p class="author">{{ book.author }}</p>
      <p class="status">{{ book.status }}</p>
      <p class="rating">评分：{{ '★'.repeat(book.rating) }}</p>
      <a :href="book.link" target="_blank" class="detail-link">
        <span class="icon">🔗</span> 具体详情
      </a>
    </div>
  </div>
</template>

<script setup>
defineProps({
  book: Object
})
</script>

<style scoped>
.book-card {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: #fdfdfd;
  transition: box-shadow 0.3s ease;
}
.book-card:hover {
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
}
.cover {
  width: 100px;
  height: auto;
  border-radius: 6px;
  object-fit: cover;
}
.info {
  flex: 1;
}
.author, .status, .rating {
  margin: 0.2rem 0;
}
.detail-link {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  margin-top: 0.6rem;
  padding: 0.4rem 0.8rem;
  background-color: #007acc;
  color: white;
  font-size: 0.85rem;
  border-radius: 6px;
  text-decoration: none;
  transition: background-color 0.3s ease, transform 0.2s ease;
}
.detail-link:hover {
  background-color: #005fa3;
  transform: translateY(-1px);
}
.icon {
  font-size: 1rem;
  transition: transform 0.3s ease;
}
.detail-link:hover .icon {
  transform: rotate(20deg);
}
</style>
