import { ISourceOptions } from "@tsparticles/engine";

export const particleOptions: ISourceOptions = {
  fullScreen: {
    enable: false,
    zIndex: -1,
  },
  fpsLimit: 50,
  particles: {
    number: {
      value: 50, // Plus de particules pour un effet plus complet
      density: {
        enable: true,
        
      },
    },
    color: {
      value: "#FFFFFF",
    },
    opacity: {
      value: { min: 0.1, max: 0.5 },
      animation: {
        enable: true,
        speed: 1,
        sync: false,
      },
    },
    size: {
      value: { min: 1, max: 5 }, // Variabilité des tailles pour simuler la distance
    },
    move: {
      enable: true,
      speed: { min: 0.1, max: 1 }, // Différentes vitesses pour simuler la profondeur
      direction: "none",
      
    },
    zIndex: {
      value: { min: 0, max: 100 }, // Utilisation de zIndex pour simuler la profondeur
      opacityRate: 0.5,
    },
  },
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "repulse",
      },
    },
    modes: {
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  detectRetina: true,
};
