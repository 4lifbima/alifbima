<template>
  <section id="contact" class="py-24 bg-white dark:bg-dark-bg relative w-full max-w-full overflow-hidden">
    <div class="absolute inset-0 bg-grid opacity-30 pointer-events-none"></div>
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
      <div
        class="bg-primary dark:bg-dark-card rounded-2xl md:rounded-[2.5rem] p-6 sm:p-8 md:p-16 text-center shadow-2xl overflow-hidden relative w-full">
        <div class="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 max-w-[50%]">
        </div>
        <div
          class="absolute bottom-0 left-0 w-24 h-24 md:w-48 md:h-48 bg-accent-teal/20 rounded-full translate-y-1/2 -translate-x-1/2 max-w-[50%]">
        </div>

        <h2 class="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-6 break-words px-2">Let's work together!</h2>
        <p class="text-white/80 mb-10 max-w-lg mx-auto text-lg">Punya proyek menarik? Butuh konsultasi desain?
          Atau sekedar ingin menyapa? Kirim pesan sekarang.</p>

        <form class="max-w-md mx-auto space-y-4 text-left">
          <div>
            <label class="sr-only">Name</label>
            <input type="text" placeholder="Your Name"
              class="w-full px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:bg-white/20 focus:border-white transition-all backdrop-blur-sm">
          </div>
          <div>
            <label class="sr-only">Email</label>
            <input type="email" placeholder="Your Email Address"
              class="w-full px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:bg-white/20 focus:border-white transition-all backdrop-blur-sm">
          </div>
          <div>
            <label class="sr-only">Message</label>
            <textarea rows="4" placeholder="Tell me about your project..."
              class="w-full px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:bg-white/20 focus:border-white transition-all backdrop-blur-sm"></textarea>
          </div>
          <button type="button"
            class="w-full py-4 rounded-xl bg-white text-primary font-bold hover:bg-slate-100 hover:shadow-lg hover:shadow-white/20 transition-all transform hover:-translate-y-1">
            Send Message
          </button>
        </form>

        <div class="mt-10 flex justify-center gap-6">
          <a href="https://linkedin.com/in/alif-bima-pradana"
            class="p-3 bg-white/10 rounded-full text-white hover:bg-white hover:text-primary transition-all"
            aria-label="Linkedin">
            <Linkedin class="w-5 h-5" />
          </a>
          <a href="https://www.instagram.com/alifbimapradana07"
            class="p-3 bg-white/10 rounded-full text-white hover:bg-white hover:text-primary transition-all"
            aria-label="Instagram">
            <Instagram class="w-5 h-5" />
          </a>
          <a href="https://facebook.com/alifbima_"
            class="p-3 bg-white/10 rounded-full text-white hover:bg-white hover:text-primary transition-all"
            aria-label="Facebook">
            <Facebook class="w-5 h-5" />
          </a>
          <a href="https://github.com/4lifbima"
            class="p-3 bg-white/10 rounded-full text-white hover:bg-white hover:text-primary transition-all"
            aria-label="Github">
            <Github class="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Linkedin, Instagram, Facebook, Github } from 'lucide-vue-next'
</script>
