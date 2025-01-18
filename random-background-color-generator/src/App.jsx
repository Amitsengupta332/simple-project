import { useState } from "react";

function RandomBackground() {
  const [bgColor, setBgColor] = useState("#ffffff");

  const generateRandomColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setBgColor(randomColor);
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen transition-all"
      style={{ backgroundColor: bgColor }}
    >
      <button
        onClick={generateRandomColor}
        className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800"
      >
        Generate Random Background
      </button>

      <h1 className="gap-6">{bgColor}</h1>
    </div>
  );
}

export default RandomBackground;
