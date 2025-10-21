<template>
  <div>
    <Header />
    <section class="pt-20 pb-12 bg-gradient-to-r from-blue-50 via-white to-blue-50">
      <div class="max-w-6xl mx-auto px-4">
        <div class="text-center mb-12">
          <h1 class="text-4xl font-bold text-gray-800 mb-4">Bootcamp DevOps 3 Bulan</h1>
          <p class="text-xl text-gray-600">Program intensif untuk menjadi DevOps Engineer profesional</p>
        </div>
        <div class="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-8">
          <div class="flex">
            <div class="flex-shrink-0">
              <i class="fas fa-info-circle text-yellow-400"></i>
            </div>
            <div class="ml-3">
              <p class="text-sm text-yellow-700">
                <strong>Coming Soon!</strong> Program bootcamp ini sedang dalam persiapan. Hubungi kami untuk informasi lebih lanjut dan pendaftaran awal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="max-w-6xl mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 class="text-3xl font-bold mb-6 text-gray-800">Apa yang Akan Anda Pelajari?</h2>
            <div class="space-y-6">
              <div class="flex items-start">
                <div class="bg-blue-100 p-2 rounded-full mr-4">
                  <i class="fas fa-linux text-blue-600"></i>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-800">Linux System Administration</h3>
                  <p class="text-gray-600">Master Linux fundamentals, shell scripting, and system management</p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="bg-green-100 p-2 rounded-full mr-4">
                  <i class="fab fa-git text-green-600"></i>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-800">Version Control with Git</h3>
                  <p class="text-gray-600">Advanced Git workflows, branching strategies, and collaboration</p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="bg-blue-100 p-2 rounded-full mr-4">
                  <i class="fab fa-docker text-blue-600"></i>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-800">Containerization with Docker</h3>
                  <p class="text-gray-600">Docker fundamentals, multi-stage builds, and container orchestration</p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="bg-purple-100 p-2 rounded-full mr-4">
                  <i class="fas fa-cogs text-purple-600"></i>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-800">CI/CD Pipelines</h3>
                  <p class="text-gray-600">Build automated pipelines with Jenkins, GitLab CI, and GitHub Actions</p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="bg-red-100 p-2 rounded-full mr-4">
                  <i class="fas fa-ship text-red-600"></i>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-800">Kubernetes Orchestration</h3>
                  <p class="text-gray-600">Deploy and manage applications on Kubernetes clusters</p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="bg-orange-100 p-2 rounded-full mr-4">
                  <i class="fas fa-chart-line text-orange-600"></i>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-800">Monitoring & Logging</h3>
                  <p class="text-gray-600">Implement monitoring with Prometheus and logging with ELK stack</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 class="text-3xl font-bold mb-6 text-gray-800">Struktur Program</h2>
            <div class="bg-gray-50 p-6 rounded-lg">
              <div class="space-y-4">
                <div class="flex justify-between items-center">
                  <span class="font-semibold">Bulan 1: Fundamentals</span>
                  <span class="text-blue-600">4 Minggu</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div class="bg-blue-600 h-2 rounded-full" style="width: 33%"></div>
                </div>
                <ul class="text-sm text-gray-600 ml-4">
                  <li>• Linux & Shell Scripting</li>
                  <li>• Git & GitHub</li>
                  <li>• Docker Basics</li>
                  <li>• Basic Networking</li>
                </ul>
              </div>
              <div class="space-y-4 mt-6">
                <div class="flex justify-between items-center">
                  <span class="font-semibold">Bulan 2: CI/CD & Orchestration</span>
                  <span class="text-green-600">4 Minggu</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div class="bg-green-600 h-2 rounded-full" style="width: 66%"></div>
                </div>
                <ul class="text-sm text-gray-600 ml-4">
                  <li>• Jenkins/GitLab CI</li>
                  <li>• Kubernetes Fundamentals</li>
                  <li>• Helm Charts</li>
                  <li>• Service Mesh (Istio)</li>
                </ul>
              </div>
              <div class="space-y-4 mt-6">
                <div class="flex justify-between items-center">
                  <span class="font-semibold">Bulan 3: Advanced & Projects</span>
                  <span class="text-purple-600">4 Minggu</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div class="bg-purple-600 h-2 rounded-full" style="width: 100%"></div>
                </div>
                <ul class="text-sm text-gray-600 ml-4">
                  <li>• Monitoring & Logging</li>
                  <li>• Security Best Practices</li>
                  <li>• Cloud Platforms (AWS/GCP)</li>
                  <li>• Capstone Project</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-gray-50">
      <div class="max-w-6xl mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-6 text-gray-800">Siap Memulai Karir DevOps Anda?</h2>
        <p class="text-xl text-gray-600 mb-8">Bergabunglah dengan program bootcamp intensif kami dan jadilah DevOps Engineer yang handal</p>
        <a
          href="https://wa.me/6287785748085"
          target="_blank"
          class="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg transition duration-300 inline-flex items-center space-x-2"
        >
          <i class="fab fa-whatsapp text-xl"></i>
          <span>Daftar Sekarang</span>
        </a>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
// Page components are auto-imported
</script>
