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
    slug: 'developer-setup-2025',
    title: 'My Developer Setup 2025',
    excerpt: 'A comprehensive guide to my current development environment, tools, and workflows.',
    content: `# My Developer Setup 2025

Setiap developer memiliki setup yang berbeda sesuai dengan kebutuhan dan preferensi mereka. Berikut adalah setup development environment yang saya gunakan di tahun 2025.

## Hardware

- **Laptop**: MacBook Pro M3
- **Monitor**: Dual 27" 4K displays
- **Keyboard**: Mechanical keyboard dengan custom keycaps
- **Mouse**: Ergonomic vertical mouse

## Software & Tools

### Code Editor
- **VS Code** dengan extensions:
  - ESLint
  - Prettier
  - GitLens
  - Tailwind CSS IntelliSense

### Terminal
- **iTerm2** dengan Oh My Zsh
- **Tmux** untuk session management

### Version Control
- **Git** dengan GitHub CLI
- Custom git aliases untuk workflow yang lebih cepat

## Development Stack

- **Frontend**: React, Next.js, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: PostgreSQL, MongoDB
- **DevOps**: Docker, GitHub Actions

## Productivity Tips

1. Gunakan keyboard shortcuts sebanyak mungkin
2. Setup aliases untuk command yang sering digunakan
3. Gunakan multiple monitors untuk productivity
4. Automate repetitive tasks

Setup yang baik akan meningkatkan produktivitas dan membuat development experience lebih menyenangkan.`,
    image: 'https://images.unsplash.com/photo-1629904853716-6b03d231f252?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    category: 'Productivity',
    author: 'Alif Bima Pradana',
    authorAvatar: '/assets/img/alif.jpeg',
    date: '2024-03-10',
    readTime: '6 min read',
    tags: ['Productivity', 'Tools', 'Development'],
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

