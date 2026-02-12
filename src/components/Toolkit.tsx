import { motion } from 'framer-motion';
import { Layers, Code } from 'lucide-react';
import '../styles/Toolkit.css';

const toolkitItems = [
    {
        title: 'Quantum Fragility Sim',
        description: 'Visualize how noise and decoherence destroy quantum states over time. Our [ED-TECH 7] custom engine.',
        icon: <Layers size={32} />,
        link: 'https://amrita-tharunnetlifyapp-7qn7bt5dappzdoovuqzwftl.streamlit.app/',
        gradient: 'linear-gradient(135deg, #f43f5e 0%, #fb7185 100%)'
    },
    {
        title: 'Custom Gate Builder',
        description: 'Build and simulate quantum circuits visually using our proprietary Qiskit-powered engine.',
        icon: <Layers size={32} />,
        link: 'https://amrita-tharun-egbfxmwjnbindywhwsseky.streamlit.app/',
        gradient: 'linear-gradient(135deg, #6366f1 0%, #818cf8 100%)'
    },
    {
        title: 'Code Visualizer',
        description: 'Convert QASM or Qiskit code into visual circuits and state portraits.',
        icon: <Code size={32} />,
        link: 'https://amrita-tharun-6vhahrguz6wsdenidggcam.streamlit.app/',
        gradient: 'linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)'
    }
];

const Toolkit = () => {
    return (
        <section id="toolkit" className="section toolkit">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">The Celestial <span className="gradient-text">Toolkit</span></h2>
                    <p className="section-subtitle">Powerful, custom-built tools by <strong>Tharun</strong> to explore the quantum landscape</p>
                </motion.div>

                <div className="toolkit-grid">
                    {toolkitItems.map((item, index) => (
                        <motion.a
                            key={index}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="toolkit-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="card-icon" style={{ background: item.gradient }}>
                                {item.icon}
                            </div>
                            <h3 className="card-title">{item.title}</h3>
                            <p className="card-description">{item.description}</p>
                            <div className="card-footer">
                                <span className="launch-text">Launch Live Simulator</span>
                                <div className="arrow">→</div>
                            </div>
                        </motion.a>
                    ))}
                </div>

                <div className="setup-instructions" style={{ marginTop: '4rem', padding: '2rem', background: 'rgba(255,255,255,0.02)', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
                    <h4 style={{ marginBottom: '1rem', color: 'var(--accent-primary)' }}>🚀 How to run your custom simulators:</h4>
                    <code style={{ display: 'block', background: '#000', padding: '1rem', borderRadius: '8px', fontSize: '0.9rem', color: '#888' }}>
                        # 1. Install dependencies<br />
                        pip install -r simulators/requirements.txt<br /><br />
                        # 2. Run Gate Builder (Simulator 1)<br />
                        python -m streamlit run simulators/gate_builder.py --server.port 8501<br /><br />
                        # 3. Run Visualizer (Simulator 2)<br />
                        python -m streamlit run simulators/visualizer.py --server.port 8502<br /><br />
                        # 4. Run Fragility Sim (Simulator 3)<br />
                        python -m streamlit run simulators/fragility_sim.py --server.port 8503
                    </code>
                </div>
            </div>
        </section>
    );
};

export default Toolkit;
