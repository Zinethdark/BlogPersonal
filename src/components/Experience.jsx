import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
    {
        role: "Apoyo Especializado en Patrones de Diseño",
        company: "Telecomunicaciones Movilnet C.A.",
        period: "2022 – 01/2026",
        details: [
            "Elaboración de estándares de desarrollo y lógica de procesos en la GGDSTI.",
            "Estructuración de sistemas complejos mediante diagramas UML y modelos técnicos.",
            "Supervisión del catálogo de servicios técnicos y aplicaciones de misión crítica (Alta disponibilidad).",
            "Aseguramiento de estándares de Calidad e Infraestructura en entregables.",
            "Gestión de control de versiones y trazabilidad del código fuente."
        ]
    },
    {
        role: "Especialista en Desarrollo de Aplicaciones",
        company: "Telecomunicaciones Movilnet C.A.",
        period: "2019 – 2022",
        details: [
            "Liderazgo de proyectos Front-End y Back-End para sistemas de Gestión de Usuarios.",
            "Análisis de requerimientos y diseño de interfaces de usuario.",
            "Ejecución de pruebas unitarias e integrales.",
            "Evaluación y propuesta de tecnologías de vanguardia para procesos internos."
        ]
    },
    {
        role: "Jefe de Sistemas",
        company: "Clínica Vista Alegre C.A.",
        period: "2016 – 2022",
        details: [
            "Administración integral de servidores Windows Server y bases de datos.",
            "Supervisión de infraestructura de red, CCTV y control de acceso biométrico.",
            "Gestión de respaldos y mantenimiento preventivo."
        ]
    }
];

const Experience = () => {
    return (
        <section id="experience" className="section">
            <div className="container">
                <h2 className="section-title">Experiencia Laboral</h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '900px', margin: '0 auto' }}>
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className="glass-panel"
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
                            viewport={{ once: false, margin: "-100px" }}
                            style={{ position: 'relative', borderLeft: '4px solid var(--color-primary)' }}
                        >
                            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '1rem' }}>
                                <div>
                                    <h3 style={{ fontSize: '1.4rem', color: 'var(--color-main-text)' }}>{exp.role}</h3>
                                    <h4 style={{ color: 'var(--color-primary)', fontSize: '1.1rem' }}>{exp.company}</h4>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                                    <Briefcase size={16} />
                                    <span>{exp.period}</span>
                                </div>
                            </div>

                            <ul style={{ paddingLeft: '1.2rem', color: 'var(--color-text-muted)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                {exp.details.map((detail, i) => (
                                    <li key={i}>{detail}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
