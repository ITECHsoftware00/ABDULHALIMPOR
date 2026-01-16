
import React from 'react';
import { Link } from 'react-router-dom';

const CVPage: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-main text-sec pt-32 pb-24 px-6 md:px-20 relative overflow-hidden print:p-0 print:bg-white print:text-black">
      {/* Background Decorative */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-thr/5 blur-[150px] pointer-events-none print:hidden"></div>

      <div className="max-w-5xl mx-auto bg-card-bg/30 backdrop-blur-xl border-2 border-muted/10 rounded-[4rem] overflow-hidden shadow-2xl print:shadow-none print:border-none print:rounded-none print:max-w-full">
        {/* Top Controls - Hidden on Print */}
        <div className="p-8 border-b border-muted/10 flex justify-between items-center print:hidden">
          <Link to="/about" className="inline-flex items-center gap-2 text-thr font-black group hover:gap-4 transition-all">
            <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            BACK
          </Link>
          <button 
            onClick={handlePrint}
            className="bg-thr text-black px-8 py-3 rounded-full font-black text-sm flex items-center gap-2 hover:scale-105 transition-all shadow-lg shadow-thr/20"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" /></svg>
            PRINT / PDF
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] divide-x-2 divide-muted/10 print:grid-cols-[1fr_1.5fr] print:divide-black/10">
          {/* Left Column */}
          <div className="p-12 md:p-16 flex flex-col gap-16">
            <section>
              <h1 className="text-5xl font-space font-black tracking-tighter leading-none mb-6 text-sec print:text-black uppercase">
                Abdulhalim<br />Muhammad
              </h1>
              <p className="text-thr font-black text-xs tracking-[0.2em] mb-8 uppercase print:text-black/60 italic">
                Frontend | Backend | Mobile App<br />Developer | Web Developer
              </p>
              <div className="flex flex-col gap-3 text-sm font-bold opacity-70 print:opacity-100">
                <a href="mailto:tsolution418@gmail.com" className="hover:text-thr transition-colors">tsolution418@gmail.com</a>
                <a href="tel:+380951594897" className="hover:text-thr transition-colors">+380951594897</a>
                <p>(Available for remote work)</p>
              </div>
            </section>

            <CVSection title="Profile">
              <p className="text-sm leading-relaxed opacity-80 print:opacity-100 font-medium">
                Creative and results-driven Full-Stack Developer with experience delivering high-quality mobile apps, web applications, and blockchain solutions. Proficient in React, Flutter, Laravel, Spring Boot, and Solidity. Skilled at leading freelance and client projects from idea to launch, with a strong focus on performance, security, and user experience. Passionate about solving problems with clean, scalable code and building platforms that drive value for users and businesses.
              </p>
            </CVSection>

            <CVSection title="Languages">
              <p className="text-sm font-black tracking-widest opacity-80 uppercase">English</p>
            </CVSection>

            <CVSection title="Experience">
              <div className="flex flex-col gap-8">
                <div>
                  <h4 className="font-black text-lg text-sec print:text-black uppercase tracking-tight">Freelance Developer</h4>
                  <p className="text-thr text-xs font-black mb-2 uppercase">2021 – Present</p>
                  <ul className="text-sm space-y-3 opacity-70 print:opacity-100 list-disc pl-4">
                    <li>Delivered 15+ custom websites, mobile apps, and blockchain tools for clients across the UAE and Europe.</li>
                    <li>Built WooCommerce plugin with crypto gateway integration.</li>
                    <li>Provided end-to-end services: design, development, deployment, and client training.</li>
                  </ul>
                </div>
              </div>
            </CVSection>

            <CVSection title="Education">
              <div>
                <h4 className="font-black text-lg text-sec print:text-black uppercase tracking-tight">Self-Taught Software Developer</h4>
                <p className="text-sm opacity-70 print:opacity-100 mt-2">
                  Learned through real-world projects, documentation, and developer communities. Ongoing learning in AI, UGC marketing, and no-code platforms.
                </p>
              </div>
            </CVSection>
          </div>

          {/* Right Column */}
          <div className="p-12 md:p-16 flex flex-col gap-16 bg-main/20 print:bg-transparent">
            <CVSection title="Skills">
              <div className="grid grid-cols-1 gap-10">
                <SkillGroup title="Languages & Frameworks" items="JavaScript, React, Flutter, Laravel, Spring Boot, PHP, Solidity, Rust" />
                <SkillGroup title="Mobile Development" items="React Native, Flutter" />
                <SkillGroup title="Backend" items="Node.js, Express.js, Laravel, Spring Boot" />
                <SkillGroup title="Blockchain" items="Smart Contracts, DeFi, Token Integration, NFT Development" />
                <SkillGroup title="Databases" items="MySQL, MongoDB, PostgreSQL" />
                <SkillGroup title="Tools" items="Git, Figma, Firebase, Docker, REST APIs, Web3.js" />
                <SkillGroup title="Others" items="UGC marketing, Facebook Ads, Shopify, WordPress" />
              </div>
            </CVSection>

            <CVSection title="Projects">
              <div className="flex flex-col gap-12">
                <ProjectSummary 
                  title="ZipBook App" 
                  desc="A digital wallet and transaction management app, with features like ZipPoints, ZipWallet, and real-time financial analytics."
                  tech="Flutter, Firebase, Node.js"
                />
                <ProjectSummary 
                  title="QR Menu & Food Ordering App" 
                  desc="For tier-2/3 cities with local ordering features, without rider integration. Developed easy-to-use QR menu interface."
                  tech="Flutter, Firebase, WhatsApp API"
                />
                <ProjectSummary 
                  title="ProHouse Platform" 
                  desc="A decentralized real estate platform leveraging NFTs and tokenization for fractional property ownership. Developed smart contracts for property NFTs."
                  tech="Solidity, React, IPFS"
                />
              </div>
            </CVSection>
          </div>
        </div>
      </div>
    </div>
  );
};

const CVSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <section className="flex flex-col gap-6">
    <div className="flex items-center gap-4">
      <h3 className="text-xl font-space font-black tracking-[0.3em] uppercase text-thr print:text-black shrink-0">{title}</h3>
      <div className="h-[2px] w-full bg-muted/10 print:bg-black/10"></div>
    </div>
    {children}
  </section>
);

const SkillGroup: React.FC<{ title: string; items: string }> = ({ title, items }) => (
  <div>
    <h4 className="text-[10px] font-black tracking-[0.3em] uppercase text-thr/60 mb-2 print:text-black/40">{title}</h4>
    <p className="text-sm font-bold opacity-80 print:opacity-100">{items}</p>
  </div>
);

const ProjectSummary: React.FC<{ title: string; desc: string; tech: string }> = ({ title, desc, tech }) => (
  <div>
    <h4 className="font-black text-xl text-sec print:text-black tracking-tight mb-2 uppercase">{title}</h4>
    <p className="text-sm opacity-70 print:opacity-100 leading-relaxed mb-3">{desc}</p>
    <div className="inline-block bg-thr/10 text-thr px-3 py-1 rounded text-[10px] font-black tracking-widest uppercase print:bg-black/5 print:text-black">
      TECH: {tech}
    </div>
  </div>
);

export default CVPage;
