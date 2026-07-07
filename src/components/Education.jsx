import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, Star, ExternalLink } from 'lucide-react';
import './Education.css';

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">// education</span>
          <h2 className="section-title">Education & Certifications</h2>
          <p className="section-subtitle">
            Academic foundation that complements my hands-on experience.
          </p>
        </div>

        <div className="edu__grid">
          {/* Degree Card */}
          <motion.div
            className="edu__card glass-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="edu__card-top">
              <div className="edu__icon-wrapper">
                <GraduationCap size={28} className="edu__icon" />
              </div>
              <div className="edu__badge-degree">B.Tech</div>
            </div>

            <h3 className="edu__degree">Bachelor of Technology</h3>
            <p className="edu__institution gradient-text">RR Lucknow — AKTU University</p>

            <div className="edu__meta">
              <div className="edu__meta-item">
                <Calendar size={14} />
                <span>Graduated 2025</span>
              </div>
              <div className="edu__meta-item">
                <Star size={14} />
                <span>CGPA: 7.0 / 10</span>
              </div>
            </div>

            <div className="edu__desc">
              Completed a four-year engineering program with a focus on
              Computer Science fundamentals including Data Structures, Algorithms,
              Database Management, Computer Networks, and Software Engineering.
            </div>
          </motion.div>

          {/* Certification Card */}
          <motion.div
            className="edu__card glass-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            <div className="edu__card-top">
              <div className="edu__icon-wrapper edu__icon-wrapper--purple">
                <Award size={28} className="edu__icon edu__icon--purple" />
              </div>
              <div className="edu__badge-degree edu__badge-degree--purple">Certification</div>
            </div>

            <h3 className="edu__degree">MERN Stack Internship</h3>
            <p className="edu__institution" style={{ color: '#a78bfa' }}>Industry Certification</p>

            <div className="edu__meta">
              <div className="edu__meta-item">
                <Award size={14} />
                <span>Full-Stack Web Development</span>
              </div>
            </div>

            <div className="edu__desc">
              Completed a comprehensive MERN Stack (MongoDB, Express, React, Node.js)
              internship covering full-stack development, REST API design,
              database management, and deployment strategies.
            </div>

            <div className="edu__cert-skills">
              {['MongoDB', 'Express.js', 'React.js', 'Node.js', 'REST APIs', 'Git'].map((s) => (
                <span key={s} className="tech-badge">{s}</span>
              ))}
            </div>

            {/* View Certificate Button */}
            <a
              href="https://drive.google.com/file/d/1u1pz171-hM8rmrrE1pJUTbm-LfZMY6za/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="edu__cert-link"
              id="edu-cert-view-btn"
            >
              <Award size={14} />
              View Certificate
              <ExternalLink size={13} />
            </a>
          </motion.div>

          {/* Languages Card */}
          <motion.div
            className="edu__card glass-card edu__langs-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h3 className="edu__langs-title">Languages</h3>
            <div className="edu__langs">
              <div className="edu__lang">
                <div className="edu__lang-info">
                  <span className="edu__lang-name">English</span>
                  <span className="edu__lang-level">Professional</span>
                </div>
                <div className="edu__lang-bar">
                  <motion.div
                    className="edu__lang-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: '80%' }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    style={{ '--fill-color': '#22d3ee' }}
                  />
                </div>
              </div>
              <div className="edu__lang">
                <div className="edu__lang-info">
                  <span className="edu__lang-name">Hindi</span>
                  <span className="edu__lang-level">Native</span>
                </div>
                <div className="edu__lang-bar">
                  <motion.div
                    className="edu__lang-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.65, duration: 0.8 }}
                    style={{ '--fill-color': '#8b5cf6' }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
