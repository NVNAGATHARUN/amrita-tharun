import { Link } from 'react-router-dom';
import { Atom, Mail, Github } from 'lucide-react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-brand">
                    <Link to="/" className="logo">
                        <Atom size={32} className="logo-icon" />
                        <span className="logo-text">QUANTUM <span className="gradient-text">LENS</span></span>
                    </Link>
                    <p className="brand-tagline">Glimpses into the Quantum Realm.</p>
                </div>

                <div className="footer-links">
                    <div className="link-group">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><a href="#toolkit">Simulator</a></li>
                            <li><Link to="/tutorial">Tutorials</Link></li>
                            <li><Link to="/docs">Docs</Link></li>
                        </ul>
                    </div>

                    <div className="link-group">
                        <h4>Contact</h4>
                        <ul>
                            <li><a href="mailto:tharun@example.com" className="contact-link"><Mail size={16} /> tharun@example.com</a></li>
                            <li><a href="https://github.com/Tharun/repo" target="_blank" rel="noopener noreferrer" className="contact-link"><Github size={16} /> GitHub Repository</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container bottom-content">
                    <p>© 2025 Quantum Lens. All Rights Reserved.</p>
                    <p>Made by Tharun | Special Thanks to Dr. M Jahir Pasha</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
