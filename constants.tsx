
import { Experience, Project, Service, Testimonial } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'unops-collect',
    title: 'UNOPS Collect',
    category: 'Productivity',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    fullDescription: 'UNOPS Collect is a phone-based replacement for paper forms.',
    techStack: ['Android', 'Kotlin', 'Java'],
    features: ['Phone-based form completion', 'Offline data collection'],
    clientLink: 'https://play.google.com/store/apps/details?id=org.unops.collect'
  },
  {
    id: 'so-vegan',
    title: 'SO VEGAN: Healthy Recipes',
    category: 'Food & Drink',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop',
    fullDescription: 'Over 600 quick, easy and delicious plant-based recipes, shopping list + videos.',
    techStack: ['React Native', 'TypeScript', 'Firebase'],
    features: ['Plant-based recipes', 'Shopping lists', 'Recipe videos'],
    clientLink: 'https://play.google.com/store/apps/details?id=com.wearesovegan.app'
  },
  {
    id: 'patch-me',
    title: 'Patch Me: Eye Patch Tracking',
    category: 'Medical / Health',
    image: 'https://images.unsplash.com/photo-1576091160550-2173ff9e5ee5?q=80&w=1200&auto=format&fit=crop',
    fullDescription: 'An app that allows parents to track the eye patching time for their children.',
    techStack: ['Flutter', 'Dart', 'SQLite'],
    features: ['Time tracking', 'Parental dashboard', 'Reminders'],
    clientLink: 'https://play.google.com/store/apps/details?id=com.edocllc.patch_me'
  },
  {
    id: 'leaf-lens',
    title: 'Leaf Lens',
    category: 'Education / Utilities',
    image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229ce?q=80&w=1200&auto=format&fit=crop',
    fullDescription: 'Snap, Detect, Protect. Identifying plant diseases instantly.',
    techStack: ['Python', 'TensorFlow', 'Android'],
    features: ['Image recognition', 'Disease detection', 'Protection tips'],
    clientLink: 'https://play.google.com/store/apps/details?id=com.leaflens.pdda2'
  },
  {
    id: 'butterfly-iq',
    title: 'Butterfly iQ — Ultrasound',
    category: 'Medical',
    image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=1200&auto=format&fit=crop',
    fullDescription: 'One probe, whole body imaging. Advanced ultrasound imaging application.',
    techStack: ['C++', 'Swift', 'Kotlin'],
    features: ['Whole body imaging', 'Real-time ultrasound', 'Cloud integration'],
    clientLink: 'https://play.google.com/store/apps/details?id=com.butterflynetinc.helios'
  },
  {
    id: 'habo',
    title: 'Habo (habit tracker)',
    category: 'Productivity / Lifestyle',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fd16f?q=80&w=1200&auto=format&fit=crop',
    fullDescription: 'Habo is a simple, open-source habit tracker for everyone.',
    techStack: ['React Native', 'Redux', 'Node.js'],
    features: ['Habit tracking', 'Open-source', 'Progress visualization'],
    clientLink: 'https://play.google.com/store/apps/details?id=com.pavlenko.Habo'
  },
  {
    id: 'life-checklist',
    title: 'Life Checklist',
    category: 'Productivity',
    image: 'https://images.unsplash.com/photo-1507925922837-326f12a15f58?q=80&w=1200&auto=format&fit=crop',
    fullDescription: 'A simple life checklist app that keeps track of the items you complete.',
    techStack: ['Flutter', 'Dart', 'Firebase'],
    features: ['Minimalist checklists', 'Item tracking', 'Progress milestones'],
    clientLink: 'https://play.google.com/store/apps/details?id=com.vector123.lifechecklist'
  },
  {
    id: 'mindful-app',
    title: 'Mindful : Focus & Screen Time',
    category: 'Productivity / Health',
    image: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=1200&auto=format&fit=crop',
    fullDescription: 'Control screen time, block distractions and boost focus with Mindful (OpenSource).',
    techStack: ['Kotlin', 'Android SDK', 'Room'],
    features: ['Screen time control', 'Distraction blocking', 'Focus timer'],
    clientLink: 'https://play.google.com/store/apps/details?id=com.mindful.android'
  },
  {
    id: 'trinity-orientation',
    title: 'Trinity Orientation',
    category: 'Education',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop',
    fullDescription: 'Trinity Orientation application for new students.',
    techStack: ['React Native', 'iOS', 'Android'],
    features: ['Campus maps', 'Event schedules', 'Student resources'],
    clientLink: 'https://play.google.com/store/apps/details?id=com.tory.trinityOrientation&hl=en_US'
  },
  {
    id: 'future-fitness',
    title: 'Future Fitness',
    category: 'Health / SaaS',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop',
    fullDescription: 'Architecture and lead development for a high-performance personal training platform. Scaled for enterprise-level user management and real-time coaching metrics.',
    techStack: ['React', 'TypeScript', 'Node.js', 'AWS'],
    features: ['Real-time coaching dashboard', 'Metric tracking at scale', 'Video streaming integration'],
    clientLink: 'https://www.future.co/'
  },
  {
    id: 'family-law-solutions',
    title: 'Family Law Solutions',
    category: 'Legal / Corporate',
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1200&auto=format&fit=crop',
    fullDescription: 'A premium, trust-driven digital presence for a prominent Minnesota family law firm. Delivered fully SEO-optimized responsive web architecture.',
    techStack: ['Next.js', 'Tailwind CSS', 'CMS', 'SEO'],
    features: ['High-conversion landing pages', 'Secure client portal', 'Custom content management'],
    clientLink: 'https://familylawsolutionsmn.com/'
  },
  {
    id: 'gordon-ramsay',
    title: 'Gordon Ramsay Restaurants',
    category: 'Luxury Hospitality',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1200&auto=format&fit=crop',
    fullDescription: 'Frontend engineering for global luxury restaurant chains. Focused on translating high-end brand identity into a seamless, multi-brand digital experience.',
    techStack: ['React', 'Next.js', 'Tailwind', 'Framer Motion'],
    features: ['Multi-brand restaurant CMS', 'High-performance reservation systems', 'Localized booking engines'],
    clientLink: 'https://www.gordonramsayrestaurants.com/en/us'
  },
  {
    id: 'houzz',
    title: 'Houzz',
    category: 'Home & Design / Marketplace',
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=1200&auto=format&fit=crop',
    fullDescription: 'Developed scalable architectural mapping and interior design discovery interfaces. Engineered robust matching algorithms between homeowners and home professionals.',
    techStack: ['React', 'Redux', 'Node.js', 'Elasticsearch'],
    features: ['Image recognition integration', 'Professional matching engine', 'Marketplace scale design'],
    clientLink: 'https://www.houzz.com/'
  },
  {
    id: 'eventsource',
    title: 'EventSource',
    category: 'Events / Directory',
    image: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=1200&auto=format&fit=crop',
    fullDescription: 'Built intricate, fast-loading event vendor discovery directories with dynamic filtering, saving couples hours of planning through efficient UX.',
    techStack: ['React', 'Next.js', 'PostgreSQL', 'Redis'],
    features: ['Dynamic vendor filtering', 'Real-time availability', 'Media-rich portfolios'],
    clientLink: 'https://www.eventsource.ca/'
  },
  {
    id: 'repairpal',
    title: 'RepairPal',
    category: 'Automotive / SaaS',
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1200&auto=format&fit=crop',
    fullDescription: 'Worked on accurate, reliable auto repair estimating interfaces and certified mechanic discovery systems for millions of drivers.',
    techStack: ['React', 'TypeScript', 'GraphQL', 'AWS'],
    features: ['Complex estimation algorithms', 'Geo-based shop discovery', 'Partner API integrations'],
    clientLink: 'https://repairpal.com/'
  },
  {
    id: 'trinity-solar',
    title: 'Trinity Solar',
    category: 'Energy / Corporate',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1200&auto=format&fit=crop',
    fullDescription: 'A revamped online experience for one of the largest privately-held solar companies, focusing on lead generation and educational solar breakdowns.',
    techStack: ['Next.js', 'Vercel', 'Tailwind', 'Salesforce API'],
    features: ['High-speed lead funnels', 'Interactive savings calculators', 'Corporate portal'],
    clientLink: 'https://www.trinitysolar.com/'
  },
  {
    id: 'hotwire',
    title: 'Hotwire',
    category: 'Travel / E-Commerce',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1200&auto=format&fit=crop',
    fullDescription: 'Contributed to high-volume booking engines and secure payment gateways for discount travel deals, ensuring zero-downtime during peak traffic.',
    techStack: ['React', 'Node.js', 'Microservices', 'Docker'],
    features: ['Real-time deal polling', 'Secure payment integration', 'High traffic scalability'],
    clientLink: 'https://www.hotwire.com/'
  },
  {
    id: 'taste-salud',
    title: 'Taste Salud',
    category: 'E-Commerce / CPG',
    image: 'https://images.unsplash.com/photo-1546548970-71785318a306?q=80&w=1200&auto=format&fit=crop',
    fullDescription: 'Built a vibrant, high-converting digital storefront for a trending hydration brand. Optimized checkout flow for maximum conversion rate.',
    techStack: ['Shopify Plus', 'Liquid', 'React', 'Tailwind CSS'],
    features: ['Custom subscription flows', 'Vibrant brand matching UX', 'Bundle builders'],
    clientLink: 'https://tastesalud.com/'
  },
  {
    id: 'wiley-x',
    title: 'Wiley X',
    category: 'E-Commerce / Retail',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=1200&auto=format&fit=crop',
    fullDescription: 'Engineered a rugged, premium protective eyewear e-commerce platform with complex product variants and prescription lens integrations.',
    techStack: ['Magneto', 'React', 'Node.js'],
    features: ['Prescription lens builder', 'Advanced product filtering', 'B2B/B2C dual portal'],
    clientLink: 'https://www.wileyx.com/'
  },
  {
    id: 'farries-brussels',
    title: "Farrie's Brussels",
    category: 'E-Commerce / Fashion',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1200&auto=format&fit=crop',
    fullDescription: 'A sleek, luxury-focused digital storefront for high-end European fashion, prioritizing visual storytelling and seamless transactions.',
    techStack: ['Shopify', 'Next.js', 'Framer Motion'],
    features: ['Editorial shopping experience', 'Lookbook integration', 'Global shipping logistics'],
    clientLink: 'https://farriesbrussels.com/'
  },
  {
    id: 'smooche',
    title: 'Smooche',
    category: 'E-Commerce / Beauty',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1200&auto=format&fit=crop',
    fullDescription: 'Developed an engaging, highly visual beauty products platform focused on modern cosmetics marketing and influencer-driven sales.',
    techStack: ['React', 'Shopify', 'Tailwind'],
    features: ['Influencer codes integration', 'Dynamic beauty bundling', 'Responsive mobile-first design'],
    clientLink: 'https://smooche.com/'
  },
  {
    id: 'teehaven',
    title: 'Tee Haven',
    category: 'E-Commerce / Apparel',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop',
    fullDescription: 'A streamlined custom apparel shop ensuring an easy purchasing journey for high-quality, customized tees.',
    techStack: ['Next.js', 'Commerce.js', 'Stripe'],
    features: ['Custom design upload', 'Live product preview', 'Secure checkout'],
    clientLink: 'https://teehavenpk.com/'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 0,
    company: 'Future.co',
    role: 'Lead Software Architect',
    description: 'Developed scalable React Native and Node.js solutions for high-performance fitness coaching.',
    period: '2023 – Present',
  },
  {
    id: 1,
    company: 'Freelance Developer',
    role: 'Full Stack Engineer',
    description: 'Delivered 15+ custom websites, mobile apps, and blockchain tools for clients across the UAE and Europe.',
    period: '2021 – 2023',
  },
  {
    id: 2,
    company: 'Self-Taught Developer',
    role: 'Software Development',
    description: 'Learned through real-world projects and community contribution. Mastered React, Flutter, and Solidity.',
    period: '2019 – 2021',
  },
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    number: '01',
    title: 'Full-Stack Web Development',
    description: 'I build modern, scalable web applications using React, Next.js, Node.js, and TypeScript. My code is structured, maintainable, and built for growth.',
    icon: 'code',
  },
  {
    id: 's2',
    number: '02',
    title: 'System Architecture & API Design',
    description: 'Before development begins, I design the foundation properly. Database architecture, API structure, authentication, and security layers are mapped intentionally.',
    icon: 'architecture',
  },
  {
    id: 's3',
    number: '03',
    title: 'AI Integration & Intelligent Systems',
    description: 'I integrate practical AI into products. Virtual assistants, workflow automation, and smart analytics that improve efficiency and decision-making.',
    icon: 'ai',
  },
  {
    id: 's4',
    number: '04',
    title: 'Backend Engineering & Database Design',
    description: 'I develop secure, efficient backend systems using Node.js and Python. I design optimized schemas with PostgreSQL and MongoDB for performance.',
    icon: 'database',
  },
  {
    id: 's5',
    number: '05',
    title: 'UI/UX Design & Product Experience',
    description: 'Great systems must also feel intuitive. Using tools like Figma, I design clean, user-focused interfaces that balance functionality with clarity.',
    icon: 'design',
  },
  {
    id: 's6',
    number: '06',
    title: 'Mobile-Responsive & Performance',
    description: 'Every product I build performs smoothly across devices. Fast load times, responsive layouts, and structured frontend logic that enhances user retention.',
    icon: 'mobile',
  },
  {
    id: 's7',
    number: '07',
    title: 'Deployment, DevOps & Cloud',
    description: 'I manage CI/CD pipelines and cloud environments including AWS. Your system doesn’t just get built. It gets launched correctly.',
    icon: 'cloud',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Chen',
    role: 'Product Lead',
    company: 'Future.co',
    content: "Abdulhalim's ability to architect scalable systems is unparalleled. He didn't just write code; he built a foundation that allowed our platform to handle a 300% increase in traffic without a single hiccup.",
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: 't2',
    name: 'James Ramsay',
    role: 'Operations Director',
    company: 'Global Hospitality Group',
    content: 'A rare talent who understands both the technical intricacies of the backend and the aesthetic demands of high-end frontend design. The digital experience he created for our restaurants is truly world-class.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: 't3',
    name: 'Marco Rossi',
    role: 'Founder',
    company: 'ProHouse Blockchain',
    content: "We needed someone who could bridge the gap between traditional real estate and Web3. Abdulhalim delivered a secure, user-friendly platform that exceeded our investors' expectations.",
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
  },
];
