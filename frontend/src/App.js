import React from "react";
import UploadResume from "./components/UploadResume";

function App() {
  return (
    <div
      style={{
        background: "linear-gradient(to right, #6a11cb, #2575fc)",
        minHeight: "100vh",
        padding: "40px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "white",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          marginBottom: "30px",
          textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
        }}
      >
        Resume Scoring Tool
      </h1>
       <p
          style={{
          fontSize: "20px",
          marginBottom: "10px",
          textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
          }}
      >
      Get instant feedback on your Resume with AI-Powered analysis. 
      Improve your formating, keywords, grammar, readability to land more interviews.</p> 
      <UploadResume />
      <div style={{ marginTop: "20px" }}>
        
      </div>
    </div>
  );
}

export default App;
