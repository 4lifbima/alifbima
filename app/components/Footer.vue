<template>
  <footer
    id="contact"
    class="w-full bg-[#1D1D1D] rounded-t-[32px] sm:rounded-t-[48px] text-white pt-14 sm:pt-20 pb-8 px-5 sm:px-8 lg:px-14 mt-4 overflow-hidden"
  >
    <div class="max-w-[1160px] mx-auto">
      <!-- Top CTA Row: Let's Connect there + Hire me button -->
      <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 pb-10 border-b border-white/15">
        <h2 class="text-3xl sm:text-4xl md:text-[46px] font-semibold tracking-tight text-white">
          {{ $t('footer.connectTitle') }}
        </h2>

        <button
          type="button"
          @click="openModal()"
          class="inline-flex items-center gap-2 bg-[#FE4619] hover:bg-[#e53910] text-white rounded-full px-7 py-3 text-sm sm:text-base font-medium shadow-lg shadow-[#FE4619]/25 transition-all hover:scale-105 active:scale-95 shrink-0 cursor-pointer"
        >
          <span>{{ $t('footer.hireMe') }}</span>
          <ArrowUpRight class="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>

      <!-- Main 4-Column Footer Body -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 py-12 border-b border-white/15">
        <!-- Col 1: Brand, Bio, Socials -->
        <div class="lg:col-span-4 space-y-5">
          <NuxtLink to="/#home" class="inline-flex items-center gap-2.5 group">
            <span
              class="w-9 h-9 rounded-full bg-[#FE4619] flex items-center justify-center text-white font-brand font-bold text-xl leading-none"
            >
              a
            </span>
            <span class="font-brand text-white text-2xl font-bold tracking-tight">
              Alif Bima
            </span>
          </NuxtLink>

          <p class="text-neutral-400 text-sm leading-relaxed max-w-sm">
            {{ $t('footer.bio') }}
          </p>

          <!-- 5 Circular Social Icons -->
          <div class="flex items-center gap-2.5 pt-1">
            <a
              href="https://facebook.com/alifbima_"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              class="w-9 h-9 rounded-full bg-white/10 hover:bg-[#FE4619] text-white flex items-center justify-center transition-colors"
            >
              <Facebook class="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/alif-bima-pradana"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              class="w-9 h-9 rounded-full bg-white/10 hover:bg-[#FE4619] text-white flex items-center justify-center transition-colors"
            >
              <Linkedin class="w-4 h-4" />
            </a>
            <a
              href="https://github.com/4lifbima"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              class="w-9 h-9 rounded-full bg-white/10 hover:bg-[#FE4619] text-white flex items-center justify-center transition-colors"
            >
              <Github class="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/alifbimapradana07"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              class="w-9 h-9 rounded-full bg-white/10 hover:bg-[#FE4619] text-white flex items-center justify-center transition-colors"
            >
              <Instagram class="w-4 h-4" />
            </a>
            <a
              :href="`https://wa.me/6282291383797?text=${encodeURIComponent($t('hero.waMessage'))}`"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              class="w-9 h-9 rounded-full bg-white/10 hover:bg-[#FE4619] text-white flex items-center justify-center transition-colors"
            >
              <Phone class="w-4 h-4" />
            </a>
          </div>
        </div>

        <!-- Col 2: Navigation -->
        <div class="lg:col-span-2">
          <h4 class="text-[#FE4619] font-semibold text-[15px] mb-5">
            {{ $t('footer.navigation') }}
          </h4>
          <ul class="space-y-3 text-sm text-neutral-300">
            <li>
              <NuxtLink to="/#home" class="hover:text-[#FE4619] transition-colors">
                {{ $t('nav.home') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/#experience" class="hover:text-[#FE4619] transition-colors">
                {{ $t('nav.about') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/#services" class="hover:text-[#FE4619] transition-colors">
                {{ $t('nav.service') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/#experience" class="hover:text-[#FE4619] transition-colors">
                {{ $t('nav.resume') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/#portfolio" class="hover:text-[#FE4619] transition-colors">
                {{ $t('nav.project') }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Col 3: Contact Info -->
        <div class="lg:col-span-3">
          <h4 class="text-[#FE4619] font-semibold text-[15px] mb-5">
            {{ $t('footer.contact') }}
          </h4>
          <ul class="space-y-3 text-sm text-neutral-300">
            <li>
              <a
                :href="`https://wa.me/6282291383797?text=${encodeURIComponent($t('hero.waMessage'))}`"
                target="_blank"
                rel="noopener noreferrer"
                class="hover:text-[#FE4619] transition-colors"
              >
                +62 822-9138-3797
              </a>
            </li>
            <li>
              <a
                href="https://www.alifbima.my.id"
                target="_blank"
                rel="noopener noreferrer"
                class="hover:text-[#FE4619] transition-colors"
              >
                www.alifbima.my.id
              </a>
            </li>
            <li>
              <button
                type="button"
                @click="openModal()"
                class="hover:text-[#FE4619] transition-colors text-left cursor-pointer"
              >
                alifbimapradana07@gmail.com
              </button>
            </li>
          </ul>
        </div>

        <!-- Col 4: Get the latest information -->
        <div class="lg:col-span-3">
          <h4 class="text-[#FE4619] font-semibold text-[15px] mb-5">
            {{ $t('footer.newsletter') }}
          </h4>
          <form
            @submit.prevent="handleQuickEmail"
            class="flex items-stretch rounded-xl overflow-hidden bg-white shadow-sm"
          >
            <input
              v-model="quickEmail"
              type="email"
              required
              :placeholder="$t('footer.emailPlaceholder')"
              class="w-full px-4 py-3 text-sm text-[#1D1D1D] placeholder-neutral-400 bg-white focus:outline-none"
            />
            <button
              type="submit"
              class="bg-[#FE4619] hover:bg-[#e53910] text-white px-4 flex items-center justify-center transition-colors shrink-0 cursor-pointer"
              aria-label="Send email"
            >
              <Send class="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>

      <!-- Bottom Copyright Row -->
      <div class="pt-7 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-neutral-400">
        <p>
          {{ $t('footer.rightsPrefix') }}
          <span class="text-[#FE4619] font-medium">Alif Bima</span>.
          {{ $t('footer.rightsSuffix') }}
        </p>
        <div class="flex items-center gap-3">
          <a href="#contact" @click.prevent="openModal()" class="hover:text-white transition-colors">
            {{ $t('footer.terms') }}
          </a>
          <span class="text-neutral-600">|</span>
          <a href="#contact" @click.prevent="openModal()" class="hover:text-white transition-colors">
            {{ $t('footer.privacy') }}
          </a>
        </div>
      </div>
    </div>

    <!-- Interactive Hire Me / Contact Modal -->
    <Teleport to="body">
      <Transition name="modal-fade">
        <div
          v-if="isModalOpen"
          class="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          @click.self="closeModal"
        >
          <div class="w-full max-w-lg bg-[#1D1D1D] border border-white/15 rounded-[28px] p-6 sm:p-8 text-white shadow-2xl relative">
            <button
              type="button"
              @click="closeModal"
              class="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-[#FE4619] text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X class="w-4 h-4" />
            </button>

            <h3 class="text-2xl sm:text-3xl font-semibold text-white pr-10">
              {{ $t('contact.heading') }}
            </h3>
            <p class="text-sm text-neutral-400 mt-2 mb-6 leading-relaxed">
              {{ $t('contact.desc') }}
            </p>

            <div
              v-if="formState === 'success'"
              class="mb-4 p-3.5 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 text-sm flex items-center gap-2.5"
            >
              <CheckCircle class="w-5 h-5 shrink-0" />
              <span>{{ statusMessage }}</span>
            </div>

            <div
              v-if="formState === 'error'"
              class="mb-4 p-3.5 rounded-xl bg-red-500/15 border border-red-500/40 text-red-300 text-sm flex items-center gap-2.5"
            >
              <AlertCircle class="w-5 h-5 shrink-0" />
              <span>{{ statusMessage }}</span>
            </div>

            <form @submit.prevent="handleSubmit" class="space-y-3.5">
              <input
                v-model="form.name"
                type="text"
                :placeholder="$t('contact.namePlaceholder')"
                :disabled="formState === 'loading'"
                class="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-neutral-400 text-sm focus:outline-none focus:border-[#FE4619] transition-colors"
              />
              <input
                v-model="form.email"
                type="email"
                :placeholder="$t('contact.emailPlaceholder')"
                :disabled="formState === 'loading'"
                class="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-neutral-400 text-sm focus:outline-none focus:border-[#FE4619] transition-colors"
              />
              <textarea
                v-model="form.message"
                rows="4"
                :placeholder="$t('contact.messagePlaceholder')"
                :disabled="formState === 'loading'"
                class="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-neutral-400 text-sm focus:outline-none focus:border-[#FE4619] transition-colors resize-none"
              />

              <div class="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="submit"
                  :disabled="formState === 'loading'"
                  class="flex-1 py-3 px-6 rounded-full bg-[#FE4619] hover:bg-[#e53910] text-white font-semibold text-sm flex items-center justify-center gap-2 transition-colors disabled:opacity-60 cursor-pointer"
                >
                  <Loader2 v-if="formState === 'loading'" class="w-4 h-4 animate-spin" />
                  <Send v-else class="w-4 h-4" />
                  <span>{{ formState === 'loading' ? $t('contact.sending') : $t('contact.send') }}</span>
                </button>
                <a
                  :href="`https://wa.me/6282291383797?text=${encodeURIComponent($t('hero.waMessage'))}`"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="py-3 px-5 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-sm flex items-center justify-center gap-2 border border-white/15 transition-colors"
                >
                  <Phone class="w-4 h-4 text-[#FE4619]" />
                  <span>{{ $t('contact.whatsappQuick') }}</span>
                </a>
              </div>
            </form>
          </div>
        </div>
      </Transition>
    </Teleport>
  </footer>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import {
  ArrowUpRight,
  Facebook,
  Linkedin,
  Github,
  Instagram,
  Phone,
  Send,
  X,
  Loader2,
  CheckCircle,
  AlertCircle
} from 'lucide-vue-next'

const { t } = useI18n()

const isModalOpen = ref(false)
const quickEmail = ref('')
const form = ref({ name: '', email: '', message: '' })
const formState = ref<'idle' | 'loading' | 'success' | 'error'>('idle')
const statusMessage = ref('')

const openModal = (prefillEmail?: string) => {
  if (prefillEmail) form.value.email = prefillEmail
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
}

const handleQuickEmail = () => {
  if (!quickEmail.value.trim()) return
  openModal(quickEmail.value.trim())
  quickEmail.value = ''
}

const handleSubmit = async () => {
  if (!form.value.name.trim() || !form.value.email.trim() || !form.value.message.trim()) {
    formState.value = 'error'
    statusMessage.value = t('contact.errorFill')
    return
  }

  formState.value = 'loading'
  try {
    const response = await $fetch('/api/contact', {
      method: 'POST',
      body: {
        name: form.value.name.trim(),
        email: form.value.email.trim(),
        message: form.value.message.trim()
      }
    })
    formState.value = 'success'
    statusMessage.value = (response as any).message || t('contact.successMsg')
    form.value = { name: '', email: '', message: '' }
    setTimeout(() => {
      formState.value = 'idle'
    }, 5000)
  } catch (error: any) {
    formState.value = 'error'
    statusMessage.value = error.data?.statusMessage || t('contact.failMsg')
  }
}

const handleOpenEvent = () => openModal()

onMounted(() => {
  if (import.meta.client) {
    window.addEventListener('open-hire-modal', handleOpenEvent)
  }
})

onUnmounted(() => {
  if (import.meta.client) {
    window.removeEventListener('open-hire-modal', handleOpenEvent)
  }
})
</script>

<style scoped>
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.25s ease;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
</style>
