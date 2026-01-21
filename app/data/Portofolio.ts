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
    slug: 'neobank-dashboard',
    title: 'NeoBank Dashboard',
    description: 'Redesigning the mobile banking experience for Gen Z with focus on gamification.',
    fullDescription: 'NeoBank Dashboard adalah aplikasi mobile banking yang dirancang khusus untuk generasi Gen Z. Proyek ini fokus pada pengalaman pengguna yang gamified dengan elemen interaktif yang membuat banking menjadi lebih menyenangkan dan engaging.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: ['Fintech'],
    tags: ['Mobile App', 'UI/UX Design', 'React Native'],
    featured: true,
    date: '2024-01-15',
    client: 'NeoBank Inc.',
    technologies: ['React Native', 'TypeScript', 'Figma', 'Firebase'],
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
    slug: 'dataviz-platform',
    title: 'DataViz Platform',
    description: 'A comprehensive data visualization tool for enterprise sales tracking.',
    fullDescription: 'DataViz Platform adalah solusi comprehensive untuk visualisasi data enterprise yang membantu tim sales tracking dan menganalisis performa mereka secara real-time. Platform ini menyediakan berbagai chart types dan dashboard yang customizable.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
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
    slug: 'luxe-fashion-store',
    title: 'Luxe Fashion Store',
    description: 'Modern minimal e-commerce website for a high-end fashion brand.',
    fullDescription: 'Luxe Fashion Store adalah e-commerce website untuk brand fashion high-end dengan fokus pada estetika minimalis dan pengalaman belanja yang premium. Website ini menampilkan produk dengan visual yang stunning dan checkout process yang seamless.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: ['E-Commerce'],
    tags: ['Branding', 'E-Commerce', 'Web Design'],
    featured: true,
    date: '2024-03-10',
    client: 'Luxe Fashion',
    technologies: ['Next.js', 'Stripe', 'Sanity CMS', 'Tailwind CSS'],
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
    slug: 'healthcare-app',
    title: 'Healthcare Management App',
    description: 'Mobile application for healthcare providers to manage patient records and appointments.',
    fullDescription: 'Healthcare Management App adalah aplikasi mobile untuk healthcare providers yang memungkinkan manajemen rekam medis pasien, jadwal appointment, dan komunikasi dengan pasien secara efisien.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: ['Healthcare'],
    tags: ['Mobile App', 'Healthcare', 'React Native'],
    featured: false,
    date: '2024-04-05',
    client: 'MediCare Solutions',
    technologies: ['React Native', 'Firebase', 'TypeScript'],
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

