import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import '../styles/Quotes.css';

const quotes = [
    {
        text: "No phenomenon is a physical phenomenon until it is an observed phenomenon.",
        author: "John Archibald Wheeler"
    },
    {
        text: "The task is not so much to see what no one has yet seen; but to think what no one has yet thought about that which everybody sees.",
        author: "Erwin Schrödinger"
    },
    {
        text: "The most beautiful thing we can experience is the mysterious. It is the source of all true art and science.",
        author: "Albert Einstein"
    }
];

const Quotes = () => {
    return (
        <section className="section quotes">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">What the Quantum <span className="gradient-text">Community</span> Says</h2>
                </motion.div>

                <div className="quotes-container">
                    {quotes.map((quote, index) => (
                        <motion.div
                            key={index}
                            className="quote-card"
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.8 }}
                        >
                            <Quote className="quote-icon" size={40} />
                            <p className="quote-text">"{quote.text}"</p>
                            <h4 className="quote-author">{quote.author}</h4>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Quotes;
