<template>
  <section class="py-20 bg-white">
    <div class="max-w-6xl mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12 text-gray-800">
        Profesional Kami
      </h2>
      <div :class="containerClass">
        <div
          v-for="professional in professionals"
          :key="professional.id"
          class="bg-gray-50 p-6 rounded-lg text-center shadow-lg hover:shadow-xl transition duration-300 hover:-translate-y-1"
        >
          <img
            :src="professional.photo"
            :alt="professional.name"
            class="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
          />
          <h3 class="text-xl font-semibold mb-2 text-gray-800">
            {{ professional.name }}
          </h3>
          <p class="text-blue-600 font-medium mb-1">
            {{ professional.role }}
          </p>
          <p class="text-gray-600 text-sm">
            {{ professional.company }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { professionals, containerClass } = useProfessionals();
</script>
