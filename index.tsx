import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Globe, Code, Database, Smartphone, Server, 
  Cpu, Terminal, Mail, MapPin, ExternalLink, ChevronRight 
} from 'lucide-react';

// --- Types & Data ---

const VIDEOS = [
  {
    id: 1,
    title: "Sistem Gaji Supir Otomatis",
    desc: "Aplikasi mencakup modul Master Data, Transaksi, Pembayaran, Invoice, dan Laporan. Berbasis Web Server Standalone (.exe).",
    url: "https://drive.google.com/file/d/1NjO0gurlajYODx-9D5y66Sl1psSf-JDi/preview",
    tags: ["Web Server", "Standalone", "Automotive"]
  },
  {
    id: 2,
    title: "Aplikasi Keuangan (Desktop)",
    desc: "Invoice-Payment-CreditNotes & Sales Commision. Export ke DBF System UBS. Multi Platform (Desktop, Web, Android, iOS).",
    url: "https://drive.google.com/file/d/1VULR_aZPurWRmi-lGZ9YeKsnHVTPiMhf/preview",
    tags: ["Embarcadero", "Desktop", "Finance"]
  },
  {
    id: 3,
    title: "Input Part & Shipping (VBA)",
    desc: "Penyimpanan data 1 bulan satu file, pencarian No. Shipping. Menggunakan Excel VBA Macro.",
    url: "https://drive.google.com/file/d/1a9jCFx_PQPp6idmhxsAVowTlEWLCA6bt/preview",
    tags: ["Excel VBA", "Macro", "Logistics"]
  },
  {
    id: 4,
    title: "Perpustakaan Mahasiswa Online",
    desc: "Data Buku, Peminjaman, Pengembalian. PHP, JS, CSS, XAMPP (Web Services).",
    url: "https://drive.google.com/file/d/13ae0OkULryl3GombiFymnqcJL-zMvwnu/preview",
    tags: ["PHP", "Library", "Web App"]
  },
  {
    id: 5,
    title: "Rental & Aset System",
    desc: "Start To Finish Management System. Dashboard, Customer, Aset, Surat Jalan, Invoice. PHP + CodeIgniter + MySQL.",
    url: "https://drive.google.com/file/d/1VyJdtfEgmrakMJdpNrHQAl-37-aIz8HM/preview",
    tags: ["CodeIgniter", "MySQL", "Asset Mgmt"]
  }
];

const SKILLS = {
  frontend: ["Bootstrap", "Tailwind CSS", "React JS (Basic)"],
  backend: ["API Services", "Laravel (Basic)", "CodeIgniter", "PHP Native"],
  expert: [
    "Pascal / C++ / VBA", 
    "Android Studio / Python", 
    "SQL Server / MySQL", 
    "Data Analysis (SPSS/R)", 
    "System Design (DFD/Flowchart)"
  ]
};

