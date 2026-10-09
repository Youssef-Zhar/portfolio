import React from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Github, Trophy, Lightbulb, Target, ArrowUpRight } from 'lucide-react';

const ProjectCard = ({ title, category, problem, solution, result, tags, link, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);
  
  const shadowX = useTransform(mouseXSpring, [-0.5, 0.5], [20, -20]);
  const shadowY = useTransform(mouseYSpring, [-0.5, 0.5], [20, -20]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: "-100px" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group relative bg-[#0a0a0a]/50 backdrop-blur-xl border border-white/5 rounded-[3.5rem] overflow-hidden p-10 md:p-16 mb-20 last:mb-0 hover:border-accent-blue/20 transition-colors duration-700"
    >
      {/* Dynamic Interaction Shadow */}
      <motion.div 
        style={{ x: shadowX, y: shadowY }}
        className="absolute inset-0 bg-accent-blue/5 blur-[120px] -z-10 group-hover:bg-accent-blue/10 transition-all duration-700"
      />
      
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div style={{ transform: "translateZ(60px)" }} className="space-y-8">
          <div className="flex items-center justify-between gap-4 mb-2">
            <div className="flex items-center gap-4">
              <span className="text-accent-blue font-orbitron font-black text-6xl opacity-10 group-hover:opacity-30 transition-opacity">0{index + 1}</span>
              <span className="text-xs font-orbitron font-bold uppercase tracking-widest text-accent-blue/80 bg-accent-blue/10 px-3 py-1 rounded-full border border-accent-blue/20">
                {category}
              </span>
            </div>
            <a 
              href={link} 
              target="_blank" 
              rel="noreferrer" 
              className="p-3 rounded-2xl glass border border-white/10 text-accent-blue hover:text-white hover:bg-accent-blue/20 hover:scale-110 transition-all duration-300 group/link"
              title="Voir le projet"
            >
              <ArrowUpRight size={22} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
            </a>
          </div>
          
          <h3 className="text-4xl md:text-6xl font-black text-white group-hover:text-accent-blue transition-colors duration-500 uppercase tracking-tighter leading-none">
            {title}
          </h3>

          <div className="grid gap-6 mb-8">
            <div className="flex gap-5 group/item">
              <div className="mt-1 text-red-500/60 group-hover/item:text-red-500 transition-colors"><Target size={22} /></div>
              <div>
                <h4 className="text-[10px] font-black uppercase text-gray-500 tracking-[0.3em] mb-1">Le Problème</h4>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light">{problem}</p>
              </div>
            </div>
            <div className="flex gap-5 group/item">
              <div className="mt-1 text-accent-blue/60 group-hover/item:text-accent-blue transition-colors"><Lightbulb size={22} /></div>
              <div>
                <h4 className="text-[10px] font-black uppercase text-gray-500 tracking-[0.3em] mb-1">Ma Solution</h4>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light">{solution}</p>
              </div>
            </div>
            <div className="flex gap-5 group/item">
              <div className="mt-1 text-emerald-500/60 group-hover/item:text-emerald-500 transition-colors"><Trophy size={22} /></div>
              <div>
                <h4 className="text-[10px] font-black uppercase text-gray-500 tracking-[0.3em] mb-1">Le Résultat</h4>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light">{result}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {tags.map(tag => (
              <span key={tag} className="px-4 py-1.5 bg-white/5 rounded-full text-[10px] font-bold uppercase tracking-widest text-gray-400 border border-white/5 hover:border-accent-blue/30 hover:text-white transition-all">
                {tag}
              </span>
            ))}
          </div>

          <div className="pt-4 flex flex-wrap gap-4">
            <a href={link} target="_blank" rel="noreferrer" className="btn-premium flex items-center justify-center gap-3 group/btn">
              VOIR LE PROJET <ArrowUpRight size={18} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        <div 
          className="relative aspect-square md:aspect-video rounded-[2.5rem] overflow-hidden glass border border-white/10 group-hover:rotate-1 group-hover:scale-[1.02] transition-all duration-1000 ease-[0.22,1,0.36,1] flex items-center justify-center" 
          style={{ transform: "translateZ(100px)" }}
        >
          <div className="absolute inset-0 bg-linear-to-br from-accent-blue/20 to-accent-purple/20 mix-blend-overlay opacity-50 group-hover:opacity-80 transition-opacity"></div>
          <div className="text-center p-8">
            <span className="text-accent-blue/30 font-orbitron font-black text-7xl md:text-8xl block mb-2 select-none">
              0{index + 1}
            </span>
            <span className="text-xs uppercase font-orbitron tracking-[0.4em] text-gray-400 block font-bold">
              {title}
            </span>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute bottom-6 left-6 flex gap-2">
            <div className="w-2 h-2 rounded-full bg-accent-blue animate-pulse"></div>
            <div className="w-2 h-2 rounded-full bg-accent-purple animate-pulse delay-75"></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Application MERN",
      category: "Projet Personnel",
      problem: "Créer une solution full-stack moderne pour la gestion et le traitement réactif des données avec authentification sécurisée.",
      solution: "Mise en place d'un stack MERN (MongoDB, Express, React, Node.js) avec architecture modulaire et API REST réactives.",
      result: "Déploiement réussi sur Vercel avec des temps de réponse rapides et une interface fluide et responsive.",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      link: "https://react-sooty-eta.vercel.app/"
    },
    {
      title: "ECS Informatique",
      category: "Projet de Stage",
      problem: "Refondre et moderniser la vitrine web frontend et la section références de l'entreprise ECS Informatique durant mon stage.",
      solution: "Développement d'une interface frontend moderne et responsive optimisée en HTML5, CSS3 et JavaScript interactif.",
      result: "Mise en valeur efficace des services et références clients de l'entreprise avec une expérience utilisateur fluide.",
      tags: ["HTML", "CSS", "JavaScript", "Frontend"],
      link: "https://ecs-informatique-git-main-youusef-zhrs-projects.vercel.app/"
    }
  ];

  return (
    <section id="projects" className="py-32">
      <div className="mb-24">
        <h2 className="text-4xl md:text-7xl font-black mb-6 uppercase tracking-tighter">Études de <span className="text-accent-blue">Cas</span></h2>
        <p className="text-gray-500 uppercase tracking-[0.4em] text-xs font-bold font-orbitron">Sélection de mes 2 projets clés</p>
      </div>

      <div className="space-y-24">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} {...project} index={index} />
        ))}
      </div>
      
      <div className="mt-32 p-12 glass-card rounded-[3rem] border border-white/5 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-accent-blue/5 blur-[100px] -z-10"></div>
        <h3 className="text-3xl font-black mb-6 uppercase tracking-widest">2 Projets Présentés</h3>
        <p className="text-gray-400 mb-10 max-w-2xl mx-auto">Explorez mes créations en ligne et découvrez mes travaux open-source sur GitHub.</p>
        <a 
          href="https://github.com/Joseph-Nostra" 
          target="_blank" 
          rel="noreferrer"
          className="inline-flex items-center gap-3 px-12 py-5 border border-white/10 rounded-full font-black text-xs tracking-widest hover:border-accent-blue transition-all"
        >
          MON PROFIL GITHUB <Github size={20} />
        </a>
      </div>
    </section>
  );
};

export default Projects;
