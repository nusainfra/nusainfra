// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: [],
  app: {
    head: {
      title: 'Nusa Infra - IT Consultant Infrastruktur DevOps & Kubernetes Indonesia',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Nusa Infra - IT Consultant Infrastruktur: Mentoring 1on1 DevOps, Training di Perusahaan, Instalasi & Migrasi ke Kubernetes, Konsultasi DevOps, Bootcamp DevOps 3 Bulan, Penetration Testing. Layanan profesional untuk infrastruktur modern on-premises dan cloud di Indonesia.'
        },
        {
          name: 'keywords',
          content: 'IT Consultant Infrastruktur, DevOps Mentoring, Kubernetes Training, Penetration Testing Indonesia, Training DevOps, Migrasi Kubernetes, Konsultasi IT, Bootcamp DevOps, Nusa Infra'
        },
        { name: 'author', content: 'Nusa Infra' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Nusa Infra - IT Consultant Infrastruktur DevOps & Kubernetes Indonesia' },
        {
          property: 'og:description',
          content: 'Layanan IT Consultant untuk infrastruktur: Mentoring DevOps, Training Kubernetes, Penetration Testing, dan lebih. Spesialis on-premises & cloud.'
        },
        { property: 'og:image', content: 'https://nusainfra.com/img/devops.jpg' },
        { property: 'og:url', content: 'https://nusainfra.com' },
        { property: 'og:site_name', content: 'Nusa Infra' },
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:title', content: 'Nusa Infra - IT Consultant Infrastruktur DevOps & Kubernetes Indonesia' },
        {
          property: 'twitter:description',
          content: 'Layanan IT Consultant untuk infrastruktur: Mentoring DevOps, Training Kubernetes, Penetration Testing, dan lebih.'
        },
        { property: 'twitter:image', content: 'https://nusainfra.com/img/devops.jpg' }
      ],
      link: [
        { rel: 'canonical', href: 'https://nusainfra.com' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css' }
      ],
      script: [
        {
          type: 'application/ld+json',
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Nusa Infra",
            "description": "IT Consultant spesialis infrastruktur DevOps dan modern di Indonesia. Layanan termasuk Mentoring 1on1, Training di Perusahaan, Instalasi & Migrasi ke Kubernetes, Konsultasi DevOps, Bootcamp DevOps 3 Bulan, dan Penetration Testing.",
            "url": "https://nusainfra.com",
            "telephone": "+6287785748085",
            "email": "adhithia.irvan@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "ID"
            },
            "serviceType": "IT Consultant Infrastruktur",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Layanan IT",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Mentoring 1on1 DevOps",
                    "description": "Bimbingan personal untuk pengembangan keterampilan DevOps dan infrastruktur modern."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Training di Perusahaan",
                    "description": "Pelatihan khusus untuk tim perusahaan tentang Linux, Git, CI/CD, Docker, Kubernetes, dan monitoring."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Instalasi & Migrasi ke Kubernetes",
                    "description": "Layanan profesional untuk instalasi, konfigurasi, dan migrasi aplikasi ke Kubernetes."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Konsultasi DevOps",
                    "description": "Konsultasi lengkap untuk implementasi praktik DevOps, automation, dan infrastruktur cloud."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Bootcamp DevOps 3 Bulan",
                    "description": "Program intensif DevOps selama 3 bulan untuk pengembangan keterampilan lengkap."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Penetration Testing",
                    "description": "Layanan pengujian keamanan (pentest) untuk infrastruktur DevOps, aplikasi, dan sistem cloud untuk mengidentifikasi kerentanan."
                  }
                }
              ]
            },
            "sameAs": [
              "https://linkedin.com/in/nusainfra",
              "https://instagram.com/nusainfra"
            ]
          })
        }
      ]
    }
  },
  nitro: {
    preset: 'static'
  }
})
