"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

function makeDotTexture() {
  const size = 64;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  const gradient = ctx.createRadialGradient(
    size / 2,
    size / 2,
    0,
    size / 2,
    size / 2,
    size / 2
  );
  gradient.addColorStop(0, "rgba(255,255,255,1)");
  gradient.addColorStop(0.4, "rgba(255,255,255,0.8)");
  gradient.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);
  return new THREE.CanvasTexture(canvas);
}

export default function HeroScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      42,
      mount.clientWidth / mount.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 7.5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    const accent = new THREE.Color(0xc6ff5e);
    const group = new THREE.Group();
    scene.add(group);

    const NODE_COUNT = 26;
    const nodePositions: THREE.Vector3[] = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      const phi = Math.acos(-1 + (2 * i) / NODE_COUNT);
      const theta = Math.sqrt(NODE_COUNT * Math.PI) * phi;
      const r = 2.1 * (0.65 + 0.35 * Math.random());
      nodePositions.push(
        new THREE.Vector3(
          r * Math.cos(theta) * Math.sin(phi),
          r * Math.sin(theta) * Math.sin(phi),
          r * Math.cos(phi)
        )
      );
    }

    const edgePairs: [number, number][] = [];
    for (let i = 0; i < nodePositions.length; i++) {
      const distances = nodePositions
        .map((p, j) => ({ j, d: p.distanceTo(nodePositions[i]) }))
        .filter((e) => e.j !== i)
        .sort((a, b) => a.d - b.d);
      for (const { j } of distances.slice(0, 2)) {
        const pair: [number, number] = i < j ? [i, j] : [j, i];
        if (!edgePairs.some(([a, b]) => a === pair[0] && b === pair[1])) {
          edgePairs.push(pair);
        }
      }
    }

    const edgeGeometry = new THREE.BufferGeometry();
    const edgePositions = new Float32Array(edgePairs.length * 6);
    edgePairs.forEach(([a, b], i) => {
      edgePositions.set(
        [
          nodePositions[a].x,
          nodePositions[a].y,
          nodePositions[a].z,
          nodePositions[b].x,
          nodePositions[b].y,
          nodePositions[b].z,
        ],
        i * 6
      );
    });
    edgeGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(edgePositions, 3)
    );
    const edgeMaterial = new THREE.LineBasicMaterial({
      color: accent,
      transparent: true,
      opacity: 0.35,
    });
    const edges = new THREE.LineSegments(edgeGeometry, edgeMaterial);
    group.add(edges);

    const nodeGeometry = new THREE.BufferGeometry();
    const nodePos = new Float32Array(nodePositions.length * 3);
    nodePositions.forEach((p, i) => nodePos.set([p.x, p.y, p.z], i * 3));
    nodeGeometry.setAttribute("position", new THREE.BufferAttribute(nodePos, 3));
    const dotTexture = makeDotTexture();
    const nodeMaterial = new THREE.PointsMaterial({
      color: accent,
      size: 0.16,
      map: dotTexture,
      transparent: true,
      depthWrite: false,
      sizeAttenuation: true,
    });
    const nodes = new THREE.Points(nodeGeometry, nodeMaterial);
    group.add(nodes);

    let frameId: number;
    const clock = new THREE.Clock();
    let visible = true;

    function animate() {
      frameId = requestAnimationFrame(animate);
      if (!visible) return;
      const t = clock.getElapsedTime();
      group.rotation.y = t * 0.12;
      group.rotation.x = Math.sin(t * 0.18) * 0.15;
      const pulse = 0.55 + (Math.sin(t * 1.2) * 0.5 + 0.5) * 0.45;
      nodeMaterial.opacity = pulse;
      edgeMaterial.opacity = 0.2 + pulse * 0.25;
      renderer.render(scene, camera);
    }
    animate();

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
      },
      { threshold: 0 }
    );
    observer.observe(mount);

    function handleResize() {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    }
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
      edgeGeometry.dispose();
      edgeMaterial.dispose();
      nodeGeometry.dispose();
      nodeMaterial.dispose();
      dotTexture.dispose();
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="h-full w-full animate-[heroSceneIn_1.4s_ease_0.6s_forwards] opacity-0"
      style={{ filter: "drop-shadow(0 0 22px rgba(198,255,94,0.35))" }}
    />
  );
}
