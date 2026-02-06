import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const Layout = ({ children }) => {
  const { scrollYProgress } = useScroll();

  // Parallax transformations
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>

      {/* Background Elements - Colors now controlled by CSS variables */}
      <motion.div style={{
        position: 'fixed',
        top: '10%',
        left: '5%',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, var(--color-primary-transparent, rgba(245, 183, 39, 0.2)) 0%, transparent 70%)',
        zIndex: -1,
        y: y1,
        rotate
      }} />

      <motion.div style={{
        position: 'fixed',
        bottom: '20%',
        right: '5%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, var(--color-secondary-transparent, rgba(14, 165, 233, 0.15)) 0%, transparent 70%)',
        zIndex: -1,
        y: y2,
      }} />

      <header style={{
        padding: '1.5rem 0',
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid var(--glass-border)'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ fontSize: '1.5rem', margin: 0 }}>
            Willard<span style={{ color: 'var(--color-primary)' }}>.Dev</span>
          </h2>
          <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0 }}>
              <li><a href="#profile">Perfil</a></li>
              <li><a href="#experience">Experiencia</a></li>
              <li><a href="#methodology">Metodología</a></li>
              <li><a href="#skills">Habilidades</a></li>
              <li><a href="#education">Educación</a></li>
              <li><a href="#contact">Contacto</a></li>
            </ul>
            <ThemeToggle />
          </nav>
        </div>
        {/* Scroll Progress Bar */}
        <motion.div style={{
          height: '2px',
          background: 'var(--color-primary)',
          transformOrigin: '0%',
          scaleX: scrollYProgress,
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0
        }} />
      </header>

      <main style={{ flex: 1, zIndex: 1 }}>
        {children}
      </main>

      <footer style={{
        padding: '2rem 0',
        textAlign: 'center',
        color: 'var(--color-text-muted)',
        borderTop: '1px solid var(--glass-border)',
        marginTop: '4rem',
        zIndex: 1
      }}>
        <div className="container">
          <p>© {new Date().getFullYear()} Willard Aguilar - Ingeniero en Informática</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
