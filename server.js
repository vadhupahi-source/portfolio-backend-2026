const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const app = express();

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

app.get('/api/profile', (req, res) => {
  res.json({
    name: "Nilaam",
    role: "Web Developer & ICT Educator",
    location: "Jaffna, Sri Lanka 🇱🇰",
    bio: "React மற்றும் Node.js பயன்படுத்தி Web Systems உருவாக்குகிறேன். University of Jaffna-வில் ICT Workshop நடத்துகிறேன்.",
    skills: ["React", "Node.js", "JavaScript", "Tailwind CSS", "Vite", "Git"]
  });
});

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `📬 Portfolio Message from ${name}`,
      html: `
        <h2>புதிய Message வந்தது!</h2>
        <p><b>பெயர்:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
      `
    });
    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false });
  }
});

app.listen(5000, () => {
  console.log('✅ Server Running on port 5000');
});