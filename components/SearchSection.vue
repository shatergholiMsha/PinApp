<template>
  <form @submit.prevent="handleSearch" class="m-3">
    <div class="input-group">
      <input
        v-model="searchText"
        type="text"
        class="form-control"
        placeholder="Search images..."
        aria-label="Search"
      />
      <button class="btn btn-primary" type="submit">Search</button>
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'
import { usePinsStore } from '../store/usePinsStore'

const searchText = ref('')
const store = usePinsStore()

const handleSearch = async () => {
  if (!searchText.value.trim()) return

  store.query = searchText.value.trim()
  store.bookmark = '' 
  await store.fetchPins(true)
}

onBeforeRouteLeave(() => {
  store.saveScroll()
})
</script>
