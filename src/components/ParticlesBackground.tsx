import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

const ParticlesBackground: React.FC = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 mix-blend-screen opacity-50">
      <Particles
        id="tsparticles"
        className="h-full w-full"
        options={{
          fullScreen: { enable: false },
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "grab",
                parallax: {
                  enable: true,
                  force: 30,
                  smooth: 10
                }
              },
            },
            modes: {
              grab: {
                distance: 140,
                links: {
                  opacity: 0.8
                }
              },
            },
          },
          particles: {
            color: {
              value: ["#3b82f6", "#60a5fa", "#f59e0b"],
            },
            links: {
              color: "#60a5fa",
              distance: 180,
              enable: true,
              opacity: 0.25,
              width: 1.5,
              triangles: {
                enable: true,
                opacity: 0.03
              }
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 0.4,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                width: 1920,
                height: 1080,
              },
              value: 70,
            },
            opacity: {
              value: { min: 0.3, max: 0.7 },
            },
            shape: {
              type: ["circle", "triangle"],
            },
            size: {
              value: { min: 2, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default ParticlesBackground;
