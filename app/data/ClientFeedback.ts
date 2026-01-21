export interface ClientFeedback {
  id: string
  name: string
  role: string
  company: string
  image: string
  feedback: string
  rating: number
}

export const clientFeedbacks: ClientFeedback[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'CEO',
    company: 'StartUp Inc',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    feedback: 'Alex is a rare breed of designer who understands code perfectly. The delivery was flawless and on time.',
    rating: 5
  },
  {
    id: '2',
    name: 'Budi Santoso',
    role: 'Product Manager',
    company: 'Tech Solutions',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    feedback: 'Design sangat modern dan elegan. Komunikasi sangat lancar, revisi ditangani dengan cepat. Highly recommended!',
    rating: 5
  },
  {
    id: '3',
    name: 'Mark Dave',
    role: 'Founder',
    company: 'TechLab',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    feedback: 'Transformed our outdated website into a modern masterpiece. The dark mode implementation is stunning.',
    rating: 5
  },
  {
    id: '4',
    name: 'Lisa Chen',
    role: 'CTO',
    company: 'InnovateCo',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    feedback: 'Outstanding work! The attention to detail and user experience is exceptional. Our users love the new design.',
    rating: 5
  },
  {
    id: '5',
    name: 'John Anderson',
    role: 'Marketing Director',
    company: 'BrandWorks',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    feedback: 'Professional, creative, and reliable. The project was delivered on time and exceeded our expectations.',
    rating: 5
  },
  {
    id: '6',
    name: 'Maria Garcia',
    role: 'Design Lead',
    company: 'Creative Studio',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    feedback: 'Working with this team was a pleasure. They understood our vision and brought it to life beautifully.',
    rating: 5
  }
]

