import React from "react";
import UploadResume from "./components/UploadResume";

function App() {
  return (
    <div style={{ maxWidth: 600, margin: "40px auto", fontFamily: "sans-serif" }}>
      <img src ='resume_scroing.jpeg'/>
      <UploadResume />
    </div>
  );
}

export default App;
