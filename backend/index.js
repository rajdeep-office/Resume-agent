const express = require('express');
const multer = require('multer');
const pdfParse = require('pdf-parse');
const cors = require('cors');
const fs = require('fs');

const app = express();
app.use(cors());

const upload = multer({ dest: 'uploads/' });

const KEYWORDS = [
  "JavaScript", "Python", "Node.js", "React", "API", "SQL", "AWS", "Git", "Agile", "Communication", "Teamwork"
];

function simpleATSScore(text) {
  // Count keywords
  let score = 0;
  let found = [];
  KEYWORDS.forEach(word => {
    if (text.toLowerCase().includes(word.toLowerCase())) {
      score += 10;
      found.push(word);
    }
  });
  // Cap at 100
  return {
    score: Math.min(score, 100),
    found
  };
}

function suggestImprovements(foundKeywords) {
  const missing = KEYWORDS.filter(k => !foundKeywords.includes(k));
  if (missing.length === 0) {
    return "Great! Your resume contains all major keywords.";
  }
  return `Consider including these key terms/skills if relevant: ${missing.join(', ')}`;
}

app.post('/api/upload', upload.single('resume'), async (req, res) => {
  try {
    const file = req.file;
    const dataBuffer = fs.readFileSync(file.path);
    const data = await pdfParse(dataBuffer);

    const { score, found } = simpleATSScore(data.text);
    const suggestions = suggestImprovements(found);

    // Clean up uploaded file
    fs.unlinkSync(file.path);

    res.json({
      overview: data.text.slice(0, 500) + (data.text.length > 500 ? '...' : ''),
      atsScore: score,
      suggestions
    });
  } catch (e) {
    res.status(500).json({ error: 'Failed to parse resume. Please upload a valid PDF file.' });
  }
});

app.listen(5000, () => {
  console.log('Backend running on http://localhost:5000');
});
