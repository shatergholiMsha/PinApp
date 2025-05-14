<template>
  <div ref="scrollMark" style="height: 2px"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { usePinsStore } from "../store/usePinsStore";

const store = usePinsStore();
const scrollMark = ref(null);

let observer;

onMounted(() => {
  observer = new IntersectionObserver(
    (observeData) => {
      console.log(observeData[0], "this is observe Data___");
      if (observeData[0].isIntersecting && store.bookmark && !store.isLoading) {
        store.fetchPins();
      }
    },
    { rootMargin: "200px" }
  );

  if (scrollMark.value) {
    observer.observe(scrollMark.value);
  }
});

onUnmounted(() => {
  if (observer && scrollMark.value) {
    observer.unobserve(scrollMark.value);
  }
});
</script>
