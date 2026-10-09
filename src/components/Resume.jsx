import React from 'react';
import { ExternalLink, Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const SectionTitle = ({ children }) => (
  <h2 className="mb-2 border-b border-slate-200 pb-1 text-[10px] font-extrabold uppercase tracking-[0.18em] text-slate-800">
    {children}
  </h2>
);

const Project = ({ title, kind, stack, bullets, links = [] }) => (
  <article className="mb-3 break-inside-avoid">
    <div className="flex flex-wrap items-baseline justify-between gap-x-2">
      <h3 className="text-[11px] font-bold text-slate-900">{title}</h3>
      <span className="text-[9px] font-semibold italic text-slate-500">{kind}</span>
    </div>
    <p className="mb-1 text-[9px] font-medium text-slate-600">{stack}</p>
    <ul className="list-disc space-y-[1px] pl-4 text-[9px] leading-[1.35] text-slate-700">
      {bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
    </ul>
    {links.length > 0 && (
      <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-[9px] font-semibold text-slate-600">
        {links.map((link) => (
          <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-slate-950">
            {link.icon === 'github' ? <Github size={10} /> : <ExternalLink size={10} />}
            {link.label}
          </a>
        ))}
      </div>
    )}
  </article>
);

const Resume = () => {
  return (
    <main className="min-h-screen bg-slate-100 px-3 py-6 text-slate-800 print:min-h-0 print:bg-white print:p-0">
      <div className="mx-auto mb-4 flex max-w-[210mm] justify-end print:hidden">
        <button
          onClick={() => window.print()}
          className="rounded-md bg-slate-900 px-4 py-2 text-xs font-bold text-white transition hover:bg-slate-700"
        >
          Imprimer / Enregistrer en PDF
        </button>
      </div>

      <article id="resume-container" className="mx-auto max-w-[210mm] bg-white px-7 py-6 shadow-xl print:max-w-none print:shadow-none print:px-0 print:py-0">
        <header className="border-b-2 border-slate-900 pb-3">
          <h1 className="text-2xl font-black tracking-tight text-slate-950">YOUSSEF ZHAR</h1>
          <p className="mt-1 text-[12px] font-extrabold uppercase tracking-[0.12em] text-slate-700">Développeur Full Stack Junior</p>
          <p className="mt-1 text-[10px] font-semibold text-slate-600">React.js · Laravel · PHP · Node.js</p>
          <div className="mt-3 grid grid-cols-1 gap-x-4 gap-y-1 text-[9px] text-slate-600 sm:grid-cols-2 print:grid-cols-2">
            <span className="flex items-center gap-1.5"><MapPin size={10} /> Skhirat – Témara – Rabat, Maroc</span>
            <a className="flex items-center gap-1.5" href="mailto:youssefzh850@gmail.com"><Mail size={10} /> youssefzh850@gmail.com</a>
            <a className="flex items-center gap-1.5" href="tel:+212682966318"><Phone size={10} /> 0682966318</a>
            <a className="flex items-center gap-1.5" href="https://linkedin.com/in/youssef-zhar-a758853aa" target="_blank" rel="noreferrer"><Linkedin size={10} /> linkedin.com/in/youssef-zhar-a758853aa</a>
            <a className="flex items-center gap-1.5" href="https://github.com/Youssef-Zhar" target="_blank" rel="noreferrer"><Github size={10} /> github.com/Youssef-Zhar</a>
          </div>
        </header>

        <section className="mt-3 break-inside-avoid">
          <SectionTitle>Profil professionnel</SectionTitle>
          <p className="text-[9.5px] leading-[1.4] text-slate-700">
            Développeur web full stack junior, titulaire d’un DTS en Développement Digital, option Développement Web Full-Stack.
            J’ai acquis une expérience pratique en intégration web lors d’un stage chez ECS Informatique et développé plusieurs
            projets académiques et personnels. Compétences en développement front-end et back-end, conception d’API REST,
            gestion de bases de données et déploiement d’applications web.
          </p>
        </section>

        <div className="mt-3 grid grid-cols-1 gap-4 md:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)] print:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)] print:gap-4">
          <div className="min-w-0">
            <section className="mb-3 break-inside-avoid">
              <SectionTitle>Expérience professionnelle</SectionTitle>
              <div className="flex flex-wrap items-baseline justify-between gap-x-2">
                <h3 className="text-[11px] font-bold text-slate-900">Stagiaire en développement web — ECS Informatique</h3>
                <span className="text-[9px] text-slate-500">Avril – Mai 2026</span>
              </div>
              <p className="mb-1 text-[9px] italic text-slate-500">Rabat-Souissi</p>
              <ul className="list-disc space-y-[1px] pl-4 text-[9px] leading-[1.35] text-slate-700">
                <li>Intégration et amélioration de pages web avec HTML5, CSS3, Bootstrap et JavaScript.</li>
                <li>Développement d’interactions front-end avec jQuery et adaptation responsive des interfaces.</li>
                <li>Participation à l’amélioration d’un site institutionnel présentant les services, les offres et un formulaire de candidature.</li>
                <li>Adaptation du projet vers une version statique pour faciliter son hébergement et son déploiement sur Vercel.</li>
              </ul>
              <p className="mt-1 text-[9px] text-slate-600">Projet en ligne : <a className="font-semibold underline" href="https://ecs-informatique.vercel.app" target="_blank" rel="noreferrer">ecs-informatique.vercel.app</a></p>
            </section>

            <section className="mb-3">
              <SectionTitle>Projets informatiques</SectionTitle>
              <Project
                title="LEXIGAME"
                kind="Projet académique"
                stack="React 19 · Laravel 12 · PHP 8.3 · MySQL 8 · Docker Compose · GitHub Actions"
                bullets={[
                  'Développement d’une application e-commerce full stack avec trois espaces : Client, Vendeur et Administrateur.',
                  'Mise en place de l’authentification avec Laravel Sanctum et du contrôle d’accès basé sur les rôles.',
                  'Gestion des produits, catégories, panier, commandes, paiements, livraisons, avis et demandes de retour.',
                  'Utilisation d’une API REST, de Docker Compose et de GitHub Actions pour l’intégration continue.'
                ]}
                links={[{ label: 'Code source — GitHub / LEXIGAME', href: 'https://github.com/Joseph-Nostra/LEXIGAME', icon: 'github' }]}
              />
              <Project
                title="MERN E-commerce"
                kind="Projet personnel"
                stack="React · Node.js · Express.js · MongoDB · Mongoose · Pusher · Chart.js"
                bullets={[
                  'Développement d’une plateforme e-commerce avec catalogue, recherche, filtres, panier, wishlist et historique des commandes.',
                  'Création d’un tableau de bord administrateur pour gérer produits, catégories, utilisateurs, commandes et stocks.',
                  'Notifications en temps réel avec Pusher et factures téléchargeables ou imprimables.',
                  'Déploiement sur Vercel avec un paiement simulé pour le processus de commande.'
                ]}
                links={[{ label: 'Démo — react-sooty-eta.vercel.app', href: 'https://react-sooty-eta.vercel.app', icon: 'external' }]}
              />
              <Project
                title="Wiam Cookies"
                kind="Projet personnel"
                stack="React · TypeScript · Vite · Tailwind CSS · Vercel"
                bullets={[
                  'Conception d’un site vitrine responsive dédié à une marque de pâtisserie.',
                  'Galerie de produits et de créations personnalisées avec une identité visuelle moderne.',
                  'Développement de composants réutilisables et adaptation de l’interface aux différents écrans.',
                  'Déploiement sur Vercel et utilisation d’Oxlint pour l’analyse du code.'
                ]}
                links={[{ label: 'Site en ligne — wiam-cookies.vercel.app', href: 'https://wiam-cookies.vercel.app', icon: 'external' }]}
              />
            </section>
          </div>

          <aside className="min-w-0 space-y-3">
            <section className="break-inside-avoid">
              <SectionTitle>Formation</SectionTitle>
              <div className="mb-2">
                <h3 className="text-[10px] font-bold text-slate-900">DTS — Développement Digital</h3>
                <p className="text-[9px] leading-[1.35] text-slate-700">Option Développement Web Full-Stack</p>
                <p className="text-[9px] text-slate-500">ISTA Témara — OFPPT · 2024–2026</p>
                <p className="text-[9px] font-semibold text-slate-700">Diplôme obtenu en 2026 — Mention Bien</p>
              </div>
              <div>
                <h3 className="text-[10px] font-bold text-slate-900">Baccalauréat — SVT</h3>
                <p className="text-[9px] text-slate-700">Sciences de la Vie et de la Terre</p>
                <p className="text-[9px] text-slate-500">Lycée Tahla · 2023–2024</p>
              </div>
            </section>

            <section className="break-inside-avoid">
              <SectionTitle>Compétences techniques</SectionTitle>
              <div className="space-y-2 text-[9px] leading-[1.4]">
                <div><h3 className="font-bold text-slate-900">Front-end</h3><p>React.js, JavaScript ES6+, TypeScript, HTML5, CSS3, Bootstrap, Tailwind CSS.</p></div>
                <div><h3 className="font-bold text-slate-900">Back-end</h3><p>PHP, Laravel, Node.js, Express.js, API REST, Laravel Sanctum.</p></div>
                <div><h3 className="font-bold text-slate-900">Bases de données</h3><p>MySQL, MongoDB, Mongoose.</p></div>
                <div><h3 className="font-bold text-slate-900">Outils et déploiement</h3><p>Git, GitHub, GitLab, Docker Compose, GitHub Actions, Vercel.</p></div>
                <div><h3 className="font-bold text-slate-900">Bibliothèques et qualité</h3><p>React Router, Redux Toolkit, Context API, Axios, Pusher, Chart.js, ESLint, Oxlint.</p></div>
              </div>
            </section>

            <section className="break-inside-avoid">
              <SectionTitle>Langues</SectionTitle>
              <ul className="space-y-1 text-[9px]">
                <li><span className="font-bold">Arabe :</span> langue maternelle</li>
                <li><span className="font-bold">Français :</span> intermédiaire</li>
                <li><span className="font-bold">Anglais :</span> intermédiaire</li>
              </ul>
            </section>

            <section className="break-inside-avoid">
              <SectionTitle>Centres d’intérêt</SectionTitle>
              <p className="text-[9px] leading-[1.4]">Développement web, conception d’applications, nouvelles technologies et projets personnels.</p>
            </section>
          </aside>
        </div>
      </article>

      <style>{`
        @page { size: A4; margin: 9mm; }
        @media print {
          html, body { margin: 0 !important; padding: 0 !important; background: #fff !important; }
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          #resume-container { width: 100% !important; max-width: none !important; margin: 0 !important; }
          a { color: inherit !important; text-decoration: none !important; }
          .break-inside-avoid { break-inside: avoid; page-break-inside: avoid; }
        }
      `}</style>
    </main>
  );
};

export default Resume;
