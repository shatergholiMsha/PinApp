<template>
  <div class="error-page">
    <h1>{{ error.statusCode || 404 }}</h1>
    <p class="message">{{ error.message || 'Oops! Page not found.' }}</p>
    <NuxtLink to="/" class="home-btn">Back to Home</NuxtLink>
  </div>
</template>

<script setup>
defineProps({ error: Object })
</script>

<style>
.error-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #eeeeee;
  color: #111;
  text-align: center;
  padding: 2rem;
}

.error-page h1 {
  font-size: 5rem;
  margin-bottom: 1rem;
}

.message {
  font-size: 1.25rem;
  color: #444;
  margin-bottom: 2rem;
}

.home-btn {
  background-color: #e53935;
  color: #fff;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: background 0.3s ease;
}

.home-btn:hover {
  background-color: #c62828;
}
</style>
