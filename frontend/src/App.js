import React from "react";
import UploadResume from "./components/UploadResume";

function App() {
  return (
    <div style={{background: "purple", maxWidth: "auto", maxHeight: "auto", fontFamily: "sans-serif", color:"white" }}>
      
  <h1> Resume Scoring Agent </h1>
      <UploadResume />
    </div>
  );
}

export default App;
