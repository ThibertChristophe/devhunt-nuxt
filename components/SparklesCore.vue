<template>
  <div :id="id" class="w-full h-full" />
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

const props = defineProps({
  id: {
    type: String,
    required: true
  },
  background: {
    type: String,
    default: 'transparent'
  },
  minSize: {
    type: Number,
    default: 0.6
  },
  maxSize: {
    type: Number,
    default: 1.4
  },
  particleDensity: {
    type: Number,
    default: 100
  },
  particleColor: {
    type: String,
    default: '#FFFFFF'
  },
  className: {
    type: String,
    default: ''
  }
});

const particles = ref([]);
const canvas = ref(null);
const ctx = ref(null);
const animationFrameId = ref(null);

// Définir la fonction de redimensionnement en dehors pour pouvoir la référencer
const resizeCanvas = () => {
  if (canvas.value && canvas.value.parentElement) {
    canvas.value.width = canvas.value.parentElement.clientWidth;
    canvas.value.height = canvas.value.parentElement.clientHeight;
  }
};

onMounted(() => {
  const container = document.getElementById(props.id);
  if (!container) {
    console.error(`Container with id "${props.id}" not found`);
    return;
  }

  // Créer le canvas
  canvas.value = document.createElement('canvas');
  canvas.value.id = `${props.id}-canvas`;
  canvas.value.className = props.className;

  // Appliquer le background si spécifié
  canvas.value.style.background = props.background;

  container.appendChild(canvas.value);

  // Définir la taille du canvas
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  // Initialiser le contexte
  ctx.value = canvas.value.getContext('2d');

  // Créer les particules
  const particleCount = Math.floor((canvas.value.width * canvas.value.height) / (10000 / props.particleDensity));
  for (let i = 0; i < particleCount; i++) {
    particles.value.push({
      x: Math.random() * canvas.value.width,
      y: Math.random() * canvas.value.height,
      size: props.minSize + Math.random() * (props.maxSize - props.minSize),
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3,
      opacity: 0.1 + Math.random() * 0.4
    });
  }

  // Fonction d'animation
  const animate = () => {
    if (!ctx.value || !canvas.value) return;

    ctx.value.clearRect(0, 0, canvas.value.width, canvas.value.height);

    // Mettre à jour et dessiner les particules
    particles.value.forEach(particle => {
      // Mettre à jour la position
      particle.x += particle.speedX;
      particle.y += particle.speedY;

      // Envelopper autour des bords
      if (particle.x < 0) particle.x = canvas.value.width;
      if (particle.x > canvas.value.width) particle.x = 0;
      if (particle.y < 0) particle.y = canvas.value.height;
      if (particle.y > canvas.value.height) particle.y = 0;

      // Dessiner la particule
      ctx.value.beginPath();
      ctx.value.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.value.fillStyle = props.particleColor;
      ctx.value.globalAlpha = particle.opacity;
      ctx.value.fill();
    });

    animationFrameId.value = requestAnimationFrame(animate);
  };

  // Démarrer l'animation
  animate();
});

onUnmounted(() => {
  // Annuler l'animation
  if (animationFrameId.value) {
    cancelAnimationFrame(animationFrameId.value);
  }

  // Supprimer l'écouteur d'événement de redimensionnement
  window.removeEventListener('resize', resizeCanvas);

  // Supprimer le canvas
  if (canvas.value && canvas.value.parentElement) {
    canvas.value.parentElement.removeChild(canvas.value);
  }
});
</script>
