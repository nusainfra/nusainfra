<template>
  <section
    id="home"
    class="min-h-screen bg-gradient-to-r from-blue-50 via-white to-blue-50 text-gray-900 flex items-center pt-0 md:pt-20"
  >
    <div
      class="max-w-6xl mx-auto px-4 w-full flex flex-col md:flex-row items-center justify-between flex-wrap gap-8"
    >
      <div class="flex-1 max-w-lg mb-8">
        <h2 class="text-4xl font-bold mb-4">Selamat Datang di Nusa Infra</h2>
        <p class="text-xl mb-8 h-[50px] flex items-center">
          <span>{{ typedText }}</span>
        </p>
        <a
          href="https://wa.me/6287785748085"
          target="_blank"
          class="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg transition duration-300 inline-flex items-center space-x-2"
        >
          <i class="fab fa-whatsapp text-xl"></i>
          <span>Hubungi Kami</span>
        </a>
      </div>
      <div class="flex-1 max-w-md">
        <img
          src="/img/kubernetes.jpg"
          alt="Kubernetes"
          class="w-full rounded-lg shadow-2xl"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
const { typedText } = useTypedText();
</script>
