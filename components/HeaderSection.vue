<template>
  <header class="fixed top-0 z-50 w-full border-b border-white/10 bg-black/90 backdrop-blur-md p-4">
    <nav class="flex items-center justify-between">
      <div>Devhunt</div>
      <ul class="flex space-x-10">
        <li>
          <ULink to="/" class="hover:text-purple-500">Home</ULink>
        </li>
        <li>
          <ULink to="/jobs" class="hover:text-purple-500">Find a job</ULink>
        </li>
        <li>
          <ULink to="/companies" class="hover:text-purple-500">Find company</ULink>
        </li>
      </ul>
      <div class="space-x-2">
        <UButton icon="i-lucide-rocket" color="primary" size="lg" class="text-white cursor-pointer">
          Get Started
        </UButton>

        <UButton color="primary" size="lg" variant="outline" class="text-white cursor-pointer">Sign in</UButton>
      </div>
    </nav>
  </header>
</template>
