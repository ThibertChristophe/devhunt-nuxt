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
              trailing-icon="i-lucide-search" class="w-full placeholder-gray-400" size="xl" variant="subtle" />
          </div>
        </motion.div>
      </div>
    </section>


    <!-- Filter section -->
    <section id="filter-section"
      class="py-6 border-t border-gray-800/50 backdrop-blur-sm bg-black/30 sticky top-20 z-20">
      <motion.div :initial="{ opacity: 0, y: 20 }" :animate="{ opacity: 1, y: 0 }" :transition="{
        duration: 0.5, delay:
          0.1
      }" class="container mx-auto px-4">
        <div class="flex flex-wrap items-center justify-between gap-4">
          <div class="flex flex-wrap items-center gap-3">

            <!-- Industry type -->
            <USelect v-model="industry" variant="subtle" placeholder="Industry" size="lg" :items="industryList"
              class="w-[180px]" icon="i-lucide-building" />

            <!-- Location -->
            <USelect v-model="location" variant="subtle" placeholder="Location" size="lg" :items="industryList"
              class="w-[180px]" icon="i-lucide-map-pin" />

            <!-- Company size -->
            <USelect v-model="size" variant="subtle" placeholder="Company size" size="lg" :items="industryList"
              class="w-[180px]" icon="i-lucide-users" />

            <!-- Featured only -->
            <UButton v-model="feature" variant="subtle" label="Featured" icon="i-lucide-star" size="lg" />

            <UButton v-if="search || industry || location || size || feature" label="Clear Filters" variant="ghost"
              icon="i-lucide-x" size="lg" @click="search = ''" />

          </div>

          <div class="flex items-center gap-2">
            <span class="mr-2 text-gray-400">Sort by : </span>
            <USelect v-model="sortBy" variant="outline" size="md" :items="sortsType" class="w-[125px]" />
          </div>
        </div>
      </motion.div>
    </section>
  </div>
</template>

<script setup lang="ts">
  import { motion } from "motion-v";

  const search = ref('')
  const industry = ref(0)
  const location = ref(0)
  const size = ref(0)
  const feature = ref(false)
  const sortBy = ref(1)

  const industryList = [
    { label: 'Chemical', value: 1 },
    { label: 'IT', value: 2 },
    { label: 'Finance', value: 3 },
    { label: 'RH', value: 4 },
  ]

  const sortsType = [
    { label: 'Relevance', value: 1 },
    { label: 'Date', value: 2 },
    { label: 'Salary', value: 3 },
  ]

</script>