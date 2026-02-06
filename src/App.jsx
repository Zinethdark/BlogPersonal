import React from 'react';
import Layout from './components/Layout';
import Profile from './components/Profile';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Curtain from './components/Curtain';
import './App.css';

function App() {
  return (
    <>
      <Curtain />
      <Layout>
        <Profile />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </Layout>
    </>
  );
}

export default App;
