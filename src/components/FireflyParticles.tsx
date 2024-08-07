import React, { useEffect } from 'react';
import { tsParticles } from "@tsparticles/engine";
import { loadFireflyPreset } from '@tsparticles/preset-firefly';
import { particleOptions } from '../util/particleOptions';

const FireflyParticles: React.FC = () => {
  useEffect(() => {
    const initParticles = async () => {
      try {
        await loadFireflyPreset(tsParticles);
        console.log("Firefly preset loaded successfully");

        tsParticles.load({
          id: "header-particles",
          options: particleOptions,
        });
      } catch (error) {
        console.error("Failed to load Firefly preset:", error);
      }
    };

    initParticles();

    return () => {
      console.log("Cleaning up particles");
      tsParticles.domItem(0)?.destroy();
    };
  }, []);

  return (
    <div
      id="header-particles"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0, // Particules derrière le contenu
      }}
    />
  );
};

export default FireflyParticles;
