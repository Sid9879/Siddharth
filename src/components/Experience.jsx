import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import './Experience.css';

const responsibilities = [
  'Designed, developed, and maintained scalable backend applications using Node.js, Express.js, MongoDB, and Socket.IO.',
  'Developed and maintained 2,000+ REST APIs across multiple production projects, owning the entire backend lifecycle.',
  'Integrated 50+ third-party APIs including GST, E-Invoice, E-Way Bill, Google OAuth, OTP services, ZEGOCLOUD, and BunnyCDN.',
  'Built secure authentication and authorization systems using JWT tokens, OTP verification, and role-based access control.',
  'Designed efficient MongoDB schemas, aggregation pipelines, and optimized database queries for high performance.',
  'Developed real-time communication features using Socket.IO for live updates and messaging systems.',
  'Implemented business logic, middleware, API validations, and comprehensive error handling for production apps.',
  'Resolved production issues, optimized API response times, and improved overall backend reliability.',
  'Owned backend development for multiple client projects from requirement analysis through deployment and maintenance.',
];

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">// work.experience</span>
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">
            Where I've made an impact in production-grade systems.
          </p>
        </div>

        <div className="exp__timeline">
          {/* Timeline dot */}
          <div className="exp__line" />

          <motion.div
            className="exp__card glass-card"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* Header */}
            <div className="exp__header">
              <div className="exp__logo-wrapper">
                <span className="exp__logo-initials">SG</span>
              </div>
              <div className="exp__meta">
                <h3 className="exp__role">Jr. Backend Engineer</h3>
                <div className="exp__company">SGWeb App Technologies</div>
                <div className="exp__details">
                  <span className="exp__detail-chip">
                    <Calendar size={13} />
                    1 Year
                  </span>
                  <span className="exp__detail-chip">
                    <MapPin size={13} />
                    Delhi, India
                  </span>
                  <span className="exp__detail-chip exp__detail-chip--type">
                    Full-Time
                  </span>
                </div>
              </div>
            </div>

            <p className="exp__summary">
              As the <strong>sole backend developer</strong>, I took complete ownership of the backend
              for multiple client products — from architecture and development to deployment and maintenance.
              Built and delivered <strong>2000+ APIs</strong> across real-world production systems.
            </p>

            {/* Responsibilities */}
            <div className="exp__responsibilities">
              <h4 className="exp__resp-title">Key Responsibilities & Achievements</h4>
              <ul className="exp__resp-list">
                {responsibilities.map((item, i) => (
                  <motion.li
                    key={i}
                    className="exp__resp-item"
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06, duration: 0.4 }}
                  >
                    <CheckCircle2 size={16} className="exp__resp-icon" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Tech badges */}
            <div className="exp__tech">
              {['Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'JWT', 'REST APIs', 'Mongoose', 'ZEGOCLOUD', 'BunnyCDN', 'Razorpay', 'Google OAuth', 'Postman', 'Git'].map((t) => (
                <span key={t} className="tech-badge">{t}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
