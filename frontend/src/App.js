import React from "react";
import UploadResume from "./components/UploadResume";

function App() {
  return (
    <div
      style={{
        background: "linear-gradient(to right, #FBFBFB, #E8F9FF)",
        minHeight: "100vh",
        padding: "40px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "5rem",
          textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
          color:"#57564F",
        }}
      >Resume Scoring Tool</h1>
       <p
          style={{
          fontSize: "20px",
          marginBottom: "10px",
          color:"#57564F",  
          }}
      >
      Get instant feedback on your Resume with AI-Powered analysis. <br/>
      Improve your formating, keywords, grammar, readability to land more interviews.</p> 
             <UploadResume />
      <div style={{ marginTop: "20px" }}>
        
      </div>
    </div>
  );
}

export default App;
