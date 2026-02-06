import React from 'react';
import { motion } from 'framer-motion';
import { Workflow, Network } from 'lucide-react';

// Importación Estricta desde Assets
import diagram1 from '../assets/diagram1.png';
import diagram2 from '../assets/diagram2.png';

const Methodology = () => {
    return (
        <section id="methodology" className="section">
            <div className="container">
                <h2 className="section-title">Metodología & Flujo de Trabajo</h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>

                    <motion.div
                        className="glass-panel"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6 }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                            <Network size={32} color="var(--color-primary)" />
                            <h3 style={{ margin: 0 }}>Ecosistema de Soluciones TI</h3>
                        </div>
                        <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
                            Arquitectura robusta que integra análisis, infraestructura virtualizada y despliegue seguro.
                        </p>
                        <div style={{
                            borderRadius: '1rem',
                            overflow: 'hidden',
                            border: '2px solid var(--glass-border)',
                            background: 'rgba(255,255,255,0.05)'
                        }}>
                            <img
                                src={diagram1}
                                alt="Diagrama Ecosistema TI"
                                style={{ width: '100%', height: 'auto', display: 'block' }}
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        className="glass-panel"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                            <Workflow size={32} color="var(--color-secondary)" />
                            <h3 style={{ margin: 0 }}>Flujo Potenciado por IA</h3>
                        </div>
                        <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
                            Optimización de procesos mediante ingeniería de prompts y documentación automatizada.
                        </p>
                        <div style={{
                            borderRadius: '1rem',
                            overflow: 'hidden',
                            border: '2px solid var(--glass-border)',
                            background: 'rgba(255,255,255,0.05)'
                        }}>
                            <img
                                src={diagram2}
                                alt="Diagrama Flujo IA"
                                style={{ width: '100%', height: 'auto', display: 'block' }}
                            />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Methodology;
