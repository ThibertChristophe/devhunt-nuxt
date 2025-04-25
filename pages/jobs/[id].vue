<template>
    <div>
        <div v-if="!job" class="min-h-screen bg-black/[0.96] antialiased flex items-center justify-center">
              <div class="text-center z-10">
                  <h1 class="text-3xl font-bold text-white mb-4">Job Not Found</h1>
                  <p class="text-gray-400 mb-6">The job you're looking for doesn't exist or has been removed.</p>
                  <UButton label="Back to Jobs" class="bg-purple-600 hover:bg-purple-700 text-white" />
              </div>
          </div>
    </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { data: job } = useFetch(`/api/jobs/${route.params.id}`)
</script>
