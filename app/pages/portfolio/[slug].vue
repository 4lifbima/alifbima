<template>
  <div class="min-h-screen bg-white text-[#1D1D1D] pt-28 sm:pt-32 flex flex-col justify-between">
    <div v-if="portfolio" class="max-w-5xl mx-auto px-5 sm:px-8 pb-20 w-full">

      <!-- Header -->
      <div class="mb-8">
        <NuxtLink
          to="/portfolio"
          class="inline-flex items-center gap-2 text-[#555555] hover:text-[#FE4619] mb-6 text-sm font-medium transition-colors"
        >
          <ArrowLeft class="w-4 h-4" />
          <span>{{ $t('portfolio.allTitle') }}</span>
        </NuxtLink>
        <div class="flex flex-wrap gap-2 mb-4">
          <span v-for="cat in portfolio.category" :key="cat"
            class="px-3.5 py-1 text-xs font-semibold rounded-full bg-[#FE4619]/10 text-[#FE4619]">
            {{ cat }}
          </span>
          <span v-for="tag in portfolio.tags" :key="tag"
            class="px-3.5 py-1 text-xs font-medium rounded-full bg-[#F2F2F2] text-[#333333]">
            {{ tag }}
          </span>
        </div>
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1D1D1D] mb-4 break-words tracking-tight">
          {{ portfolio.title }}
        </h1>
        <p class="text-lg text-[#555555] mb-6 leading-relaxed">
          {{ portfolio.description }}
        </p>
        <div class="flex flex-wrap items-center gap-4 text-sm text-[#777777]">
          <span v-if="portfolio.client">Client: <strong class="text-[#1D1D1D]">{{ portfolio.client }}</strong></span>
          <span>{{ new Date(portfolio.date).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' }) }}</span>
        </div>
      </div>

      <!-- Featured Image -->
      <div class="rounded-[28px] overflow-hidden mb-12 shadow-[0_14px_44px_rgba(0,0,0,0.08)] border border-neutral-100">
        <img :src="portfolio.image" :alt="portfolio.title" 
          class="w-full h-auto object-cover">
      </div>

      <!-- Content -->
      <div class="prose max-w-none mb-12">
        <div class="text-base sm:text-lg text-[#444444] leading-relaxed" 
          v-html="formatContent(portfolio.fullDescription)">
        </div>
      </div>

      <!-- Challenge, Solution, Results -->
      <div class="grid md:grid-cols-3 gap-6 mb-12">
        <div v-if="portfolio.challenge" class="bg-[#F8F8F8] border border-neutral-100 p-6 rounded-2xl">
          <h3 class="text-lg font-bold text-[#1D1D1D] mb-3 flex items-center gap-2">
            <AlertCircle class="w-5 h-5 text-[#FE4619]" />
            Challenge
          </h3>
          <p class="text-[#555555] text-sm leading-relaxed">{{ portfolio.challenge }}</p>
        </div>
        <div v-if="portfolio.solution" class="bg-[#F8F8F8] border border-neutral-100 p-6 rounded-2xl">
          <h3 class="text-lg font-bold text-[#1D1D1D] mb-3 flex items-center gap-2">
            <Lightbulb class="w-5 h-5 text-[#FE4619]" />
            Solution
          </h3>
          <p class="text-[#555555] text-sm leading-relaxed">{{ portfolio.solution }}</p>
        </div>
        <div v-if="portfolio.results && portfolio.results.length > 0" class="bg-[#F8F8F8] border border-neutral-100 p-6 rounded-2xl">
          <h3 class="text-lg font-bold text-[#1D1D1D] mb-3 flex items-center gap-2">
            <TrendingUp class="w-5 h-5 text-[#FE4619]" />
            Results
          </h3>
          <ul class="space-y-2">
            <li v-for="(result, idx) in portfolio.results" :key="idx" 
              class="text-[#555555] text-sm flex items-start gap-2">
              <Check class="w-4 h-4 text-[#FE4619] mt-0.5 shrink-0" />
              <span>{{ result }}</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Technologies -->
      <div class="mb-12">
        <h3 class="text-xl font-bold text-[#1D1D1D] mb-4">Technologies Used</h3>
        <div class="flex flex-wrap gap-2.5">
          <span v-for="tech in portfolio.technologies" :key="tech"
            class="px-4 py-2 bg-[#F2F2F2] text-[#1D1D1D] rounded-full text-sm font-medium">
            {{ tech }}
          </span>
        </div>
      </div>

      <!-- Links -->
      <div class="flex flex-wrap gap-4 mb-16">
        <a v-if="portfolio.projectUrl" :href="portfolio.projectUrl" target="_blank"
          class="px-7 py-3 bg-[#FE4619] hover:bg-[#e53910] text-white rounded-full font-semibold transition-all flex items-center gap-2 shadow-md shadow-[#FE4619]/25">
          View Live Project <ExternalLink class="w-4 h-4" />
        </a>
        <a v-if="portfolio.githubUrl" :href="portfolio.githubUrl" target="_blank"
          class="px-7 py-3 bg-[#1D1D1D] hover:bg-black text-white rounded-full font-semibold transition-all flex items-center gap-2">
          <Github class="w-4 h-4" /> View Code
        </a>
      </div>

      <!-- Related Projects -->
      <div class="border-t border-neutral-200 pt-12">
        <h2 class="text-2xl sm:text-3xl font-bold text-[#1D1D1D] mb-8">Other Projects</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <NuxtLink v-for="item in relatedPortfolios" :key="item.id" 
            :to="`/portfolio/${item.slug}`"
            class="group bg-white rounded-[24px] overflow-hidden border border-neutral-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 block">
            <div class="relative h-48 overflow-hidden bg-[#F5F5F5]">
              <img :src="item.image" :alt="item.title"
                class="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-300">
            </div>
            <div class="p-6">
              <div class="flex flex-wrap gap-2 mb-3">
                <span v-for="cat in item.category.slice(0, 1)" :key="cat"
                  class="px-3 py-1 text-xs font-medium rounded-full bg-[#F2F2F2] text-[#333333]">
                  {{ cat }}
                </span>
              </div>
              <h3 class="text-lg font-bold text-[#1D1D1D] mb-2 group-hover:text-[#FE4619] transition-colors line-clamp-2">
                {{ item.title }}
              </h3>
              <p class="text-sm text-[#555555] line-clamp-2 mb-4">
                {{ item.description }}
              </p>
              <div class="flex items-center gap-1.5 text-sm text-[#FE4619] font-semibold">
                {{ $t('portfolio.viewDetails') }} <ArrowRight class="w-4 h-4" />
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>

    <div v-else class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
      <h1 class="text-3xl font-bold text-[#1D1D1D] mb-4">Portfolio Not Found</h1>
      <NuxtLink to="/portfolio" 
        class="inline-flex items-center gap-2 text-[#FE4619] hover:underline font-medium">
        Go to Portfolio
      </NuxtLink>
    </div>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ArrowLeft, AlertCircle, Lightbulb, TrendingUp, Check, ExternalLink, Github, ArrowRight } from 'lucide-vue-next'
import { portfolios } from '~/data/Portofolio'

const route = useRoute()
const portfolio = usePortfolio(route.params.slug as string)

// Get related portfolios (exclude current, get 3 others)
const relatedPortfolios = computed(() => {
  if (!portfolio) return []
  return portfolios
    .filter(p => p.id !== portfolio.id)
    .slice(0, 3)
})

// Format content to HTML (convert markdown-like to HTML)
const formatContent = (content: string) => {
  if (!content) return ''
  
  // Escape HTML first to prevent double encoding
  let html = content
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
  
  // Convert code blocks first (before other replacements)
  html = html.replace(/```([\s\S]*?)```/g, (match, code) => {
    return `<pre class="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg overflow-x-auto my-4"><code class="text-sm font-mono">${code.trim()}</code></pre>`
  })
  
  // Convert inline code (but not inside code blocks)
  html = html.replace(/`([^`\n]+)`/g, '<code class="bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-sm font-mono">$1</code>')
  
  // Convert headers
  html = html.replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold mb-4 mt-8 text-slate-900 dark:text-white">$1</h1>')
  html = html.replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold mb-3 mt-6 text-slate-900 dark:text-white">$1</h2>')
  html = html.replace(/^### (.*$)/gim, '<h3 class="text-xl font-bold mb-2 mt-4 text-slate-900 dark:text-white">$1</h3>')
  html = html.replace(/^#### (.*$)/gim, '<h4 class="text-lg font-bold mb-2 mt-4 text-slate-900 dark:text-white">$1</h4>')
  
  // Convert bold (after code to avoid conflicts)
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-slate-900 dark:text-white">$1</strong>')
  
  // Convert italic
  html = html.replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
  
  // Process lists
  const lines = html.split('\n')
  const processedLines: string[] = []
  let inList = false
  let listItems: string[] = []
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    if (!line) continue
    const trimmedLine = line.trim()
    
    // Check if line is a list item
    if (trimmedLine.match(/^[\-\*] /)) {
      if (!inList) {
        inList = true
        listItems = []
      }
      // Remove markdown list marker and process content
      const itemContent = trimmedLine.replace(/^[\-\*] /, '')
      // Process bold and italic in list items
      const processedItem = itemContent
        .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold">$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
      listItems.push(processedItem)
    } else {
      // If we were in a list, close it
      if (inList) {
        if (listItems.length > 0) {
          processedLines.push(`<ul class="list-disc ml-6 mb-4 space-y-2">${listItems.map(item => `<li>${item}</li>`).join('')}</ul>`)
        }
        listItems = []
        inList = false
      }
      
      // Add non-empty lines
      if (trimmedLine && !trimmedLine.startsWith('<h') && !trimmedLine.startsWith('<pre') && !trimmedLine.startsWith('<ul')) {
        processedLines.push(line)
      } else if (trimmedLine.startsWith('<h') || trimmedLine.startsWith('<pre')) {
        processedLines.push(line)
      }
    }
  }
  
  // Close any remaining list
  if (inList && listItems.length > 0) {
    processedLines.push(`<ul class="list-disc ml-6 mb-4 space-y-2">${listItems.map(item => `<li>${item}</li>`).join('')}</ul>`)
  }
  
  html = processedLines.join('\n')
  
  // Convert remaining text blocks to paragraphs
  // Split by double newlines and process
  const paragraphs = html.split(/\n\n+/)
  const finalHtml = paragraphs.map(p => {
    const trimmed = p.trim()
    // Skip if already HTML tag
    if (trimmed.startsWith('<') || !trimmed) {
      return trimmed
    }
    // Convert single newlines to <br> within paragraphs
    const withBreaks = trimmed.replace(/\n/g, '<br>')
    return `<p class="mb-4 text-slate-700 dark:text-slate-300">${withBreaks}</p>`
  }).join('')
  
  return finalHtml
}

// Dynamic SEO Meta Tags
if (portfolio) {
  useSeoMeta({
    title: `${portfolio.title}`,
    description: portfolio.description,
    
    // Open Graph
    ogType: 'article',
    ogTitle: `${portfolio.title}`,
    ogDescription: portfolio.description,
    ogImage: portfolio.image,
    ogUrl: `https://www.alifbima.my.id/portfolio/${portfolio.slug}`,
    ogLocale: 'id_ID',
    ogSiteName: 'Alif Bima Pradana',
    
    // Twitter
    twitterCard: 'summary_large_image',
    twitterTitle: `${portfolio.title} | Portfolio`,
    twitterDescription: portfolio.description,
    twitterImage: portfolio.image,
    twitterCreator: '@alifbima_'
  })
} else {
  useHead({
    title: 'Portfolio Not Found - Alif Bima Pradana'
  })
}
</script>
