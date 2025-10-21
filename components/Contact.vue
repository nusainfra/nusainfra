<template>
  <section id="contact" class="py-20 bg-gray-900 text-gray-300">
    <div class="max-w-6xl mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12 text-white">
        Hubungi Kami
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 class="text-xl font-semibold mb-6 text-white">
            Informasi Kontak
          </h3>
          <div class="space-y-4">
            <div class="flex items-center">
              <i class="fas fa-envelope text-blue-400 mr-3 text-lg"></i>
              <span>nusa.infra@gmail.com</span>
            </div>
            <div class="flex items-center">
              <i class="fab fa-whatsapp text-green-400 mr-3 text-lg"></i>
              <span>0877-8574-8085</span>
            </div>
            <div class="flex items-center">
              <i class="fab fa-linkedin text-blue-600 mr-3 text-lg"></i>
              <a
                href="https://linkedin.com/in/nusainfra"
                target="_blank"
                class="hover:text-blue-400 transition duration-300"
                >linkedin.com/in/nusainfra</a
              >
            </div>
            <div class="flex items-center">
              <i class="fab fa-instagram text-pink-400 mr-3 text-lg"></i>
              <a
                href="https://instagram.com/nusainfra"
                target="_blank"
                class="hover:text-pink-300 transition duration-300"
                >@nusainfra</a
              >
            </div>
          </div>
          <div class="mt-8">
            <h4 class="text-lg font-semibold mb-4 text-white">
              Layanan Kami
            </h4>
            <ul class="space-y-2 text-gray-400">
              <li>• Mentoring 1on1</li>
              <li>• Training di Perusahaan</li>
              <li>• Instalasi & Migrasi ke Kubernetes</li>
              <li>• Konsultasi DevOps</li>
              <li>• Penetration Testing</li>
            </ul>
          </div>
        </div>
        <div>
          <form @submit.prevent="submitForm" class="bg-gray-800 p-6 rounded-lg">
            <div class="mb-4">
              <label for="name" class="block text-sm font-medium mb-2"
                >Nama</label
              >
              <input
                type="text"
                id="name"
                v-model="form.name"
                required
                class="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              />
            </div>
            <div class="mb-4">
              <label for="email" class="block text-sm font-medium mb-2"
                >Email</label
              >
              <input
                type="email"
                id="email"
                v-model="form.email"
                required
                class="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              />
            </div>
            <div class="mb-4">
              <label for="message" class="block text-sm font-medium mb-2"
                >Pesan</label
              >
              <textarea
                id="message"
                v-model="form.message"
                required
                rows="4"
                class="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              ></textarea>
            </div>
            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition duration-300 disabled:opacity-50"
            >
              <span v-if="isSubmitting">Mengirim...</span>
              <span v-else>Kirim Pesan</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const form = ref({
  name: '',
  email: '',
  message: ''
});

const isSubmitting = ref(false);

const submitForm = async () => {
  isSubmitting.value = true;
  // Simulate form submission
  await new Promise(resolve => setTimeout(resolve, 2000));
  alert('Pesan berhasil dikirim!');
  form.value = { name: '', email: '', message: '' };
  isSubmitting.value = false;
};
</script>
