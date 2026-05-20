const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/profile', (req, res) => {
  res.json({
    name: "Nilaam",
    role: "Web Developer & ICT Educator",
    location: "Jaffna, Sri Lanka 🇱🇰",
    bio: "React மற்றும் Node.js பயன்படுத்தி Web Systems உருவாக்குகிறேன். University of Jaffna-வில் ICT Workshop நடத்துகிறேன்.",
    skills: ["React", "Node.js", "JavaScript", "Tailwind CSS", "Vite", "Git"]
  });
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log(`📬 Message from: ${name} | ${email}`);
  console.log(`💬 ${message}`);
  res.json({ success: true });
});

app.listen(5000, () => {
  console.log('✅ Server Running on port 5000');
});