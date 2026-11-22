<template>
  <section id="experience" class="py-20 sm:py-28 bg-white w-full overflow-hidden">
    <div class="max-w-[1060px] mx-auto px-5 sm:px-8">
      <!-- Centered Heading -->
      <h2 class="text-3xl sm:text-4xl md:text-[46px] font-semibold text-[#1D1D1D] text-center tracking-tight mb-14 sm:mb-20 reveal">
        {{ $t('experience.heading') }}
      </h2>

      <!-- Desktop 3-Column Dashed Timeline (Matches Image 4) -->
      <div class="hidden md:block relative">
        <!-- Vertical Dashed Connector Line -->
        <div
          class="absolute left-1/2 -translate-x-1/2 top-6 bottom-12 border-l-2 border-dashed border-[#4A4A4A]"
          aria-hidden="true"
        />

        <div class="space-y-14 lg:space-y-16">
          <div
            v-for="(item, idx) in experiences"
            :key="item.id"
            class="grid grid-cols-[1fr_auto_1fr] items-start gap-8 lg:gap-14 relative reveal"
            :class="idx > 0 ? `delay-${idx * 100}` : ''"
          >
            <!-- Left: Company & Period -->
            <div class="pt-1 pr-4">
              <h3 class="text-xl lg:text-[26px] font-semibold text-[#1D1D1D] leading-snug">
                {{ $t(item.companyKey) }}
              </h3>
              <p class="text-sm lg:text-[15px] text-[#777777] mt-1.5 font-normal">
                {{ $t(item.dateKey) }}
              </p>
            </div>

            <!-- Center: Dashed Ring + Alternating Solid Orange / Dark Charcoal Dot -->
            <div class="flex items-center justify-center relative z-10">
              <div
                class="w-11 h-11 rounded-full border-2 border-dashed border-[#333333] bg-white flex items-center justify-center"
              >
                <span
                  class="w-6 h-6 rounded-full block"
                  :class="item.accent === 'orange' ? 'bg-[#FE4619]' : 'bg-[#2C2C2C]'"
                />
              </div>
            </div>

            <!-- Right: Role & Description -->
            <div class="pt-1 pl-4">
              <h3 class="text-xl lg:text-[26px] font-semibold text-[#1D1D1D] leading-snug">
                {{ $t(item.roleKey) }}
              </h3>
              <p class="text-sm lg:text-[15px] text-[#666666] leading-relaxed mt-2 max-w-md font-normal">
                {{ $t(item.descKey) }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile Responsive Vertical Dashed Timeline -->
      <div class="md:hidden relative pl-12 space-y-10">
        <!-- Left Vertical Dashed Line -->
        <div
          class="absolute left-[19px] top-5 bottom-8 border-l-2 border-dashed border-[#4A4A4A]"
          aria-hidden="true"
        />

        <div
          v-for="(item, idx) in experiences"
          :key="item.id"
          class="relative reveal"
          :class="idx > 0 ? `delay-${idx * 100}` : ''"
        >
          <!-- Ringed Node -->
          <div
            class="absolute -left-12 top-0 w-10 h-10 rounded-full border-2 border-dashed border-[#333333] bg-white flex items-center justify-center z-10"
          >
            <span
              class="w-5 h-5 rounded-full block"
              :class="item.accent === 'orange' ? 'bg-[#FE4619]' : 'bg-[#2C2C2C]'"
            />
          </div>

          <div class="space-y-1.5">
            <p class="text-xs font-medium text-[#777777]">
              {{ $t(item.dateKey) }}
            </p>
            <h3 class="text-xl font-semibold text-[#1D1D1D] leading-snug">
              {{ $t(item.roleKey) }}
            </h3>
            <p class="text-sm font-semibold text-[#FE4619]">
              {{ $t(item.companyKey) }}
            </p>
            <p class="text-sm text-[#666666] leading-relaxed pt-1">
              {{ $t(item.descKey) }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const experiences = [
  {
    id: 1,
    companyKey: 'experience.company1',
    dateKey: 'experience.date1',
    roleKey: 'experience.role1',
    descKey: 'experience.kpmi',
    accent: 'orange'
  },
  {
    id: 2,
    companyKey: 'experience.company2',
    dateKey: 'experience.date2',
    roleKey: 'experience.role2',
    descKey: 'experience.klikbanggai',
    accent: 'dark'
  },
  {
    id: 3,
    companyKey: 'experience.company3',
    dateKey: 'experience.date3',
    roleKey: 'experience.role3',
    descKey: 'experience.freelance',
    accent: 'orange'
  }
]
</script>
