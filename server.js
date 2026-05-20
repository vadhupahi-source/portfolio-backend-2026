const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/profile', (req, res) => {
  res.json({
    name: "Mohammed Nilaam",
    role: "Aspiring IT Professional",
    location: "Valaichenai, Batticaloa, Sri Lanka 🇱🇰",
    email: "mohammednilam4433@gmail.com",
    phone: "0764433998",
    bio: "Motivated and dedicated IT graduate from University of Jaffna with knowledge in Information Technology, Web Designing, and Computer Applications.",
    education: [
      { degree: "Bachelor of Arts (B.A.)", place: "University of Jaffna", year: "2026", stream: "IT, ELT, Economics" },
      { degree: "G.C.E. Advanced Level", place: "Arts Stream", year: "2020", stream: "Z-Score: 1.5932" },
      { degree: "G.C.E. Ordinary Level", place: "", year: "2017/2018", stream: "" }
    ],
    experience: [
      { title: "English Teacher", place: "J/Kokuvil Hindu College", period: "Oct 2025 – Nov 2025" }
    ],
    technicalSkills: ["Python", "HTML", "CSS", "JavaScript", "MySQL", "WordPress", "Canva", "MS Office"],
    softSkills: ["Leadership", "Teamwork", "Communication", "Problem-Solving", "Decision-Making", "Project Management"],
    certifications: [
      "Journey to Salesforce Program (Cohort 2) – Distinction Pass",
      "IT Field Career Development Workshop (IFCD-2025)",
      "Diploma in Human Psychology",
      "Diploma in Organization Behaviorism",
      "Certificate in Fundamentals – Future Career Bridge Program"
    ],
    languages: ["Tamil - Fluent", "English - Intermediate"]
  });
});

app.listen(5000, () => {
  console.log('✅ Server Running on port 5000');
});