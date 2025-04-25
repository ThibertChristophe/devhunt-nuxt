<template>
  <NuxtLink :to="`/jobs/${job.id}`" class="block">
    <motion.div :initial="{ opacity: 0, y: 20 }" :animate="{ opacity: 1, y: 0 }"
      :transition="{ duration: 0.4, delay: 0.1 * (index % 6) }" class="relative group">
      <UContainer :class="[
        'cursor-pointer hover:border-purple-500/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/10',
        viewMode === 'small' ? 'p-3' : 'p-6'
      ]">
        <div :class="['flex justify-between',
          viewMode === 'small' ? 'items-center mb-2' : 'flex-col md:flex-row md:items-center mb-4',
          viewMode === 'small' ? 'mb-2' : 'mb-4']">
          <div>
            <h2 :class="['font-bold text-white', viewMode === 'small' ? 'text-lg' : 'text-xl']">{{ job.title }}</h2>
            <div class="flex items-center mt-1 text-gray-400">
              <UIcon name="i-lucide-building" class="h-4 w-4 mr-1" />
              <span>{{ job.company }}</span>
              <div v-if="job.location">
                <span class="mx-2">•</span>
                <UIcon name="i-lucide-map-pin" class="h-4 w-4 mr-1" />
                <span>{{ job.location }}</span>
              </div>
            </div>
          </div>
          <div :class="[viewMode === 'small' ? '' : 'mt-2 md:mt-0']">
            <UBadge class="rounded-full bg-purple-600/80 hover:bg-purple-600 text-white">
              {{ formatSalary(job.salaryMin) }} - {{ formatSalary(job.salaryMax) }}€
            </UBadge>
          </div>
        </div>

        <p v-if="viewMode === 'list'" class="text-gray-100 mb-4">{{ job.description }}</p>

        <!-- <div v-if="viewMode !== 'small'" class="flex flex-wrap gap-2 mb-2">
          <UBadge v-for="skill in job.skills" :key="skill.name" variant="outline" class="rounded-full text-white"
            :style="{ borderColor: skill.color }">
            {{ skill.name }}
          </UBadge>
        </div> -->

        <!-- <div
          :class="['flex', viewMode === 'small' ? 'justify-between items-center' : 'flex-col sm:flex-row justify-between items-start sm:items-center']">
          <div class="flex items-center text-gray-400 text-sm mb-2 sm:mb-0">
            <UIcon name="i-lucide-briefcase-business" class="h-4 w-4 mr-1" />
            <span>{{ job.job_type }}</span>
            <span class="mx-2">•</span>
            <UIcon name="i-lucide-clock" class="h-4 w-4 mr-1" />
            <span>Posted {{ job.posted }}</span>
          </div>
          <UButton v-if="viewMode !== 'small'" label="Apply Now" class="bg-purple-600 hover:bg-purple-700 text-white" />
        </div> -->

        <!-- <div v-if="viewMode === 'small'" class="flex flex-wrap gap-1 mt-2">
          <div v-for="skill in job.skills.slice(0, 3)" :key="skill.name">
            <UBadge variant="outline" class="rounded-full text-white border-gray-600 text-xs py-0">
              {{ skill.name }}
            </UBadge>
          </div>
          <div v-if="job.skills.length > 3">
            <UBadge variant="outline" class="rounded-full text-white border-gray-600 text-xs py-0">
              +{{ job.skills.length - 3 }}
            </UBadge>
          </div>
        </div> -->
      </UContainer>
    </motion.div>
  </NuxtLink>
</template>

<script setup lang="ts">
  import { motion } from "motion-v";

  defineProps({
    job: {
      type: Object,
      required: true
    },
    viewMode: {
      type: String,
      default: "list"
    },
    index: {
      type: Number,
      default: 0
    }
  })


  const formatSalary = (value: number): string => {
    return `${Math.round(value / 1000)}k`;
  }
</script>
