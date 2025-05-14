<template>
  <div class="m-3">
    <div class="pin-grid">
      <div class="pin">
        <PinCard v-for="pin in pinsArray" :key="pin.id" :pin="pin" />
      </div>
    </div>
    <div v-if="store.isLoading && pinsArray.length === 0" class="main-loader">
      <div class="spinner-border"></div>
      <p class="loader-text">Looking for {{ store.query }}...</p>
    </div>

    <div v-if="store.error" class="alert alert-danger text-center">
      <strong>Error: </strong>{{ store.error }}
    </div>
    <InfinityScroll v-if="store.bookmark" />
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";
import InfinityScroll from "./InfinityScroll.vue";
import PinCard from "./PinCard.vue";
import { usePinsStore } from "../store/usePinsStore";
const store = usePinsStore();
const pinsArray = computed(() => store.pins);

const handleScroll = async () => {
  const scrollPosition = window.innerHeight + window.scrollY;
  const bottomOffset = document.body.offsetHeight - 300;

  if (scrollPosition >= bottomOffset && !store.isLoading && store.bookmark) {
    await store.fetchPins();
  }
};

onMounted(async () => {
  window.addEventListener("scroll", handleScroll);
  if (pinsArray.value.length > 0) {
    store.restoreScroll();
  }
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style lang="scss" scoped>
.pin-grid {
  column-gap: 1rem;
  column-count: 1;

  @media (min-width: 600px) {
    column-count: 2;
  }
  @media (min-width: 900px) {
    column-count: 3;
  }
  @media (min-width: 1200px) {
    column-count: 4;
  }
}
.main-loader {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 70vh;
  width: 100%;
  gap: 10px;
  color: #666;
}

.spinner-border {
  width: 50px;
  height: 50px;
}

.loader-text {
  margin-top: 20px;
  font-size: 30px;
  opacity: 0.8;
}
</style>
