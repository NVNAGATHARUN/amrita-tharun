import { motion } from 'framer-motion';
import '../styles/Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero-container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h1
                        className="hero-title"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        QUANTUM <span className="gradient-text">LENS</span>
                    </motion.h1>
                    <motion.p
                        className="hero-subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        An interactive toolkit for building, visualizing, and analyzing quantum circuits.
                        See the unseen and simulate the sublime directly in your browser.
                    </motion.p>
                    <motion.div
                        className="hero-btns"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        <a href="#toolkit" className="glow-button">Explore Simulators</a>
                        <a href="/docs" className="secondary-button">Read The Docs</a>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="hero-visual"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 1.2 }}
                >
                    <div className="sphere-glow"></div>
                    <div className="quantum-orb"></div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
