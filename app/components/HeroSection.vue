<template>
  <!-- Outer wrapper: Flush edge-to-edge on mobile (p-0), elegant floating frame on desktop (sm:p-4) -->
  <div class="w-full min-h-screen bg-[#ededed] dark:bg-[#0a0f1d] p-0 sm:p-4 font-inter box-border flex flex-col justify-center transition-colors">
    <!-- Hero container: Full-viewport flush on mobile (rounded-none h-screen), rounded card on desktop (sm:rounded-3xl sm:h-[calc(100vh-32px)]) -->
    <section
      class="relative w-full h-screen sm:h-[calc(100vh-32px)] overflow-hidden bg-[#111827] rounded-none sm:rounded-3xl shadow-2xl flex items-center justify-center"
    >
      <!-- Background Video -->
      <video
        autoplay
        loop
        muted
        playsinline
        preload="auto"
        disableRemotePlayback
        webkit-playsinline="true"
        x5-playsinline="true"
        poster="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260702_051048_5ef213b5-26db-4da8-b604-7ef823760b6b.mp4"
        class="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260702_051048_5ef213b5-26db-4da8-b604-7ef823760b6b.mp4"
          type="video/mp4"
        />
      </video>

      <!-- Ambient Dark Overlay for high contrast & text readability -->
      <div class="absolute inset-0 bg-slate-950/45 backdrop-blur-[1px] pointer-events-none z-[1]" />

      <!-- Foreground content wrapper: Centered vertically & horizontally, no internal scrollbar, pt-16 sm:pt-20 for fixed navbar clearance -->
      <div class="relative z-10 flex flex-col items-center justify-center h-full w-full px-4 sm:px-6 md:px-8 pt-16 sm:pt-20 text-center select-none">
        <!-- Hero Content (centered) -->
        <div class="flex flex-col items-center max-w-4xl mx-auto">  

          <!-- Headline <h1> with Instrument Serif italic accent -->
          <h1
            class="text-white tracking-tight leading-[1.08] font-medium text-center drop-shadow-lg max-w-4xl"
            style="font-size: clamp(30px, 7vw, 72px); letter-spacing: -0.02em;"
          >
            {{ $t('hero.headlinePrefix') }}
            <span style="font-family: 'Instrument Serif', serif; font-style: italic; font-weight: 500;" class="text-[#ff9900]">
              {{ $t('hero.headlineAccent') }}
            </span>
            <br />
            {{ $t('hero.headlineSuffix') }}
          </h1>

          <!-- Subtitle <p> in multi-language -->
          <p
            class="mt-4 sm:mt-6 text-slate-200 font-normal max-w-2xl leading-relaxed text-center drop-shadow"
            style="font-size: clamp(14px, 3.2vw, 18px);"
          >
            {{ $t('hero.subtitle') }}
          </p>

          <!-- CTA Buttons Group -->
          <div class="mt-7 sm:mt-9 flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4 w-full sm:w-auto justify-center">
            <!-- Primary Action: Lihat Portofolio / CV -->
            <a
              href="/CV_ALIF.pdf"
              class="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white text-slate-950 hover:bg-slate-100 rounded-full pl-6 pr-2.5 py-3 text-[14px] sm:text-[15px] font-semibold transition-all shadow-xl hover:scale-105 active:scale-95 group cursor-pointer"
            >
              <span>{{ $t('hero.viewPortfolio') }}</span>
              <span
                class="w-7 h-7 rounded-full bg-slate-950 text-white flex items-center justify-center shrink-0 group-hover:bg-[#ef4d23] transition-colors"
              >
                <ArrowRight class="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </a>

            <!-- Secondary Action: Hubungi Saya -->
            <a
              :href="`https://wa.me/6292291383797/?text=${encodeURIComponent($t('hero.waMessage'))}`"
              target="_blank"
              class="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md rounded-full px-6 py-3 text-[14px] sm:text-[15px] font-medium border border-white/25 transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-md"
            >
              <Phone class="w-4 h-4 text-[#ff9900]" />
              <span>{{ $t('hero.contactMe') }}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ArrowRight, Phone } from 'lucide-vue-next'
</script>
