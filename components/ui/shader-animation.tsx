"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export function ShaderAnimation({ opacity = 1 }: { opacity?: number }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Skip entirely for users who prefer reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    if (!containerRef.current) return;
    const container = containerRef.current;

    const vertexShader = `void main() { gl_Position = vec4(position, 1.0); }`;
    const fragmentShader = `
      precision highp float;
      uniform vec2 resolution;
      uniform float time;
      void main(void) {
        vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);
        float t = time * 0.05;
        float lineWidth = 0.002;
        vec3 color = vec3(0.0);
        for(int j = 0; j < 3; j++){
          for(int i = 0; i < 5; i++){
            color[j] += lineWidth * float(i*i) / abs(fract(t - 0.01*float(j) + float(i)*0.01)*5.0 - length(uv) + mod(uv.x+uv.y, 0.2));
          }
        }
        gl_FragColor = vec4(color[0], color[1], color[2], 1.0);
      }
    `;

    const camera = new THREE.Camera();
    camera.position.z = 1;
    const scene = new THREE.Scene();
    const geometry = new THREE.PlaneGeometry(2, 2);
    const uniforms = {
      time: { value: 1.0 },
      resolution: { value: new THREE.Vector2() },
    };
    const material = new THREE.ShaderMaterial({ uniforms, vertexShader, fragmentShader });
    scene.add(new THREE.Mesh(geometry, material));

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)); // cap pixel ratio on high-DPI displays
    container.appendChild(renderer.domElement);

    const onResize = () => {
      renderer.setSize(container.clientWidth, container.clientHeight);
      (uniforms.resolution.value as THREE.Vector2).x = renderer.domElement.width;
      (uniforms.resolution.value as THREE.Vector2).y = renderer.domElement.height;
    };
    onResize();
    window.addEventListener("resize", onResize);

    let animationId = 0;
    let isVisible = true;

    const animate = () => {
      if (!isVisible) return; // stop scheduling entirely when off-screen
      uniforms.time.value = (uniforms.time.value as number) + 0.05;
      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate); // only reschedule when visible
    };
    animate();

    // Fully stop the rAF loop when hero scrolls off-screen; restart on re-entry
    const observer = new IntersectionObserver(
      ([entry]) => {
        const wasVisible = isVisible;
        isVisible = entry.isIntersecting;
        if (isVisible && !wasVisible) animate(); // restart loop on re-entry
      },
      { threshold: 0 }
    );
    observer.observe(container);

    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(animationId);
      observer.disconnect();
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full"
      style={{ background: "transparent", overflow: "hidden", opacity }}
    />
  );
}
