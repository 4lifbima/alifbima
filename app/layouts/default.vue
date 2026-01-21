<template>
  <div class="transition-colors duration-300 overflow-x-hidden max-w-full w-full">
    <Navbar @toggle-menu="toggleMobileMenu" />
    <MobileMenu :is-open="isMobileMenuOpen" @close="closeMobileMenu" />
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick, watch } from 'vue'

const isMobileMenuOpen = ref(false)
const { initDarkMode } = useDarkMode()
const route = useRoute()

// Scroll animation observer
let revealObserver: IntersectionObserver | null = null

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const setupScrollAnimations = () => {
  if (!import.meta.client) return
  
  // Clean up existing observer
  if (revealObserver) {
    revealObserver.disconnect()
    revealObserver = null
  }
  
  // Wait a bit to ensure DOM is ready
  setTimeout(() => {
    if (!import.meta.client) return
    
    // Set up scroll animations
    const revealElements = document.querySelectorAll('.reveal')
    if (revealElements.length > 0) {
      revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.target) {
            entry.target.classList.add('active')
          }
        })
      }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      })

      revealElements.forEach(el => {
        if (el && revealObserver) {
          revealObserver.observe(el)
        }
      })
    }
  }, 100)
}

onMounted(() => {
  // Initialize dark mode
  initDarkMode()
  
  // Setup animations after a short delay to ensure DOM is ready
  nextTick(() => {
    setupScrollAnimations()
  })
})

// Reinitialize on route change
watch(() => route.path, () => {
  // Clean up first
  if (revealObserver) {
    revealObserver.disconnect()
    revealObserver = null
  }
  
  // Wait for route transition to complete
  nextTick(() => {
    setTimeout(() => {
      setupScrollAnimations()
    }, 150)
  })
}, { flush: 'post' })

onUnmounted(() => {
  // Clean up observer
  if (revealObserver) {
    revealObserver.disconnect()
  }
  
  // Clean up body overflow style
  if (import.meta.client) {
    document.body.style.overflow = ''
  }
})
</script>
