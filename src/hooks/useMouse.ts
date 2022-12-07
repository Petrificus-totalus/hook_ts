import { useState, useEffect } from "react";

const useMouse = () => {
  const [points, setPoints] = useState({ x: 0, y: 0 }); // 鼠标位置

  useEffect(() => {
    // 先jin，以后每点一次先tui再jin
    console.log("jin");

    const updateMouse = (e: MouseEvent) => {
      setPoints({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener("click", updateMouse);
    return () => {
      console.log("tui");

      document.removeEventListener("click", updateMouse);
    };
  });
  return points;
};
export default useMouse;
