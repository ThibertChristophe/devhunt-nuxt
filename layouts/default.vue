<template>
  <div class="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden flex flex-col">
    <div class="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <HeaderSection />
      <main class="flex-grow pt-20">
        <slot />
      </main>
      <FooterSection />
    </div>

  </div>
</template>
