<template>
  <section id="services" class="py-20 bg-white">
    <div class="max-w-6xl mx-auto px-4">
      <h2
        class="text-3xl font-bold text-center mb-12 text-gray-800"
      >
        Layanan Kami
      </h2>
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <div
          class="bg-gray-50 p-6 rounded-lg text-center shadow-lg hover:shadow-xl transition duration-300 hover:-translate-y-1"
        >
          <i
            class="fas fa-user-graduate text-4xl text-blue-500 mb-4"
          ></i>
          <h3 class="text-xl font-semibold mb-3 text-gray-800">
            Mentoring 1on1
          </h3>
          <p class="text-gray-600">
            Bimbingan personal untuk pengembangan keterampilan DevOps dan
            infrastruktur modern, baik on-premises maupun di cloud provider.
          </p>
        </div>
        <div
          class="bg-gray-50 p-6 rounded-lg text-center shadow-lg hover:shadow-xl transition duration-300 hover:-translate-y-1"
        >
          <i
            class="fas fa-chalkboard-teacher text-4xl text-blue-500 mb-4"
          ></i>
          <h3 class="text-xl font-semibold mb-3 text-gray-800">
            Training di Perusahaan
          </h3>
          <p class="text-gray-600">
            Pelatihan khusus untuk tim perusahaan tentang Linux, Git, CI/CD,
            Docker, Kubernetes, dan monitoring, baik on-premises maupun di cloud
            provider.
          </p>
        </div>
        <div
          class="bg-gray-50 p-6 rounded-lg text-center shadow-lg hover:shadow-xl transition duration-300 hover:-translate-y-1"
        >
          <i
            class="fas fa-ship text-4xl text-blue-500 mb-4"
          ></i>
          <h3 class="text-xl font-semibold mb-3 text-gray-800">
            Instalasi & Migrasi ke Kubernetes
          </h3>
          <p class="text-gray-600">
            Layanan profesional untuk instalasi, konfigurasi, dan migrasi aplikasi
            ke lingkungan Kubernetes, baik on-premises maupun di cloud provider.
          </p>
        </div>
        <div
          class="bg-gray-50 p-6 rounded-lg text-center shadow-lg hover:shadow-xl transition duration-300 hover:-translate-y-1"
        >
          <i
            class="fas fa-tools text-4xl text-blue-500 mb-4"
          ></i>
          <h3 class="text-xl font-semibold mb-3 text-gray-800">
            Konsultasi DevOps
          </h3>
          <p class="text-gray-600">
            Konsultasi lengkap untuk implementasi praktik DevOps, automation,
            dan infrastruktur cloud, baik on-premises maupun di cloud provider.
          </p>
        </div>
        <div class="bg-yellow-50 border-2 border-yellow-300 p-6 rounded-lg text-center shadow-lg hover:shadow-xl transition duration-300 hover:-translate-y-1">
          <i class="fas fa-graduation-cap text-4xl text-yellow-600 mb-4"></i>
          <h3 class="text-xl font-semibold mb-3 text-gray-800">Bootcamp DevOps 3 Bulan</h3>
          <p class="text-gray-600 mb-3">Program intensif DevOps selama 3 bulan untuk pengembangan keterampilan lengkap.</p>
          <NuxtLink to="/bootcamp-devops" class="block hover:bg-yellow-200 transition duration-300 rounded-full">
            <div class="bg-yellow-100 px-3 py-1 rounded-full inline-block mb-2">
              <span class="text-yellow-800 font-semibold text-sm">Coming Soon</span>
            </div>
          </NuxtLink>
          <p class="text-gray-600 text-sm">Hubungi untuk informasi lebih lanjut</p>
        </div>
        <div class="bg-gray-50 p-6 rounded-lg text-center shadow-lg hover:shadow-xl transition duration-300 hover:-translate-y-1">
          <i class="fas fa-shield-alt text-4xl text-blue-500 mb-4"></i>
          <h3 class="text-xl font-semibold mb-3 text-gray-800">Penetration Testing</h3>
          <p class="text-gray-600">Layanan pengujian keamanan (pentest) untuk infrastruktur DevOps, aplikasi, dan sistem cloud untuk mengidentifikasi kerentanan.</p>
        </div>
      </div>
    </div>
  </section>
</template>
