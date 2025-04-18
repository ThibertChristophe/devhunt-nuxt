<template>
  <div class="relative min-h-[calc(100vh-76px)] flex items-center">
    <div class="container mx-auto px-6 relative z-10">
      <div class="max-w-4xl mx-auto text-center">
        <div>
          <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Transform Your Life with your
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Dream Job
            </span>
          </h1>
        </div>

        <p class="text-gray-400 text-xl mb-8 max-w-2xl mx-auto">
          Find your perfect career match with our job platform. We connect you with positions that match your
          skills,
          experience, and aspirations.
        </p>

        <div class="mb-8 max-w-2xl mx-auto">
          <form class="relative max-w-2xl mx-auto">
            <div class="relative">
              <input type="text" name="keyword" placeholder="Search for jobs, skills, companies..."
                class="w-full px-4 py-3 pr-24 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent">
              <UButton color="primary" icon="i-lucide-search" size="lg"
                class="cursor-pointer text-white absolute right-1.5 top-1/2 -translate-y-1/2  flex items-center">
                <span>Search</span>
              </UButton>

            </div>

          </form>
        </div>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <UButton color="primary" size="lg" icon="i-lucide-file-text" class="text-white cursor-pointer">
            Upload Your CV
          </UButton>

          <UButton color="primary" variant="subtle" size="lg" class="text-white cursor-pointer"
            icon="i-lucide-sparkles">
            Magic Jobs
          </UButton>
        </div>
      </div>
    </div>
  </div>
</template>
