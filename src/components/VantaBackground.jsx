import { useEffect, useRef, useState } from "react";
import { ChromePicker } from "react-color";
import * as THREE from "three";
import CELLS from "vanta/dist/vanta.cells.min";
import { useClickOutside } from "../hooks/useClickOutside";

const getRandomHexColor = () => {
  const randomNum1 = Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0");
  const randomNum2 = Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0");
  return [`#${randomNum1}`, `#${randomNum2}`];
};

const VantaBackground = ({ children }) => {
  const vantaRef = useRef(null);
  const colorPickerRef1 = useRef(null);
  const colorPickerRef2 = useRef(null);
  let vantaEffect;

  const [randomColor1, randomColor2] = getRandomHexColor();
  const [cellSize, setCellSize] = useState(3);
  const [cellSpeed, setCellSpeed] = useState(0.6);
  const [color1, setColor1] = useState(randomColor1);
  const [color2, setColor2] = useState(randomColor2);
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
    <div className="relative h-screen">
      <div ref={vantaRef} className="w-full h-full fixed top-0 left-0 z-[-1]" />
      {children}
      {false && (
        <div className="absolute bottom-5 left-5 z-1 bg-black/50 p-2 rounded-md flex flex-col">
          <button
            onClick={toggleSettings}
            className="text-white border border-white rounded-md p-1"
          >
            {!showSettings ? "Settings" : "Close"}
          </button>
          {showSettings && (
            <>
              <div className="flex items-center mt-2">
                <label className="text-white mr-2">Color 1:</label>
                <div className="flex items-center">
                  <div
                    className="w-5 h-5 cursor-pointer mr-1"
                    style={{ backgroundColor: color1 }}
                    onClick={() => toggleColorPicker("1")}
                  />
                  {activePicker === "1" && (
                    <div
                      ref={colorPickerRef1}
                      className="absolute bottom-14 left-24 flex flex-row-reverse items-center"
                    >
                      <button
                        onClick={() => toggleColorPicker("1")}
                        className="ml-1 text-white border border-white rounded-lg p-1"
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
              <div className="flex items-center mt-2">
                <label className="text-white mr-2">Color 2:</label>
                <div className="flex items-center">
                  <div
                    className="w-5 h-5 cursor-pointer mr-1"
                    style={{ backgroundColor: color2 }}
                    onClick={() => toggleColorPicker("2")}
                  />
                  {activePicker === "2" && (
                    <div
                      ref={colorPickerRef2}
                      className="absolute bottom-14 left-24 flex flex-row-reverse items-center"
                    >
                      <button
                        onClick={() => toggleColorPicker("2")}
                        className="ml-1 text-white border border-white rounded-lg p-1"
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
              <div className="flex items-center mt-2">
                <label className="text-white mr-2">
                  Size: {cellSize.toFixed(1)}
                </label>
                <div className="flex items-center">
                  <button
                    className="mr-1 border border-white rounded-md p-1"
                    onClick={() => handleSizeChange(-0.1)}
                  >
                    -
                  </button>
                  <button
                    className="border border-white rounded-md p-1"
                    onClick={() => handleSizeChange(0.1)}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex items-center mt-2">
                <label className="text-white mr-2">
                  Speed: {cellSpeed.toFixed(1)}
                </label>
                <div className="flex items-center">
                  <button
                    className="mr-1 border border-white rounded-md p-1"
                    onClick={() => handleSpeedChange(-0.1)}
                  >
                    -
                  </button>
                  <button
                    className="border border-white rounded-md p-1"
                    onClick={() => handleSpeedChange(0.1)}
                  >
                    +
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default VantaBackground;
