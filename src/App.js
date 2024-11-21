import React, { useState } from "react";
import i from "./111.png"; // Ensure your image path is correct
import s from "./222.png"; // Ensure your image path is correct
import "./tailwind.css";

function App() {
  const [isFirstImageVisible, setIsFirstImageVisible] = useState(true); // State to toggle visibility of images

  const toggleImage = () => {
    setIsFirstImageVisible(!isFirstImageVisible); // Toggle image visibility on button click
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-aliacblue">
      <h1 className="text-4xl font-bold text-center text-white mb-6">Hello, React!</h1>

      <div className="flex justify-center items-center mb-5">
        {/* Conditionally render images based on the state */}
        {isFirstImageVisible ? (
          <img src={i} alt="Image 1" width={300} className="max-w-full h-auto opacity-100 transition-opacity duration-500 ease-in-out" />
        ) : (
          <img src={s} alt="Image 2" width={300} className="max-w-full h-auto opacity-100 transition-opacity duration-500 ease-in-out" />
        )}
      </div>

      <button 
        className="bg-green-500 text-white py-3 px-8 text-lg rounded-lg transition-all duration-300 ease-in-out hover:bg-green-600 active:bg-green-700 mt-5"
        onClick={toggleImage}
      >
        Change Image
      </button>
    </div>
  );
}

export default App;
