import { motion } from 'framer-motion';

const Docs = () => {
    return (
        <div className="container" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <h1 className="gradient-text" style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>Documentation</h1>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '800px' }}>
                    Explore the technical documentation for the Quantum Lens toolkit and its underlying simulators.
                </p>

                <div style={{ marginTop: '4rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    <div style={{ padding: '2rem', background: 'var(--bg-secondary)', borderRadius: '16px', border: '1px solid var(--accent-primary)', gridColumn: '1 / -1' }}>
                        <h3 style={{ marginBottom: '1rem', color: 'var(--accent-primary)' }}>💎 Why are Quantum Systems so Fragile?</h3>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                            Classical systems (like your laptop) are stable because they only deal with bits that are definitely 0 or 1.
                            A bit is like a light switch—it's either up or down.
                        </p>
                        <p style={{ color: 'var(--text-secondary)' }}>
                            A **Qubit**, however, is like a spinning coin. It can be both heads and tails at the same time.
                            Even the tiny heat from the room, radiation from space, or nearby magnetic fields act like a "puff of wind" that stops the coin or knocks it over.
                            This is **Decoherence**, and it's why we have to keep quantum computers colder than deep space!
                        </p>
                    </div>

                    <div style={{ padding: '2rem', background: 'var(--card-bg)', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
                        <h4 style={{ marginBottom: '1rem' }}>🔗 Entanglement Fragility</h4>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                            While single qubits are delicate, **Entangled qubits** are doubly vulnerable.
                            The more qubits you add, the harder it is to keep them all "quiet".
                            Use our simulator to see why scaling a quantum computer is a race against time.
                        </p>
                    </div>

                    <div style={{ padding: '2rem', background: 'var(--card-bg)', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
                        <h4 style={{ marginBottom: '1rem' }}>🧱 Classical Robustness</h4>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                            Classical computers use billions of electrons to store a bit, creating a shield of protection.
                            Quantum computers use single photons or atoms, meaning there is no shield.
                            Explore this contrast in our specialized comparison tool.
                        </p>
                    </div>

                    {['Getting Started', 'Quantum Gates', 'Noise Models', 'API Reference'].map((item) => (
                        <div key={item} style={{ padding: '2rem', background: 'var(--card-bg)', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
                            <h4 style={{ marginBottom: '1rem' }}>{item}</h4>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Comprehensive documentation for {item.toLowerCase()} will be available shortly.</p>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default Docs;
