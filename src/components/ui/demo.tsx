"use client";
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const ParticleWaves = ({ showControls = false }: { showControls?: boolean }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const particlesRef = useRef<THREE.Sprite[]>([]);
  const materialRef = useRef<THREE.SpriteMaterial | null>(null);
  const animationRef = useRef<number | null>(null);
  
  const [density, setDensity] = useState(50);
  const [speed, setSpeed] = useState(0.1);
  const [amplitude, setAmplitude] = useState(50);
  const [separation, setSeparation] = useState(100);
  const [particleColor, setParticleColor] = useState('#E58F12');
  const [bgColor, setBgColor] = useState('#FFFFFF');
  
  const countRef = useRef(0);
  const mouseRef = useRef({ x: 0, y: 0 });
  const windowHalfRef = useRef({ x: 0, y: 0 });

  const createParticleMaterial = (color: string) => {
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const context = canvas.getContext('2d');
    
    if (context) {
      context.clearRect(0, 0, 32, 32);
      context.fillStyle = color;
      context.beginPath();
      context.arc(16, 16, 12, 0, Math.PI * 2, true);
      context.fill();
    }
    
    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    
    return new THREE.SpriteMaterial({
      map: texture,
      transparent: true
    });
  };

  const recreateParticles = () => {
    if (!sceneRef.current || !materialRef.current) return;
    
    // Remove existing particles
    particlesRef.current.forEach(particle => sceneRef.current?.remove(particle));
    particlesRef.current = [];
    
    // Create new particles
    for (let ix = 0; ix < density; ix++) {
      for (let iy = 0; iy < density; iy++) {
        const particle = new THREE.Sprite(materialRef.current);
        particle.position.x = ix * separation - ((density * separation) / 2);
        particle.position.z = iy * separation - ((density * separation) / 2);
        particle.position.y = -400;
        particle.scale.setScalar(10);
        
        particlesRef.current.push(particle);
        sceneRef.current.add(particle);
      }
    }
  };

  const handleMouseMove = (event: MouseEvent) => {
    mouseRef.current.x = event.clientX - windowHalfRef.current.x;
    mouseRef.current.y = event.clientY - windowHalfRef.current.y;
  };

  const handleTouchMove = (event: TouchEvent) => {
    if (event.touches.length === 1) {
      mouseRef.current.x = event.touches[0].pageX - windowHalfRef.current.x;
      mouseRef.current.y = event.touches[0].pageY - windowHalfRef.current.y;
    }
  };

  const handleResize = () => {
    if (!cameraRef.current || !rendererRef.current) return;
    
    windowHalfRef.current.x = window.innerWidth / 2;
    windowHalfRef.current.y = window.innerHeight / 2;
    cameraRef.current.aspect = window.innerWidth / window.innerHeight;
    cameraRef.current.updateProjectionMatrix();
    rendererRef.current.setSize(window.innerWidth, window.innerHeight);
  };

  const animate = () => {
    if (!cameraRef.current || !rendererRef.current || !sceneRef.current) return;
    
    animationRef.current = requestAnimationFrame(animate);
    
    // Update camera
    cameraRef.current.position.x += (mouseRef.current.x - cameraRef.current.position.x) * 0.05;
    cameraRef.current.position.y += (-mouseRef.current.y - cameraRef.current.position.y) * 0.05;
    cameraRef.current.lookAt(sceneRef.current.position);
    
    // Update particles
    let i = 0;
    for (let ix = 0; ix < density; ix++) {
      for (let iy = 0; iy < density; iy++) {
        if (i < particlesRef.current.length) {
          const particle = particlesRef.current[i++];
          
          particle.position.y = -400 + 
            (Math.sin((ix + countRef.current) * 0.3) * amplitude) + 
            (Math.sin((iy + countRef.current) * 0.5) * amplitude);
          
          const scale = (Math.sin((ix + countRef.current) * 0.3) + 1) * 2 + 
                       (Math.sin((iy + countRef.current) * 0.5) + 1) * 2;
          particle.scale.setScalar(scale * 2);
        }
      }
    }
    
    rendererRef.current.render(sceneRef.current, cameraRef.current);
    countRef.current += speed;
  };

  const applyPreset = (pColor: string, bColor: string) => {
    setParticleColor(pColor);
    setBgColor(bColor);
  };

  useEffect(() => {
    if (!containerRef.current) return;

    windowHalfRef.current.x = window.innerWidth / 2;
    windowHalfRef.current.y = window.innerHeight / 2;

    // Initialize Three.js
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 1000;
    camera.position.y = 800;
    cameraRef.current = camera;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(new THREE.Color(bgColor), 1);
    rendererRef.current = renderer;

    containerRef.current.appendChild(renderer.domElement);

    // Create initial material and particles
    materialRef.current = createParticleMaterial(particleColor);
    recreateParticles();

    // Event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('resize', handleResize);

    // Start animation
    animate();

    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('resize', handleResize);
      
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  useEffect(() => {
    if (rendererRef.current) {
      rendererRef.current.setClearColor(new THREE.Color(bgColor), 1);
    }
  }, [bgColor]);

  useEffect(() => {
    materialRef.current = createParticleMaterial(particleColor);
    particlesRef.current.forEach(particle => {
      particle.material = materialRef.current!;
    });
  }, [particleColor]);

  useEffect(() => {
    recreateParticles();
  }, [density, separation]);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%", backgroundColor: bgColor, overflow: "hidden" }}>
      <div 
        ref={containerRef} 
        style={{ width: "100%", height: "100%" }}
      />
      
      {showControls && (
        <>
          <div style={{ position: "absolute", top: "8px", left: "8px", color: "#ffffff", fontSize: "12px", zIndex: 10 }}>
            Move mouse to control camera
          </div>
          
          <div style={{ 
            position: "absolute", 
            top: "8px", 
            right: "8px", 
            backgroundColor: "rgba(0,0,0,0.8)", 
            border: "1px solid #4b5563", 
            borderRadius: "8px", 
            padding: "16px", 
            color: "#ffffff", 
            fontSize: "12px", 
            width: "208px", 
            zIndex: 10 
          }}>
            <div style={{ marginBottom: "12px" }}>
              <label style={{ display: "block", marginBottom: "4px", fontWeight: "bold" }}>Density</label>
              <input
                type="range"
                min="10"
                max="80"
                value={density}
                onChange={(e) => setDensity(parseInt(e.target.value))}
                style={{ width: "100%", marginBottom: "4px" }}
              />
              <div style={{ fontSize: "12px", color: "#9ca3af" }}>{density}x{density}</div>
            </div>
            
            <div style={{ marginBottom: "12px" }}>
              <label style={{ display: "block", marginBottom: "4px", fontWeight: "bold" }}>Wave Speed</label>
              <input
                type="range"
                min="0.01"
                max="0.3"
                step="0.01"
                value={speed}
                onChange={(e) => setSpeed(parseFloat(e.target.value))}
                style={{ width: "100%", marginBottom: "4px" }}
              />
              <div style={{ fontSize: "12px", color: "#9ca3af" }}>{speed.toFixed(2)}</div>
            </div>
            
            <div style={{ marginBottom: "12px" }}>
              <label style={{ display: "block", marginBottom: "4px", fontWeight: "bold" }}>Wave Height</label>
              <input
                type="range"
                min="10"
                max="150"
                value={amplitude}
                onChange={(e) => setAmplitude(parseInt(e.target.value))}
                style={{ width: "100%", marginBottom: "4px" }}
              />
              <div style={{ fontSize: "12px", color: "#9ca3af" }}>{amplitude}</div>
            </div>
            
            <div style={{ marginBottom: "12px" }}>
              <label style={{ display: "block", marginBottom: "4px", fontWeight: "bold" }}>Spacing</label>
              <input
                type="range"
                min="50"
                max="200"
                value={separation}
                onChange={(e) => setSeparation(parseInt(e.target.value))}
                style={{ width: "100%", marginBottom: "4px" }}
              />
              <div style={{ fontSize: "12px", color: "#9ca3af" }}>{separation}</div>
            </div>
            
            <div style={{ marginBottom: "12px" }}>
              <label style={{ display: "block", marginBottom: "4px", fontWeight: "bold" }}>Colors</label>
              <div style={{ display: "flex", gap: "8px" }}>
                <div style={{ flex: 1 }}>
                  <label style={{ display: "block", fontSize: "12px", marginBottom: "4px" }}>Particles</label>
                  <input
                    type="color"
                    value={particleColor}
                    onChange={(e) => setParticleColor(e.target.value)}
                    style={{ width: "40px", height: "24px", border: "none", borderRadius: "4px", cursor: "pointer" }}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={{ display: "block", fontSize: "12px", marginBottom: "4px" }}>Background</label>
                  <input
                    type="color"
                    value={bgColor}
                    onChange={(e) => setBgColor(e.target.value)}
                    style={{ width: "40px", height: "24px", border: "none", borderRadius: "4px", cursor: "pointer" }}
                  />
                </div>
              </div>
              
              <div style={{ marginTop: "8px" }}>
                <div style={{ fontSize: "12px", marginBottom: "4px" }}>Presets:</div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "4px" }}>
                  <button
                    onClick={() => applyPreset('#ffffff', '#000000')}
                    style={{ width: "100%", height: "24px", border: "1px solid #4b5563", borderRadius: "4px", cursor: "pointer", background: 'linear-gradient(90deg, #ffffff 50%, #000000 50%)' }}
                  />
                  <button
                    onClick={() => applyPreset('#ff6b6b', '#0a0a0a')}
                    style={{ width: "100%", height: "24px", border: "1px solid #4b5563", borderRadius: "4px", cursor: "pointer", background: 'linear-gradient(90deg, #ff6b6b 50%, #0a0a0a 50%)' }}
                  />
                  <button
                    onClick={() => applyPreset('#4ecdc4', '#1a1a2e')}
                    style={{ width: "100%", height: "24px", border: "1px solid #4b5563", borderRadius: "4px", cursor: "pointer", background: 'linear-gradient(90deg, #4ecdc4 50%, #1a1a2e 50%)' }}
                  />
                  <button
                    onClick={() => applyPreset('#ffd93d', '#16213e')}
                    style={{ width: "100%", height: "24px", border: "1px solid #4b5563", borderRadius: "4px", cursor: "pointer", background: 'linear-gradient(90deg, #ffd93d 50%, #16213e 50%)' }}
                  />
                  <button
                    onClick={() => applyPreset('#a8e6cf', '#2c3e50')}
                    style={{ width: "100%", height: "24px", border: "1px solid #4b5563", borderRadius: "4px", cursor: "pointer", background: 'linear-gradient(90deg, #a8e6cf 50%, #2c3e50 50%)' }}
                  />
                </div>
              </div>
            </div>
            
            <button 
              onClick={() => window.open('https://rollout.dev', '_blank')}
              style={{ width: "100%", backgroundColor: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "#9ca3af", padding: "4px 8px", borderRadius: "4px", fontSize: "12px", marginTop: "8px", cursor: "pointer" }}
            >
              Built with Rollout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ParticleWaves;
