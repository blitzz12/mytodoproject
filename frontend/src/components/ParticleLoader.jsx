import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

function ParticleLoader() {
  const particlesInit = async(main) => {
    

    await loadFull(main)
  }

  const particlesLoaded = (container) => {
   
  }
  return (
    <Particles 
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
         
          fpsLimit: 60,
          interactivity: {
            events: {
             
              resize: true
            },
            modes: {
              push: {
                quantity: 4
              },
              attract: {
                distance: 200,
                duration: 0.4,
                factor: 5
              }
            } 
          },
          particles:{
            color: {
              value: '#ffffff'
            },
            line_linked: {
              color: '#ffffff',
              distance: 150,
              enable: true,
              opacity: 0.4,
              width: 1
            },
            move: {
              attract: {
                enable: false,
                rotateX: 500,
                rotateY: 1000
              },
              bounce: false,
              direction: 'none',
              enable: true,
              out_model: "out",
              random: false,
              speed: 1.5,
              straight: false
            },
            number: {
              density: {
                enable: true,
                value_area: 800
              },
              value: 80
            },
            opacity: {
              anim: {
                enable: false,
                opacity_min: 0.1,
                speed: 1,
                sync: false
              },
              random: false,
              value: 0.5
            },
          }
        }
      }
      />
  )
}
export default ParticleLoader