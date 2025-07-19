import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  
  const [color, setcolor] = useState("green");

  return (
    <>
      <div className="w-full h-screen" style={{ backgroundColor: color }}>
        <div className="fixed justify-items-center bottom-12 px-2  py-2 left-0 right-0 bg-amber-300 text-center">
          <button
            className=" bg-red-500 mx-2 border-black border-2 rounded text-white padding p-2"
            onClick={() => {
              setcolor("RED");
            }}
          >
            {" "}
            RED{" "}
          </button>
          <button
            className=" bg-green-400 mx-2 border-black border-2 rounded text-white padding p-2"
            onClick={() => {
              setcolor("GREEN");
            }}
          >
            {" "}
            RED{" "}
          </button>
          <button
            className=" bg-pink-400 mx-2 border-black border-2 rounded text-white padding p-2"
            onClick={() => {
              setcolor("PINK");
            }}
          >
            {" "}
            RED{" "}
          </button>
          <button
            className=" bg-blue-400 mx-2 border-black border-2 rounded text-white padding p-2"
            onClick={() => {
              setcolor("BLUE");
            }}
          >
            {" "}
            RED{" "}
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
