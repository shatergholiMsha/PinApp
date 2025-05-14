<template>
  <div class="container py-4">
    <NuxtLink to="/" class="btn btn-outline-secondary mb-5">
      <img src="../../assets/svgs/backArrow.svg" class="default" alt="back" />
      <img src="../../assets/svgs/backArrowHover.svg" class="hover" alt="back-hover" />
      Back</NuxtLink
    >
    <div v-if="pin" class="pinDetail">
      <img :src="useResponsiveSrc(pin.images)" :alt="pin.title" class="main-img mb-3" />
      <h2 class="mb-2">{{ pin.title }}</h2>
      <p class="text-muted">{{ pin.description }}</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import { usePinsStore } from "~/store/usePinsStore";
import useResponsiveSrc from "~/composables/useResponsiveSrc";
import { useError } from "#app";

const error = useError();
const route = useRoute();
const store = usePinsStore();

const pin = computed(() => store.pins.find((p) => p.id === route.params.id));

onMounted(() => {
  if (!pin.value) {
    error.value = createError({
      statusCode: 404,
      message: "Pin not found",
    });
  }
});
</script>

<style scoped lang="scss">
.btn-outline-secondary {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  .default {
    display: block;
  }
  .hover {
    display: none;
  }
  &:hover {
    .default {
      display: none;
    }
    .hover {
      display: block;
    }
  }
}

.pinDetail {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;

  .main-img {
    width: 100%;
    border-radius: 12px;
    box-shadow: 0 4px 18px rgba(0, 0, 0, 0.1);
  }

  h2 {
    font-size: 1.5rem;
    font-weight: bold;
  }

  p {
    font-size: 1rem;
  }
}
</style>
