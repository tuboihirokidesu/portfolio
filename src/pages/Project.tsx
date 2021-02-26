import Particles from "react-particles-js";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Card from "./project_card/Card";

const Project = () => {
  return (
    <div>
      <Particle
        params={{
          particles: {
            number: {
              value: 160,
              density: {
                enable: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                speed: 4,
                size_min: 0.3,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              random: true,
              speed: 1,
              direction: "top",
              out_mode: "out",
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "bubble",
              },
              onclick: {
                enable: true,
                mode: "repulse",
              },
            },
            modes: {
              bubble: {
                distance: 250,
                duration: 2,
                size: 0,
                opacity: 0,
              },
              repulse: {
                distance: 400,
                duration: 4,
              },
            },
          },
        }}
      />
      <Navbar />
      <Card />
    </div>
  );
};

export default Project;

const Particle = styled(Particles)`
  position: absolute;
  width: 100%;
  height: 2300px;
`;
