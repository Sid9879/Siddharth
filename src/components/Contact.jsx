import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, GitFork, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import axios from 'axios';
import './Contact.css';

const contactInfo = [
  { icon: <Mail size={20} />, label: 'Email', value: 'singhsiddharth1438@gmail.com', href: 'mailto:singhsiddharth1438@gmail.com' },
  { icon: <Phone size={20} />, label: 'Phone', value: '+91 7394090894', href: 'tel:+917394090894' },
  { icon: <MapPin size={20} />, label: 'Location', value: 'Moti Nagar, Delhi, India', href: null },
  { icon: <LinkedinIcon size={20} />, label: 'LinkedIn', value: 'siddharth-singh-0b363b256', href: 'https://www.linkedin.com/in/siddharth-singh-0b363b256/' },
  { icon: <GithubIcon size={20} />, label: 'GitHub', value: 'github.com/Sid9879', href: 'https://github.com/Sid9879' },
];

const BACKEND_URL = 'http://localhost:5000/api/contact';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null); // 'loading' | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      await axios.post(BACKEND_URL, form);
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('error');
      setErrorMsg(err.response?.data?.error || 'Something went wrong. Please try again.');
    }
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">// contact.me</span>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Open to new opportunities. Let's build something great together!
          </p>
        </div>

        <div className="contact__grid">
          {/* Left: Contact info */}
          <motion.div
            className="contact__info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="contact__info-header glass-card">
              <div className="contact__availability">
                <span className="contact__avail-dot" />
                <span>Available for Full-Time Roles</span>
              </div>
              <h3 className="contact__info-title">Let's Connect</h3>
              <p className="contact__info-text">
                I'm actively seeking backend development opportunities. Whether you have a question,
                want to discuss a project, or just want to say hello — my inbox is always open.
              </p>
            </div>

            <div className="contact__cards">
              {contactInfo.map((item, i) => (
                <motion.div
                  key={item.label}
                  className="contact__card glass-card"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                >
                  <div className="contact__card-icon">{item.icon}</div>
                  <div className="contact__card-content">
                    <span className="contact__card-label">{item.label}</span>
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noopener noreferrer" className="contact__card-value">
                        {item.value}
                      </a>
                    ) : (
                      <span className="contact__card-value">{item.value}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.form
            className="contact__form glass-card"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            id="contact-form"
          >
            <h3 className="contact__form-title">Send a Message</h3>

            <div className="contact__field">
              <label className="contact__label" htmlFor="contact-name">Full Name</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                className="contact__input"
                placeholder="Your full name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact__field">
              <label className="contact__label" htmlFor="contact-email">Email Address</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                className="contact__input"
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact__field">
              <label className="contact__label" htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                className="contact__input contact__textarea"
                placeholder="Tell me about the opportunity or your project..."
                rows={6}
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            {/* Status messages */}
            {status === 'success' && (
              <div className="contact__status contact__status--success">
                <CheckCircle size={18} />
                Message sent successfully! I'll get back to you soon.
              </div>
            )}
            {status === 'error' && (
              <div className="contact__status contact__status--error">
                <AlertCircle size={18} />
                {errorMsg}
              </div>
            )}

            <button
              type="submit"
              className="btn-primary contact__submit"
              id="contact-submit-btn"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? (
                <>
                  <span className="contact__spinner" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={17} />
                  Send Message
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
