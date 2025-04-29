<template>
  <div class="min-h-screen bg-black/[0.96] antialiased">
    <!-- Ambient background with moving particles -->
    <div class="h-full w-full absolute inset-0 z-0">
      <SparklesCore id="tsparticlesfullpage" background="transparent" :min-size="0.6" :max-size="1.4"
        :particle-density="2" class="w-full h-full" particle-color="#FFFFFF" />
    </div>
    <!-- Hero -->
    <section class="relative pt-20 pb-10 overflow-hidden">
      <div class="container mx-auto px-4">
        <motion.div :initial="{ opacity: 0, y: 20 }" :animate="{ opacity: 1, y: 0 }" :transition="{ duration: 0.5 }"
          class="text-center max-w-4xl mx-auto mb-16">
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-6">
            Discover Your Next
            <span class="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Career Destination
            </span>
          </h1>
          <p class="text-xl text-gray-400 mb-8">
            Explore top tech companies hiring talented developers like you. Find the perfect company culture and
            growth opportunities.
          </p>

          <div id="searchBar" class="relative max-w-2xl mx-auto">
            <UInput v-model="search" type="text" name="keyword" placeholder="Search for jobs, skills, companies..."
              trailing-icon="i-lucide-search" class="w-full" size="xl" variant="subtle" />
          </div>
        </motion.div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
  import { motion } from "motion-v";

  const search = ref('')

</script>