<template>
  <section class="py-12 bg-gray-100">
    <div class="max-w-6xl mx-auto px-4">
      <h3 class="text-2xl font-bold text-center mb-8 text-gray-800">
        Tools & Technologies
      </h3>
      <div class="overflow-hidden">
        <div class="flex animate-marquee">
          <div class="flex space-x-8">
            <img
              v-for="(tool, index) in tools"
              :key="index"
              :src="`/img/tools/${tool}`"
              :alt="tool.replace('.png', '')"
              class="h-12 w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { tools } = useToolsMarquee();
</script>

<style scoped>
@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-marquee {
  animation: marquee 30s linear infinite;
}
</style>
