<template>
  <div class="hidden md:flex bg-gray-900 py-2 px-4 text-sm fixed w-full top-0 z-20">
    <div class="flex justify-between items-center w-full">
      <div class="flex space-x-4">
        <a href="https://linkedin.com/in/nusainfra" target="_blank" class="text-gray-400 hover:text-blue-600 transition duration-300">
          <i class="fab fa-linkedin text-lg"></i>
        </a>
        <a href="https://wa.me/6287785748085" target="_blank" class="text-gray-400 hover:text-green-600 transition duration-300">
          <i class="fab fa-whatsapp text-lg"></i>
        </a>
        <a href="mailto:nusa.infra@gmail.com" class="text-gray-400 hover:text-red-600 transition duration-300">
          <i class="fas fa-envelope text-lg"></i>
        </a>
        <a href="https://instagram.com/nusainfra" target="_blank" class="text-gray-400 hover:text-pink-600 transition duration-300">
          <i class="fab fa-instagram text-lg"></i>
        </a>
      </div>
      <div class="flex space-x-4">
        <span class="text-gray-400 flex items-center">
          <i class="fas fa-envelope mr-1"></i> nusa.infra@gmail.com
        </span>
        <span class="text-gray-400 flex items-center">
          <i class="fab fa-whatsapp mr-1"></i> 0838 2793 6085
        </span>
      </div>
    </div>
  </div>
  <nav class="bg-white text-gray-900 p-4 fixed w-full top-0 md:top-10 z-10 shadow-md border-b border-gray-200">
    <div class="max-w-6xl mx-auto flex justify-between items-center">
      <div>
        <h1 class="text-xl font-bold text-gray-900">
          <NuxtLink to="/" class="flex items-center hover:text-gray-700 transition duration-300">
            <img src="/img/nusainfra.png" alt="Nusa Infra Logo" class="h-8 w-auto mr-2">
            Nusa Infra
          </NuxtLink>
        </h1>
        <p class="text-xs text-gray-600 mt-1 hidden md:block">Simplify Your Infrastructure. Empowering DevOps, Simply.</p>
      </div>
      <button class="md:hidden text-gray-900 focus:outline-none" @click="toggleMenu()">
        <i class="fas fa-bars text-2xl"></i>
      </button>
      <ul class="hidden md:flex space-x-6">
        <li>
          <a href="#services" class="hover:text-gray-700 transition duration-300"
            ><i class="fas fa-cogs mr-1"></i> Layanan</a
          >
        </li>
        <li>
          <a href="#about" class="hover:text-gray-700 transition duration-300"
            ><i class="fas fa-info-circle mr-1"></i> Tentang</a
          >
        </li>
        <li>
          <a href="#contact" class="hover:text-gray-700 transition duration-300"
            ><i class="fas fa-envelope mr-1"></i> Kontak</a
          >
        </li>
      </ul>
      <div :class="['hidden md:hidden absolute top-full left-0 w-full bg-white shadow-lg z-20', { 'block': menuOpen }]">
        <ul class="flex flex-col space-y-4 p-4">
          <li>
            <a href="#services" class="hover:text-gray-700 transition duration-300 block py-2"
              ><i class="fas fa-cogs mr-1"></i> Layanan</a
            >
          </li>
          <li>
            <a href="#about" class="hover:text-gray-700 transition duration-300 block py-2"
              ><i class="fas fa-info-circle mr-1"></i> Tentang</a
            >
          </li>
          <li>
            <a href="#contact" class="hover:text-gray-700 transition duration-300 block py-2"
              ><i class="fas fa-envelope mr-1"></i> Kontak</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};
</script>
