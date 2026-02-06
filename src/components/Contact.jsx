import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="section">
            <div className="container">
                <h2 className="section-title">Contáctame</h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>

                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.7, type: "spring" }}
                        style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
                    >
                        <h3 style={{ fontSize: '2rem' }}>Información de Contacto</h3>
                        <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem' }}>
                            Disponible para proyectos y oportunidades laborales.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div className="glass-panel" style={{ padding: '0.8rem', borderRadius: '50%' }}> <Mail color="var(--color-primary)" /> </div>
                                <span>Willard.aguilar@gmail.com</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div className="glass-panel" style={{ padding: '0.8rem', borderRadius: '50%' }}> <Phone color="var(--color-primary)" /> </div>
                                <a href="https://wa.link/bpjuid" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>+584126003425</a>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div className="glass-panel" style={{ padding: '0.8rem', borderRadius: '50%' }}> <MapPin color="var(--color-primary)" /> </div>
                                <a href="https://maps.app.goo.gl/dzJGpDGMmnb6Nbpu5" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>Caracas, Venezuela (Av. San Martin)</a>


                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div className="glass-panel" style={{ padding: '0.8rem', borderRadius: '50%' }}> <Linkedin color="var(--color-primary)" /> </div>
                                <a href="https://linkedin.com/in/willard-aguilar-b51100207" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>linkedin.com/in/willard-aguilar-b51100207</a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Formulario Visual */}
                    <motion.form
                        className="glass-panel"
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.7, delay: 0.2, type: "spring" }}
                        style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Nombre</label>
                            <input type="text" style={{ padding: '10px', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--glass-border)', color: 'white', borderRadius: '5px' }} placeholder="Tu nombre" />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Email</label>
                            <input type="email" style={{ padding: '10px', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--glass-border)', color: 'white', borderRadius: '5px' }} placeholder="tu@email.com" />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Mensaje</label>
                            <textarea rows="4" style={{ padding: '10px', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--glass-border)', color: 'white', borderRadius: '5px', resize: 'vertical' }} placeholder="Hola Willard..."></textarea>
                        </div>
                        <button style={{
                            padding: '12px',
                            background: 'linear-gradient(to right, var(--color-primary), var(--color-secondary))',
                            color: 'white',
                            fontWeight: 'bold',
                            borderRadius: '5px',
                            marginTop: '1rem'
                        }}>
                            Enviar Correo
                        </button>
                    </motion.form>

                </div>
            </div>
        </section>
    );
};

export default Contact;
