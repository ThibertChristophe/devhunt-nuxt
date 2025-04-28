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

      <!-- <div>
        {{ jobsData }}
      </div> -->

      <!-- Search and filters section -->
      <motion.div :initial="{ opacity: 0, y: 20 }" :animate="{ opacity: 1, y: 0 }" :transition="{
        duration: 0.5, delay:
          0.1
      }" class="mb-8">
        <div class="flex flex-col md:flex-row gap-4 mb-6">
          <div class="relative flex-grow">
            <!-- Searchbar -->
            <UInput v-model="search" type="text" name="keyword" placeholder="Search for jobs, skills, companies..."
              icon="i-lucide-search" :ui="{
                base: 'w-full px-4 py-4 pr-10 rounded-lg bg-gray-800/50  border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent',
                root: 'w-full ',
              }" />
          </div>

          <!-- Location -->
          <USlideover title="Location" description="Choose location" close-icon="i-lucide-arrow-right" :ui="{
            content: 'border-l border-purple-500/80',
          }">
            <UButton label="Location" color="neutral" variant="subtle" class="h-[50px] " icon="i-lucide-map-pin" />
            <template #body>

              <UCheckbox label="Bruxelles" />
            </template>
          </USlideover>

          <!-- Skills -->
          <USlideover title="Skills" description="Choose skills" close-icon="i-lucide-arrow-right" :ui="{
            content: 'border-l border-purple-500/80',
          }">
            <UButton label="Skills" color="neutral" variant="subtle" class="h-[50px]" icon="i-lucide-code" />
            <template #body>
              <UCheckbox label="Ruby" />
            </template>
          </USlideover>

          <!-- Contract type -->
          <USelect v-model="contractValue" variant="subtle" placeholder="Select contract type" size="md"
            :items="contractTypes" class="w-[180px] h-[50px]" />

          <!-- Clear Filters -->
          <UButton v-if="search" label="Clear Filters" variant="ghost" icon="i-lucide-x" class="h-[50px] "
            @click="search = ''" />
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
          {{ jobsCountText }}
        </p>
        <div class="flex items-center gap-4">
          <!-- View mode -->
          <div class="flex items-center bg-gray-800/50 rounded-md p-1 gap-2">
            <UButton :class="['p-1.5 rounded',
              viewMode === 'list' ? 'bg-purple-600 text-white' : 'bg-transparent text-gray-400 hover:text-white'
            ]" icon="i-lucide-layout-list" @click="viewMode = 'list'" />
            <UButton :class="['p-1.5 rounded',
              viewMode === 'small' ? 'bg-purple-600 text-white' : 'bg-transparent text-gray-400 hover:text-white'
            ]" icon="i-lucide-list" @click="viewMode = 'small'" />
            <UButton :class="['p-1.5 rounded',
              viewMode === 'grid' ? 'bg-purple-600 text-white' : 'bg-transparent text-gray-400 hover:text-white'
            ]" icon="i-lucide-layout-grid" @click="viewMode = 'grid'" />
          </div>
          <!-- Combo By : -->
          <div class="flex items-center text-gray-400 text-sm">
            <span class="mr-2">By: </span>
            <USelect v-model="sortBy" variant="outline" placeholder="Select contract type" size="md" :items="sortsType"
              class="w-[125px]" />
          </div>
        </div>
      </motion.div>

      <!-- Job listing -->
      <div v-if="jobsData && jobsData.jobs.length > 0" class="self-center">
        <div
          :class="[viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 gap-6' : viewMode === 'small' ? 'space-y-3' : 'space-y-6']">
          <JobCard v-for="(job, index) in jobsData?.jobs" :key="job.id" :job="job" :view-mode="viewMode"
            :index="index" />

          <UPageCard v-for="(job) in jobsData?.jobs" :key="job.id" variant="subtle" :title="job.title"
            :description="job.description"
            class="transition-all duration-300 bg-gray-700/40 backdrop-blur-sm border border-gray-700 hover:border hover:border-purple-500/50 cursor-pointer">
            <template #footer>
              <div class="flex items-center">
                <UIcon name="i-lucide-building" class="h-4 w-4 mr-1" />
                <span>{{ job.company }}</span>
                <div v-if="job.location">
                  <span class="mx-2">•</span>
                  <UIcon name="i-lucide-map-pin" class="h-4 w-4 mr-1" />
                  <span>{{ job.location }}</span>
                </div>
              </div>
            </template>
          </UPageCard>
        </div>

        <div class="mt-8 mx-auto flex justify-center">
          <UPagination v-model:page="page" :total="jobsData?.pagination?.totalCount" :items-per-page="6" />
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
        <UButton label="Clear Filters" color="primary" variant="subtle" size="xl" :ui="{
          base: 'mt-4 border-purple-500 bg-purple-500/20 text-white hover:text-purple hover:bg-inherit',
        }" @click="search = ''" />
      </motion.div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { motion } from "motion-v";
  import type { JobsResponse } from '~/types/jobs';

  const viewMode = ref("list")
  const contractValue = ref('full_time')
  const sortBy = ref('relevance')
  const page = ref(1)
  const search = ref("")

  const jobsCountText = computed(() => {
    const count = jobsData.value?.jobs?.length || 0
    return `${count} ${count === 1 ? 'job' : 'jobs'} found`
  })

  const { data: jobsData } = await useFetch<JobsResponse>('/api/jobs', {
    query: { page, search }
  })

  watch(search, () => { // reset page to 1 when new search
    page.value = 1
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
