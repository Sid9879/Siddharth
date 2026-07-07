import { motion } from 'framer-motion';
import { User, MapPin, Briefcase, GraduationCap } from 'lucide-react';
import './About.css';

const stats = [
  { icon: <Briefcase size={22} />, value: '2000+', label: 'REST APIs Developed' },
  { icon: <User size={22} />, value: '50+', label: 'Third-Party Integrations' },
  { icon: <GraduationCap size={22} />, value: '1 Year', label: 'Work Experience' },
  { icon: <MapPin size={22} />, value: 'Delhi', label: 'India' },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  }),
};

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">// about.me</span>
          <h2 className="section-title">Who I Am</h2>
          <p className="section-subtitle">
            A passionate backend developer crafting robust, scalable systems that power real-world products.
          </p>
        </div>

        <div className="about__grid">
          {/* Left: text */}
          <motion.div
            className="about__text glass-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeInUp}
          >
            <div className="about__avatar-wrapper">
              <div className="about__avatar">
                <span className="about__avatar-initials">SS</span>
              </div>
              <div className="about__avatar-glow" />
            </div>

            <h3 className="about__text-title">Siddharth Singh</h3>
            <p className="about__text-role gradient-text">Jr. Backend Engineer</p>

            <p className="about__bio">
              I'm a backend developer with <strong>1 year of professional experience</strong> at
              SGWeb App Technologies, where I singlehandedly built and maintained entire backend
              systems for multiple production-grade client projects.
            </p>

            <p className="about__bio">
              My expertise lies in designing <strong>scalable REST APIs</strong>, building
              real-time applications with <strong>Socket.IO</strong>, integrating complex
              third-party services, and crafting secure authentication systems. I thrive on
              solving hard problems and building things that work flawlessly at scale.
            </p>

            <div className="about__info-chips">
              <div className="about__chip">
                <MapPin size={14} />
                Moti Nagar, Delhi
              </div>
              <div className="about__chip">
                <Briefcase size={14} />
                SGWeb App Technologies
              </div>
              <div className="about__chip">
                <GraduationCap size={14} />
                B.Tech — AKTU (2025)
              </div>
            </div>
          </motion.div>

          {/* Right: stats */}
          <div className="about__stats">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                className="about__stat glass-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i + 1}
                variants={fadeInUp}
              >
                <div className="about__stat-icon">{stat.icon}</div>
                <div className="about__stat-value gradient-text">{stat.value}</div>
                <div className="about__stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
