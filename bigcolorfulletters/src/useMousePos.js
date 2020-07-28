import { useState, useEffect } from "react";

export const useMousePos = () => {
  const [mousePos, setMousePos] = useState({});
  useEffect(() => {
    const getMousePos = e => {
      const { innerWidth: width, innerHeight: height } = window;
      const posX = e.clientX;
      const posY = e.clientY;

      const relativeX = (posX - width / 2) / width * 2;
      const relativeY = (posY - height / 2) / height * 2;
      console.log(relativeY);
      setMousePos({ posX, posY, relativeX, relativeY });
    };
    document.addEventListener("mousemove", getMousePos);
    return function cleanup() {
      document.removeEventListener("mousemove", getMousePos);
    };
  });
  return mousePos;
};