const PROJECTS_LIST = [
  "Sistem Minimarket (Stok, POS, Hutang/Piutang)",
  "Sistem Kontainer (Logistik)",
  "Sistem Penyewaan (Rental)",
  "Sistem Rekrutmen + Tes Online",
  "Sistem Laundry",
  "Sistem Koperasi",
  "Sistem SKCK (Kepolisian)",
  "Sistem E-Commerce (Faktur & Bukti Bayar)",
  "Sistem Pegawai & Payroll",
  "Sistem Aset Management",
  "Sistem Katering & Restoran",
  "Sistem Reservasi Hotel Online"
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Demo', href: '#demo' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-cyber-dark/90 backdrop-blur-md border-b border-cyber-cyan/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 font-techno text-2xl font-bold text-cyber-cyan tracking-wider">
            JOHAN<span className="text-cyber-pink">.DEV</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-cyber-cyan hover:scale-110 transition-all duration-300 px-3 py-2 rounded-md text-sm font-medium font-mono uppercase"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-gray-800 p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-cyber-dark border-b border-cyber-pink/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-cyber-cyan block px-3 py-2 rounded-md text-base font-medium font-mono"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "SENIOR SOFTWARE ENGINEER";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i + 1));
      i++;
      if (i > fullText.length) {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center">
      <div className="absolute inset-0 bg-cyber-dark/80"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,243,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,243,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-32 h-32 mx-auto mb-8 rounded-full border-4 border-cyber-cyan shadow-[0_0_30px_rgba(0,243,255,0.5)] overflow-hidden">
             {/* Using the OG Image from the provided metadata */}
             <img src="https://josanvin.github.io/josanvin/img/Fotoku.png" alt="Johan" className="w-full h-full object-cover" />
          </div>
          <h1 className="font-techno text-5xl md:text-7xl font-bold text-white mb-4 tracking-tighter text-glow">
            JOHAN
          </h1>
          <div className="h-8 md:h-12">
             <p className="font-mono text-xl md:text-3xl text-cyber-cyan font-bold">
               {text}<span className="animate-pulse">_</span>
             </p>
          </div>
          <p className="mt-6 text-gray-400 max-w-lg mx-auto font-mono text-sm md:text-base">
            // DEVELOPING ROBUST SYSTEMS FOR 25+ YEARS
            <br/>
            // EXPERT IN WEB, DESKTOP & ANDROID
          </p>
          
          <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">
             <a href="#contact" className="px-8 py-3 bg-cyber-pink hover:bg-purple-600 text-white font-techno font-bold rounded-sm border border-transparent hover:border-white transition-all shadow-[0_0_15px_rgba(188,19,254,0.5)]">
               HIRE ME
             </a>
             <a href="#demo" className="px-8 py-3 bg-transparent border border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan/10 font-techno font-bold rounded-sm transition-all">
               VIEW DEMOS
             </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  const [lang, setLang] = useState<'id' | 'en'>('id');

  return (
    <section id="about" className="py-20 bg-cyber-light border-t border-cyber-cyan/10 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-cyber-cyan/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="flex justify-between items-center mb-10 border-b border-gray-700 pb-4">
          <h2 className="text-3xl font-techno text-white flex items-center">
            <Terminal className="mr-3 text-cyber-green" /> 
            ABOUT <span className="text-cyber-cyan ml-2">ME</span>
          </h2>
          <button 
            onClick={() => setLang(lang === 'id' ? 'en' : 'id')}
            className="flex items-center px-4 py-2 bg-cyber-dark border border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan hover:text-black transition-colors rounded font-mono text-sm"
          >
            <Globe className="w-4 h-4 mr-2" />
            {lang === 'id' ? 'SWITCH TO ENGLISH' : 'GANTI KE INDONESIA'}
          </button>
        </div>

        <motion.div 
          key={lang}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-cyber-dark/50 p-8 rounded-xl border border-gray-800 backdrop-blur-sm"
        >
          {lang === 'id' ? (
            <div className="space-y-4 text-gray-300 leading-relaxed text-justify">
              <p>
                Nama saya <strong className="text-cyber-cyan">Johan</strong>. Saya adalah <strong className="text-cyber-pink">Senior Software Engineer</strong> dengan pengalaman lebih dari <strong className="text-white">25 tahun</strong>. 
                Lulusan S1 Sistem Informatika dari Universitas Bina Nusantara.
              </p>
              <p>
                Selama lebih dari 5 tahun, saya telah bekerja sebagai Freelancer untuk berbagai proyek besar. 
                Saya menguasai teknik dasar mulai dari OS Foxpro/Visual Basic hingga <strong className="text-cyber-green">Web Server Programming</strong> modern.
              </p>
              <p className="italic text-gray-500 border-l-4 border-cyber-cyan pl-4 py-2 bg-black/20">
                "Jika ada yang tertarik untuk belajar dan mendalami pemrograman, saya akan membantu semaksimal mungkin."
              </p>
            </div>
          ) : (
            <div className="space-y-4 text-gray-300 leading-relaxed text-justify">
              <p>
                My name is <strong className="text-cyber-cyan">Johan</strong>. I am a <strong className="text-cyber-pink">Senior Software Engineer</strong> with over <strong className="text-white">25 years of experience</strong>. 
                I hold a Bachelor's degree in Information Systems from Bina Nusantara University.
              </p>
              <p>
                For more than 5 years, I have been working as a Freelancer on various high-level projects. 
                I have mastered techniques ranging from legacy Foxpro/Visual Basic to modern <strong className="text-cyber-green">Web Server Programming</strong>.
              </p>
              <p className="italic text-gray-500 border-l-4 border-cyber-cyan pl-4 py-2 bg-black/20">
                "If anyone is interested in learning and exploring programming, I will help as much as possible."
              </p>
            </div>
          )}
        </motion.div>

        {/* Skills Grid */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <SkillCard title="FRONT END" icon={<Code />} skills={SKILLS.frontend} color="cyan" />
          <SkillCard title="BACK END" icon={<Server />} skills={SKILLS.backend} color="pink" />
          <SkillCard title="EXPERT TOOLS" icon={<Cpu />} skills={SKILLS.expert} color="green" />
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ title, icon, skills, color }: { title: string, icon: any, skills: string[], color: string }) => {
  const borderColor = color === 'cyan' ? 'border-cyber-cyan' : color === 'pink' ? 'border-cyber-pink' : 'border-cyber-green';
  const textColor = color === 'cyan' ? 'text-cyber-cyan' : color === 'pink' ? 'text-cyber-pink' : 'text-cyber-green';

  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className={`bg-cyber-dark p-6 rounded-lg border-t-4 ${borderColor} shadow-lg`}
    >
      <div className={`${textColor} mb-4 flex items-center`}>
        {React.cloneElement(icon, { className: "w-6 h-6 mr-2" })}
        <h3 className="font-techno font-bold text-lg">{title}</h3>
      </div>
      <ul className="space-y-2">
        {skills.map((s, i) => (
          <li key={i} className="text-gray-400 text-sm font-mono flex items-start">
            <span className="mr-2 text-gray-600">&gt;</span> {s}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const Services = () => {
  const services = [
    { title: "Development", icon: <Code />, desc: "High quality solutions with max efficiency." },
    { title: "Collaboration", icon: <ExternalLink />, desc: "Working with professionals to raise standards." },
    { title: "Dedication", icon: <Database />, desc: "Solutions with sincere commitment to excellence." },
    { title: "Security", icon: <Server />, desc: "Ensuring database protection and integrity." },
  ];

  return (
    <section id="services" className="py-20 bg-cyber-dark">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-techno text-white mb-12 text-glow">SERVICES</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-cyber-light p-8 rounded-2xl border border-gray-800 hover:border-cyber-cyan group transition-all"
            >
              <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-cyber-cyan transition-colors">
                {React.cloneElement(s.icon, { className: "w-8 h-8 text-cyber-cyan group-hover:text-black transition-colors" })}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
              <p className="text-gray-400 text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-cyber-light border-t border-cyber-pink/20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-techno text-white mb-12 text-center text-glow-pink">PROJECT HISTORY</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          {PROJECTS_LIST.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="bg-cyber-dark border-l-4 border-cyber-green p-4 flex items-center shadow-md hover:bg-gray-800 transition-colors"
            >
               <ChevronRight className="text-cyber-green mr-2 flex-shrink-0" />
               <span className="text-gray-200 font-mono text-sm md:text-base">{project}</span>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
           <a href="https://josanvinresto.000webhostapp.com" target="_blank" className="text-cyber-cyan hover:underline mx-2 font-mono text-sm">Resto Online Demo</a>
           <span className="text-gray-600">|</span>
           <a href="https://josanvin999.000webhostapp.com" target="_blank" className="text-cyber-cyan hover:underline mx-2 font-mono text-sm">Hotel Reservation Demo</a>
        </div>
      </div>
    </section>
  );
};

const VideoShowcase = () => {
  return (
    <section id="demo" className="py-20 bg-[#050a10]">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-cyber-cyan font-mono mb-2">// VISUAL PROOF</p>
          <h2 className="text-4xl font-techno text-white text-glow">LATEST WORKS DEMO</h2>
        </div>

        <div className="space-y-24">
          {VIDEOS.map((video, index) => (
            <motion.div 
              key={video.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center"
            >
              {/* TV FRAME HTML/CSS RECREATION */}
              <div className="w-full max-w-3xl">
                <div className="tv-frame">
                  <div className="tv-screen">
                    <iframe 
                      src={`${video.url}`} 
                      allow="autoplay; encrypted-media" 
                      allowFullScreen
                      title={video.title}
                    ></iframe>
                  </div>
                </div>
                <div className="tv-stand"></div>
              </div>

              <div className="mt-8 text-center max-w-2xl">
                <h3 className="text-2xl font-bold text-white mb-3 font-techno">{video.title}</h3>
                <div className="flex justify-center gap-2 mb-4">
                  {video.tags.map(tag => (
                     <span key={tag} className="text-xs bg-gray-800 text-cyber-cyan px-2 py-1 rounded border border-gray-700 font-mono">{tag}</span>
                  ))}
                </div>
                <p className="text-gray-400 leading-relaxed bg-cyber-light/50 p-4 rounded-lg border border-gray-800">
                  {video.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-cyber-light to-black relative">
       {/* Decorative Grid */}
       <div className="absolute inset-0 bg-[linear-gradient(rgba(188,19,254,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(188,19,254,0.05)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl font-techno text-white mb-8">GET IN TOUCH</h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-cyber-dark/80 p-6 rounded-xl border border-gray-800 hover:border-cyber-cyan transition-colors">
            <Mail className="w-10 h-10 text-cyber-cyan mx-auto mb-4" />
            <h3 className="text-white font-bold mb-2">Email</h3>
            <a href="mailto:johan.jkt999@gmail.com" className="text-gray-400 hover:text-white text-sm">johan.jkt999@gmail.com</a>
          </div>
          
          <div className="bg-cyber-dark/80 p-6 rounded-xl border border-gray-800 hover:border-cyber-pink transition-colors">
            <MapPin className="w-10 h-10 text-cyber-pink mx-auto mb-4" />
            <h3 className="text-white font-bold mb-2">Location</h3>
            <p className="text-gray-400 text-sm">Seluruh Indonesia<br/>(Via Remote)</p>
          </div>
          
          <div className="bg-cyber-dark/80 p-6 rounded-xl border border-gray-800 hover:border-cyber-green transition-colors">
            <Smartphone className="w-10 h-10 text-cyber-green mx-auto mb-4" />
            <h3 className="text-white font-bold mb-2">WhatsApp</h3>
            <p className="text-gray-400 text-sm">Konsultasi Gratis</p>
          </div>
        </div>

        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          href="https://wa.me/6281341300100"
          target="_blank"
          className="inline-flex items-center px-8 py-4 bg-cyber-green text-black font-bold text-lg rounded-full shadow-[0_0_20px_rgba(10,255,10,0.5)] hover:shadow-[0_0_30px_rgba(10,255,10,0.8)] transition-all animate-pulse-fast"
        >
          <Smartphone className="mr-2" />
          +62-813-41-300-100
        </motion.a>
        
        <p className="mt-4 text-cyber-cyan font-mono text-sm">Hubungi Segera!</p>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black py-8 border-t border-gray-900 text-center">
      <div className="flex justify-center space-x-6 mb-4">
        <a href="#" className="text-gray-500 hover:text-cyber-cyan"><Globe /></a>
        <a href="https://josanvin.github.io/josanvin/" className="text-gray-500 hover:text-cyber-pink"><Code /></a>
      </div>
      <p className="text-gray-600 text-sm font-mono">
        &copy; {new Date().getFullYear()} Johan. Created with React & Tailwind.
      </p>
    </footer>
  );
};

const App = () => {
  return (
    <div className="bg-cyber-dark min-h-screen text-gray-200 selection:bg-cyber-cyan selection:text-black">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <VideoShowcase />
      <Contact />
      <Footer />
    </div>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(<App />);
}
