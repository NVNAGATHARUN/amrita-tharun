import { motion } from 'framer-motion';

const Tutorials = () => {
    return (
        <div className="container" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <h1 className="gradient-text" style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>Tutorials</h1>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '800px' }}>
                    Welcome to the Quantum Lens Tutorials. Here you will find step-by-step guides to understanding
                    quantum gates, building circuits, and running simulations.
                </p>

                <div style={{ marginTop: '4rem', padding: '3rem', background: 'var(--bg-secondary)', borderRadius: '24px', border: '1px solid var(--border-color)' }}>
                    <h3 style={{ marginBottom: '1.5rem' }}>Coming Soon...</h3>
                    <p style={{ color: 'var(--text-muted)' }}>We are currently crafting high-quality interactive tutorials for you. Stay tuned!</p>
                </div>
            </motion.div>
        </div>
    );
};

export default Tutorials;
