export interface Artikel {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  image: string
  category: string
  author: string
  authorAvatar?: string
  date: string
  readTime: string
  tags: string[]
  featured: boolean
}

export const artikels: Artikel[] = [
  {
    id: '1',
    slug: 'mastering-tailwind-css-grid',
    title: 'Mastering Tailwind CSS Grid',
    excerpt: 'Learn how to create complex layouts using Tailwind CSS Grid system with practical examples.',
    content: `# Mastering Tailwind CSS Grid

Tailwind CSS Grid adalah salah satu fitur paling powerful untuk membuat layout yang kompleks. Dalam artikel ini, kita akan mempelajari cara menggunakan Grid system di Tailwind CSS dengan berbagai contoh praktis.

## Dasar-dasar Grid

Grid di Tailwind CSS menggunakan utility classes yang mudah digunakan. Anda bisa membuat grid dengan berbagai kolom dan baris sesuai kebutuhan.

\`\`\`html
<div class="grid grid-cols-3 gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
\`\`\`

## Responsive Grid

Salah satu kelebihan Tailwind adalah kemudahan membuat responsive grid. Anda bisa menggunakan breakpoints untuk mengubah jumlah kolom berdasarkan ukuran layar.

\`\`\`html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <!-- Content -->
</div>
\`\`\`

## Advanced Techniques

Untuk layout yang lebih kompleks, Anda bisa menggunakan grid-template-areas atau span untuk mengontrol posisi item di dalam grid.

Dengan menguasai Tailwind CSS Grid, Anda bisa membuat layout yang fleksibel dan responsive dengan mudah.`,
    image: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    category: 'Development',
    author: 'Alif Bima Pradana',
    authorAvatar: '/assets/img/alif.jpeg',
    date: '2024-01-20',
    readTime: '5 min read',
    tags: ['Tailwind CSS', 'CSS', 'Web Development'],
    featured: true
  },
  {
    id: '2',
    slug: 'psychology-of-color',
    title: 'The Psychology of Color',
    excerpt: 'Understanding how colors affect user behavior and decision-making in web design.',
    content: `# The Psychology of Color

Warna memiliki dampak yang sangat besar terhadap psikologi manusia dan pengambilan keputusan. Dalam desain web, pemahaman tentang psikologi warna sangat penting untuk menciptakan pengalaman pengguna yang efektif.

## Dampak Warna pada Emosi

Setiap warna memiliki makna dan dampak emosional yang berbeda:

- **Merah**: Energi, passion, urgency
- **Biru**: Trust, calm, professionalism
- **Hijau**: Growth, nature, success
- **Kuning**: Optimism, creativity, attention

## Aplikasi dalam Web Design

Dalam web design, pemilihan warna harus disesuaikan dengan tujuan dan target audience. Misalnya, untuk fintech, warna biru sering digunakan karena menciptakan rasa kepercayaan.

## Best Practices

1. Gunakan warna yang konsisten dengan brand
2. Pertimbangkan kontras untuk accessibility
3. Gunakan warna untuk guide user attention
4. Test dengan user untuk memastikan efektivitas

Dengan memahami psikologi warna, Anda bisa membuat desain yang lebih efektif dan engaging.`,
    image: 'https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    category: 'Design',
    author: 'Alif Bima Pradana',
    authorAvatar: '/assets/img/alif.jpeg',
    date: '2024-02-15',
    readTime: '7 min read',
    tags: ['Design', 'Psychology', 'UI/UX'],
    featured: true
  },
  {
    id: '3',
    slug: 'prompt-landing-page-portofolio-modern',
    title: 'Prompt Buat Landing Page Portofolio Modern',
    excerpt: 'Kumpulan prompt AI yang bisa kamu gunakan untuk membuat landing page portofolio yang modern, profesional, dan memukau.',
    content: `# Prompt Buat Landing Page Portofolio Modern

Di era AI saat ini, membuat landing page portofolio yang stunning bukan lagi hal yang sulit. Dengan bantuan AI seperti ChatGPT, Claude, atau Gemini, kamu bisa dengan mudah menghasilkan desain dan kode untuk landing page portofolio yang profesional. Berikut adalah kumpulan prompt yang bisa kamu gunakan untuk berbagai kebutuhan.

## Mengapa Menggunakan AI untuk Membuat Portofolio?

AI telah mengubah cara kita bekerja sebagai developer dan desainer. Dengan prompt yang tepat, kamu bisa:

- **Menghemat waktu** - Tidak perlu memulai dari nol
- **Mendapatkan inspirasi** - AI bisa memberikan ide-ide kreatif yang tidak terpikirkan
- **Belajar best practices** - Melihat bagaimana kode yang baik distrukturkan
- **Iterasi dengan cepat** - Modifikasi desain dengan mudah melalui prompt tambahan

## Prompt untuk Hero Section

Hero section adalah bagian pertama yang dilihat pengunjung. Berikut prompt yang bisa kamu gunakan:

\`\`\`
Buatkan hero section untuk landing page portofolio developer dengan kriteria:
- Gradient background dari warna ungu ke biru
- Animasi floating particles di background
- Heading besar dengan nama dan tagline
- Tombol CTA yang menonjol dengan hover effect
- Responsive untuk mobile dan desktop
- Gunakan Tailwind CSS untuk styling
\`\`\`

### Contoh Prompt Lanjutan untuk Hero:

\`\`\`
Tambahkan efek glassmorphism pada card di hero section, 
dengan backdrop-blur dan border transparan. 
Pastikan teks tetap readable dengan kontras yang baik.
\`\`\`

## Prompt untuk Section Skill & Teknologi

Menampilkan keahlian adalah hal penting dalam portofolio. Gunakan prompt ini:

\`\`\`
Buat section "Skills" untuk portofolio dengan fitur:
- Grid layout dengan icon teknologi (React, Vue, Node.js, dll)
- Hover animation yang smooth
- Progress bar atau level indicator untuk setiap skill
- Kategorikan skill berdasarkan Frontend, Backend, dan Tools
- Dark mode compatible
\`\`\`

## Prompt untuk Section Project/Portfolio

Section ini menampilkan karya-karyamu:

\`\`\`
Desain section portfolio dengan karakteristik:
- Masonry grid layout untuk menampilkan project
- Card dengan efek 3D tilt on hover
- Modal popup untuk detail project
- Filter button berdasarkan kategori (Web App, Mobile, Design)
- Lazy loading untuk optimasi performa
- Animasi staggered saat scroll into view
\`\`\`

## Prompt untuk Testimonial Section

Social proof sangat penting:

\`\`\`
Buatkan testimonial section dengan:
- Carousel/slider yang smooth
- Avatar client dengan quote
- Rating bintang
- Autoplay dengan pause on hover
- Dots indicator untuk navigasi
- Desain yang clean dan profesional
\`\`\`

## Prompt untuk Contact Section

Section untuk calon klien menghubungi:

\`\`\`
Buat contact section yang menarik dengan:
- Form input dengan validation
- Animasi smooth pada focus state
- Integrasi dengan email service
- Social media links dengan hover effect
- Map embed atau ilustrasi lokasi
- Success message dengan animasi
\`\`\`

## Prompt untuk Keseluruhan Landing Page

Jika ingin membuat keseluruhan halaman sekaligus:

\`\`\`
Buatkan landing page portofolio lengkap untuk seorang Full Stack Developer dengan:

1. Navbar fixed dengan smooth scroll navigation
2. Hero section dengan animasi typing effect untuk tagline
3. About section dengan foto dan bio singkat
4. Skills section dengan visual yang menarik
5. Portfolio section dengan minimal 6 project cards
6. Testimonial dari 3 client
7. Contact form yang fungsional
8. Footer dengan social links

Teknologi: HTML, CSS (Tailwind), JavaScript
Warna: Dark theme dengan aksen ungu/biru
Typography: Font modern seperti Inter atau Poppins
Animasi: Smooth scroll, fade in on scroll, hover effects
\`\`\`

## Tips Menggunakan Prompt dengan Efektif

1. **Spesifik** - Semakin detail prompt, semakin akurat hasilnya
2. **Iteratif** - Jangan ragu untuk meminta revisi dan perbaikan
3. **Berikan contoh** - Referensikan website yang kamu sukai
4. **Sebutkan teknologi** - Tentukan stack yang ingin kamu gunakan
5. **Minta penjelasan** - Agar kamu bisa belajar dari kode yang dihasilkan

## Kesimpulan

Dengan prompt yang tepat, AI bisa menjadi partner yang powerful dalam membuat landing page portofolio. Jangan takut untuk bereksperimen dengan berbagai variasi prompt untuk mendapatkan hasil yang paling sesuai dengan visimu. Ingat, AI adalah alat bantu - kreativitas dan personal touch tetap datang dari kamu sebagai developer!

Selamat mencoba dan semoga portofoliomu memukau!`,
    image: '/artikel/prompt-landing-page-portofolio.png',
    category: 'VIBE KODING',
    author: 'Alif Bima Pradana',
    authorAvatar: '/assets/img/alif.jpeg',
    date: '2025-01-29',
    readTime: '12 min read',
    tags: ['AI', 'VIBE KODING', 'Prompt Engineering', 'Web Development', 'Portfolio'],
    featured: true
  },
  {
    id: '4',
    slug: 'freelancing-vs-fulltime',
    title: 'Freelancing vs Full-time',
    excerpt: 'Comparing the pros and cons of freelancing and full-time employment for developers.',
    content: `# Freelancing vs Full-time

Sebagai developer, kita sering dihadapkan pada pilihan antara menjadi freelancer atau bekerja full-time. Keduanya memiliki kelebihan dan kekurangan masing-masing.

## Freelancing

### Pros
- Fleksibilitas waktu dan lokasi
- Potensi income yang lebih tinggi
- Bisa memilih project yang menarik
- Work-life balance yang lebih baik

### Cons
- Income yang tidak stabil
- Harus mencari client sendiri
- Tidak ada benefit seperti insurance
- Perlu self-discipline yang tinggi

## Full-time Employment

### Pros
- Income yang stabil
- Benefit seperti insurance, paid leave
- Team collaboration
- Career growth path yang jelas

### Cons
- Kurang fleksibilitas
- Income yang terbatas
- Harus mengikuti company culture
- Less control over projects

## Kesimpulan

Pilihan antara freelancing dan full-time sangat personal dan tergantung pada situasi, goals, dan preferensi masing-masing. Beberapa developer bahkan memilih hybrid approach dengan bekerja full-time sambil mengambil freelance projects di waktu luang.`,
    image: 'https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    category: 'Career',
    author: 'Alif Bima Pradana',
    authorAvatar: '/assets/img/alif.jpeg',
    date: '2024-04-05',
    readTime: '8 min read',
    tags: ['Career', 'Freelancing', 'Work'],
    featured: true
  },
  {
    id: '5',
    slug: 'vue-3-composition-api',
    title: 'Vue 3 Composition API Deep Dive',
    excerpt: 'Exploring the powerful Composition API in Vue 3 and how it improves code organization.',
    content: `# Vue 3 Composition API Deep Dive

Vue 3 Composition API adalah salah satu fitur terbesar yang diperkenalkan di Vue 3. API ini memberikan cara yang lebih fleksibel untuk mengorganisir dan reuse logic dalam komponen.

## Mengapa Composition API?

Composition API memecahkan beberapa masalah yang ada di Options API:
- Logic reuse yang lebih baik
- TypeScript support yang lebih baik
- Code organization yang lebih jelas
- Better performance

## Basic Usage

\`\`\`vue
<script setup>
import { ref, computed } from 'vue'

const count = ref(0)
const doubleCount = computed(() => count.value * 2)

function increment() {
  count.value++
}
</script>
\`\`\`

## Composables

Salah satu kelebihan Composition API adalah kemampuan membuat composables untuk logic reuse.

Dengan Composition API, kita bisa membuat code yang lebih maintainable dan reusable.`,
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    category: 'Development',
    author: 'Alif Bima Pradana',
    authorAvatar: '/assets/img/alif.jpeg',
    date: '2024-05-18',
    readTime: '10 min read',
    tags: ['Vue.js', 'JavaScript', 'Frontend'],
    featured: false
  }
]

export const getArtikelBySlug = (slug: string): Artikel | undefined => {
  return artikels.find(a => a.slug === slug)
}

export const getFeaturedArtikels = (): Artikel[] => {
  return artikels.filter(a => a.featured)
}

