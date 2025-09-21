import React, { useRef, useEffect } from "react";
import confetti from "canvas-confetti";

const ConfettiButton = () => {
  const confettiRef = useRef(null);

  const fireConfetti = () => {
    if (confettiRef.current) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        // You can customize other options like colors, shapes, etc.
      });
    }
  };

  return (
    <div>
      <button onClick={fireConfetti}>Celebrate!</button>
      <div
        ref={confettiRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
      ></div>
    </div>
  );
};

export default ConfettiButton;
