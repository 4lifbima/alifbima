<template>
  <div class="min-h-screen bg-white text-[#1D1D1D] pt-28 sm:pt-32 flex flex-col justify-between">
    <div v-if="artikel" class="max-w-4xl mx-auto px-5 sm:px-8 pb-20 w-full">

      <!-- Header -->
      <div class="mb-8">
        <NuxtLink
          to="/artikel"
          class="inline-flex items-center gap-2 text-[#555555] hover:text-[#FE4619] mb-6 text-sm font-medium transition-colors"
        >
          <ArrowLeft class="w-4 h-4" />
          <span>{{ $t('insights.allTitle') }}</span>
        </NuxtLink>
        <div class="flex items-center gap-2 mb-4">
          <span class="px-4 py-1 text-xs font-semibold rounded-full bg-[#F2F2F2] text-[#333333] uppercase">
            {{ artikel.category }}
          </span>
        </div>
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1D1D1D] mb-4 break-words tracking-tight leading-tight">
          {{ artikel.title }}
        </h1>
        <p class="text-lg text-[#555555] mb-6 leading-relaxed">
          {{ artikel.excerpt }}
        </p>
        <div class="flex flex-wrap items-center gap-5 text-sm text-[#666666]">
          <div class="flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-[#FE4619]" />
            <span class="font-medium text-[#1D1D1D]">{{ artikel.author }}</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-[#FE4619]" />
            <span>{{ new Date(artikel.date).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' }) }}</span>
          </div>
          <span>{{ artikel.readTime }}</span>
        </div>
      </div>

      <!-- Featured Image -->
      <div class="rounded-[28px] overflow-hidden mb-12 shadow-[0_14px_44px_rgba(0,0,0,0.08)] border border-neutral-100">
        <img :src="artikel.image" :alt="artikel.title" 
          class="w-full h-auto object-cover">
      </div>

      <!-- Content -->
      <article class="prose max-w-none mb-12">
        <div class="text-base sm:text-lg text-[#333333] leading-relaxed" 
          v-html="formattedContent">
        </div>
      </article>

      <!-- Tags -->
      <div class="mb-12 pt-8 border-t border-neutral-200">
        <h3 class="text-sm font-semibold text-[#1D1D1D] mb-4">Tags</h3>
        <div class="flex flex-wrap gap-2">
          <span v-for="tag in artikel.tags" :key="tag"
            class="px-4 py-1.5 text-sm bg-[#F2F2F2] text-[#333333] rounded-full font-medium">
            #{{ tag }}
          </span>
        </div>
      </div>

      <!-- Related Articles -->
      <div class="border-t border-neutral-200 pt-12">
        <h2 class="text-2xl sm:text-3xl font-bold text-[#1D1D1D] mb-8">Related Articles</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <NuxtLink v-for="item in relatedArtikels" :key="item.id" 
            :to="`/artikel/${item.slug}`"
            class="group bg-white rounded-[22px] overflow-hidden border border-neutral-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 block">
            <div class="relative h-44 bg-neutral-100 overflow-hidden">
              <img :src="item.image" :alt="item.title"
                class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300">
            </div>
            <div class="p-5">
              <div class="flex items-center justify-between mb-3">
                <span class="px-3 py-1 text-xs font-medium rounded-full bg-[#F2F2F2] text-[#333333]">
                  {{ item.category }}
                </span>
                <span class="text-xs text-[#777777]">{{ item.readTime }}</span>
              </div>
              <h3 class="text-base md:text-lg font-bold text-[#1D1D1D] mb-2 group-hover:text-[#FE4619] transition-colors line-clamp-2">
                {{ item.title }}
              </h3>
              <p class="text-sm text-[#555555] line-clamp-2 mb-4">
                {{ item.excerpt }}
              </p>
              <div class="flex items-center gap-1.5 text-sm text-[#FE4619] font-semibold">
                {{ $t('insights.readMore') }} <ArrowRight class="w-4 h-4" />
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>

    <div v-else class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
      <h1 class="text-3xl font-bold text-[#1D1D1D] mb-4">Article Not Found</h1>
      <NuxtLink to="/artikel" 
        class="inline-flex items-center gap-2 text-[#FE4619] hover:underline font-medium">
        Go to Articles
      </NuxtLink>
    </div>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ArrowLeft, ArrowRight } from 'lucide-vue-next'
import { artikels } from '~/data/Artikel'

const route = useRoute()
const artikel = useArtikel(route.params.slug as string)

// Get related articles (exclude current, get 3 others)
const relatedArtikels = computed(() => {
  if (!artikel) return []
  return artikels
    .filter(a => a.id !== artikel.id)
    .slice(0, 3)
})

// Format content as computed property
const formattedContent = computed(() => {
  if (!artikel) return ''
  return formatContent(artikel.content)
})

// Format content to HTML (convert markdown-like to HTML)
const formatContent = (content: string) => {
  if (!content) return ''
  
  let html = content
  
  // Convert code blocks first (before other replacements) - use placeholder
  const codeBlocks: string[] = []
  html = html.replace(/```([\s\S]*?)```/g, (match, code) => {
    const placeholder = `__CODE_BLOCK_${codeBlocks.length}__`
    codeBlocks.push(`<pre class="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg overflow-x-auto my-4"><code class="text-sm font-mono whitespace-pre">${code.trim().replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>`)
    return placeholder
  })
  
  // Convert inline code
  html = html.replace(/`([^`\n]+)`/g, '<code class="bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-sm font-mono">$1</code>')
  
  // Convert headers
  html = html.replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold mb-4 mt-8 text-slate-900 dark:text-white">$1</h1>')
  html = html.replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold mb-3 mt-6 text-slate-900 dark:text-white">$1</h2>')
  html = html.replace(/^### (.*$)/gim, '<h3 class="text-xl font-bold mb-2 mt-4 text-slate-900 dark:text-white">$1</h3>')
  html = html.replace(/^#### (.*$)/gim, '<h4 class="text-lg font-bold mb-2 mt-4 text-slate-900 dark:text-white">$1</h4>')
  
  // Convert bold
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-slate-900 dark:text-white">$1</strong>')
  
  // Convert italic (but not bold)
  html = html.replace(/(?<!\*)\*([^*]+?)\*(?!\*)/g, '<em class="italic">$1</em>')
  
  // Process lists line by line
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
      const itemContent = trimmedLine.replace(/^[\-\*] /, '')
      listItems.push(itemContent)
    } else {
      // Close list if we were in one
      if (inList) {
        if (listItems.length > 0) {
          processedLines.push(`<ul class="list-disc ml-6 mb-4 space-y-2">${listItems.map(item => `<li>${item}</li>`).join('')}</ul>`)
        }
        listItems = []
        inList = false
      }
      
      // Add the line if it's not empty
      if (trimmedLine) {
        processedLines.push(line)
      }
    }
  }
  
  // Close any remaining list
  if (inList && listItems.length > 0) {
    processedLines.push(`<ul class="list-disc ml-6 mb-4 space-y-2">${listItems.map(item => `<li>${item}</li>`).join('')}</ul>`)
  }
  
  html = processedLines.join('\n')
  
  // Restore code blocks
  codeBlocks.forEach((codeBlock, index) => {
    html = html.replace(`__CODE_BLOCK_${index}__`, codeBlock)
  })
  
  // Convert remaining text blocks to paragraphs
  const paragraphs = html.split(/\n\n+/)
  const finalHtml = paragraphs.map((p: string) => {
    const trimmed = p.trim()
    // Skip if already HTML tag or empty
    if (!trimmed || trimmed.startsWith('<')) {
      return trimmed
    }
    // Convert single newlines to <br> within paragraphs
    const withBreaks = trimmed.replace(/\n/g, '<br>')
    return `<p class="mb-4 text-slate-700 dark:text-slate-300">${withBreaks}</p>`
  }).filter((p: string) => p).join('')
  
  return finalHtml || content // Fallback to original content if empty
}

// Dynamic SEO Meta Tags
if (artikel) {
  useSeoMeta({
    title: `${artikel.title}`,
    description: artikel.excerpt,
    
    // Open Graph
    ogType: 'article',
    ogTitle: artikel.title,
    ogDescription: artikel.excerpt,
    ogImage: artikel.image,
    ogUrl: `https://www.alifbima.my.id/artikel/${artikel.slug}`,
    ogLocale: 'id_ID',
    ogSiteName: 'Alif Bima Pradana',
    
    // Twitter
    twitterCard: 'summary_large_image',
    twitterTitle: artikel.title,
    twitterDescription: artikel.excerpt,
    twitterImage: artikel.image,
    twitterCreator: '@alifbima_'
  })
} else {
  useHead({
    title: 'Article Not Found - Alif Bima Pradana'
  })
}
</script>
