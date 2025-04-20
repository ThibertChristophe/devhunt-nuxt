<template>
  <ULink :to="to" raw exact active-class="text-white underline-active"
    inactive-class="text-gray-300 hover:text-white transition-colors group" class="relative">
    <slot />
    <span class="absolute -bottom-1 left-0 h-0.5 bg-purple-500 transition-all w-0 group-hover:w-full" />
  </ULink>
</template>

<script setup lang="ts">
  defineProps<{
    to: string
  }>()
</script>

<style scoped>
  .underline-active {
    position: relative;
  }

  .underline-active::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    height: 2px;
    width: 100%;
    background-color: #a855f7;
    /* Couleur violette */
    transition: width 0.3s;
  }
</style>
