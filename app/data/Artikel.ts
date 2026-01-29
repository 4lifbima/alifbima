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
    slug: 'jangan-asal-prompt-koding-dengan-ai-juga-ada-tutorial-rules-nya',
    title: 'Jangan Asal Prompt! Koding dengan AI Juga Ada Tutorial & Rules-nya',
    excerpt: 'Panduan lengkap cara menggunakan AI untuk koding dengan benar. Pelajari rules, struktur prompt, dan tips agar hasil kode lebih akurat dan profesional.',
    content: `# Jangan Asal Prompt! Koding dengan AI Juga Ada Tutorial & Rules-nya

Halo, teman-teman developer! 👋 Pernah nggak sih kamu pakai AI buat bantu ngoding, tapi hasilnya malah ngaco? Atau mungkin kamu udah capek-capek nulis prompt panjang, tapi kode yang dihasilkan nggak sesuai ekspektasi? Tenang, kamu nggak sendirian!

Di artikel ini, gue bakal share **tutorial lengkap dan rules dasar** yang wajib kamu tau sebelum mulai koding bareng AI. Karena ya... AI itu powerful banget, tapi kalau kita asal prompt tanpa strategi, hasilnya bisa bikin frustasi. Mari kita bahas dari awal!

---

## 🤔 Kenapa Harus Ada Rules Saat Koding dengan AI?

Banyak yang mikir, "Kan tinggal ketik apa yang mau dibuat, terus AI langsung ngerjain." Well, sayangnya nggak sesederhana itu, bro.

AI itu ibarat **asisten yang super pinter, tapi butuh instruksi yang jelas**. Kalau kamu ngasih instruksi yang ambigu, hasilnya juga bakal ambigu. Berikut alasan kenapa kamu butuh rules:

#### 1. **Konsistensi Kode** - Dengan rules yang jelas, kode yang dihasilkan akan konsisten dari awal sampai akhir project
#### 2. **Mengurangi Error** - Prompt yang terstruktur mengurangi kemungkinan AI salah paham dengan maksud kamu
#### 3. **Efisiensi Waktu** - Daripada bolak-balik revisi, mending sekali prompt langsung jadi
#### 4. **Maintainability** - Kode yang dihasilkan lebih mudah di-maintain karena mengikuti pattern yang jelas
#### 5. **Scalability** - Project bisa berkembang dengan baik karena fondasinya kuat dari awal


## 📚 Dasar-Dasar Prompt Engineering untuk Koding

Sebelum masuk ke contoh-contoh prompt, kamu harus tau dulu **fundamental prompt engineering**. Ini basic yang wajib dipahami:

### 1. Context is King 👑

Selalu berikan konteks yang cukup! AI nggak tau project kamu apa, stack-nya apa, atau style coding yang kamu prefer. Kasih tau semuanya di awal.

**❌ Prompt Buruk:**
\`\`\`
Buatkan function untuk login
\`\`\`

**✅ Prompt Baik:**
\`\`\`
Saya sedang membuat aplikasi web e-commerce menggunakan:
- Frontend: Next.js 14 dengan TypeScript
- Backend: Node.js dengan Express
- Database: PostgreSQL dengan Prisma ORM
- Authentication: JWT

Buatkan function untuk handle login user dengan fitur:
1. Validasi email dan password
2. Check user di database
3. Generate JWT token jika valid
4. Return error message yang informatif jika gagal
5. Implement rate limiting untuk prevent brute force

Gunakan async/await dan proper error handling.
\`\`\`

### 2. Be Specific, Not Vague

Semakin spesifik prompt kamu, semakin akurat hasilnya. Jangan takut prompt-nya panjang!

**❌ Vague:**
\`\`\`
Buat form yang bagus
\`\`\`

**✅ Specific:**
\`\`\`
Buat form registrasi dengan kriteria:
- Fields: nama lengkap, email, password, konfirmasi password
- Validasi real-time saat user mengetik
- Password strength indicator
- Error message di bawah setiap field yang invalid
- Button submit disabled sampai semua valid
- Styling dengan Tailwind CSS, dark mode compatible
- Animasi smooth saat error muncul
- Responsive untuk mobile dan desktop
\`\`\`

### 3. Tentukan Output Format

Kasih tau AI format output yang kamu mau. Ini penting banget!

\`\`\`
Format output yang saya inginkan:
1. Jelaskan dulu approach yang akan digunakan
2. Berikan kode lengkap dengan komentar penjelasan
3. Sertakan contoh penggunaan
4. List potential edge cases dan cara handle-nya
5. Berikan tips optimasi jika ada
\`\`\`


## 🎯 Rules Wajib Sebelum Mulai Koding dengan AI

Berikut adalah **rules yang harus kamu terapkan** setiap kali mau koding dengan AI:

### Rule #1: Mulai dengan System Prompt

System prompt adalah instruksi awal yang menentukan "kepribadian" dan behavior AI. Ini sangat powerful!

\`\`\`
System Prompt untuk Koding:

Kamu adalah senior full-stack developer dengan pengalaman 10+ tahun.
Expertise kamu meliputi: JavaScript, TypeScript, React, Vue, Node.js, Python.
Saat menulis kode, kamu selalu:
- Mengikuti best practices dan clean code principles
- Menambahkan komentar yang helpful
- Mempertimbangkan edge cases
- Mengutamakan security dan performance
- Menulis kode yang mudah ditest

Jika ada yang kurang jelas dari request user, tanyakan dulu sebelum mulai ngoding.
Jelaskan reasoning di balik setiap keputusan teknis yang kamu buat.
\`\`\`

### Rule #2: Definisikan Tech Stack di Awal

\`\`\`
Tech Stack untuk project ini:
- Language: TypeScript strict mode
- Framework: Nuxt 3 dengan Composition API
- Styling: Tailwind CSS v3
- State Management: Pinia
- API: REST dengan $fetch
- Testing: Vitest + Vue Testing Library
- Linting: ESLint + Prettier

Semua kode harus mengikuti stack di atas. 
Jangan gunakan teknologi atau library di luar yang disebutkan tanpa konfirmasi.
\`\`\`

### Rule #3: Tentukan Coding Standards

\`\`\`
Coding Standards yang harus diikuti:
1. Gunakan camelCase untuk variable dan function
2. Gunakan PascalCase untuk component dan class
3. Maksimal 80 karakter per baris
4. Selalu gunakan async/await, hindari callback hell
5. Destructuring lebih diutamakan
6. Arrow function untuk function expression
7. Explicit return type untuk function TypeScript
8. Jangan gunakan 'any' type kecuali benar-benar terpaksa
9. Semua function harus ada JSDoc comment
10. Error handling wajib dengan try-catch
\`\`\`

### Rule #4: Security First

\`\`\`
Security Requirements:
- Sanitize semua user input
- Gunakan parameterized query untuk database
- Validate data di frontend DAN backend
- Implement proper authentication check
- Jangan expose sensitive data di response
- Gunakan HTTPS untuk semua external request
- Implement CORS dengan benar
- Hash password dengan bcrypt minimum 12 rounds
\`\`\`

### Rule #5: Breakdown Complex Tasks

Jangan minta AI bikin seluruh aplikasi sekaligus. Pecah jadi task-task kecil!

\`\`\`
Project: E-commerce App

Day 1: Setup & Basic Structure
- [x] Initialize Nuxt 3 project
- [x] Setup Tailwind CSS
- [x] Buat basic layout component

Day 2: Authentication
- [ ] Buat halaman login
- [ ] Buat halaman register
- [ ] Implement JWT authentication

Day 3: Product Features
- [ ] Buat halaman list products
- [ ] Buat halaman product detail
- [ ] Implement search dan filter

(dan seterusnya...)
\`\`\`


## 💡 Contoh Prompt Lengkap untuk Berbagai Skenario

Sekarang mari kita lihat contoh-contoh prompt yang bisa langsung kamu pakai:

### Contoh 1: Membuat Component React/Vue

\`\`\`
Buatkan component Button yang reusable dengan kriteria:

Context:
- Project: Dashboard Admin untuk SaaS
- Framework: Vue 3 Composition API + TypeScript
- Styling: Tailwind CSS

Requirements:
1. Props:
   - variant: 'primary' | 'secondary' | 'danger' | 'ghost'
   - size: 'sm' | 'md' | 'lg'
   - loading: boolean (tampilkan spinner)
   - disabled: boolean
   - icon: optional icon component
   - iconPosition: 'left' | 'right'

2. Features:
   - Hover dan active states yang smooth
   - Focus ring untuk accessibility
   - Loading state dengan spinner dan disabled interaction
   - Ripple effect saat click

3. Accessibility:
   - Proper ARIA attributes
   - Keyboard navigation support
   - Screen reader friendly

Output yang diharapkan:
- File component (.vue)
- Contoh penggunaan
- Unit test basic
\`\`\`

### Contoh 2: API Integration

\`\`\`
Buatkan service layer untuk integrasi dengan REST API:

Context:
- Sudah ada backend API di https://api.example.com
- Menggunakan JWT untuk authentication
- Token disimpan di localStorage

Requirements:
1. Base API class dengan:
   - Automatic token injection di header
   - Response interceptor untuk handle 401 (auto logout)
   - Error handling yang konsisten
   - Request/Response logging di development

2. Service untuk User:
   - getProfile()
   - updateProfile(data)
   - changePassword(oldPass, newPass)
   - uploadAvatar(file)

3. Service untuk Products:
   - getAll(filters, pagination)
   - getById(id)
   - create(data)
   - update(id, data)
   - delete(id)

4. Type definitions untuk semua response

Tolong struktur folder-nya juga ya:
/services
  /api
    - base.ts
    - user.service.ts
    - product.service.ts
  /types
    - user.types.ts
    - product.types.ts
\`\`\`

### Contoh 3: Database Schema

\`\`\`
Buatkan database schema untuk aplikasi blog:

Context:
- Database: PostgreSQL
- ORM: Prisma
- Fitur: Multi-author blog dengan categories dan tags

Requirements:
1. Tables yang dibutuhkan:
   - User (author)
   - Post
   - Category
   - Tag
   - Comment
   - PostTag (many-to-many)

2. Relationships:
   - User bisa punya banyak Post
   - Post punya satu Category
   - Post bisa punya banyak Tag
   - Post bisa punya banyak Comment
   - Comment bisa nested (reply)

3. Fields yang umum:
   - id (uuid)
   - createdAt
   - updatedAt
   - soft delete (deletedAt)

4. Indexing:
   - Suggest index yang diperlukan untuk query umum
   - Explain reasoning-nya

Output:
- Prisma schema file lengkap
- Seed data untuk testing
- Query examples untuk operasi CRUD
\`\`\`

### Contoh 4: Debugging & Fixing

\`\`\`
Tolong debug kode berikut:

[paste kode yang bermasalah]

Error yang muncul:
[paste error message lengkap]

Yang sudah saya coba:
1. [langkah yang sudah dicoba]
2. [langkah yang sudah dicoba]

Environment:
- Node.js v18
- npm v9
- OS: Windows 11

Tolong:
1. Jelaskan penyebab error-nya
2. Berikan solusi dengan kode yang sudah diperbaiki
3. Jelaskan kenapa solusi ini works
4. Kasih tips agar error serupa tidak terjadi lagi
\`\`\`

### Contoh 5: Code Review & Optimization

\`\`\`
Tolong review kode berikut dan berikan saran improvement:

[paste kode]

Focus area:
1. Performance - ada yang bisa dioptimasi?
2. Security - ada vulnerability?
3. Readability - bisa lebih clean?
4. Best Practices - ada yang melanggar convention?
5. Edge Cases - ada yang belum di-handle?

Format review:
- Severity: Critical / Warning / Suggestion
- Line/Section: [reference ke bagian kode]
- Issue: [penjelasan masalah]
- Solution: [kode yang sudah diperbaiki]
- Explanation: [kenapa ini lebih baik]
\`\`\`

## 🚀 Tips Advanced untuk Power Users

Udah paham basic-nya? Sekarang level up dengan tips advanced ini:

### 1. Iterative Refinement

Jangan expect hasil perfect di prompt pertama. Gunakan conversation untuk refine:

\`\`\`
First prompt: Buat basic structure
Second prompt: Tambahkan error handling
Third prompt: Optimize performance
Fourth prompt: Add edge case handling
Fifth prompt: Polish dan finalize
\`\`\`

### 2. Reference Existing Code

\`\`\`
Ini contoh component yang sudah ada di project saya:
[paste existing component]

Buatkan component baru yang mirip pattern-nya tapi untuk [use case baru].
Pastikan konsisten dengan style yang sudah ada.
\`\`\`

### 3. Ask for Alternatives

\`\`\`
Untuk task [X], berikan 3 approach berbeda:
1. Approach paling simple/straightforward
2. Approach paling performant
3. Approach paling scalable

Untuk setiap approach, jelaskan:
- Pros dan cons
- Kapan sebaiknya digunakan
- Complexity (baik time maupun space)
\`\`\`

### 4. Learn While You Code

\`\`\`
Setelah menulis kode, jelaskan:
1. Konsep-konsep yang digunakan
2. Kenapa memilih approach ini
3. Trade-offs yang ada
4. Resources untuk belajar lebih lanjut

Saya ingin mengerti, bukan hanya copy-paste.
\`\`\`


## ⚠️ Common Mistakes yang Harus Dihindari

### 1. Over-reliance pada AI

AI itu tool, bukan replacement untuk skill kamu. Tetap belajar fundamental!

### 2. Copy-Paste Tanpa Review

SELALU review kode yang dihasilkan AI sebelum commit. AI bisa aja salah atau menghasilkan kode yang tidak optimal.

### 3. Prompt Terlalu Singkat

\`\`\`
❌ "Buat login page"
✅ [Prompt detail seperti contoh di atas]
\`\`\`

### 4. Tidak Memberikan Feedback

Kalau hasil nggak sesuai, kasih feedback spesifik:

\`\`\`
Hasil sebelumnya:
- Button style kurang match dengan design system
- Missing loading state
- Error handling belum ada

Tolong perbaiki dengan:
[instruksi spesifik]
\`\`\`

### 5. Mengabaikan Security

Jangan pernah share:
- API keys
- Passwords
- Sensitive business logic
- Production database credentials


## 📋 Checklist Sebelum Submit Prompt

Gunakan checklist ini sebelum submit prompt kamu:

- [ ] Sudah jelasin context project?
- [ ] Tech stack sudah disebutkan?
- [ ] Requirements sudah spesifik?
- [ ] Output format sudah ditentukan?
- [ ] Tidak ada info sensitif yang bocor?
- [ ] Task sudah cukup granular (tidak terlalu besar)?
- [ ] Sudah mention coding standards yang diinginkan?

## 🎁 Template Prompt yang Bisa Langsung Dipakai

Copy template ini dan customize sesuai kebutuhan:

\`\`\`
=== PROJECT CONTEXT ===
Project: [nama project]
Type: [web app / mobile / API / dll]
Stage: [new / existing - link repo jika ada]

=== TECH STACK ===
- Language: [...]
- Framework: [...]
- Database: [...]
- Other tools: [...]

=== CURRENT TASK ===
[Deskripsi task yang jelas]

=== REQUIREMENTS ===
1. [requirement 1]
2. [requirement 2]
3. [requirement 3]

=== CONSTRAINTS ===
- [batasan yang harus diikuti]
- [hal yang harus dihindari]

=== EXPECTED OUTPUT ===
- [format output yang diinginkan]
- [file/struktur yang diharapkan]

=== ADDITIONAL NOTES ===
[Info tambahan yang relevan]
\`\`\`

## 🏁 Kesimpulan

Koding dengan AI itu game changer, tapi butuh skill tersendiri untuk memanfaatkannya dengan maksimal. Ingat key takeaways dari artikel ini:

1. **Context is everything** - Selalu berikan informasi yang cukup
2. **Be specific** - Detail prompt = hasil yang akurat
3. **Use rules & standards** - Konsistensi adalah kunci
4. **Iterate & refine** - Jarang perfect di percobaan pertama
5. **Always review** - AI itu asisten, bukan oracle
6. **Keep learning** - Fundamental tetap penting

Semoga artikel ini membantu kamu jadi lebih produktif dalam koding dengan AI. Kalau ada pertanyaan atau mau share pengalaman, feel free to reach out!

Happy coding! 🚀`,
    image: '/artikel/tutor-koding.png',
    category: 'VIBE KODING',
    author: 'Alif Bima Pradana',
    authorAvatar: '/assets/img/alif.jpeg',
    date: '2025-01-29',
    readTime: '15 min read',
    tags: ['AI', 'VIBE KODING', 'Tutorial', 'Prompt Engineering', 'Tips & Tricks'],
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

