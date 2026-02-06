import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    { category: "Lenguajes", items: ["HTML5", "CSS3", "JavaScript", "Java (EE)", "PHP"] },
    { category: "Infraestructura & Servidores", items: ["Oracle App Server", "OC4J", "Windows Server", "Ubuntu/Debian", "Hyper-V", "VirtualBox"] },
    { category: "CMS & Frameworks", items: ["React.js", "Node.js", "Spring Boot", "Drupal 9+", "WordPress", "Bootstrap"] },
    { category: "Herramientas & Métodos", items: ["Git", "UML", "ITIL V4", "MS Project", "Visio", "Prompt Engineering (IA)"] },
    { category: "Interpersonal & Idiomas", items: ["Inglés Técnico", "Liderazgo", "Resolución de Problemas", "Análisis Lógico"] }
];

const Skills = () => {
    return (
        <section id="skills" className="section">
            <div className="container">
                <h2 className="section-title">Competencias Técnicas</h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {skills.map((skillGroup, index) => (
                        <motion.div
                            key={index}
                            className="glass-panel"
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ delay: index * 0.1, duration: 0.5, type: "spring" }}
                            viewport={{ once: false, margin: "-50px" }}
                            style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
                        >
                            <h3 style={{ color: 'var(--color-secondary)' }}>{skillGroup.category}</h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                {skillGroup.items.map((item, i) => (
                                    <span key={i} style={{
                                        background: 'rgba(255,255,255,0.05)',
                                        padding: '0.4rem 0.8rem',
                                        borderRadius: '4px',
                                        fontSize: '0.9rem',
                                        border: '1px solid rgba(255,255,255,0.1)'
                                    }}>
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
