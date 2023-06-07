<template>
  <svg :style="{ color }" :width="size" :height="size" viewBox="0 0 24 24">
    <path :d="icon" />
  </svg>
</template>

<script setup>
const props = defineProps({
  color: String,
  icon: { type: String, required: true },
  size: { type: [String, Number], default: 24 }
})

/*const viewBox = computed(() => { return `0 0 */
</script>

<style lang="scss" scoped>
svg {
  path {
    fill: currentColor;
  }
}
</style>
