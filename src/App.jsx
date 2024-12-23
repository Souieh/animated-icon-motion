import React from "react";
import AnimatedIcon from "./AnimateIcon";
import "./App.css";

const SuccessPaths = [{ d: "M30 50 L45 65 L70 35" }];

const ErrorPaths = [{ d: "M35 35 L65 65" }, { d: "M65 35 L35 65" }];

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        height: "calc(100vh - 60px)",
        aspectRatio: 750 / 1334,
        overflow: "hidden",
        border: "1px solid #0002",
        borderRadius: 18,
        //transform: "rotateZ(90deg)",
      }}
    >
      <h2>Animated Icons</h2>
      <div className="container" style={{ flexWrap: "wrap" }}>
        {/** Success Icon */}
        <AnimatedIcon paths={SuccessPaths} color="#4CAF50" />
        {/** Error Icon */}
        <AnimatedIcon paths={ErrorPaths} color="#F44336" iconDelay={1} />
        {/** Success Outline Icon */}
        <AnimatedIcon
          paths={SuccessPaths}
          color="#4CAF50"
          iconDelay={2.25}
          outline
        />
        {/** Error Outline Icon */}
        <AnimatedIcon
          paths={ErrorPaths}
          color="#F44336"
          iconDelay={3.25}
          outline
        />
      </div>
    </div>
  );
}

export default App;
