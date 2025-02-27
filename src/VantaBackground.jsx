import React, { useEffect, useRef, useState } from "react";
import { ChromePicker } from "react-color";
import * as THREE from "three";
import CELLS from "vanta/dist/vanta.cells.min";
import { useClickOutside } from "./hooks/useClickOutside";

const VantaBackground = ({ children }) => {
  const vantaRef = useRef(null);
  const colorPickerRef1 = useRef(null);
  const colorPickerRef2 = useRef(null);
  let vantaEffect;
  const [cellSize, setCellSize] = useState(0.6);
  const [cellSpeed, setCellSpeed] = useState(1.6);
  const [color1, setColor1] = useState("#00efff");
  const [color2, setColor2] = useState("#ff4992");
  const [activePicker, setActivePicker] = useState(null);
  const [showSettings, setShowSettings] = useState(false);

  useClickOutside(colorPickerRef1, activePicker === "1", () =>
    setActivePicker(null)
  );
  useClickOutside(colorPickerRef2, activePicker === "2", () =>
    setActivePicker(null)
  );

  useEffect(() => {
    if (!vantaEffect) {
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
        color1: parseInt(color1.replace("#", "0x"), 16),
        color2: parseInt(color2.replace("#", "0x"), 16),
        size: cellSize,
        speed: cellSpeed,
      });
    } else {
      vantaEffect.setOptions({
        color1: parseInt(color1.replace("#", "0x"), 16),
        color2: parseInt(color2.replace("#", "0x"), 16),
        size: cellSize,
        speed: cellSpeed,
      });
    }

    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
        vantaEffect = null;
      }
    };
  }, [cellSize, cellSpeed, color1, color2]);

  const handleSizeChange = (change) => {
    setCellSize((prevSize) => {
      const newSize = prevSize + change;
      return Math.max(0.1, Math.min(2, newSize));
    });
  };

  const handleSpeedChange = (change) => {
    setCellSpeed((prevSpeed) => {
      const newSpeed = prevSpeed + change;
      return Math.max(0.1, Math.min(5, newSpeed));
    });
  };

  const handleColorChange1 = (color) => {
    setColor1(color.hex);
  };

  const handleColorChange2 = (color) => {
    setColor2(color.hex);
  };

  const toggleColorPicker = (pickerId) => {
    setActivePicker(activePicker === pickerId ? null : pickerId);
  };

  const toggleSettings = () => {
    setShowSettings(!showSettings);
  };

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
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          left: "20px",
          zIndex: 1,
          background: "rgba(0, 0, 0, 0.5)",
          padding: "10px",
          borderRadius: "5px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <button onClick={toggleSettings}>
          {!showSettings ? "Settings" : "Close"}
        </button>
        {showSettings && (
          <>
            <div>
              <label style={{ color: "white" }}>Color 1:</label>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    backgroundColor: color1,
                    cursor: "pointer",
                    marginRight: "5px",
                  }}
                  onClick={() => toggleColorPicker("1")}
                />
                {activePicker === "1" && (
                  <div
                    ref={colorPickerRef1}
                    style={{
                      position: "absolute",
                      bottom: "60px",
                      left: "100px",
                      display: "flex",
                      flexDirection: "row-reverse",
                      alignItems: "center",
                    }}
                  >
                    <button
                      onClick={() => toggleColorPicker("1")}
                      style={{ marginLeft: "5px" }}
                    >
                      X
                    </button>
                    <ChromePicker
                      color={color1}
                      onChange={handleColorChange1}
                    />
                  </div>
                )}
              </div>
            </div>
            <div>
              <label style={{ color: "white" }}>Color 2:</label>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    backgroundColor: color2,
                    cursor: "pointer",
                    marginRight: "5px",
                  }}
                  onClick={() => toggleColorPicker("2")}
                />
                {activePicker === "2" && (
                  <div
                    ref={colorPickerRef2}
                    style={{
                      position: "absolute",
                      bottom: "60px",
                      left: "100px",
                      display: "flex",
                      flexDirection: "row-reverse",
                      alignItems: "center",
                    }}
                  >
                    <button
                      onClick={() => toggleColorPicker("2")}
                      style={{ marginLeft: "5px" }}
                    >
                      X
                    </button>
                    <ChromePicker
                      color={color2}
                      onChange={handleColorChange2}
                    />
                  </div>
                )}
              </div>
            </div>
            <div>
              <label style={{ color: "white" }}>
                Size: {cellSize.toFixed(1)}
              </label>
              <div style={{ display: "flex", alignItems: "center" }}>
                <button
                  style={{ marginRight: "5px" }}
                  onClick={() => handleSizeChange(-0.1)}
                >
                  -
                </button>
                <button onClick={() => handleSizeChange(0.1)}>+</button>
              </div>
            </div>
            <div>
              <label style={{ color: "white" }}>
                Speed: {cellSpeed.toFixed(1)}
              </label>
              <div style={{ display: "flex", alignItems: "center" }}>
                <button
                  style={{ marginRight: "5px" }}
                  onClick={() => handleSpeedChange(-0.1)}
                >
                  -
                </button>
                <button onClick={() => handleSpeedChange(0.1)}>+</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default VantaBackground;
