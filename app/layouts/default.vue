<template>
  <div class="bg-white text-[#1D1D1D] overflow-x-hidden max-w-full w-full min-h-screen">
    <Navbar :is-mobile-menu-open="isMobileMenuOpen" @toggle-menu="toggleMobileMenu" />
    <MobileMenu :is-open="isMobileMenuOpen" @close="closeMobileMenu" />
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick, watch } from 'vue'

const isMobileMenuOpen = ref(false)
const route = useRoute()

let revealObserver: IntersectionObserver | null = null

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const setupScrollAnimations = () => {
  if (!import.meta.client) return

  if (revealObserver) {
    revealObserver.disconnect()
    revealObserver = null
  }

  setTimeout(() => {
    if (!import.meta.client) return

    const revealElements = document.querySelectorAll('.reveal')
    if (revealElements.length > 0) {
      revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.target) {
            entry.target.classList.add('active')
          }
        })
      }, {
        threshold: 0.08,
        rootMargin: '0px 0px -30px 0px'
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
  if (import.meta.client) {
    document.documentElement.classList.remove('dark')
  }
  nextTick(() => {
    setupScrollAnimations()
  })
})

watch(() => route.path, () => {
  isMobileMenuOpen.value = false
  if (revealObserver) {
    revealObserver.disconnect()
    revealObserver = null
  }

  nextTick(() => {
    setTimeout(() => {
      setupScrollAnimations()
    }, 150)
  })
}, { flush: 'post' })

onUnmounted(() => {
  if (revealObserver) {
    revealObserver.disconnect()
  }
  if (import.meta.client) {
    document.body.style.overflow = ''
  }
})
</script>
