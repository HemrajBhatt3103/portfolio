import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <Box sx={{ position: 'relative', minHeight: '100vh' }}>
      <ParticleBackground />
      <Navbar />
      
      <Box component="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </Box>
      
      <Footer />
    </Box>
  );
}

export default App;