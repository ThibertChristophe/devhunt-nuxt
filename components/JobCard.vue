<template>
  <motion.div :initial="{ opacity: 0, y: 20 }" :animate="{ opacity: 1, y: 0 }"
    :transition="{ duration: 0.4, delay: 0.1 * (index % 6) }" class="relative group">
    <div :class="[
      'cursor-pointer hover:border-purple-500/50 bg-gray-800/70 backdrop-blur-sm border border-gray-700 rounded-lg transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/10',
      viewMode === 'compact' ? 'p-3' : 'p-6'
    ]">
      <div :class="['flex justify-between',
        viewMode === 'compact' ? 'items-center' : 'flex-col md:flex-row md:items-center',
        viewMode === 'compact' ? 'mb-2' : 'mb-4']">
        <div>
          <h2 :class="['font-bold text-white', viewMode === 'compact' ? 'text-lg' : 'text-xl']">{{ job.title }}</h2>
          <div class="flex items-center mt-1 text-gray-400">
            <Building class="h-4 w-4 mr-1" />
            <span>{{ job.company }}</span>
            <span class="mx-2">•</span>
            <MapPin class="h-4 w-4 mr-1" />
            <span>{{ job.location.name }}</span>
          </div>
        </div>
        <div :class="[viewMode === 'compact' ? '' : 'mt-2 md:mt-0']">
          <Badge class=" bg-purple-600/80 hover:bg-purple-600 text-white">
            {formatSalary(job.salary_min)} - {formatSalary(job.salary_max)}€
          </Badge>
        </div>
      </div>

      <p v-if="viewMode === 'list'" class="text-gray-100 mb-4">{{ job.description }}</p>


      <div v-if="viewMode !== 'compact'" class="flex flex-wrap gap-2 mb-2">
        <UBadge v-for="skill in job.skills" :key="skill.name" variant="outline" class="text-white border-gray-600">
          {{ skill.name }}
        </UBadge>
      </div>


      <div
        :class="['flex', viewMode === 'compact' ? 'justify-between items-center' : 'flex-col sm:flex-row justify-between items-start sm:items-center']">
        <div class="flex items-center text-gray-400 text-sm mb-2 sm:mb-0">
          <Briefcase class="h-4 w-4 mr-1" />
          <span>{{ job.job_type }}</span>
          <span class="mx-2">•</span>
          <Clock class="h-4 w-4 mr-1" />
          <span>Posted {{ job.posted }}</span>
        </div>
        <Button v-if="viewMode === 'compact'" class="bg-purple-600 hover:bg-purple-700 text-white">Apply Now</Button>
      </div>

      <div v-if="viewMode === 'compact'" class="flex flex-wrap gap-1 mt-2">
        <div v-for="skill in job.skills.slice(0, 3)" :key="skill.name">
          <Badge variant="outline" class="text-white border-gray-600 text-xs py-0">
            {{ skill.name }}
          </Badge>
        </div>
        <div v-if="job.skills.length > 3">
          <Badge variant="outline" class="text-white border-gray-600 text-xs py-0">
            +{{ job.skills.length - 3 }}
          </Badge>
        </div>
      </div>
    </div>
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
</script>