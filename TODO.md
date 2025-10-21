# Convert Static Web to Nuxt.js Project - Detailed Steps

## Overview
Convert the existing static HTML website (Nusa Infra) to a Nuxt.js application with Vue.js components, proper routing, and modern development practices.

## Completed Tasks
- [x] Initialize Nuxt.js project structure (Nuxt 3.13.0 installed)
- [x] Fix Node.js compatibility issues (downgraded to compatible version)

## Pending Tasks
- [ ] Configure Nuxt for Tailwind CSS and assets
- [ ] Move static assets to public directory
- [ ] Create Vue components for reusable sections (Header, Footer, Services, etc.)
- [ ] Create Nuxt pages (pages/index.vue, pages/bootcamp-devops.vue)
- [ ] Convert JavaScript to Vue composables (typed text, professional loader)
- [ ] Set up SEO meta tags and structured data
- [ ] Configure static generation
- [ ] Test and verify all functionality
- [ ] Update build and deployment scripts

## Detailed Breakdown

### 1. Configure Nuxt for Tailwind CSS and assets
- [ ] Install @nuxtjs/tailwindcss
- [ ] Update nuxt.config.ts with Tailwind configuration
- [ ] Add Font Awesome CDN or install package
- [ ] Configure asset handling

### 2. Move static assets to public directory
- [ ] Move img/ directory to public/
- [ ] Move favicon.ico to public/
- [ ] Move robots.txt, sitemap.xml to public/

### 3. Create Vue components for reusable sections
- [ ] Create components/Header.vue
- [ ] Create components/Footer.vue
- [ ] Create components/Services.vue
- [ ] Create components/About.vue
- [ ] Create components/Professionals.vue
- [ ] Create components/Contact.vue
- [ ] Create components/ToolsMarquee.vue
- [ ] Create components/Hero.vue (for home page)
- [ ] Create components/BootcampHero.vue (for bootcamp page)
- [ ] Create components/Curriculum.vue (for bootcamp page)
- [ ] Create components/Benefits.vue (for bootcamp page)
- [ ] Create components/ClassInfo.vue (for bootcamp page)

### 4. Create Nuxt pages
- [ ] Create pages/index.vue (home page)
- [ ] Create pages/bootcamp-devops.vue (bootcamp page)

### 5. Convert JavaScript to Vue composables
- [ ] Create composables/useTypedText.js (convert typed-text.js)
- [ ] Create composables/useProfessionals.js (convert profesional.js)
- [ ] Create composables/useToolsMarquee.js (convert tools-marquee.css to composable)

### 6. Set up SEO meta tags and structured data
- [ ] Configure global head in nuxt.config.ts
- [ ] Add page-specific meta tags
- [ ] Add structured data (JSON-LD)

### 7. Configure static generation
- [ ] Update nuxt.config.ts for static generation
- [ ] Test build process
- [ ] Verify static output

### 8. Testing and Verification
- [ ] Test all pages load correctly
- [ ] Verify components render properly
- [ ] Test responsive design
- [ ] Verify JavaScript functionality works
- [ ] Check SEO meta tags
- [ ] Test static generation

### 9. Final Updates
- [ ] Update package.json scripts if needed
- [ ] Update README.md with build instructions
- [ ] Clean up old static files
