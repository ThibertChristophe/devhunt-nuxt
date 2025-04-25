<template>
    <div>
        <!-- Sparkles background -->
        <div class="h-full w-full absolute inset-0 z-0">
            <SparklesCore id="tsparticlesfullpage" background="transparent" :min-size="0.6" :max-size="1.4"
                :particle-density="2" class="w-full h-full" particle-color="#FFFFFF" />
        </div>
        <!-- Error no Job -->
        <div v-if="!job" class="min-h-screen bg-black/[0.96] antialiased flex items-center justify-center">
            <div class="text-center z-10">
                <h1 class="text-3xl font-bold text-white mb-4">Job Not Found</h1>
                <p class="text-gray-400 mb-6">The job you're looking for doesn't exist or has been removed.</p>
                <UButton label="Back to Jobs" class="bg-purple-600 hover:bg-purple-700 text-white"
                    icon="i-lucide-arrow-left" />
            </div>
        </div>
        <!-- Job details -->
        <div v-else>
            <div class="min-h-screen bg-black/[0.96] antialiased">
                <!-- Head -->
                <div class="relative z-10 container mx-auto px-4 pb-8 pt-4">
                    <motion.div :initial="{ opacity: 0, x: -20 }" :animate="{ opacity: 1, x: 0 }" :transition="{
                        duration:
                            0.3
                    }" class="mb-6">
                        <UButton to="/jobs" label="Back to Jobs" icon="i-lucide-arrow-left" variant="outline" size="lg"
                            class="text-white" />
                    </motion.div>

                    <!-- Main content -->
                    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
                        <UContainer class="lg:col-span-2">
                            <motion.div :initial="{ opacity: 0, y: 20 }" :animate="{ opacity: 1, y: 0 }" :transition="{
                                duration: 0.5
                            }">
                                <div class="flex flex-col md:flex-row gap-6 items-start md:items-center mb-6">
                                    <UAvatar icon="i-lucide-image" size="lg" />
                                    <div class="flex-1">
                                        <h1 class="text-2xl md:text-3xl font-bold text-white mb-2">
                                            {{ job.title }}
                                        </h1>
                                        <div class="flex flex-wrap items-center gap-3 text-gray-400">
                                            <div class="flex items-center">
                                                <UIcon name="i-lucide-building" class="mr-1" />

                                                <span>Corps</span>
                                            </div>
                                            <div class="flex items-center">
                                                <UIcon name="i-lucide-map-pin" class="mr-1" />
                                                <span>Bruxelles</span>
                                            </div>
                                            <div class="flex items-center">
                                                <UIcon name="i-lucide-briefcase" class="mr-1" />
                                                <span>Full Time</span>
                                            </div>
                                            <div class="flex items-center">
                                                <UIcon name="i-lucide-clock" class="mr-1" />
                                                <span>Posted 23hours ago</span>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Save & Share & Report -->
                                    <div class="flex flex-col sm:flex-row gap-1 w-full md:w-auto">
                                        <UButton :variant="isSaved ? 'soft' : 'outline'" icon="i-lucide-heart">
                                            <span v-if="isSaved">Saved</span>
                                            <span v-else>Save</span>
                                        </UButton>
                                        <UTooltip arrow text="Share">
                                            <UButton variant="ghost" icon="i-lucide-share" size="xl" />
                                        </UTooltip>
                                        <UTooltip arrow text="Report this offer">
                                            <UButton variant="ghost" icon="i-lucide-info" size="xl" />
                                        </UTooltip>
                                    </div>
                                </div>

                                <!-- Badge List -->
                                <div class="flex flex-wrap gap-3 mb-6">
                                    <UBadge class="bg-purple-600/80 hover:bg-purple-600 text-white px-3 py-1">
                                        {{ formatSalary(job.minSalary) }} - {{ formatSalary(job.maxSalary) }}€
                                    </UBadge>
                                    <!-- Skills list -->
                                    <UBadge variant="outline" class="rounded-full">
                                        skill
                                    </UBadge>
                                    <UBadge variant="outline" class=" text-white border-gray-600 px-3 py-1">
                                        Experience
                                    </UBadge>
                                </div>

                                <!-- Tabs -->
                                <UTabs :items="items" variant="link" class="gap-4 w-full" :ui="{ trigger: 'flex-1' }">
                                    <template #description>
                                        <div class="space-y-6">
                                            <div>
                                                <p class="text-gray-300 leading-relaxed">{{ job.description }}</p>
                                            </div>
                                            <div>
                                                <h3 class="text-xl font-semibold text-white mb-3">Responsibilities</h3>
                                                <ul class="space-y-2">
                                                    <li class="flex items-start">
                                                        <UIcon name="lucide:circle-check-big"
                                                            class="text-green-500 mr-2 mt-0.5 flex-shrink-0 "
                                                            size="xl" />
                                                        <span class="text-gray-300">Be good !</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h3 class="text-xl font-semibold text-white mb-3">Requirements</h3>
                                                <ul class="space-y-2">
                                                    <li class="flex items-start">
                                                        <UIcon name="lucide:circle-check-big"
                                                            class="text-green-500 mr-2 mt-0.5 flex-shrink-0 "
                                                            size="xl" />
                                                        <span class="text-gray-300">Need to be good !</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h3 class="text-xl font-semibold text-white mb-3">Benefits</h3>
                                                <ul class="space-y-2">
                                                    <li class="flex items-start">
                                                        <UIcon name="lucide:circle-check-big"
                                                            class="text-purple-500 mr-2 mt-0.5 flex-shrink-0 "
                                                            size="xl" />
                                                        <span class="text-gray-300">Become better !</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </template>
                                    <template #company>

                                    </template>
                                    <template #process>

                                    </template>
                                </UTabs>
                            </motion.div>
                        </UContainer>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { motion } from "motion-v";
import type { TabsItem } from '@nuxt/ui'

const route = useRoute()
const isSaved = ref(false)

const { data: job } = useFetch(`/api/jobs/${route.params.id}`)

const items = [
    {
        label: 'Description',
        description: 'Make changes to your account here. Click save when you\'re done.',
        icon: 'i-lucide-user',
        slot: 'description' as const
    },
    {
        label: 'Company',
        description: 'Change your password here. After saving, you\'ll be logged out.',
        icon: 'i-lucide-building',
        slot: 'company' as const
    },
    {
        label: 'Process',
        description: 'Change your password here. After saving, you\'ll be logged out.',
        icon: 'i-lucide-lock',
        slot: 'process' as const
    }
] satisfies TabsItem[]


function formatSalary(value: number | null): string {
    return value ? `${Math.round(value / 1000)}k` : '';
}

</script>
