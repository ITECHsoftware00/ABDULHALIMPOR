
import { Experience, Project, Service, Testimonial } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'zipbook-app',
    title: 'ZipBook App',
    category: 'FinTech / Mobile',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop',
    fullDescription: 'A digital wallet and transaction management app designed to streamline personal finance. It includes a reward point system (ZipPoints) and a highly secure wallet (ZipWallet) for seamless transfers.',
    techStack: ['Flutter', 'Firebase', 'Node.js', 'Express.js'],
    features: ['Real-time financial analytics', 'ZipPoints reward system', 'Integrated ZipWallet', 'Secure User Authentication'],
  },
  {
    id: 'prohouse-blockchain',
    title: 'ProHouse Platform',
    category: 'Blockchain / Real Estate',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop',
    fullDescription: 'A decentralized real estate platform leveraging NFTs and tokenization for fractional property ownership. ProHouse democratizes real estate investment through smart contracts.',
    techStack: ['Solidity', 'React', 'IPFS', 'Web3.js', 'Ethereum'],
    features: ['Tokenization for fractional ownership', 'Smart contracts for NFT property deeds', 'Secure wallet connection', 'DAO voting system for property management'],
  },
  {
    id: 'qr-menu-app',
    title: 'QR Menu & Food Ordering',
    category: 'SaaS / Hospitality',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop',
    fullDescription: 'Developed for tier-2 and tier-3 cities, this app provides a local ordering solution without complex rider integrations. It focuses on the bridge between the customer and the restaurant table.',
    techStack: ['Flutter', 'Firebase', 'WhatsApp API'],
    features: ['Easy-to-use QR menu interface', 'Direct-to-kitchen ordering system', 'WhatsApp API integration for support', 'Localized payment gateways'],
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
    id: 'gordon-ramsay',
    title: 'Gordon Ramsay Group',
    category: 'Luxury Hospitality',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1200&auto=format&fit=crop',
    fullDescription: 'Frontend engineering for global luxury restaurant chains. Focused on translating high-end brand identity into a seamless, multi-brand digital experience.',
    techStack: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
    features: ['Multi-brand restaurant CMS', 'High-performance reservation systems', 'Localized booking engines'],
    clientLink: 'https://www.gordonramsayrestaurants.com/en/us'
  },
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
    title: 'Full-Stack Web',
    description: 'Proficient in React, Laravel, and Spring Boot. Building robust, scalable web ecosystems.',
    icon: 'code',
  },
  {
    id: 's2',
    number: '02',
    title: 'Mobile Development',
    description: 'Expert in Flutter and React Native. Delivering high-quality iOS and Android applications.',
    icon: 'design',
  },
  {
    id: 's3',
    number: '03',
    title: 'Blockchain & DeFi',
    description: 'Specializing in Smart Contracts, NFT integration, and decentralized property platforms.',
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
