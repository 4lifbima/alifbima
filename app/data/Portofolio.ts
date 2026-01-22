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
    slug: 'buildify-ai-web-generator',
    title: 'Buildify AI web generator',
    description: 'Buildify AI adalah platform yang membantu para pengembang untuk membuat website dengan cepat dan mudah.',
    fullDescription: 'Buildify AI adalah platform yang membantu para pengembang untuk membuat website dengan cepat dan mudah. Platform ini menggunakan AI untuk memahami kebutuhan pengguna dan menghasilkan website yang sesuai dengan kebutuhan pengguna.',
    image: '/portofolio/ai.png',
    category: ['AI', 'Web Generator'],
    tags: ['AI', 'Web Generator', 'Next.js', 'TypeScript'],
    featured: true,
    date: '2024-01-15',
    client: 'NeoBank Inc.',
    technologies: ['Next.js', 'TypeScript'],
    projectUrl: 'https://neobank.example.com',
    challenge: 'Membuat banking app yang menarik untuk Gen Z tanpa mengorbankan keamanan dan fungsionalitas.',
    solution: 'Mengimplementasikan gamification elements, modern UI dengan animasi yang smooth, dan UX yang intuitif.',
    results: [
      'Meningkatkan user engagement sebesar 45%',
      'Rating app store meningkat dari 3.8 ke 4.7',
      'User retention rate naik 30% dalam 3 bulan pertama'
    ]
  },
  {
    id: '2',
    slug: 'aplikasi-e-quran',
    title: 'Aplikasi e-Quran',
    description: 'Aplikasi e-Quran adalah aplikasi yang membantu para pengguna untuk belajar dan mengajarkan Al-Quran dengan mudah.',
    fullDescription: 'Aplikasi e-Quran adalah aplikasi yang membantu para pengguna untuk belajar dan mengajarkan Al-Quran dengan mudah. Aplikasi ini menyediakan berbagai fitur yang membantu para pengguna untuk belajar dan mengajarkan Al-Quran dengan mudah.',
    image: '/portofolio/quran.png',
    category: ['SaaS'],
    tags: ['Web App', 'Data Visualization', 'Dashboard'],
    featured: true,
    date: '2024-02-20',
    client: 'TechCorp Solutions',
    technologies: ['React', 'D3.js', 'TypeScript', 'Node.js', 'PostgreSQL'],
    projectUrl: 'https://dataviz.example.com',
    challenge: 'Membuat platform yang dapat menangani data besar dengan performa yang optimal.',
    solution: 'Menggunakan D3.js untuk visualisasi, implementasi virtual scrolling, dan optimasi query database.',
    results: [
      'Mengurangi loading time dari 8s menjadi 2s',
      'Dapat menangani hingga 1M data points',
      'User satisfaction score 4.8/5'
    ]
  },
  {
    id: '3',
    slug: 'aplikasi-money-tracker',
    title: 'Aplikasi Money Tracker',
    description: 'Modern minimal e-commerce website for a high-end fashion brand.',
    fullDescription: `Money Tracker adalah e-commerce website untuk brand fashion high-end dengan fokus pada estetika minimalis dan pengalaman belanja yang premium. Website ini menampilkan produk dengan visual yang stunning dan checkout process yang seamless.
    
    Money Tracker adalah aplikasi yang membantu para pengguna untuk mengelola uang dengan mudah. Aplikasi ini menyediakan berbagai fitur yang membantu para pengguna untuk mengelola uang dengan mudah.`,
    image: '/portofolio/money.png',
    category: ['E-Commerce', 'Finance'],
    tags: ['Finance', 'Web Design', 'Next.js', 'Stripe', 'Sanity CMS', 'Tailwind CSS'],
    featured: true,
    date: '2024-03-10',
    client: 'Luxe Fashion',
    technologies: ['Next.js', 'react', 'prisma', 'tailwindcss', 'supabase'],
    projectUrl: 'https://luxefashion.example.com',
    challenge: 'Menciptakan pengalaman belanja online yang setara dengan toko fisik premium.',
    solution: 'High-quality product images, 360° view, virtual try-on features, dan personalized recommendations.',
    results: [
      'Conversion rate meningkat 60%',
      'Average order value naik 35%',
      'Bounce rate turun dari 45% menjadi 22%'
    ]
  },
  {
    id: '4',
    slug: 'website-desa-digital',
    title: 'Website desa digital',
    description: 'Website desa digital adalah website yang membantu para pengguna untuk mengelola desa dengan mudah.',
    fullDescription: `Website desa digital adalah website yang membantu para pengguna untuk mengelola desa dengan mudah. Website ini menyediakan berbagai fitur yang membantu para pengguna untuk mengelola desa dengan mudah.
    
    Kemajuan teknologi saat ini membuat desa digital menjadi realitas. Dengan adanya website desa digital, desa dapat terhubung dengan dunia di luar desa dengan lebih mudah. Website desa digital ini menyediakan berbagai fitur yang membantu para pengguna untuk mengelola desa dengan mudah.`,
    image: '/portofolio/desa.png',
    category: ['Desa Digital'],
    tags: ['Desa Digital', 'Web Design', 'Nuxt.js', 'Tailwind CSS'],
    featured: false,
    date: '2024-04-05',
    client: 'MediCare Solutions',
    technologies: ['Nuxt.js', 'Tailwind CSS'],
    challenge: 'Memenuhi standar HIPAA compliance dan keamanan data medis.',
    solution: 'End-to-end encryption, role-based access control, dan audit logging yang comprehensive.',
    results: [
      '100% HIPAA compliant',
      'Mengurangi waktu administrasi 40%',
      'Patient satisfaction meningkat 50%'
    ]
  },
  {
    id: '5',
    slug: 'food-delivery-platform',
    title: 'Food Delivery Platform',
    description: 'Complete food delivery solution with real-time tracking and multiple restaurant integration.',
    fullDescription: 'Food Delivery Platform adalah solusi lengkap untuk food delivery dengan real-time tracking, integrasi dengan multiple restaurants, dan sistem rating yang comprehensive.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: ['Food & Beverage'],
    tags: ['Mobile App', 'Real-time', 'Delivery'],
    featured: false,
    date: '2024-05-12',
    client: 'FoodieHub',
    technologies: ['React Native', 'Node.js', 'Socket.io', 'MongoDB'],
    challenge: 'Mengintegrasikan multiple restaurants dengan sistem real-time tracking yang akurat.',
    solution: 'WebSocket untuk real-time updates, geolocation API untuk tracking, dan notification system.',
    results: [
      'Real-time tracking accuracy 98%',
      'Average delivery time berkurang 25%',
      'User retention rate 70%'
    ]
  }
]

export const getPortfolioBySlug = (slug: string): Portfolio | undefined => {
  return portfolios.find(p => p.slug === slug)
}

export const getFeaturedPortfolios = (): Portfolio[] => {
  return portfolios.filter(p => p.featured)
}

