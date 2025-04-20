<template>
  <div className="min-h-screen bg-black/[0.96] antialiased">
    <UInput v-model="query" type="text" name="keyword" placeholder="Search for jobs, skills, companies..."
      icon="i-lucide-search" />
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
</template>

<script setup lang="ts">
  import type { JobsResponse } from '~/types/jobs';
  const page = ref(1)
  const query = ref("")
  const { data: jobsData, error } = await useFetch<JobsResponse>('http://localhost:3000/api/jobs', {
    query: { page, query }
  })

</script>