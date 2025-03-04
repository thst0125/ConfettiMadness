import { useState } from "react";
import confetti from "canvas-confetti";

function MyButton() {
  const [clickCount, setClickCount] = useState(0);
  const [titleColor, setTitleColor] = useState("#ffffff"); // Startfarge (hvit)

  const colors = [
    "#FFB6C1", // Lyserosa
    "#FFD700", // Gullgul
    "#98FB98", // Lysegrønn
    "#87CEFA", // Lyseblå
    "#FF69B4", // Hot Pink
    "#FFA07A", // Lys lakserød
    "#E6E6FA", // Lavendel
    "#F0E68C", // Khaki
    "#B0E0E6", // Lyseblå pastell
    "#DDA0DD", // Lyserosa lilla
  ];

  function handleClick() {
    setClickCount(clickCount + 1);

    // Skyter konfetti!
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.72 },
    });

    // Bytter til en tilfeldig farge fra listen
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setTitleColor(randomColor);
  }

  function resetCounter() {
    setClickCount(0);
  }

  return (
    <div className="container">
      {/* Tittelen med dynamisk farge */}
      <h1 className="rainbow-border" style={{ color: titleColor }}>
        Confetti Madness
      </h1>

      {/* Telleren som alltid er synlig */}
      <h2 className="counter">{clickCount}</h2>

      <div className="button-container">
        <button onClick={handleClick}>Trykk meg!</button>
        <button onClick={resetCounter} disabled={clickCount === 0}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default MyButton;
