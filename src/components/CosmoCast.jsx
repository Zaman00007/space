import React, { useEffect } from 'react';
import './CosmoCast.css'; 
function CosmoCast() {
  useEffect(() => {
  
    const script = document.createElement('script');
    script.src = './three.min.js';
    script.async = true;
    document.body.appendChild(script);

    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    let scene, camera, renderer, stars, starGeo;

    function init() {
      scene = new window.THREE.Scene(); 

      camera = new window.THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
      camera.position.z = 1;
      camera.rotation.x = Math.PI / 2;

      renderer = new window.THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(renderer.domElement);

      starGeo = new window.THREE.Geometry();
      for (let i = 0; i < 6000; i++) {
        const star = new window.THREE.Vector3(
          Math.random() * 600 - 300,
          Math.random() * 600 - 300,
          Math.random() * 600 - 300
        );
        star.velocity = 0;
        star.acceleration = 0.02;
        starGeo.vertices.push(star);
      }

      const sprite = new window.THREE.TextureLoader().load('star.png');
      const starMaterial = new window.THREE.PointsMaterial({
        color: 0xaaaaaa,
        size: 0.7,
        map: sprite
      });

      stars = new window.THREE.Points(starGeo, starMaterial);
      scene.add(stars);

      window.addEventListener("resize", onWindowResize, false);

      animate();
    }

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function animate() {
      starGeo.vertices.forEach(p => {
        p.velocity += p.acceleration;
        p.y -= p.velocity;

        if (p.y < -200) {
          p.y = 200;
          p.velocity = 0;
        }
      });
      starGeo.verticesNeedUpdate = true;
      stars.rotation.y += 0.002;

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }

    init();

    
    return () => {
      window.removeEventListener("resize", onWindowResize);
      renderer.domElement.remove();
    };
  }, []); 

  return (
    <div className="text-box">
      <div className="heading">Welcome to CosmoCast</div>
      <div className="button-wrapper">
        
      </div>
    </div>
  );
}

export default CosmoCast;
