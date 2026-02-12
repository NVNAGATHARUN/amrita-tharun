import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Atom } from 'lucide-react';
import '../styles/Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Simulator', path: '/#toolkit' },
        { name: 'Tutorials', path: '/tutorial' },
        { name: 'Docs', path: '/docs' },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-content">
                <Link to="/" className="logo">
                    <Atom size={32} className="logo-icon" />
                    <span className="logo-text">QUANTUM <span className="gradient-text">LENS</span></span>
                </Link>

                {/* Desktop Nav */}
                <ul className="nav-menu desktop">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            {link.path.startsWith('/#') ? (
                                <a href={link.path.substring(1)} className="nav-link">{link.name}</a>
                            ) : (
                                <Link to={link.path} className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}>
                                    {link.name}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>

                {/* Mobile Nav Toggle */}
                <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Mobile Menu */}
                <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
                    <ul>
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                {link.path.startsWith('/#') ? (
                                    <a
                                        href={link.path.substring(1)}
                                        className="nav-link"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </a>
                                ) : (
                                    <Link
                                        to={link.path}
                                        className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
