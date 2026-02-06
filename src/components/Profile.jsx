import React from 'react';
import { motion } from 'framer-motion';
import { Code, Terminal, Cpu } from 'lucide-react';

const Profile = () => {
    return (
        <section id="profile" className="section" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 style={{ color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1rem' }}>
                            Hola, soy Willard Aguilar
                        </h3>
                        <h1 style={{ fontSize: '3.5rem', lineHeight: 1.1, marginBottom: '1.5rem' }}>
                            Ingeniero en <br />
                            <span style={{ color: 'var(--color-accent)' }}>Informática</span>
                        </h1>
                        <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', marginBottom: '2rem', maxWidth: '600px', lineHeight: '1.6' }}>
                            Profesional con sólida trayectoria en el ciclo de vida de desarrollo de software y gestión de infraestructura TI.
                            Experto en administración de servidores críticos, bases de datos multimarca y seguridad informática.
                            Enfocado en la optimización de procesos mediante lógica analítica y soluciones escalables.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <a href="#contact" className="glass-panel" style={{
                                padding: '0.8rem 2rem',
                                borderRadius: '50px',
                                background: 'var(--color-primary)',
                                color: 'var(--color-bg)',
                                fontWeight: 'bold',
                                textDecoration: 'none'
                            }}>
                                Contáctame
                            </a>
                            <a href="#experience" className="glass-panel" style={{
                                padding: '0.8rem 2rem',
                                borderRadius: '50px',
                                textDecoration: 'none'
                            }}>
                                Experiencia
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{ position: 'relative' }}
                    >
                        <div className="glass-panel" style={{ aspectRatio: '1/1', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '2rem' }}>
                            <Code size={64} color="var(--color-primary)" />
                            <div style={{ display: 'flex', gap: '2rem' }}>
                                <Terminal size={48} color="var(--color-secondary)" />
                                <Cpu size={48} color="var(--color-accent)" />
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <p style={{ marginTop: '1rem', color: 'var(--color-text-main)', fontWeight: 'bold' }}>Desarrollador Full Stack</p>
                                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>& Especialista TI</p>
                            </div>
                        </div>
                        {/* Decorative background blur element */}
                        <div style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '120%',
                            height: '120%',
                            background: 'radial-gradient(circle, rgba(129,140,248,0.2) 0%, rgba(0,0,0,0) 70%)',
                            zIndex: -1
                        }} />
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Profile;
