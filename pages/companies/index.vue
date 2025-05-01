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

    <!-- Companies grid -->
    <section class="pb-12">
      <div class="container mx-auto px-4">

        <div v-if="true">
          <div class="mb-6 flex justify-between items-center">
            <p class="text-gray-400">
              Showing {filteredCompanies.length} {filteredCompanies.length === 1 ? "company" : "companies"}
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div v-for="(company, index) in companiesData?.companies" :key="company.id"
              :initial="{ opacity: 0, y: 20 }" :animate="{ opacity: 1, y: 0 }" :transition="{
                duration: 0.4, delay: 0.1 * (index % 6)
              }" class="relative group">
              <div
                class="bg-gray-800/70 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden transition-all duration-300 group-hover:border-purple-500/50 group-hover:shadow-lg group-hover:shadow-purple-500/10">
                {company.featured && (
                <div class="absolute top-4 right-4 z-10">
                  <Badge class="bg-purple-600 text-white px-2 py-1 flex items-center">
                    <Star class="h-3 w-3 mr-1 fill-white" />
                    Featured
                  </Badge>
                </div>
                )}

                <div class="p-6">
                  <div class="flex items-center gap-4 mb-4">
                    <Avatar class="h-16 w-16 rounded-md border border-gray-700 bg-gray-900">
                      <img alt={company.name} class="object-contain" />
                    </Avatar>
                    <div>
                      <h3 class="text-xl font-bold text-white">{company.name}</h3>
                      <p class="text-gray-400">{company.industry}</p>
                    </div>
                  </div>

                  <p class="text-gray-300 mb-4 line-clamp-2">{company.description}</p>

                  <div class="flex flex-wrap gap-2 mb-4">
                    {company.tags.map((tag) => (
                    <Badge key={tag} variant="outline" class="bg-gray-700/50 text-white border-gray-600">
                      {tag}
                    </Badge>
                    ))}
                  </div>

                  <div class="grid grid-cols-2 gap-3 mb-4 text-sm">
                    <div class="flex items-center text-gray-400">
                      <MapPin class="h-4 w-4 mr-1 text-gray-500" />
                      <span>{company.location}</span>
                    </div>
                    <div class="flex items-center text-gray-400">
                      <Users class="h-4 w-4 mr-1 text-gray-500" />
                      <span>{company.size}</span>
                    </div>
                    <div class="flex items-center text-gray-400">
                      <Star class="h-4 w-4 mr-1 text-yellow-500" />
                      <span>{company.rating} Rating</span>
                    </div>
                    <div class="flex items-center text-gray-400">
                      <Briefcase class="h-4 w-4 mr-1 text-gray-500" />
                      <span>{company.openPositions} Open Jobs</span>
                    </div>
                  </div>

                  <div class="flex items-center justify-between">
                    <div class="flex flex-wrap gap-1">
                      {company.benefits.slice(0, 2).map((benefit, i) => (
                      <span key={i} class="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded">
                        {benefit}
                      </span>
                      ))}
                      {company.benefits.length > 2 && (
                      <span class="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded">
                        +{company.benefits.length - 2} more
                      </span>
                      )}
                    </div>

                    <Button size="sm" class="bg-purple-600 hover:bg-purple-700 text-white">
                      View Profile
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
          <div class="mt-8 mx-auto flex justify-center">
            <UPagination v-model:page="page" :total="companiesData?.pagination?.totalCount" :items-per-page="6" />
          </div>
        </div>

        <!-- No companies found -->
        <motion.div v-else :initial="{ opacity: 0 }" :animate="{ opacity: 1 }" :transition="{ duration: 0.5 }"
          class="text-center py-16 bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl">
          <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-800 mb-4">
            <UIcon name="i-lucide-building" size="24" class=" text-gray-400" />
          </div>
          <h3 class="text-xl font-medium text-white mb-2">No companies found</h3>
          <p class="text-gray-400 max-w-md mx-auto">
            We couldn't find any companies matching your criteria. Try adjusting your filters or search term.
          </p>
          <UButton color="primary" variant="subtle" class="mt-4" :ui="{
            base: 'mt-4 border-purple-500 bg-purple-500/20 text-white hover:text-purple hover:bg-inherit',
          }">
            Clear All Filters
          </UButton>
        </motion.div>
      </div>
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
  const page = ref(1)

  const companiesData = ref<res>()

  type res = {
    companies: Company[],
    pagination: {
      totalCount: number,
      page: number,
      itemsPerPage: number,
    }
  }

  type Company = {
    id: number,
    name: string,
    industry: string,
    description: string,
    location: string,
    size: string,
    rating: number,
    openPositions: number,
    tags: string[],
    benefits: string[],
  }

  watch(search, () => { // reset page to 1 when new search
    page.value = 1
  })


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