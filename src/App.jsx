import { useRef, useEffect } from "react";
import * as THREE from "three";
import CELLS from "vanta/dist/vanta.cells.min";
import ClientLocation from "./ClientLocation";

const LINKEDIN_URL = "https://www.linkedin.com/in/manuel-canarte/";
const GITHUB_URL = "https://github.com/macv93";

const App = () => {
  const vantaRef = useRef(null);
  let vantaEffect;

  useEffect(() => {
    if (!vantaEffect) {
      const MIAMI_CYAN = 0x00efff;
      const MIAMI_PINK = 0xff4992;

      const CELL_SIZE = 0.6;
      const CELL_SPEED = 1.6;

      vantaEffect = CELLS({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color1: MIAMI_CYAN,
        color2: MIAMI_PINK,
        size: CELL_SIZE,
        speed: CELL_SPEED,
      });
    }

    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
        vantaEffect = null;
      }
    };
  }, []);

  return (
    <div style={{ position: "relative", height: "100vh" }}>
      <div
        ref={vantaRef}
        style={{
          width: "100%",
          height: "100%",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      />
      <nav
        style={{
          display: "flex",
          width: "100%",
          alignContent: "space-evenly",
          fontFamily: "monospace",
        }}
      >
        <div style={{ padding: "1rem" }}>Manny</div>
        <ul style={{ display: "flex", gap: "1rem" }}>
          <a href={GITHUB_URL} title="Connect with me on GitHub">
            GitHub
          </a>
          <a href={LINKEDIN_URL} title="Connect with me on LinkedIn">
            LinkedIn
          </a>
          <a href="mailto:manuel.canarte@gmail.com" title="Let's connect!">
            Contact
          </a>
        </ul>
      </nav>
      <ClientLocation />
    </div>
  );
};

export default App;
