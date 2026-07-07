import { GitFork, Mail, Phone, Code2, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { Link } from 'react-scroll';
import './Footer.css';

const navLinks = [
  { label: 'About', to: 'about' },
  { label: 'Experience', to: 'experience' },
  { label: 'Projects', to: 'projects' },
  { label: 'Skills', to: 'skills' },
  { label: 'Education', to: 'education' },
  { label: 'Contact', to: 'contact' },
];

const socials = [
  { icon: <GithubIcon size={18} />, href: 'https://github.com/Sid9879', label: 'GitHub' },
  { icon: <LinkedinIcon size={18} />, href: 'https://www.linkedin.com/in/siddharth-singh-0b363b256/', label: 'LinkedIn' },
  { icon: <Mail size={18} />, href: 'mailto:singhsiddharth1438@gmail.com', label: 'Email' },
  { icon: <Phone size={18} />, href: 'tel:+917394090894', label: 'Phone' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      <div className="footer__top-line" />
      <div className="container footer__inner">
        {/* Brand */}
        <div className="footer__brand">
          <div className="footer__logo">
            <Code2 size={20} className="footer__logo-icon" />
            <span>Siddharth<span className="footer__logo-dot">.</span></span>
          </div>
          <p className="footer__brand-desc">
            Jr. Backend Engineer passionate about building scalable,
            secure, and high-performance systems with Node.js, MongoDB, and Express.
          </p>
          <div className="footer__socials">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social"
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div className="footer__links">
          <h4 className="footer__links-title">Quick Links</h4>
          <ul className="footer__links-list">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  smooth
                  duration={600}
                  offset={-80}
                  className="footer__link"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="footer__contact">
          <h4 className="footer__links-title">Contact</h4>
          <div className="footer__contact-list">
            <a href="mailto:singhsiddharth1438@gmail.com" className="footer__contact-item">
              <Mail size={14} /> singhsiddharth1438@gmail.com
            </a>
            <a href="tel:+917394090894" className="footer__contact-item">
              <Phone size={14} /> +91 7394090894
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span className="footer__copy">
            © {year} Siddharth Singh. All rights reserved.
          </span>
          <span className="footer__made">
            Made with <Heart size={13} className="footer__heart" /> in Delhi, India
          </span>
        </div>
      </div>
    </footer>
  );
}
