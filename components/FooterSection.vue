<template>
  <footer class="border-t border-white/10 bg-black/90 backdrop-blur-md">
    <div class="container mx-auto px-6 py-12">
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-6">

        <div class="space-y-4 lg:col-span-2">
          <div class="flex items-center space-x-2">

            <span class="text-white font-medium text-xl">DevHunt</span>
          </div>
          <p class="text-gray-400 max-w-xs">
            Connecting talented developers with their dream jobs. Find opportunities that match your skills and
            aspirations.
          </p>
          <div class="flex space-x-4">
            <ULink href="#" class="text-gray-400 hover:text-purple-500 transition-colors">
              <UIcon name="i-lucide-github" class="h-5 w-5" />
              <span class="sr-only">GitHub</span>
            </ULink>
            <ULink href="#" class="text-gray-400 hover:text-purple-500 transition-colors">
              <UIcon name="i-lucide-twitter" class="h-5 w-5" />
              <span class="sr-only">Twitter</span>
            </ULink>
            <ULink href="#" class="text-gray-400 hover:text-purple-500 transition-colors">
              <UIcon name="i-lucide-linkedin" class="h-5 w-5" />
              <span class="sr-only">ULinkedIn</span>
            </ULink>
            <ULink href="#" class="text-gray-400 hover:text-purple-500 transition-colors">
              <UIcon name="i-lucide-instagram" class="h-5 w-5" />
              <span class="sr-only">Instagram</span>
            </ULink>
          </div>
        </div>


        <div class="space-y-4">
          <h3 class="text-white font-medium text-lg">Quick ULinks</h3>
          <ul class="space-y-2">
            <li>
              <ULink href="/jobs" class="text-gray-400 hover:text-purple-500 transition-colors">
                Find Jobs
              </ULink>
            </li>
            <li>
              <ULink href="/companies" class="text-gray-400 hover:text-purple-500 transition-colors">
                Browse Companies
              </ULink>
            </li>
            <li>
              <ULink href="/" class="text-gray-400 hover:text-purple-500 transition-colors">
                Success Stories
              </ULink>
            </li>
            <li>
              <ULink href="/" class="text-gray-400 hover:text-purple-500 transition-colors">
                Pricing Plans
              </ULink>
            </li>
            <li>
              <ULink href="/" class="text-gray-400 hover:text-purple-500 transition-colors">
                For Employers
              </ULink>
            </li>
          </ul>
        </div>


        <div class="space-y-4">
          <h3 class="text-white font-medium text-lg">Resources</h3>
          <ul class="space-y-2">
            <li>
              <ULink href="#" class="text-gray-400 hover:text-purple-500 transition-colors">
                Career Advice
              </ULink>
            </li>
            <li>
              <ULink href="#" class="text-gray-400 hover:text-purple-500 transition-colors">
                Resume Builder
              </ULink>
            </li>
            <li>
              <ULink href="#" class="text-gray-400 hover:text-purple-500 transition-colors">
                Salary Guide
              </ULink>
            </li>
            <li>
              <ULink href="#" class="text-gray-400 hover:text-purple-500 transition-colors">
                Interview Tips
              </ULink>
            </li>
            <li>
              <ULink href="#" class="text-gray-400 hover:text-purple-500 transition-colors">
                Developer Blog
              </ULink>
            </li>
          </ul>
        </div>


        <div class="space-y-6 lg:col-span-2">
          <h3 class="text-white font-medium text-lg">Stay Updated</h3>
          <p class="text-gray-400">Subscribe to our newsletter for the latest job opportunities and career tips.</p>
          <form class="relative">
            <input type="email" placeholder="Enter your email"
              class="w-full px-4 py-3 pr-24 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent">
            <UButton icon="i-lucide-arrow-right" size="lg" color="primary" variant="solid"
              class="absolute right-1.5 top-1/2 -translate-y-1/2 text-white" />

          </form>
          <div class="flex items-center text-gray-400">
            <UIcon name="i-lucide-mail" class="h-4 w-4 mr-2" />
            <a href="mailto:contact@devhunt.com" class="hover:text-purple-500 transition-colors">
              contact@devhunt.com
            </a>
          </div>
        </div>
      </div>

      <div class="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
        <p class="text-gray-400 text-sm mb-4 md:mb-0">&copy; DevHunt. All rights
          reserved.</p>
        <div class="flex space-x-6">
          <ULink href="/" class="text-gray-400 text-sm hover:text-purple-500 transition-colors">
            Privacy Policy
          </ULink>
          <ULink href="/" class="text-gray-400 text-sm hover:text-purple-500 transition-colors">
            Terms of Service
          </ULink>
          <ULink href="/" class="text-gray-400 text-sm hover:text-purple-500 transition-colors">
            Cookie Policy
          </ULink>
        </div>
      </div>
    </div>
  </footer>
</template>
