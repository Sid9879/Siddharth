import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Code2, Download } from 'lucide-react';
import './Navbar.css';

const navLinks = [
  { label: 'About', to: 'about' },
  { label: 'Experience', to: 'experience' },
  { label: 'Projects', to: 'projects' },
  { label: 'Skills', to: 'skills' },
  { label: 'Education', to: 'education' },
  { label: 'Contact', to: 'contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        {/* Logo */}
        <Link to="hero" smooth duration={600} className="navbar__logo" id="nav-logo">
          <Code2 size={20} className="navbar__logo-icon" />
          <span>Siddharth<span className="navbar__logo-dot">.</span></span>
        </Link>

        {/* Desktop Links */}
        <ul className="navbar__links" id="nav-desktop-links">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth
                duration={600}
                offset={-80}
                spy
                activeClass="navbar__link--active"
                className="navbar__link"
                id={`nav-link-${link.to}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="/Siddharth Singh — Backend Engineer Resume.pdf"
          download
          className="navbar__cta btn-outline"
          id="nav-resume-btn"
          style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
        >
          <Download size={15} />
          Resume
        </a>
        <a
          href="mailto:singhsiddharth1438@gmail.com"
          className="navbar__cta btn-primary"
          id="nav-hire-btn"
        >
          Hire Me
        </a>

        {/* Hamburger */}
        <button
          className="navbar__hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          id="nav-hamburger"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`} id="nav-mobile-menu">
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            smooth
            duration={600}
            offset={-80}
            className="navbar__mobile-link"
            onClick={() => setMenuOpen(false)}
            id={`nav-mobile-${link.to}`}
          >
            {link.label}
          </Link>
        ))}
        <a
          href="/Siddharth Singh — Backend Engineer Resume.pdf"
          download
          className="btn-outline"
          style={{ marginTop: '8px', justifyContent: 'center', display: 'flex', alignItems: 'center', gap: '6px' }}
          id="nav-mobile-resume-btn"
        >
          <Download size={15} />
          Download Resume
        </a>
        <a
          href="mailto:singhsiddharth1438@gmail.com"
          className="btn-primary"
          style={{ marginTop: '8px', justifyContent: 'center' }}
        >
          Hire Me
        </a>
      </div>
    </nav>
  );
}
