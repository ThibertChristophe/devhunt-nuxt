<script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  import { motion } from "motion-v"
  import { Code, Braces } from 'lucide-vue-next';

  const dimensions = ref({ width: 1200, height: 800 });
  const isClient = ref(false);
  const props = defineProps({
    count: {
      type: Number,
      default: 5,
    },
  });

  onMounted(() => {
    // Marquer comme rendu côté client
    isClient.value = true;

    // Mettre à jour les dimensions uniquement côté client
    dimensions.value = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    const handleResize = () => {
      dimensions.value = {
        width: window.innerWidth,
        height: window.innerHeight,
      };
    };

    window.addEventListener('resize', handleResize);
    onUnmounted(() => window.removeEventListener('resize', handleResize));
  });

  // Générer des positions aléatoires
  const getRandomPosition = () => ({
    x: Math.random() * dimensions.value.width,
    y: Math.random() * dimensions.value.height,
  });

  // Créer un tableau de papiers flottants
  const floatingPapers = computed(() => {
    if (!isClient.value) {
      return [];
    }
    return Array.from({ length: props.count }).map((_, i) => {
      const { x: randomX1, y: randomY1 } = getRandomPosition();
      const { x: randomX2, y: randomY2 } = getRandomPosition();
      const { x: randomX3, y: randomY3 } = getRandomPosition();

      return {
        key: i,
        initial: { x: randomX1, y: randomY1 },
        animate: { x: [randomX1, randomX2, randomX3], y: [randomY1, randomY2, randomY3], rotate: [0, 180, 360] },
        transition: { duration: 20 + Math.random() * 10, repeat: Number.POSITIVE_INFINITY, ease: 'linear' },
        isCode: i % 2 === 0,
      };
    });
  });
</script>

<template>
  <div v-if="!isClient" class="relative w-full h-full" />
  <div v-else class="relative w-full h-full">
    <motion.div v-for="paper in floatingPapers" :key="paper.key" class="absolute" :initial="paper.initial"
      :animate="paper.animate" :transition="paper.transition">
      <div
        class="relative w-16 h-20 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 flex items-center justify-center transform hover:scale-110 transition-transform">
        <Code v-if="paper.isCode" class="w-8 h-8 text-purple-400/50" />
        <Braces v-else class="w-8 h-8 text-purple-400/50" />
      </div>
    </motion.div>
  </div>
</template>

<style scoped>
  /* Styles spécifiques au composant si nécessaire */
</style>