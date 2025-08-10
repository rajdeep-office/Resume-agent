import React, { useState } from "react";

const UploadResume = () => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

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
        body: formData
      });
      const data = await res.json();
      setResult(data);
    } catch {
      setResult({ error: "Failed to upload or analyze resume." });
    }
    setLoading(false);
  };

  return (
    <div>
      <form onSubmit={handleUpload}>
        <input
          type="file"
          accept=".pdf,.docx,.txt"
          onChange={e => setFile(e.target.files[0])}
          required
        />
        <button type="submit" style="cursor: pointer;
  font-weight: 700;
  transition: all 0.2s;
  padding: 10px 20px;
  border-radius: 100px;
  background: #cfef00;
  border: 1px solid transparent;
  display: flex;
  align-items: center;
  font-size: 15px;" disabled={loading}>
          {loading ? "Analyzing..." : "Upload & Score"}
        </button>
     
      </form>
      {result && (
        <div style={{ marginTop: 20 }}>
          {result.error ? (
            <div style={{ color: "white" }}>{result.error}</div>
          ) : (
            <>
              <h3>Overview</h3>
              <pre style={{ whiteSpace: "pre-wrap" }}>{result.overview}</pre>
              <h3>ATS Score: {result.atsScore}/100</h3>
              <h3>Suggestions</h3>
              <div>{result.suggestions}</div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default UploadResume;
