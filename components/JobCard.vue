<template>
  <div class="relative group">
    <div :class="[
      'cursor-pointer hover:border-purple-500/50 bg-gray-800/70 backdrop-blur-sm border border-gray-700 rounded-lg transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/10',
      viewMode === 'compact' ? 'p-3' : 'p-6'
    ]">
      job
    </div>
  </div>
</template>

<script setup lang="ts">
  defineProps({
    job: {
      type: Object,
      required: true
    },
    viewMode: {
      type: String,
      default: "list"
    }
  })
</script>