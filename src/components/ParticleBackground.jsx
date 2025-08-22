import React, { useEffect, useRef } from 'react';
import { Box } from '@mui/material';

const ParticleBackground = () => {
    const canvasRef = useRef(null);
    const animationRef = useRef(null);
    const particlesRef = useRef([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let particles = [];

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Particle class
        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.size = Math.random() * 2 + 1;
                this.opacity = Math.random() * 0.5 + 0.2;
                this.color = Math.random() > 0.5 ? '#00d4ff' : '#00ff88';
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                // Wrap around edges
                if (this.x < 0) this.x = canvas.width;
                if (this.x > canvas.width) this.x = 0;
                if (this.y < 0) this.y = canvas.height;
                if (this.y > canvas.height) this.y = 0;

                // Pulse effect
                this.opacity += Math.sin(Date.now() * 0.001 + this.x * 0.01) * 0.01;
                this.opacity = Math.max(0.1, Math.min(0.7, this.opacity));
            }

            draw() {
                ctx.save();
                ctx.globalAlpha = this.opacity;
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            }
        }

        // Create particles
        const createParticles = () => {
            const particleCount = Math.min(100, Math.floor(canvas.width * canvas.height / 15000));
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
            particlesRef.current = particles;
        };

        createParticles();

        // Draw connections between nearby particles
        const drawConnections = () => {
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 100) {
                        const opacity = (100 - distance) / 100 * 0.2;
                        ctx.save();
                        ctx.globalAlpha = opacity;
                        ctx.strokeStyle = '#00d4ff';
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                        ctx.restore();
                    }
                }
            }
        };

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Update and draw particles
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            // Draw connections
            drawConnections();

            animationRef.current = requestAnimationFrame(animate);
        };

        animate();

        // Mouse interaction
        const handleMouseMove = (event) => {
            const rect = canvas.getBoundingClientRect();
            const mouseX = event.clientX - rect.left;
            const mouseY = event.clientY - rect.top;

            particles.forEach(particle => {
                const dx = mouseX - particle.x;
                const dy = mouseY - particle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 150) {
                    const force = (150 - distance) / 150;
                    particle.vx += dx * force * 0.0001;
                    particle.vy += dy * force * 0.0001;
                }
            });
        };

        canvas.addEventListener('mousemove', handleMouseMove);

        // Cleanup
        return () => {
            window.removeEventListener('resize', resizeCanvas);
            canvas.removeEventListener('mousemove', handleMouseMove);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, []);

    return (
        <Box
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                pointerEvents: 'none',
            }}
        >
            <canvas
                ref={canvasRef}
                style={{
                    display: 'block',
                    background: 'transparent',
                }}
            />

            {/* Additional floating elements */}
            <Box
                sx={{
                    position: 'absolute',
                    top: '10%',
                    left: '5%',
                    width: '200px',
                    height: '200px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(0, 212, 255, 0.1) 0%, transparent 70%)',
                    animation: 'float 8s ease-in-out infinite',
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    top: '60%',
                    right: '10%',
                    width: '150px',
                    height: '150px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(0, 255, 136, 0.1) 0%, transparent 70%)',
                    animation: 'float 6s ease-in-out infinite 2s',
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    bottom: '20%',
                    left: '20%',
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(255, 107, 107, 0.1) 0%, transparent 70%)',
                    animation: 'float 10s ease-in-out infinite 4s',
                }}
            />
        </Box>
    );
};

export default ParticleBackground;/*  */