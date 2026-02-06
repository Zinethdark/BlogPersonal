import React from 'react';
import { motion } from 'framer-motion';
// Importación Estricta desde Assets
// NOTA: Si el archivo no existe en src/assets/, el build fallará.
import profileImg from '../assets/profile.jpg';

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

                    {/* Profile Image Section */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}
                    >
                        <div className="glass-panel" style={{
                            padding: '1rem',
                            borderRadius: '2rem',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            background: 'rgba(255, 255, 255, 0.03)'
                        }}>
                            <div style={{
                                width: '350px',
                                height: '350px',
                                borderRadius: '1.5rem',
                                overflow: 'hidden',
                                position: 'relative',
                                boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                                background: '#121212'
                            }}>
                                <img
                                    src={profileImg}
                                    alt="Willard Aguilar"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        display: 'block'
                                    }}
                                />
                            </div>
                        </div>

                        <div style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '120%',
                            height: '120%',
                            background: 'radial-gradient(circle, rgba(245, 183, 39, 0.2) 0%, rgba(0,0,0,0) 70%)',
                            zIndex: -1
                        }} />
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Profile;
