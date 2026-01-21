<template>
  <Transition
    enter-active-class="transition-opacity duration-300"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity duration-300"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div v-if="isOpen" 
      id="mobile-menu"
      class="md:hidden fixed inset-0 bg-white dark:bg-dark-bg z-[45] flex flex-col pt-24 px-6 space-y-6"
      @click.self="closeMenu">
      <button @click="closeMenu"
        class="absolute top-6 right-6 text-slate-600 dark:text-slate-200 hover:text-primary transition-colors z-[60]"
        aria-label="Close menu">
        <X class="w-8 h-8" />
      </button>
      <a href="#about" @click="closeMenu"
        class="text-2xl font-semibold text-slate-800 dark:text-slate-100 mobile-link flex items-center gap-4 hover:text-primary dark:hover:text-accent-teal transition-colors">
        <User class="w-6 h-6" /> About Me
      </a>
      <a href="#skills" @click="closeMenu"
        class="text-2xl font-semibold text-slate-800 dark:text-slate-100 mobile-link flex items-center gap-4 hover:text-primary dark:hover:text-accent-teal transition-colors">
        <Code2 class="w-6 h-6" /> Skills
      </a>
      <a href="#portfolio" @click="closeMenu"
        class="text-2xl font-semibold text-slate-800 dark:text-slate-100 mobile-link flex items-center gap-4 hover:text-primary dark:hover:text-accent-teal transition-colors">
        <Briefcase class="w-6 h-6" /> Portfolio
      </a>
      <a href="#experience" @click="closeMenu"
        class="text-2xl font-semibold text-slate-800 dark:text-slate-100 mobile-link flex items-center gap-4 hover:text-primary dark:hover:text-accent-teal transition-colors">
        <Clock class="w-6 h-6" /> Experience
      </a>
      <a href="#contact" @click="closeMenu"
        class="text-2xl font-semibold text-primary dark:text-accent-teal mobile-link flex items-center gap-4 hover:text-primary-dark transition-colors">
        <Mail class="w-6 h-6" /> Contact
      </a>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { X, User, Code2, Briefcase, Clock, Mail } from 'lucide-vue-next'

const props = defineProps<{
  isOpen: boolean
}>()

const emit = defineEmits<{
  close: []
}>()

const closeMenu = () => {
  emit('close')
}

watch(() => props.isOpen, (newVal) => {
  if (import.meta.client) {
    if (newVal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }
}, { immediate: true })

onUnmounted(() => {
  if (import.meta.client) {
    document.body.style.overflow = ''
  }
})
</script>
