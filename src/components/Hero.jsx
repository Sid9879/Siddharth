import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-scroll';
import { GitFork, Mail, ChevronDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import './Hero.css';

const stats = [
  { value: '2000+', label: 'REST APIs Built' },
  { value: '50+', label: 'Third-Party Integrations' },
  { value: '1+ Years', label: 'Professional Experience' },
  { value: '14+', label: 'Production Projects' },
];

export default function Hero() {
  return (
    <section className="hero" id="hero">
      {/* Particle grid */}
      <div className="hero__grid" aria-hidden="true" />

      <div className="container hero__inner">
        <motion.div
          className="hero__content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Status badge */}
          <motion.div
            className="hero__badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="hero__badge-dot" />
            Available for Opportunities
          </motion.div>

          {/* Name */}
          <motion.h1
            className="hero__name"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Hi, I'm{' '}
            <span className="gradient-text">Siddharth Singh</span>
          </motion.h1>

          {/* Typewriter role */}
          <motion.div
            className="hero__role"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span className="hero__role-prefix">&lt;</span>
            <Typewriter
              options={{
                strings: [
                  'Backend Developer',
                  'Node.js Engineer',
                  'API Architect',
                  'REST API Specialist',
                  'MongoDB Expert',
                ],
                autoStart: true,
                loop: true,
                delay: 60,
                deleteSpeed: 40,
              }}
            />
            <span className="hero__role-prefix">/&gt;</span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            className="hero__tagline"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Junior Backend Engineer with <strong>1+ years</strong> of professional experience building
            scalable REST APIs, real-time systems, and robust authentication with
            Node.js, Express.js, MongoDB & Socket.IO.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="hero__cta-group"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.6 }}
          >
            <Link to="projects" smooth duration={600} offset={-80}>
              <button className="btn-primary" id="hero-view-work-btn">
                View My Work
              </button>
            </Link>
            <Link to="contact" smooth duration={600} offset={-80}>
              <button className="btn-outline" id="hero-contact-btn">
                <Mail size={16} />
                Contact Me
              </button>
            </Link>
          </motion.div>

          {/* Social links */}
          <motion.div
            className="hero__socials"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <a
              href="https://github.com/Sid9879"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              id="hero-github-link"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/siddharth-singh-0b363b256/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              id="hero-linkedin-link"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={20} />
            </a>
            <a
              href="mailto:singhsiddharth1438@gmail.com"
              className="hero__social-link"
              id="hero-email-link"
              aria-label="Send Email"
            >
              <Mail size={20} />
            </a>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            className="hero__stats"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.6 }}
          >
            {stats.map((stat, i) => (
              <div key={i} className="hero__stat-item">
                <span className="hero__stat-item-value">{stat.value}</span>
                <span className="hero__stat-item-label">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Floating code card */}
        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="hero__code-card glass-card">
            <div className="hero__code-header">
              <span className="hero__code-dot hero__code-dot--red" />
              <span className="hero__code-dot hero__code-dot--yellow" />
              <span className="hero__code-dot hero__code-dot--green" />
              <span className="hero__code-filename">siddharth.js</span>
            </div>
            <pre className="hero__code-body">
              <code>
                <span className="code-keyword">const</span>{' '}
                <span className="code-var">developer</span>{' '}
                <span className="code-op">=</span> {'{'}{'\n'}
                {'  '}<span className="code-key">name</span>:{' '}
                <span className="code-str">"Siddharth Singh"</span>,{'\n'}
                {'  '}<span className="code-key">role</span>:{' '}
                <span className="code-str">"Backend Engineer"</span>,{'\n'}
                {'  '}<span className="code-key">exp</span>:{' '}
                <span className="code-str">"1 Year"</span>,{'\n'}
                {'  '}<span className="code-key">apis</span>:{' '}
                <span className="code-num">2000</span>,{'\n'}
                {'  '}<span className="code-key">stack</span>: [{'\n'}
                {'    '}<span className="code-str">"Node.js"</span>,{'\n'}
                {'    '}<span className="code-str">"Express"</span>,{'\n'}
                {'    '}<span className="code-str">"MongoDB"</span>,{'\n'}
                {'    '}<span className="code-str">"Socket.IO"</span>,{'\n'}
                {'  '}],{'\n'}
                {'  '}<span className="code-key">location</span>:{' '}
                <span className="code-str">"Delhi, India"</span>,{'\n'}
                {'  '}<span className="code-key">available</span>:{' '}
                <span className="code-bool">true</span>,{'\n'}
                {'}'};
              </code>
            </pre>
          </div>

          {/* Floating stat badges */}
          <motion.div
            className="hero__stat-badge hero__stat-badge--tl"
            animate={{ y: [-6, 6, -6] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
          >
            <span className="hero__stat-num">2000+</span>
            <span className="hero__stat-label">APIs Built</span>
          </motion.div>

          <motion.div
            className="hero__stat-badge hero__stat-badge--br"
            animate={{ y: [6, -6, 6] }}
            transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
          >
            <span className="hero__stat-num">50+</span>
            <span className="hero__stat-label">Integrations</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hero__scroll"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <Link to="about" smooth duration={600} offset={-80}>
          <ChevronDown size={24} className="hero__scroll-icon" />
        </Link>
      </motion.div>
    </section>
  );
}
