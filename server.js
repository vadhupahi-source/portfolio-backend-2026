const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// உங்கள் Portfolio தகவல்கள்
app.get('/api/profile', (req, res) => {
  res.json({
    name: "Nilaam",
    role: "Web Developer",
    location: "Jaffna, Sri Lanka",
    skills: ["React", "Node.js", "JavaScript"]
  });
});

app.listen(5000, () => {
  console.log('✅ Server Running on port 5000');
});