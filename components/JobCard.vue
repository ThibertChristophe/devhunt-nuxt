<template>
  <motion.div :initial="{ opacity: 0, y: 20 }" :animate="{ opacity: 1, y: 0 }"
    :transition="{ duration: 0.4, delay: 0.1 * (index % 6) }">
    <UPageCard :to="`/jobs/${job.id}`" :ui="{ container: '!p-0' }" variant="subtle" :class="['transition-all duration-300 hover:border-purple-500/50 cursor-pointer',
      viewMode === 'small' ? 'p-3' : 'p-6'
    ]">
      <template #title>
        <div class="flex items-center justify-between">
          <h2> {{ job.title }}</h2>
          <UBadge class="rounded-full bg-purple-600/80 hover:bg-purple-600 text-white">
            55k - 66k €
          </UBadge>
        </div>
      </template>
      <template #description>
        <div class="flex items-center">
          <UIcon name="i-lucide-building" class="h-4 w-4 mr-1" />
          <span>{{ job.company }}</span>
          <div v-if="job.location">
            <span class="mx-2">•</span>
            <UIcon name="i-lucide-map-pin" class="h-4 w-4 mr-1" />
            <span>{{ job.location }}</span>
          </div>
        </div>
        <div v-if="viewMode === 'list'" class="text-white mt-4 flex items-center">
          <p>{{ job.description }}</p>
        </div>
      </template>
      <template #footer>
        <div v-if="viewMode !== 'small'" class="flex flex-wrap gap-2 mb-4">
          <UBadge v-for="skill in job.skills" :key="skill.id" variant="outline" class="rounded-full">
            {{ skill.name }}
          </UBadge>
        </div>
        <div :class="['flex flex-col',
          viewMode === 'small' ? ''
            : 'sm:flex-row justify-between items-start sm:items-center'
        ]">
          <div class="flex items-center text-gray-400 text-sm mb-2 sm:mb-0">
            <UIcon name="i-lucide-briefcase" class="mr-1" />
            <span>{job.type}</span>
            <span class="mx-2">•</span>
            <UIcon name="i-lucide-clock" class="mr-1" />
            <span>Posted {job.posted}</span>
          </div>
          <UButton v-if="viewMode !== 'small'" label="Apply Now" class="z-2" />

          <div v-if="viewMode === 'small'" class="flex flex-wrap gap-1 mt-2">
            <UBadge v-for="skill in job.skills" :key="skill.id" variant="outline" class="rounded-full">
              {{ skill.name }}
            </UBadge>
            <!-- {job.languages.length > 3 && (
                  <Badge variant="outline" class="text-white border-gray-600 text-xs py-0">
                    +{job.languages.length - 3}
                  </Badge> -->
          </div>
        </div>
      </template>
    </UPageCard>
  </motion.div>
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


  // const formatSalary = (value: number): string => {
  //   return `${Math.round(value / 1000)}k`;
  // }
</script>
