<template>
  <div class="min-h-screen bg-black/[0.96] antialiased">
    <!-- Ambient background with moving particles -->
    <div class="h-full w-full absolute inset-0 z-0">
      <SparklesCore id="tsparticlesfullpage" background="transparent" :min-size="0.6" :max-size="1.4"
        :particle-density="2" class="w-full h-full" particle-color="#FFFFFF" />
    </div>

    <!-- The page -->
    <div class="relative z-10 container mx-auto px-4 py-8">
      <motion.div :initial="{ opacity: 0, y: 20 }" :animate="{ opacity: 1, y: 0 }" :transition="{ duration: 0.5 }"
        class="mb-8">
        <h1 class="text-3xl md:text-4xl font-bold text-white mb-2">
          Find Your
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">Dream</span>
          Developer Job
        </h1>
        <p class="text-gray-400">Browse through hundreds of opportunities for tech professionals</p>
      </motion.div>

      <!-- Search and filters section -->
      <motion.div :initial="{ opacity: 0, y: 20 }" :animate="{ opacity: 1, y: 0 }" :transition="{
        duration: 0.5, delay:
          0.1
      }" class="mb-8">
        <div class="flex flex-col md:flex-row gap-4 mb-6">
          <div class="relative flex-grow">
            <!-- Searchbar -->
            <UInput v-model="query" type="text" name="keyword" placeholder="Search for jobs, skills, companies..."
              icon="i-lucide-search" :ui="{
                base: 'w-full px-4 py-4 pr-10 rounded-lg bg-gray-800/50  border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent',
                root: 'w-full ',
              }" />
          </div>

          <!-- Location -->
          <USlideover title="Location" description="Choose location" close-icon="i-lucide-arrow-right" :ui="{
            content: 'border-l border-purple-500/80',
          }">
            <UButton label="Location" color="neutral" variant="subtle"
              class="h-[50px] bg-gray-800/50 border-gray-700 text-white hover:bg-gray-700" icon="i-lucide-map-pin" />
            <template #body>

              <UCheckbox label="Bruxelles" />
            </template>
          </USlideover>

          <!-- Skills -->
          <USlideover title="Skills" description="Choose skills" close-icon="i-lucide-arrow-right" :ui="{
            content: 'border-l border-purple-500/80',
          }">
            <UButton label="Skills" color="neutral" variant="subtle"
              class="h-[50px] bg-gray-800/50 border-gray-700 text-white hover:bg-gray-700" icon="i-lucide-code" />
            <template #body>

              <UCheckbox label="Ruby" />
            </template>
          </USlideover>

          <!-- Contract type -->
          <USelect v-model="contractValue" placeholder="Select contract type" size="md" :items="contractTypes"
            class="cursor-pointer w-[180px] h-[50px] bg-gray-800/50 border-gray-700 text-white" :ui="{
              item: 'cursor-pointer hover:bg-gray-700 hover:text-purple-500 data-[state=checked]:text-purple-500 data-[highlighted]:bg-inherit data-[highlighted]:text-white'
            }" />

          <UButton v-if="true" label="Clear Filters" variant="subtle" icon="i-lucide-x"
            class="h-[50px] text-gray-400 hover:text-purple-500" />
        </div>
      </motion.div>

      <!-- Active filter section -->
      <motion.div :initial="{ opacity: 0, y: -10 }" :animate="{ opacity: 1, y: 0 }" class="flex flex-wrap gap-2 mb-4">
        <!-- v-for location -->
        <motion.div key={location} :initial="{ opacity: 0, scale: 0.8 }" :animate="{ opacity: 1, scale: 1 }"
          :exit="{ opacity: 0, scale: 0.8 }">
          <UBadge variant="outline" icon="i-lucide-map-pin" trailing-icon="i-lucide-x"
            class="rounded-full cursor-pointer bg-gray-800/50 text-white border-gray-700 px-3 py-1">
            {location}
          </UBadge>
        </motion.div>

        <!-- v-for type -->
        <motion.div key={type} :initial="{ opacity: 0, scale: 0.8 }" :animate="{ opacity: 1, scale: 1 }"
          :exit="{ opacity: 0, scale: 0.8 }">
          <UBadge variant="outline" icon="i-lucide-briefcase-business" trailing-icon="i-lucide-x"
            class="rounded-full cursor-pointer bg-gray-800/50 text-white border-gray-700 px-3 py-1">
            {selectedType}
          </UBadge>
        </motion.div>

        <!-- v-for skills -->
        <motion.div key={skill} :initial="{ opacity: 0, scale: 0.8 }" :animate="{ opacity: 1, scale: 1 }"
          :exit="{ opacity: 0, scale: 0.8 }">
          <UBadge variant="outline" icon="i-lucide-code" trailing-icon="i-lucide-x"
            class="rounded-full cursor-pointer bg-gray-800/50 text-white border-gray-700 px-3 py-1">
            {skill}
          </UBadge>
        </motion.div>
      </motion.div>

      <!-- Number of result, View Mode & By : combo -->
      <motion.div :initial="{ opacity: 0, y: 20 }" :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.5, delay: 0.2 }" class="mb-4 flex justify-between items-center">
        <p class="text-gray-400">
          {{ jobsData?.jobs?.length }} {{ jobsData?.jobs?.length === 1 ? "job" : "jobs" }} found
        </p>
        <div class="flex items-center gap-4">
          <!-- View mode -->
          <div class="flex items-center bg-gray-800/50 rounded-md p-1 gap-2">
            <UButton :class="['p-1.5 rounded',
              viewMode === 'list' ? 'bg-purple-600 text-white' : 'bg-transparent text-gray-400 hover:text-white'
            ]" icon="i-lucide-layout-list" @click="viewMode = 'list'" />
            <UButton :class="['p-1.5 rounded',
              viewMode === 'compact' ? 'bg-purple-600 text-white' : 'bg-transparent text-gray-400 hover:text-white'
            ]" icon="i-lucide-list" @click="viewMode = 'compact'" />
            <UButton :class="['p-1.5 rounded',
              viewMode === 'grid' ? 'bg-purple-600 text-white' : 'bg-transparent text-gray-400 hover:text-white'
            ]" icon="i-lucide-layout-grid" @click="viewMode = 'grid'" />
          </div>
          <!-- Combo By : -->
          <div class="flex items-center text-gray-400 text-sm">
            <span class="mr-2">By: </span>
            <USelect v-model="sortBy" placeholder="Select contract type" size="md" :items="sortsType"
              class="cursor-pointer h-8 text-sm bg-transparent border-gray-700 text-white" :ui="{
                item: 'cursor-pointer hover:bg-gray-700 hover:text-purple-500 data-[state=checked]:text-purple-500 data-[highlighted]:bg-inherit data-[highlighted]:text-white'
              }" />
          </div>
        </div>
      </motion.div>

      <!-- Job listing -->
      <div v-if="jobsData?.jobs?.length"
        :class="[viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 gap-6' : viewMode === 'compact' ? 'space-y-3' : 'space-y-6']">
        <div v-for="(job, index) in jobsData?.jobs" :key="job.id" class="relative group">
          <JobCard :job="job" :view-mode="viewMode" :index="index" />
        </div>

        <div class="mt-8 flex justify-between items-center">
          <UPagination v-model:page="page" :total="jobsData?.pagination?.total_count" :items-per-page="6" />
        </div>
      </div>

      <!-- No job found -->
      <motion.div v-else :initial="{ opacity: 0 }" :animate="{ opacity: 1 }" :transition="{ duration: 0.5 }"
        class="text-center py-16 bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl">
        <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-800 mb-4">
          <UIcon name="i-lucide-search-x" class=" text-gray-400" size="30" />
        </div>
        <h3 class="text-xl font-medium text-white mb-2">No jobs found</h3>
        <p class="text-gray-400 max-w-md mx-auto">
          We couldn't find any jobs matching your criteria. Try adjusting your filters or search term.
        </p>
        <UButton label="Clear Filters" variant="subtle" size="xl" :ui="{
          base: 'mt-4 border-purple-500 bg-purple-500/20 text-white hover:text-purple hover:bg-inherit',
        }" />
      </motion.div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { motion } from "motion-v";
  import JobCard from "~/components/JobCard.vue";
  import type { JobsResponse } from '~/types/jobs';
  const viewMode = ref<string>('list')
  const contractValue = ref<string>('full_time')
  const sortBy = ref<string>('relevance')
  const page = ref<number>(1)
  const query = ref<string>("")

  const { data: jobsData, refresh } = await useFetch<JobsResponse>('http://localhost:3000/api/jobs', {
    query: { page, query }
  })

  /*watch(
    () => [query.value],
    () => {
      page.value = 1
      refresh()
    }
  )*/

  watch(query, () => {
      page.value = 1
      refresh()
  })
  

  const contractTypes = [
    { label: 'Full Time', value: 'full_time' },
    { label: 'Part Time', value: 'part_time' },
    { label: 'Contract', value: 'contract' },
    { label: 'Internship', value: 'internship' },
  ]
  const sortsType = [
    { label: 'Relevance', value: 'relevance' },
    { label: 'Date', value: 'date' },
    { label: 'Salary', value: 'salary' },
  ]

</script>
