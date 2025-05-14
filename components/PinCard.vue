<template>
  <div class="pin">
    <NuxtLink class="imageOverlay" :to="`/pin/${pin.id}`">
      <img
        :src="useResponsiveSrc(pin.images)"
        :alt="pin.title || 'image'"
        class="img-fluid"
        loading="lazy"
        :class="{ loaded: isLoaded }"
        @load="isLoaded = true"
      />
      <div class="hoverOverlay">Open</div>
    </NuxtLink>
    <div class="pin-info pt-2 pb-2">
      {{ pin.title || pin.description || "" }}
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import useResponsiveSrc from "../composables/useResponsiveSrc";
const props = defineProps({
  pin: Object,
});
const isLoaded = ref(false);
</script>

<style scoped lang="scss">
.pin {
  break-inside: avoid;
  margin-bottom: 1rem;

  .imageOverlay {
    position: relative;
    display: block;

    img {
      width: 100%;
      min-height: 200px;
      border-radius: 8px;
      opacity: 0;
      filter: blur(8px);
      transition: opacity 0.6s ease, filter 0.6s ease;

      &.loaded {
        opacity: 1;
        filter: blur(0);
      }
    }

    .hoverOverlay {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 20px;
      font-weight: bold;
      background: rgba(0, 0, 0, 0.4);
      transition: opacity 0.3s ease;
      border-radius: 8px;
      pointer-events: none;
      opacity: 0;
    }

    &:hover .hoverOverlay {
      opacity: 1;
    }
  }
}
</style>
