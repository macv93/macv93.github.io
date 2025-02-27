import { useRef, useEffect } from "react";
import * as THREE from "three";
import CELLS from "vanta/dist/vanta.cells.min";

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
          <a href={LINKEDIN_URL} title="Connect with me on LinkedIn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.26c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm13.5 12.26h-3v-5.6c0-3.36-4-3.11-4 0v5.6h-3v-11h3v1.76c1.39-2.58 7-2.77 7 2.47v6.77z" />
            </svg>
          </a>

          <a href="mailto:manuel.canarte@gmail.com" title="Let's connect!">
            Contact
          </a>
        </ul>
      </nav>
    </div>
  );
};

export default App;
