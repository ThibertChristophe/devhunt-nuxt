<template>
  <div class="relative min-h-[calc(100vh-76px)] flex items-center">
    <!-- Ambient background with moving particles -->
    <div class="h-full w-full absolute inset-0 z-0">
      <SparklesCore id="tsparticlesfullpage" background="transparent" :min-size="0.6" :max-size="1.5"
        :particle-density="3" class="w-full h-full" particle-color="#FFFFFF" />
    </div>

    <div class="absolute inset-0 overflow-hidden z-1">
      <FloatingPaper :count="6" />
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="max-w-4xl mx-auto text-center">
        <motion.div :initial="{ opacity: 0, y: 20 }" :animate="{ opacity: 1, y: 0 }" :transition="{ duration: 0.5 }">
          <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Transform Your Life with your
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Dream Job
            </span>
          </h1>
        </motion.div>

        <motion.p :initial="{ opacity: 0, y: 20 }" :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.5, delay: 0.2 }" class="text-gray-400 text-xl mb-8 max-w-2xl mx-auto">
          Find your perfect career match with our job platform. We connect you with positions that match your
          skills,
          experience, and aspirations.
        </motion.p>

        <motion.div :initial="{ opacity: 0, y: 20 }" :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.5, delay: 0.3 }" class="mb-8 max-w-2xl mx-auto">
          <form class="relative max-w-2xl mx-auto">
            <div class="relative">
              <input type="text" name="keyword" placeholder="Search for jobs, skills, companies..."
                class="w-full px-4 py-3 pr-24 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent">
              <UButton icon="i-lucide-search" size="lg"
                class="absolute right-1.5 top-1/2 -translate-y-1/2  flex items-center">
                <span>Search</span>
              </UButton>

            </div>

          </form>
        </motion.div>

        <motion.div :initial="{ opacity: 0, y: 20 }" :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.5, delay: 0.4 }"
          class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <UButton size="lg" icon="i-lucide-file-text">
            Upload Your CV
          </UButton>

          <UButton variant="subtle" size="lg" class="text-white" icon="i-lucide-sparkles">
            Magic Jobs
          </UButton>
        </motion.div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { motion } from "motion-v"
</script>
