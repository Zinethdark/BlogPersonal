import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
    return (
        <section id="education" className="section">
            <div className="container">
                <h2 className="section-title">Formación Académica</h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>

                    <motion.div
                        className="glass-panel"
                        initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.5 }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                            <GraduationCap size={32} color="var(--color-accent)" />
                            <h3 style={{ margin: 0 }}>Estudios Superiores</h3>
                        </div>

                        <div style={{ marginBottom: '1.5rem' }}>
                            <h4 style={{ color: 'var(--color-text-main)' }}>Ingeniería en Informática</h4>
                            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>UNETI | 2022 – 2025</p>
                        </div>

                        <div>
                            <h4 style={{ color: 'var(--color-text-main)' }}>TSU en Informática</h4>
                            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>IUTIRLA | 2012 – 2015</p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="glass-panel"
                        initial={{ opacity: 0, scale: 0.8, rotate: 2 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        viewport={{ once: false }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                            <Award size={32} color="var(--color-secondary)" />
                            <h3 style={{ margin: 0 }}>Cursos & Certificaciones</h3>
                        </div>

                        <div style={{ marginBottom: '1.5rem' }}>
                            <h4 style={{ color: 'var(--color-text-main)' }}>Curso de Programación Java</h4>
                            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>CENEAC | 2012</p>
                        </div>

                        <div style={{ opacity: 0.7 }}>
                            <h4 style={{ color: 'var(--color-text-main)' }}>Autodidacta / En Progreso</h4>
                            <ul style={{ paddingLeft: '1.2rem', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                                <li>React.js Expert</li>
                                <li>Node.js Services</li>
                                <li>Cloud Infrastructure</li>
                            </ul>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Education;
