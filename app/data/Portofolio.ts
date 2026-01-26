export interface Portfolio {
  id: string
  slug: string
  title: string
  description: string
  fullDescription: string
  image: string
  category: string[]
  tags: string[]
  featured: boolean
  date: string
  client?: string
  technologies: string[]
  projectUrl?: string
  githubUrl?: string
  challenge?: string
  solution?: string
  results?: string[]
}

export const portfolios: Portfolio[] = [
  {
    id: '1',
    slug: 'website-desa-digital',
    title: 'Website desa digital',
    description: 'Website desa digital adalah website yang membantu para pengguna untuk mengelola desa dengan mudah.',
    fullDescription: `Website desa digital adalah website yang membantu para pengguna untuk mengelola desa dengan mudah. Website ini menyediakan berbagai fitur yang membantu para pengguna untuk mengelola desa dengan mudah.
    
    Kemajuan teknologi saat ini membuat desa digital menjadi realitas. Dengan adanya website desa digital, desa dapat terhubung dengan dunia di luar desa dengan lebih mudah. Website desa digital ini menyediakan berbagai fitur yang membantu para pengguna untuk mengelola desa dengan mudah.`,
    image: '/portofolio/desa.png',
    category: ['Desa Digital'],
    tags: ['Desa Digital', 'Web Design', 'Nuxt.js', 'Tailwind CSS'],
    featured: true,
    date: '2024-01-01',
    client: 'Desa Butu',
    technologies: ['Nuxt.js', 'Tailwind CSS'],
    projectUrl: 'https://desamaju.vercel.app/',
    challenge: 'Memenuhi standar HIPAA compliance dan keamanan data medis.',
    solution: 'End-to-end encryption, role-based access control, dan audit logging yang comprehensive.',
    results: [
      'Meningkatkan user engagement sebesar 45%',
      'Rating app store meningkat dari 3.8 ke 4.7',
      'User retention rate naik 30% dalam 3 bulan pertama'
    ]
  },
  {
    id: '2',
    slug: 'aplikasi-money-tracker',
    title: 'Aplikasi Money Tracker',
    description: 'Modern minimal e-commerce website for a high-end fashion brand.',
    fullDescription: `Money Tracker adalah e-commerce website untuk brand fashion high-end dengan fokus pada estetika minimalis dan pengalaman belanja yang premium. Website ini menampilkan produk dengan visual yang stunning dan checkout process yang seamless.
    
    Money Tracker adalah aplikasi yang membantu para pengguna untuk mengelola uang dengan mudah. Aplikasi ini menyediakan berbagai fitur yang membantu para pengguna untuk mengelola uang dengan mudah.`,
    image: '/portofolio/money.png',
    category: ['E-Commerce', 'Finance'],
    tags: ['Finance', 'Web Design', 'Next.js', 'Stripe', 'Sanity CMS', 'Tailwind CSS'],
    featured: true,
    date: '2024-02-01',
    client: 'Personal',
    technologies: ['Next.js', 'react', 'prisma', 'tailwindcss', 'supabase'],
    projectUrl: 'https://moneytrack.alifbima.my.id/',
    challenge: 'Menciptakan pengalaman belanja online yang setara dengan toko fisik premium.',
    solution: 'High-quality product images, 360° view, virtual try-on features, dan personalized recommendations.',
    results: [
      'Conversion rate meningkat 60%',
      'Average order value naik 35%',
      'Bounce rate turun dari 45% menjadi 22%'
    ]
  },
  {
    id: '3',
    slug: 'aplikasi-e-quran',
    title: 'Aplikasi e-Quran',
    description: 'Aplikasi e-Quran adalah aplikasi yang membantu para pengguna untuk belajar dan mengajarkan Al-Quran dengan mudah.',
    fullDescription: 'Aplikasi e-Quran adalah aplikasi yang membantu para pengguna untuk belajar dan mengajarkan Al-Quran dengan mudah. Aplikasi ini menyediakan berbagai fitur yang membantu para pengguna untuk belajar dan mengajarkan Al-Quran dengan mudah.',
    image: '/portofolio/quran.png',
    category: ['SaaS'],
    tags: ['Web App', 'Data Visualization', 'Dashboard'],
    featured: true,
    date: '2024-03-01',
    client: 'Personal',
    technologies: ['React', 'D3.js', 'TypeScript', 'Node.js', 'PostgreSQL'],
    projectUrl: 'https://equranku.vercel.app/',
    challenge: 'Membuat platform yang dapat menangani data besar dengan performa yang optimal.',
    solution: 'Menggunakan D3.js untuk visualisasi, implementasi virtual scrolling, dan optimasi query database.',
    results: [
      'Mengurangi loading time dari 8s menjadi 2s',
      'Dapat menangani hingga 1M data points',
      'User satisfaction score 4.8/5'
    ]
  },
  {
    id: '4',
    slug: 'buildify-ai-web-generator',
    title: 'Buildify AI web generator',
    description: 'Buildify AI adalah platform yang membantu para pengembang untuk membuat website dengan cepat dan mudah.',
    fullDescription: 'Buildify AI adalah platform yang membantu para pengembang untuk membuat website dengan cepat dan mudah. Platform ini menggunakan AI untuk memahami kebutuhan pengguna dan menghasilkan website yang sesuai dengan kebutuhan pengguna.',
    image: '/portofolio/ai.png',
    category: ['AI', 'Web Generator'],
    tags: ['AI', 'Web Generator', 'Next.js', 'TypeScript'],
    featured: true,
    date: '2024-04-01',
    client: 'Personal',
    technologies: ['Next.js', 'TypeScript'],
    projectUrl: 'https://buildfyx.alifbima.my.id/',
    challenge: 'Membuat platform yang dapat menghasilkan website dengan cepat dan mudah.',
    solution: 'Mengimplementasikan gamification elements, modern UI dengan animasi yang smooth, dan UX yang intuitif.',
    results: [
      'Meningkatkan user engagement sebesar 45%',
      'Rating app store meningkat dari 3.8 ke 4.7',
      'User retention rate naik 30% dalam 3 bulan pertama'
    ]
  },
  {
    id: '5',
    slug: 'blogku',
    title: 'Blogku',
    description: 'Blogku adalah platform untuk berbagi pengetahuan dan pengalaman dengan mudah.',
    fullDescription: 'Blogku adalah platform untuk berbagi pengetahuan dan pengalaman dengan mudah. Blogku menyediakan berbagai fitur yang membantu para pengguna untuk berbagi pengetahuan dan pengalaman dengan mudah.',
    image: '/portofolio/blog.png',
    category: ['Blog'],
    tags: ['Blog', 'Web Design', 'Nuxt.js', 'Tailwind CSS'],
    featured: true,
    date: '2024-05-01',
    client: 'Personal',
    technologies: ['Astro', 'Tailwind CSS'],
    projectUrl: 'https://blogify.alifbima.my.id/',
    challenge: 'Membuat platform untuk berbagi pengetahuan dan pengalaman dengan mudah.',
    solution: 'Mengimplementasikan fitur-fitur yang memudahkan para pengguna untuk berbagi pengetahuan dan pengalaman dengan mudah.',
    results: [
      'Meningkatkan user engagement sebesar 45%',
      'Rating app store meningkat dari 3.8 ke 4.7',
      'User retention rate naik 30% dalam 3 bulan pertama'
    ]
  },
  {
    id: '6',
    slug: 'imagen-ai',
    title: 'Imagen AI',
    description: 'Imagen AI adalah platform untuk berbagi pengetahuan dan pengalaman dengan mudah.',
    fullDescription: 'Imagen AI adalah platrofm AI untuk menggenerate gambar dengan kualitas terbaik.',
    image: '/portofolio/imagen.png',
    category: ['AI', 'Image'],
    tags: ['AI', 'Image', 'Next.js', 'Tailwind CSS'],
    featured: true,
    date: '2024-06-01',
    client: 'Personal',
    technologies: ['Next.js', 'Tailwind CSS'],
    projectUrl: 'http://imagenifyx.vercel.app/',
    challenge: 'melatih model AI untuk menghasilkan gambar dengan kualitas terbaik.',
    solution: 'menghadirkan model AI yang dapat menghasilkan gambar dengan kualitas terbaik.',
    results: [
      'User percaya dengan hasil gambar yang dihasilkan.',
      'Warning! untuk menghasilkan gambar yang kualitas terbaik, user harus mengetik prompt yang jelas.',
    ]
  }

]

export const getPortfolioBySlug = (slug: string): Portfolio | undefined => {
  return portfolios.find(p => p.slug === slug)
}

export const getFeaturedPortfolios = (): Portfolio[] => {
  return portfolios.filter(p => p.featured).sort((a, b) => parseInt(b.id) - parseInt(a.id))
}

