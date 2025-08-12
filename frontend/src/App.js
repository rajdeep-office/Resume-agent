import React from "react";
import UploadResume from "./components/UploadResume";
import Card from './components/Card';

function App() {
  return (
    <div
      style={{
        background: "linear-gradient(to right, #FCFFE9, #FFF2CC)",
        minHeight: "100vh",
        padding: "40px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#A52A2A",
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
          }}
      >
      Get instant feedback on your Resume with AI-Powered analysis. <br/>
      Improve your formating, keywords, grammar, readability to land more interviews.</p> 

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
          <Card className="p-6 text-center hover:shadow-card transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Instant Analysis</h3>
                <p className="text-sm text-muted-foreground">
                  Get your resume score in seconds with detailed breakdowns
                </p>
              </Card>
          
              <Card className="p-6 text-center hover:shadow-card transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Keyword Matching</h3>
                <p className="text-sm text-muted-foreground">
                  Identify relevant keywords that match job descriptions
                </p>
              </Card>

              <Card className="p-6 text-center hover:shadow-card transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Improvement Tips</h3>
                <p className="text-sm text-muted-foreground">
                  Actionable suggestions to enhance your resume's impact
                </p>
              </Card>
        </div>
      <UploadResume />
      <div style={{ marginTop: "20px" }}>
        
      </div>
    </div>
  );
}

export default App;
