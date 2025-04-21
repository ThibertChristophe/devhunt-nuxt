<template>
  <div class="min-h-screen bg-black/[0.96] antialiased">
    <div class="relative z-10 container mx-auto px-4 py-8">
      <div class="mb-8">
        <h1 class="text-3xl md:text-4xl font-bold text-white mb-2">
          Find Your
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">Dream</span>
          Developer Job
        </h1>
        <p class="text-gray-400">Browse through hundreds of opportunities for tech professionals</p>
      </div>

      <div class="mb-8">
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
              <Placeholder class="h-full" />
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
              <Placeholder class="h-full" />
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
      </div>

      <!-- Active filter section -->
      <div class="flex flex-wrap gap-2 mb-4">
        <!-- v-for location -->
        <div key={location}>
          <Badge variant="outline" class="cursor-pointer bg-gray-800/50 text-white border-gray-700 px-3 py-1">
            <MapPin class="mr-1 h-3 w-3" />
            {location}
            <button class="ml-1 hover:text-gray-300">
              <X class="h-3 w-3" />
            </button>
          </Badge>
        </div>

        <!-- v-for type -->
        <div key={type}>
          <Badge variant="outline" class="cursor-pointer bg-gray-800/50 text-white border-gray-700 px-3 py-1">
            <Briefcase class="mr-1 h-3 w-3" />
            {selectedType}
            <button class="ml-1 hover:text-gray-300">
              <X class="h-3 w-3" />
            </button>
          </Badge>
        </div>

        <div key={lang}>
          <Badge variant="outline" class="bg-gray-800/50 text-white border-gray-700 px-3 py-1 cursor-pointer">
            <Code class="mr-1 h-3 w-3" />
            {lang}
            <button class="ml-1 hover:text-gray-300">
              <X class="h-3 w-3" />
            </button>
          </Badge>
        </div>
      </div>

      <!-- Number of result, View Mode & By : combo -->
      <div class="mb-4 flex justify-between items-center">
        <p class="text-gray-400">
          {filteredJobs.length} {filteredJobs.length === 1 ? "job" : "jobs"} found
        </p>
        <div class="flex items-center gap-4">
          <!-- View mode -->
          <div class="flex items-center bg-gray-800/50 rounded-md p-1 gap-2">
            <UButton icon="i-lucide-layout-list" class="p-1.5 rounded bg-purple-600 text-white" />
            <UButton icon="i-lucide-list" class="bg-transparent text-gray-400 hover:text-white" />
            <UButton icon="i-lucide-layout-grid" class="bg-transparent text-gray-400 hover:text-white" />
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
      </div>


      <div v-if="error" class="text-red-500">
        {{ error }}
      </div>
      <div v-else>
        <UCard v-for="job in jobsData?.jobs" :key="job.id">
          {{ job.title }}
        </UCard>

        <UPagination v-model:page="page" :total="jobsData?.pagination?.total_count" :items-per-page="6" />
      </div>

    </div>

  </div>
</template>

<script setup lang="ts">
  import type { JobsResponse } from '~/types/jobs';
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
  const contractValue = ref('full_time')
  const sortBy = ref('relevance')
  const page = ref(1)
  const query = ref("")
  const { data: jobsData, error } = await useFetch<JobsResponse>('http://localhost:3000/api/jobs', {
    query: { page, query }
  })

</script>