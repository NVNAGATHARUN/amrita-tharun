import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import '../styles/FAQ.css';

const faqs = [
    {
        question: "What is Quantum Lens?",
        answer: "Quantum Lens is an interactive, browser-based toolkit for quantum computing. It allows users to build, visualize, and simulate multi-qubit quantum circuits using a drag-and-drop interface."
    },
    {
        question: "Do I need to install anything to use the simulators?",
        answer: "No. Quantum Lens is entirely web-based. You can access the full simulator and all features directly in your browser without any installation."
    },
    {
        question: "Is Quantum Lens suitable for beginners?",
        answer: "Absolutely. Our Tutorials section provides step-by-step guides, and the intuitive visual interface (including the Bloch Sphere) is designed to make complex quantum concepts accessible to newcomers."
    },
    {
        question: "Which quantum gates are supported?",
        answer: "We support a wide range of standard quantum gates, including Pauli gates (X, Y, Z), Hadamard (H), Phase gates (S, T), Controlled gates (CNOT, CCX), and various rotation gates."
    },
    {
        question: "Can I simulate noise and decoherence?",
        answer: "Yes. The simulator supports realistic quantum noise models, including depolarizing noise, amplitude damping (T₁), phase damping (T₂), and readout errors."
    }
];

interface FAQItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
}

const FAQItem = ({ question, answer, isOpen, onClick }: FAQItemProps) => {
    return (
        <div className={`faq-item ${isOpen ? 'open' : ''}`}>
            <button className="faq-question" onClick={onClick}>
                <span>{question}</span>
                <ChevronDown size={20} className="faq-arrow" />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="faq-answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="faq-answer-content">{answer}</div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="section faq">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">Frequently Asked <span className="gradient-text">Questions</span></h2>
                </motion.div>

                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
