const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/yourDatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Schema and Model
const StudentProfileSchema = new mongoose.Schema({
  name: String,
  courseMajor: String,
  bio: String,
  skills: String,
  appointmentHistory: String,
  contactInfo: String,
});

const StudentProfile = mongoose.model('StudentProfile', StudentProfileSchema);

// API Endpoint
app.post('/api/updateProfile', async (req, res) => {
  try {
    const { name, courseMajor, bio, skills, appointmentHistory, contactInfo } = req.body;
    
    if (!name || !skills) {
      return res.status(400).send({ message: 'Name and skills are required.' });
    }

    const profile = await StudentProfile.findOneAndUpdate(
      { /* some condition to find the profile, e.g., userId */ },
      { name, courseMajor, bio, skills, appointmentHistory, contactInfo },
      { new: true }
    );

    res.status(200).send(profile);
  } catch (error) {
    res.status(500).send({ message: 'Error updating profile.', error });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
