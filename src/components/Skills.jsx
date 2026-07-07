import { motion } from 'framer-motion';
import './Skills.css';

const skillGroups = [
  {
    category: 'Languages',
    emoji: '💻',
    skills: ['JavaScript (ES6+)'],
  },
  {
    category: 'Backend',
    emoji: '⚙️',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'Socket.IO', 'JWT Auth', 'OTP Auth', 'Middleware', 'MVC Architecture', 'Multer', 'Sharp', 'node-cron'],
  },
  {
    category: 'Database',
    emoji: '🗄️',
    skills: ['MongoDB', 'Mongoose', 'Aggregation Pipelines', 'Database Optimization'],
  },
  {
    category: 'API Integrations',
    emoji: '🔗',
    skills: ['GST APIs', 'E-Invoice API', 'E-Way Bill API', 'Google OAuth', 'ZEGOCLOUD', 'BunnyCDN', 'Razorpay', 'OTP Services', 'Third-Party REST APIs'],
  },
  {
    category: 'Tools & Platforms',
    emoji: '🛠️',
    skills: ['Git', 'GitHub', 'Postman', 'Render', 'BunnyCDN', 'VS Code', 'npm'],
  },
  {
    category: 'Core Concepts',
    emoji: '🧠',
    skills: ['Authentication & Authorization', 'Real-Time Communication', 'API Validation', 'Error Handling', 'Async Programming', 'Role-Based Access Control'],
  },
];

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">// my.skills</span>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            Technologies and tools I've used in production environments.
          </p>
        </div>

        <div className="skills__grid">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              className="skills__card glass-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="skills__card-header">
                <span className="skills__emoji">{group.emoji}</span>
                <h3 className="skills__category">{group.category}</h3>
              </div>
              <div className="skills__tags">
                {group.skills.map((skill, j) => (
                  <motion.span
                    key={skill}
                    className="skills__tag"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 + j * 0.05, duration: 0.35 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
