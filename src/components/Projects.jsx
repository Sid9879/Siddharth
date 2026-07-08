import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GitFork, ExternalLink, Layers, ChevronDown } from 'lucide-react';
import './Projects.css';

const projects = [
  {
    id: 'billbnao',
    title: 'BillBnao',
    tagline: 'Complete GST Compliance Platform',
    description:
      'A full-featured GST compliance web application enabling businesses to file GST returns, generate E-Invoices, and create E-Way Bills. Features AI-powered purchase order scanning — users can upload a photo of a purchase order and Google Gemini API automatically extracts all relevant details. Built end-to-end as the sole backend developer, integrating government GST APIs and OTP-based authentication.',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'Gemini API', 'GST API', 'E-Invoice API', 'E-Way Bill API', 'OTP Auth', 'JWT'],
    github: 'https://github.com/Sid9879/BillBanao',
    live: [{ label: 'Admin Dashboard', url: 'https://bill-banao-admin.vercel.app/auth' }],
    highlights: [
      'AI-powered purchase order image extraction (Gemini API)',
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
      'A TikTok-inspired live streaming platform with 6 distinct roles: User, Host, CoinSeller, BusinessDevelopment, Agency, and Admin. Admin manages the entire platform; CoinSellers sell coins to users and withdraw host diamonds; Agencies add hosts and handle monthly withdrawals; BusinessDevelopment manages agencies. Features real-time live audio/video streaming via ZEGOCLOUD, image delivery via BunnyCDN, virtual coin economy, and Google OAuth.',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'ZEGOCLOUD', 'BunnyCDN', 'Google OAuth', 'Socket.IO', 'JWT', 'Mongoose'],
    github: 'https://github.com/SgCode301/ulive',
    live: [
      { label: 'Admin Dashboard', url: 'https://ulive-admin-dashboard.vercel.app/auth/signin' },
      { label: 'Agency Dashboard', url: 'https://ulive-coin-agency-dashboard.vercel.app/auth/signin' },
      { label: 'Business Dev Dashboard', url: 'https://ulive-business-developer-dashboard.vercel.app/auth/sign-in' },
    ],
    highlights: [
      '6 roles: User, Host, CoinSeller, BusinessDev, Agency, Admin',
      'Live video and audio streaming via ZEGOCLOUD',
      'Image delivery via BunnyCDN',
      'Google OAuth authentication',
      'Virtual coin economy & diamond withdrawal',
      'Agency & host management hierarchy',
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
    live: [{ label: 'Live Demo', url: 'https://national-product-dashboard.vercel.app/auth/signin' }],
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
    tagline: 'Multi-Vendor Live Auction System',
    description:
      'A robust, scalable full-stack auction platform with real-time bidding via Socket.IO, Razorpay payments, 5 distinct user roles (Bidder, Vendor, Social Partner, Marketing Partner, Admin), commission structures, a social fund pool, image processing, and automated task scheduling.',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'Razorpay', 'JWT', 'bcrypt', 'Multer', 'Sharp', 'Nodemailer', 'node-cron'],
    github: 'https://github.com/SgCode301/auction-api',
    live: [{ label: 'Live Demo', url: 'https://auction-management-system-dev.vercel.app/auth/signin' }],
    highlights: [
      '5 user roles with distinct permissions',
      'Real-time live bidding via Socket.IO',
      'Razorpay payment integration',
      'Social fund pool & tax exemption system',
      'Image processing with Multer & Sharp',
      'Automated scheduling with node-cron',
    ],
    color: '#f59e0b',
    icon: '🏷️',
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

function LiveLinksDropdown({ links, projectId, projectColor }) {
  const [open, setOpen] = useState(false);
  if (!links || links.length === 0) return null;

  if (links.length === 1) {
    return (
      <a
        href={links[0].url}
        target="_blank"
        rel="noopener noreferrer"
        className="project-card__link-btn"
        aria-label="Live Demo"
        id={`project-${projectId}-live`}
      >
        <ExternalLink size={18} />
      </a>
    );
  }

  return (
    <div className="live-dropdown" onMouseLeave={() => setOpen(false)}>
      <button
        className="project-card__link-btn live-dropdown__trigger"
        onClick={() => setOpen((v) => !v)}
        aria-label="Live Demos"
        id={`project-${projectId}-live`}
      >
        <ExternalLink size={18} />
        <ChevronDown size={12} style={{ marginLeft: 2, transition: 'transform 0.2s', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            className="live-dropdown__menu"
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.18 }}
          >
            {links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="live-dropdown__item"
              >
                <ExternalLink size={12} />
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function LiveCTALinks({ links }) {
  if (!links || links.length === 0) return null;
  return (
    <>
      {links.map((link) => (
        <a
          key={link.url}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card__cta project-card__cta--live"
        >
          {link.label} <ExternalLink size={14} />
        </a>
      ))}
    </>
  );
}

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
                  <LiveLinksDropdown
                    links={project.live}
                    projectId={project.id}
                    projectColor={project.color}
                  />
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
                <div className="project-card__footer-links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-card__cta"
                    >
                      GitHub <GitFork size={14} />
                    </a>
                  )}
                  <LiveCTALinks links={project.live} />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
