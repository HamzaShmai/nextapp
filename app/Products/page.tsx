"use client";  // Ensure this is at the top

import { useState } from "react";

export default function ButtonColorChanger() {
  const [buttonColor, setButtonColor] = useState("blue");
  
  const [clickCount, setClickCount] = useState(0);

  const changeColorAndCount = () => {
    setButtonColor(buttonColor === "blue" ? "red" : "blue");
    
    setClickCount(clickCount + 2);
  };

  return (
    <div>
      <button 
        onClick={changeColorAndCount}
        style={{ backgroundColor: buttonColor, color: "green", padding: "10px 20px", border: "none", borderRadius: "5px" }}
      >
        
        Click me! (Clicked {clickCount} times)
      </button>
    </div>
  );
}
