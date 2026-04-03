import React from "react";
import { Timeline } from "./timeline";
import DisplayCards from "./display-cards";
import {
    Code2,
    Database,
    Server,
    Cpu,
    Layers,
    GitBranch,
    Cloud,
    Smartphone,
    Figma,
} from "lucide-react";

// Skill badge helper
function SkillBadge({ label }: { label: string }) {
    return (
        <span className="inline-block px-3 py-1 rounded-full border border-thr/30 bg-thr/10 text-thr text-[11px] font-black uppercase tracking-widest">
            {label}
        </span>
    );
}

// Service detail card – premium horizontal card used inside timeline
function ServiceCard({
    icon,
    title,
    description,
    skills,
}: {
    icon: React.ReactNode;
    title: string;
    description: string;
    skills: string[];
}) {
    return (
        <div className="group relative bg-card-bg/40 border border-muted/10 rounded-3xl p-6 md:p-8 hover:border-thr/30 transition-all duration-500 overflow-hidden">
            {/* glow accent */}
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-thr/5 rounded-full blur-3xl group-hover:bg-thr/10 transition-all duration-700" />
            <div className="relative z-10">
                <div className="flex items-start gap-5 mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-thr/10 border border-thr/20 flex items-center justify-center shrink-0 group-hover:bg-thr/20 transition-all">
                        {icon}
                    </div>
                    <div>
                        <h4 className="font-black text-sec uppercase tracking-tight text-lg leading-snug">{title}</h4>
                    </div>
                </div>
                <p className="text-sec/60 text-sm md:text-base leading-relaxed mb-5">{description}</p>
                <div className="flex flex-wrap gap-2">
                    {skills.map((s, i) => (
                        <span key={i} className="inline-block px-3 py-1 rounded-full border border-thr/30 bg-thr/10 text-thr text-[11px] font-black uppercase tracking-widest">
                            {s}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export function CoreSkillsTimeline() {
    const heroCards = [
        {
            icon: <Code2 className="size-4 text-thr" />,
            title: "React & Next.js",
            description: "Advanced — Modern full-stack",
            date: "Advanced",
            titleClassName: "text-thr",
            className:
                "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-main/50 grayscale-[60%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
        },
        {
            icon: <Cpu className="size-4 text-thr" />,
            title: "AI Integration",
            description: "Intelligent systems & automation",
            date: "Advanced",
            titleClassName: "text-thr",
            className:
                "[grid-area:stack] translate-x-12 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-main/50 grayscale-[60%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
        },
        {
            icon: <Cloud className="size-4 text-thr" />,
            title: "Cloud & DevOps",
            description: "AWS infrastructure at scale",
            date: "Strong",
            titleClassName: "text-thr",
            className:
                "[grid-area:stack] translate-x-24 translate-y-20 hover:translate-y-10",
        },
    ];

    const timelineData = [
        {
            title: "Full-Stack Web",
            content: (
                <div className="flex flex-col gap-6">
                    <ServiceCard
                        icon={<Code2 className="w-6 h-6 text-thr" />}
                        title="Full-Stack Web Development"
                        description="I build modern, scalable web applications using React, Next.js, Node.js, and TypeScript. My code is structured, maintainable, and built for growth. When your users increase, the system holds."
                        skills={["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS"]}
                    />
                    <div className="grid grid-cols-2 gap-4 mt-2">
                        <img
                            src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=600&auto=format&fit=crop"
                            alt="Web Development"
                            className="rounded-2xl object-cover h-28 md:h-44 w-full border border-muted/10"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop"
                            alt="Code"
                            className="rounded-2xl object-cover h-28 md:h-44 w-full border border-muted/10"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "Architecture & APIs",
            content: (
                <div className="flex flex-col gap-6">
                    <ServiceCard
                        icon={<Layers className="w-6 h-6 text-thr" />}
                        title="System Architecture & API Design"
                        description="Before development begins, I design the foundation properly. Database architecture, API structure, authentication, security layers, and data flow are mapped intentionally. Strong architecture eliminates costly mistakes later."
                        skills={["System Design", "REST APIs", "Auth", "PostgreSQL", "MongoDB"]}
                    />
                    <ServiceCard
                        icon={<Database className="w-6 h-6 text-thr" />}
                        title="Backend Engineering & Database Design"
                        description="I develop secure, efficient backend systems using Node.js and Python. I design optimized schemas with PostgreSQL and MongoDB to ensure performance, stability, and scalability from day one."
                        skills={["Node.js", "Express", "Python", "PostgreSQL", "MongoDB"]}
                    />
                    <div className="grid grid-cols-2 gap-4 mt-2">
                        <img
                            src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop"
                            alt="Architecture"
                            className="rounded-2xl object-cover h-28 md:h-44 w-full border border-muted/10"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=600&auto=format&fit=crop"
                            alt="Database"
                            className="rounded-2xl object-cover h-28 md:h-44 w-full border border-muted/10"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "AI & Intelligent Systems",
            content: (
                <div className="flex flex-col gap-6">
                    <ServiceCard
                        icon={<Cpu className="w-6 h-6 text-thr" />}
                        title="AI Integration & Intelligent Systems"
                        description="I integrate practical AI into products. Virtual assistants, workflow automation, smart analytics, and AI-driven features that improve efficiency and decision-making. Not AI as decoration. AI as leverage."
                        skills={["AI Integration", "LLMs", "Automation", "Smart Analytics", "Python"]}
                    />
                    <div className="grid grid-cols-1 gap-4 mt-2">
                        <img
                            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop"
                            alt="AI"
                            className="rounded-2xl object-cover h-32 md:h-56 w-full border border-muted/10"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "Design & Mobile",
            content: (
                <div className="flex flex-col gap-6">
                    <ServiceCard
                        icon={<Figma className="w-6 h-6 text-thr" />}
                        title="UI/UX Design & Product Experience"
                        description="Great systems must also feel intuitive. Using tools like Figma, I design clean, user-focused interfaces that balance functionality with clarity. Usability is not optional. It is strategic."
                        skills={["Figma", "Product Design", "UX Research", "Design Systems"]}
                    />
                    <ServiceCard
                        icon={<Smartphone className="w-6 h-6 text-thr" />}
                        title="Mobile-Responsive & Performance Optimization"
                        description="Every product I build performs smoothly across devices. Fast load times, responsive layouts, and structured frontend logic that enhances user retention."
                        skills={["Responsive Design", "Performance", "Core Web Vitals", "React Native"]}
                    />
                    <div className="grid grid-cols-2 gap-4 mt-2">
                        <img
                            src="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=600&auto=format&fit=crop"
                            alt="Design"
                            className="rounded-2xl object-cover h-28 md:h-44 w-full border border-muted/10"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=600&auto=format&fit=crop"
                            alt="Mobile"
                            className="rounded-2xl object-cover h-28 md:h-44 w-full border border-muted/10"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "DevOps & Cloud",
            content: (
                <div className="flex flex-col gap-6">
                    <ServiceCard
                        icon={<Cloud className="w-6 h-6 text-thr" />}
                        title="Deployment, DevOps & Cloud Infrastructure"
                        description="I manage CI/CD pipelines, production deployments, and cloud environments including AWS and modern hosting platforms. Your system doesn't just get built. It gets launched correctly."
                        skills={["AWS", "CI/CD", "Docker", "Vercel", "GitHub Actions"]}
                    />
                    <ServiceCard
                        icon={<GitBranch className="w-6 h-6 text-thr" />}
                        title="DevOps Pipelines & Version Control"
                        description="End-to-end delivery pipelines – from code push to zero-downtime production deployments with automated testing and rollback strategies baked in."
                        skills={["Git", "DevOps Culture", "Infrastructure as Code", "Monitoring"]}
                    />
                    <div className="grid grid-cols-2 gap-4 mt-2">
                        <img
                            src="https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=600&auto=format&fit=crop"
                            alt="Cloud Infrastructure"
                            className="rounded-2xl object-cover h-28 md:h-44 w-full border border-muted/10"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=600&auto=format&fit=crop"
                            alt="DevOps"
                            className="rounded-2xl object-cover h-28 md:h-44 w-full border border-muted/10"
                        />
                    </div>
                </div>
            ),
        },
    ];

    return (
        <section className="bg-main text-sec">
            {/* Header */}
            <div className="max-w-7xl mx-auto px-6 md:px-20 pt-32 pb-12">
                <span className="text-thr font-space font-black tracking-[0.5em] uppercase text-sm block mb-6">
                    Explore My Journey
                </span>
                <div className="flex flex-col lg:flex-row justify-between items-start gap-16">
                    <div className="max-w-2xl">
                        <h2 className="text-6xl md:text-8xl font-space font-black tracking-tighter leading-[0.85] uppercase mb-8">
                            Technologies <br />
                            <span className="text-thr italic">&amp; Services.</span>
                        </h2>
                        <p className="text-sec/60 text-lg md:text-xl font-medium leading-relaxed max-w-xl border-l-4 border-thr pl-6">
                            A full-spectrum approach to engineering. From pixel-perfect interfaces to distributed systems — every layer, built with intention.
                        </p>
                    </div>

                    {/* Display Cards hero */}
                    <div className="flex items-center justify-center w-full lg:w-auto pt-8 lg:pt-0 lg:pr-16">
                        <DisplayCards cards={heroCards} />
                    </div>
                </div>
            </div>

            {/* Horizontal rule */}
            <div className="max-w-7xl mx-auto px-6 md:px-20">
                <div className="h-px bg-gradient-to-r from-transparent via-muted/20 to-transparent" />
            </div>

            {/* Timeline */}
            <Timeline data={timelineData} />
        </section>
    );
}
