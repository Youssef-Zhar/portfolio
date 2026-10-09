import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import profileImg from '../assets/profile.jpg';
import './AboutArmor.css';

const About = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div
        onDoubleClick={() => console.log("%c🚀 Easter Egg: Passion Innovation Excellence!", "color: #00f2ff; font-size: 20px; font-weight: bold;")}
        className="grid md:grid-cols-2 gap-20 items-center"
      >
        <motion.div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="relative group cursor-pointer"
        >
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [0, 1, 0]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-linear-to-r from-accent-blue to-accent-purple rounded-3xl blur-2xl opacity-10 group-hover:opacity-30 transition duration-1000" style={{ transform: "translateZ(-20px)" }}></div>
            <div className="portrait-stage relative aspect-square rounded-[3rem] overflow-hidden glass border border-white/10 shadow-2xl" style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }}>
              <img
                src={profileImg}
                alt="Youssef Zhar"
                className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-700"></div>

              <div className="armor-overlay absolute inset-0 z-10 pointer-events-none" aria-hidden="true">
                <svg className="armor-art" viewBox="0 0 500 500" preserveAspectRatio="xMidYMid slice" role="presentation">
                  <defs>
                    <linearGradient id="armorRed" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#ff5a42" />
                      <stop offset="45%" stopColor="#8e111b" />
                      <stop offset="100%" stopColor="#260b18" />
                    </linearGradient>
                    <linearGradient id="armorGold" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#fff0a3" />
                      <stop offset="45%" stopColor="#dca53a" />
                      <stop offset="100%" stopColor="#74451c" />
                    </linearGradient>
                    <linearGradient id="reactorCore" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#f4ffff" />
                      <stop offset="50%" stopColor="#39f6ff" />
                      <stop offset="100%" stopColor="#1688ff" />
                    </linearGradient>
                    <filter id="cyanGlow" x="-100%" y="-100%" width="300%" height="300%">
                      <feGaussianBlur stdDeviation="5" result="blur" />
                      <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                    </filter>
                  </defs>

                  {/* Helmet crown and cheek plates: deliberately translucent so the portrait stays visible */}
                  <path d="M139 154 L133 104 L163 58 L218 35 L282 35 L337 58 L367 104 L361 154 L337 135 L325 87 L285 66 L215 66 L175 87 L163 135 Z"
                    fill="url(#armorRed)" fillOpacity=".9" stroke="url(#armorGold)" strokeWidth="4" />
                  <path d="M157 105 L184 76 L217 65 L204 95 L174 122 Z M343 105 L316 76 L283 65 L296 95 L326 122 Z"
                    fill="url(#armorGold)" fillOpacity=".88" />
                  <path d="M147 150 L163 135 L175 185 L166 236 L185 278 L158 267 L140 224 Z"
                    fill="url(#armorRed)" stroke="#f2bd59" strokeWidth="3" />
                  <path d="M353 150 L337 135 L325 185 L334 236 L315 278 L342 267 L360 224 Z"
                    fill="url(#armorRed)" stroke="#f2bd59" strokeWidth="3" />
                  <path d="M174 125 L195 102 L305 102 L326 125 L315 213 L289 250 L250 268 L211 250 L185 213 Z"
                    fill="#160e18" fillOpacity=".25" stroke="#f5c765" strokeOpacity=".82" strokeWidth="2.5" />
                  <path d="M183 153 L218 164 L203 181 L177 174 Z" fill="#172e42" stroke="#6efaff" strokeWidth="2" filter="url(#cyanGlow)" />
                  <path d="M317 153 L282 164 L297 181 L323 174 Z" fill="#172e42" stroke="#6efaff" strokeWidth="2" filter="url(#cyanGlow)" />
                  <path d="M221 194 L250 207 L279 194 L272 224 L250 239 L228 224 Z"
                    fill="url(#armorGold)" fillOpacity=".72" stroke="#ffd879" strokeWidth="2" />
                  <path d="M222 254 L250 268 L278 254 L270 277 L250 288 L230 277 Z" fill="url(#armorRed)" stroke="#f4c45d" strokeWidth="2" />

                  {/* Shoulder and upper-chest armor */}
                  <path d="M160 279 L124 285 L82 315 L55 365 L70 409 L112 399 L143 367 L180 344 Z"
                    fill="url(#armorRed)" fillOpacity=".86" stroke="url(#armorGold)" strokeWidth="4" />
                  <path d="M340 279 L376 285 L418 315 L445 365 L430 409 L388 399 L357 367 L320 344 Z"
                    fill="url(#armorRed)" fillOpacity=".86" stroke="url(#armorGold)" strokeWidth="4" />
                  <path d="M143 354 L185 328 L219 342 L250 367 L281 342 L315 328 L357 354 L344 414 L300 449 L250 464 L200 449 L156 414 Z"
                    fill="url(#armorRed)" fillOpacity=".76" stroke="url(#armorGold)" strokeWidth="4" />
                  <path d="M184 335 L211 350 L198 389 L166 408 L151 390 Z M316 335 L289 350 L302 389 L334 408 L349 390 Z"
                    fill="url(#armorGold)" fillOpacity=".72" />
                  <path d="M223 354 L250 339 L277 354 L291 390 L270 422 L250 432 L230 422 L209 390 Z"
                    fill="#351724" stroke="#ffd36a" strokeWidth="3" />
                  <circle cx="250" cy="385" r="29" fill="#0a2638" stroke="#f5c65d" strokeWidth="5" />
                  <circle cx="250" cy="385" r="21" fill="none" stroke="#57f8ff" strokeWidth="3" className="reactor-ring" />
                  <path d="M250 365 L261 381 L250 405 L239 381 Z" fill="url(#reactorCore)" filter="url(#cyanGlow)" />

                  {/* Fine energy traces */}
                  <path d="M83 335 L117 324 L145 339 L159 363 M417 335 L383 324 L355 339 L341 363"
                    fill="none" stroke="#54f7ff" strokeWidth="2.5" strokeLinecap="round" className="energy-trace" />
                  <path d="M113 427 L150 438 L183 424 M387 427 L350 438 L317 424"
                    fill="none" stroke="#54f7ff" strokeWidth="2" strokeLinecap="round" className="energy-trace energy-trace-delay" />
                </svg>
                <div className="armor-scanline"></div>
                <div className="armor-flare"></div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <div className="space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-7xl font-black mb-2 uppercase tracking-tighter italic">L'Art du <span className="text-accent-blue text-glow">Code</span></h2>
            <div className="h-1 w-20 bg-accent-blue rounded-full"></div>
          </motion.div>

          <div className="space-y-6 text-gray-400 text-lg md:text-xl font-light leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Je suis <span className="text-white font-bold border-b border-accent-blue/30">Youssef Zhar</span>, un développeur Full Stack et technologue créatif passionné par l'innovation technique.
              Spécialisé en <span className="text-white font-bold text-glow">React, Javascript, Laravel, APIs REST, PHP, MySQL, MongoDB</span>, je fusionne la rigueur du développement système avec la magie de l'interactivité 3D.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative p-8 border-l-4 border-accent-blue bg-white/5 rounded-r-3xl italic text-gray-200 shadow-xl"
            >
              "Je ne construis pas seulement des applications, je façonne des expériences numériques."
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Mon approche repose sur un équilibre parfait entre performance brute et esthétique premium. Chaque projet est pour moi une opportunité de repousser les limites de ce qui est possible sur le web moderne.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-6"
          >
            <a href="#projects" className="px-10 py-5 bg-accent-blue text-black hover:bg-white transition-all rounded-full text-xs font-orbitron font-black tracking-[0.3em] shadow-xl shadow-accent-blue/20">VOIR MES TRAVAUX</a>
            <a href="#contact" className="px-10 py-5 glass-card border border-white/10 hover:border-accent-blue/50 transition-all rounded-full text-xs font-orbitron font-black tracking-[0.3em]">REJOINDRE LE PROJET</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
