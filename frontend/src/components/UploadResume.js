import React, { useState, useEffect } from "react";

const UploadResume = () => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [animatedText, setAnimatedText] = useState("");

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return;

    setLoading(true);
    setResult(null);

    const formData = new FormData();
    formData.append("resume", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      setResult(data);
    } catch {
      setResult({ error: "Failed to upload or analyze resume." });
    }
    setLoading(false);
  };

  const buttonStyle = {
    padding: "12px 24px",
    fontSize: "16px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    backgroundColor: isHovered ? "#3E5879" : "#D9EAFD",
    color: isHovered ? "#ffffff" : "#333333",
    boxShadow: isHovered
      ? "0 4px 12px rgba(0, 0, 0, 0.2)"
      : "0 2px 6px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease",
    marginTop: "20px",
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          color: "#fff",
          marginBottom: "20px",
          fontFamily: "monospace",
          whiteSpace: "pre-wrap",
        }}
      >
        {animatedText}
      </h2>

      <form onSubmit={handleUpload}>
  <div style={{ marginBottom: "20px" }}>
    <input
      id="file-upload"
      type="file"
      accept=".pdf,.docx,.txt"
      onChange={(e) => setFile(e.target.files[0])}
      required
      style={{ display: "none" }}
    />
    <label
      htmlFor="file-upload"
      style={{
        padding: "12px 24px",
        backgroundColor: "#003161",
        color: "#fff",
        borderRadius: "8px",
        cursor: "pointer",
        fontSize: "16px",
        display: "inline-block",
        marginRight: "10px",
        transition: "background-color 0.3s ease",
      }}
      onMouseEnter={(e) => (e.target.style.backgroundColor = "#005fa3")}
      onMouseLeave={(e) => (e.target.style.backgroundColor = "#003161")}
    >
      Browse
    </label>
    {file && (
      <span style={{ fontSize: "16px", color: "#333" }}>
        {file.name}
      </span>
    )}
  </div>

  <button
    type="submit"
    disabled={loading}
    style={buttonStyle}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
  >
    {loading ? "Analyzing..." : "Upload & Score"}
  </button>
</form>
      {result && (
        <div
          style={{
            marginTop: 30,
            textAlign: "left",
            maxWidth: "600px",
            margin: "30px auto",
            backgroundColor: "#F8FAFC",
            padding: "20px",
            borderRadius: "10px",
            color: "#fff",
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
          }}
        >
          {result.error ? (
            <div
              style={{
                color: "#fff",
                backgroundColor: "#F8FAFC",
                padding: "10px",
                borderRadius: "6px",
              }}
            >
              {result.error}
            </div>
          ) : (
            <>
              <h3 style={{ color: "#393E46" }}>Overview</h3>
              <pre
                style={{
                  whiteSpace: "pre-wrap",
                  backgroundColor: "#F8FAFC",
                  padding: "10px",
                  borderRadius: "6px",
                  color: "#393E46",
                }}
              >
                {result.overview}
              </pre>
              <h3 style={{ color: "#393E46" }}>
                ATS Score: {result.atsScore}/100
              </h3>
              <h3 style={{ color: "#393E46" }}>Suggestions</h3>
              <div
                style={{
                  backgroundColor: "#F8FAFC",
                  padding: "10px",
                  borderRadius: "6px",
                  color: "#393E46",
                }}
              >
                {result.suggestions}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default UploadResume;
