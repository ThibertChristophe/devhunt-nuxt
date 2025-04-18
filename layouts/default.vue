<template>
  <div class="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden flex flex-col">
    <HeaderSection />
    <main>
      <slot />
    </main>
    <FooterSection />
  </div>
</template>
