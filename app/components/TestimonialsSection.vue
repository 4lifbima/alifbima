<template>
  <section class="py-24 bg-white dark:bg-dark-bg w-full max-w-full overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-white mb-16 reveal break-words">Client
        Feedback</h2>

      <!-- Infinite Scroll Container -->
      <div class="relative overflow-hidden w-full">
        <div class="flex gap-6 md:gap-8" 
          :style="{ 
            transform: `translateX(-${translateX}px)`
          }">
          <!-- Duplicate items for seamless loop -->
          <div v-for="(testimonial, index) in duplicatedTestimonials" :key="`${testimonial.id}-${index}`"
            class="flex-shrink-0 w-[calc(100%-1.5rem)] sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.33rem)]">
            <div class="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-dark-card dark:to-slate-800 p-6 md:p-8 rounded-2xl relative min-h-[320px] flex flex-col shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200 dark:border-slate-700">
              <!-- Quote Icon -->
              <div class="absolute top-6 right-6">
                <Quote class="w-12 h-12 text-primary/10 dark:text-accent-teal/10" />
              </div>
              
              <!-- Rating Stars -->
              <div class="flex gap-1 mb-4">
                <Star v-for="star in testimonial.rating" :key="star" 
                  class="w-4 h-4 fill-yellow-400 text-yellow-400" />
              </div>
              
              <!-- Feedback Text -->
              <p class="text-slate-700 dark:text-slate-300 mb-6 text-sm md:text-base leading-relaxed flex-1 line-clamp-4">
                "{{ testimonial.feedback }}"
              </p>
              
              <!-- Author Info -->
              <div class="flex items-center gap-4 mt-auto pt-4 border-t border-slate-200 dark:border-slate-700">
                <div class="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-primary/20 dark:ring-accent-teal/20">
                  <img :src="testimonial.image" :alt="testimonial.name" 
                    class="w-full h-full object-cover">
                </div>
                <div class="flex-1 min-w-0">
                  <h5 class="font-bold text-slate-900 dark:text-white text-sm md:text-base truncate">
                    {{ testimonial.name }}
                  </h5>
                  <p class="text-xs text-slate-500 dark:text-slate-400 truncate">
                    {{ testimonial.role }} • {{ testimonial.company }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Quote, Star } from 'lucide-vue-next'
import { nextTick, onMounted, onUnmounted } from 'vue'

const testimonials = useTestimonials()
const translateX = ref(0)
const cardWidth = ref(0)
const gap = 24 // gap-6 = 1.5rem = 24px

// Duplicate testimonials for seamless infinite scroll (3 sets)
const duplicatedTestimonials = computed(() => {
  return [...testimonials, ...testimonials, ...testimonials]
})

let animationFrameId: number | null = null
let resizeHandler: (() => void) | null = null

const calculateCardWidth = () => {
  if (!import.meta.client) return
  
  try {
    const container = document.querySelector('.max-w-7xl')
    if (!container) return
    
    const containerWidth = container.clientWidth - 32 // minus padding
    if (containerWidth <= 0) return
    
    const isMobile = window.innerWidth < 640
    const isTablet = window.innerWidth >= 640 && window.innerWidth < 1024
    
    if (isMobile) {
      cardWidth.value = containerWidth // 1 card per row
    } else if (isTablet) {
      cardWidth.value = (containerWidth - gap) / 2 // 2 cards per row
    } else {
      cardWidth.value = (containerWidth - gap * 2) / 3 // 3 cards per row
    }
  } catch (e) {
    console.warn('Error calculating card width:', e)
  }
}

const startInfiniteScroll = () => {
  if (!import.meta.client) return
  
  // Stop any existing animation
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId)
    animationFrameId = null
  }
  
  // Wait a bit to ensure DOM is ready
  setTimeout(() => {
    if (!import.meta.client) return
    
    calculateCardWidth()
    
    if (cardWidth.value <= 0) {
      // Retry if calculation failed
      setTimeout(() => calculateCardWidth(), 200)
      return
    }
    
    // Handle resize
    if (resizeHandler) {
      window.removeEventListener('resize', resizeHandler)
    }
    resizeHandler = () => {
      calculateCardWidth()
    }
    window.addEventListener('resize', resizeHandler)
    
    // Start smooth scrolling animation
    const animate = () => {
      if (cardWidth.value > 0 && testimonials.length > 0) {
        translateX.value += 0.5 // Smooth scroll speed (adjust for faster/slower)
        
        // Calculate total width of one set of testimonials
        const oneSetWidth = cardWidth.value * testimonials.length + gap * (testimonials.length - 1)
        
        // Reset position seamlessly when we've scrolled through one set
        if (translateX.value >= oneSetWidth && oneSetWidth > 0) {
          translateX.value = translateX.value - oneSetWidth
        }
      }
      
      animationFrameId = requestAnimationFrame(animate)
    }
    
    animate()
  }, 100)
}

onMounted(() => {
  nextTick(() => {
    startInfiniteScroll()
  })
})

onUnmounted(() => {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId)
  }
  if (resizeHandler) {
    window.removeEventListener('resize', resizeHandler)
  }
})
</script>
