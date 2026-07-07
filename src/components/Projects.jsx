import { motion } from 'framer-motion';
import { GitFork, ExternalLink, Layers } from 'lucide-react';
import './Projects.css';

const projects = [
  {
    id: 'billbnao',
    title: 'BillBnao',
    tagline: 'Complete GST Compliance Platform',
    description:
      'A full-featured GST compliance web application enabling businesses to file GST returns, generate E-Invoices, and create E-Way Bills. Built end-to-end as the sole backend developer, integrating government GST APIs and OTP-based authentication.',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'GST API', 'E-Invoice API', 'E-Way Bill API', 'OTP Auth', 'JWT'],
    github: 'https://github.com/SgCode301/billbano',
    live: null,
    highlights: [
      'GST return filing automation',
      'E-Invoice & E-Way Bill generation',
      'OTP-based secure login',
      'Real-time GST validation APIs',
    ],
    color: '#22d3ee',
    icon: '🧾',
  },
  {
    id: 'ulive',
    title: 'Ulive',
    tagline: 'Live Streaming & Creator Economy Platform',
    description:
      'A TikTok-inspired live streaming platform featuring real-time video broadcasting via ZEGOCLOUD, media delivery via BunnyCDN, virtual coin economy, agency/creator management, and Google OAuth. Handles real-time events, user roles, and complex business logic.',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'ZEGOCLOUD', 'BunnyCDN', 'Google OAuth', 'Socket.IO', 'JWT', 'Mongoose'],
    github: 'https://github.com/SgCode301/ulive',
    live: null,
    highlights: [
      'Live video streaming via ZEGOCLOUD',
      'Media & video delivery via BunnyCDN',
      'Google OAuth authentication',
      'Virtual coin economy system',
      'Agency & talent management',
    ],
    color: '#8b5cf6',
    icon: '📺',
  },
  {
    id: 'national-product',
    title: 'National Product',
    tagline: 'Enterprise Production & Inventory Management',
    description:
      'An enterprise-grade production management system for manufacturing operations. Admins can manage stock levels, track orders, control inventory, and oversee the entire production pipeline from raw materials to finished goods.',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT', 'REST APIs', 'MVC Architecture'],
    github: 'https://github.com/SgCode301/np-api',
    live: null,
    highlights: [
      'Stock & inventory tracking',
      'Order lifecycle management',
      'Production pipeline control',
      'Role-based admin dashboard',
    ],
    color: '#3b82f6',
    icon: '🏭',
  },
  {
    id: 'auction',
    title: 'Auction',
    tagline: 'Multi-Vendor Live Auction System API',
    description:
      'A robust, scalable backend API for a multi-vendor live auction platform with real-time bidding via Socket.IO, Razorpay payments, 5 distinct user roles (Bidder, Vendor, Social Partner, Marketing Partner, Admin), commission structures, a social fund pool, image processing, and automated task scheduling.',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'Razorpay', 'JWT', 'bcrypt', 'Multer', 'Sharp', 'Nodemailer', 'node-cron'],
    github: null,
    live: null,
    highlights: [
      '5 user roles with distinct permissions',
      'Real-time live bidding via Socket.IO',
      'Razorpay payment integration',
      'Social fund pool & tax exemption system',
      'Image processing with Multer & Sharp',
      'Automated scheduling with node-cron',
    ],
    color: '#f59e0b',
    icon: '🔨',
    featured: true,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  }),
};

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">// my.projects</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Production-ready systems I built singlehandedly, from architecture to deployment.
          </p>
        </div>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              className="project-card glass-card"
              id={`project-${project.id}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={cardVariants}
              style={{ '--project-color': project.color }}
            >
              {/* Top accent line */}
              <div className="project-card__accent" />

              {/* Header */}
              <div className="project-card__header">
                <div className="project-card__icon">{project.icon}</div>
                <div className="project-card__links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-card__link-btn"
                      aria-label={`${project.title} GitHub`}
                      id={`project-${project.id}-github`}
                    >
                      <GitFork size={18} />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-card__link-btn"
                      aria-label={`${project.title} Live Demo`}
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__tagline">{project.tagline}</p>
              <p className="project-card__desc">{project.description}</p>

              {/* Highlights */}
              <div className="project-card__highlights">
                {project.highlights.map((h, j) => (
                  <div key={j} className="project-card__highlight">
                    <span className="project-card__highlight-dot" />
                    {h}
                  </div>
                ))}
              </div>

              {/* Tech stack */}
              <div className="project-card__tech">
                {project.tech.map((t) => (
                  <span key={t} className="tech-badge">{t}</span>
                ))}
              </div>

              {/* Footer */}
              <div className="project-card__footer">
                <span className="project-card__solo">
                  <Layers size={14} />
                  Solo Project
                </span>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card__cta"
                  >
                    View on GitHub <GitFork size={14} />
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
