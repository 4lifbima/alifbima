<template>
  <Transition
    enter-active-class="transition-all duration-250 ease-out"
    enter-from-class="-translate-y-4 opacity-0 scale-95"
    enter-to-class="translate-y-0 opacity-100 scale-100"
    leave-active-class="transition-all duration-200 ease-in"
    leave-from-class="translate-y-0 opacity-100 scale-100"
    leave-to-class="-translate-y-4 opacity-0 scale-95"
  >
    <div
      v-if="isOpen"
      id="mobile-menu"
      class="lg:hidden fixed top-[74px] sm:top-[84px] inset-x-3 sm:inset-x-6 z-50 max-w-lg mx-auto"
    >
      <div
        class="w-full bg-[#161616]/95 backdrop-blur-xl border border-white/10 shadow-2xl rounded-[28px] p-5 space-y-4 text-white"
      >
        <!-- Navigation Links -->
        <div class="flex flex-col space-y-1">
          <NuxtLink
            to="/#home"
            @click="closeMenu"
            class="px-4 py-3 rounded-2xl text-[15px] font-medium text-neutral-200 hover:bg-white/10 hover:text-[#FE4619] transition-colors flex items-center justify-between"
          >
            <span>{{ $t('nav.home') }}</span>
            <ChevronRight class="w-4 h-4 text-neutral-500" />
          </NuxtLink>
          <NuxtLink
            to="/#services"
            @click="closeMenu"
            class="px-4 py-3 rounded-2xl text-[15px] font-medium text-neutral-200 hover:bg-white/10 hover:text-[#FE4619] transition-colors flex items-center justify-between"
          >
            <span>{{ $t('nav.service') }}</span>
            <ChevronRight class="w-4 h-4 text-neutral-500" />
          </NuxtLink>
          <NuxtLink
            to="/#experience"
            @click="closeMenu"
            class="px-4 py-3 rounded-2xl text-[15px] font-medium text-neutral-200 hover:bg-white/10 hover:text-[#FE4619] transition-colors flex items-center justify-between"
          >
            <span>{{ $t('nav.resume') }}</span>
            <ChevronRight class="w-4 h-4 text-neutral-500" />
          </NuxtLink>
          <NuxtLink
            to="/#portfolio"
            @click="closeMenu"
            class="px-4 py-3 rounded-2xl text-[15px] font-medium text-neutral-200 hover:bg-white/10 hover:text-[#FE4619] transition-colors flex items-center justify-between"
          >
            <span>{{ $t('nav.project') }}</span>
            <ChevronRight class="w-4 h-4 text-neutral-500" />
          </NuxtLink>
          <NuxtLink
            to="/#blog"
            @click="closeMenu"
            class="px-4 py-3 rounded-2xl text-[15px] font-medium text-neutral-200 hover:bg-white/10 hover:text-[#FE4619] transition-colors flex items-center justify-between"
          >
            <span>Blog</span>
            <ChevronRight class="w-4 h-4 text-neutral-500" />
          </NuxtLink>
          <NuxtLink
            to="/#contact"
            @click="closeMenu"
            class="px-4 py-3 rounded-2xl text-[15px] font-medium text-neutral-200 hover:bg-white/10 hover:text-[#FE4619] transition-colors flex items-center justify-between"
          >
            <span>{{ $t('nav.contact') }}</span>
            <ChevronRight class="w-4 h-4 text-neutral-500" />
          </NuxtLink>
        </div>

        <!-- Hire Me Primary Orange CTA -->
        <button
          type="button"
          @click="openHireModal"
          class="w-full py-3.5 px-5 rounded-full bg-[#FE4619] hover:bg-[#e53910] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#FE4619]/25 transition-all active:scale-[0.98] cursor-pointer"
        >
          <span>{{ $t('footer.hireMe') }}</span>
          <ArrowUpRight class="w-4 h-4" />
        </button>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ChevronRight, ArrowUpRight } from 'lucide-vue-next'

defineProps<{ isOpen: boolean }>()
const emit = defineEmits<{ close: [] }>()

const closeMenu = () => emit('close')

const openHireModal = () => {
  closeMenu()
  if (import.meta.client) {
    window.dispatchEvent(new CustomEvent('open-hire-modal'))
  }
}
</script>
