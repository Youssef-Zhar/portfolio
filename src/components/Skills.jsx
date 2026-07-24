import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, FileJson, Atom, Cpu, Database, Zap, Layout, Terminal, Layers, Globe, Box, Binary } from 'lucide-react';

const SkillIcon = ({ name }) => {
  const icons = {
    // FrontEnd
    "React": <Atom size={16} />,
    "JavaScript": <Binary size={16} />,
    "HTML": <Layout size={16} />,
    "CSS": <Palette size={16} />,
    // BackEnd
    "Node.js": <Terminal size={16} />,
    "Laravel": <Code size={16} />,
    "PHP": <FileJson size={16} />,
    "REST API": <Globe size={16} />,
    "AUTH (JWT)": <Cpu size={16} />,
    // Conception & DB / Cloud
    "UML": <FileJson size={16} />,
    "Figma": <Palette size={16} />,
    "MySQL": <Database size={16} />,
    "MongoDB": <Database size={16} />,
    "Docker": <Box size={16} />,
    "Cloud": <Globe size={16} />,
    "Microservices": <Layers size={16} />,
    // Outils & DevOps
    "Git": <Code size={16} />,
    "SonarQube": <Zap size={16} />,
    "SonarScanner": <Zap size={16} />,
    "CI/CD": <Layers size={16} />,
    "DevOps": <Cpu size={16} />,
    "Jira": <Terminal size={16} />,
    "GitHub": <Code size={16} />,
    "GitLab": <Code size={16} />,
    "Postman": <Globe size={16} />,
    "Python": <Terminal size={16} />,
    "Word": <FileJson size={16} />,
    "Excel": <FileJson size={16} />
  };
  return icons[name] || <Code size={16} />;
};

const SkillGroup = ({ title, icon: Icon, skills, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay }}
    viewport={{ once: true }}
    className="p-8 md:p-10 glass-card border border-white/5 rounded-[2.5rem] hover:border-accent-blue/20 transition-all duration-700 group flex flex-col h-full relative overflow-hidden"
  >
    <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent-blue/5 blur-[60px] -z-10 group-hover:bg-accent-blue/10 transition-all duration-700"></div>
    
    <div className="flex items-center gap-5 mb-8">
      <div className="p-4 bg-white/5 text-accent-blue rounded-2xl group-hover:bg-accent-blue group-hover:text-black transition-all duration-500 shadow-xl">
        <Icon size={28} />
      </div>
      <h3 className="text-xl md:text-2xl font-black tracking-tighter uppercase text-white">{title}</h3>
    </div>

    <div className="flex flex-wrap gap-3 grow items-start">
      {skills.map((skill, i) => (
        <motion.div
          key={skill}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: delay + (i * 0.05) }}
          viewport={{ once: true }}
          className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/5 border border-white/5 hover:border-accent-blue/40 hover:bg-accent-blue/10 transition-all duration-300 group/badge"
        >
          <span className="text-accent-blue opacity-70 group-hover/badge:opacity-100 group-hover/badge:scale-110 transition-all">
            <SkillIcon name={skill} />
          </span>
          <span className="text-xs font-medium text-gray-300 uppercase tracking-widest group-hover/badge:text-white transition-colors">
            {skill}
          </span>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  const categories = [
    {
      title: "FrontEnd",
      icon: Layout,
      skills: ["React", "JavaScript", "HTML", "CSS"]
    },
    {
      title: "BackEnd",
      icon: Cpu,
      skills: ["Node.js", "Laravel", "PHP", "REST API", "AUTH (JWT)"]
    },
    {
      title: "Conception & Bases de Données / Cloud",
      icon: Database,
      skills: ["UML", "Figma", "MySQL", "MongoDB", "Docker", "Cloud", "Microservices"]
    },
    {
      title: "Outils & DevOps",
      icon: Terminal,
      skills: [
        "Git", "SonarQube", "SonarScanner", "CI/CD", "DevOps", 
        "Jira", "GitHub", "GitLab", "Postman", "Python", "Word", "Excel"
      ]
    }
  ];

  return (
    <section id="skills" className="py-32">
      <div className="mb-20 text-center">
        <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase">Skills <span className="text-accent-blue">Lab</span></h2>
        <p className="text-gray-500 uppercase tracking-[0.3em] text-xs font-bold font-orbitron italic">
          Maîtrise technique et exploration constante
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {categories.map((cat, index) => (
          <SkillGroup key={cat.title} {...cat} delay={index * 0.1} />
        ))}
      </div>
      
      <div className="mt-20 p-8 glass-card border border-white/5 rounded-3xl text-center">
        <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
           <span className="text-sm font-orbitron tracking-widest font-bold">REACT</span>
           <span className="text-sm font-orbitron tracking-widest font-bold">NODE.JS</span>
           <span className="text-sm font-orbitron tracking-widest font-bold">LARAVEL</span>
           <span className="text-sm font-orbitron tracking-widest font-bold">DOCKER</span>
           <span className="text-sm font-orbitron tracking-widest font-bold">CI/CD</span>
           <span className="text-sm font-orbitron tracking-widest font-bold">UML</span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
