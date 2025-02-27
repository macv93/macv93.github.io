import { useRef, useEffect } from "react";
import * as THREE from "three";
import CELLS from "vanta/dist/vanta.cells.min";

const VantaBackground = ({ children }) => {
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
      {children}
    </div>
  );
};

export default VantaBackground;
