const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files from the "public" directory

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/studentProfiles', {
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

// API Endpoint to Update Profile
app.post('/update-profile', async (req, res) => {
  try {
    const { name, courseMajor, bio, skills, appointmentHistory, contactInfo } = req.body;

    if (!name || !skills) {
      return res.status(400).send({ message: 'Name and skills are required.' });
    }

    // Update or create the student profile
    const profile = await StudentProfile.findOneAndUpdate(
      { /* You may use a unique identifier here */ },
      { name, courseMajor, bio, skills, appointmentHistory, contactInfo },
      { new: true, upsert: true } // `upsert: true` will create a new document if one doesn't exist
    );

    res.status(200).send(profile);
  } catch (error) {
    res.status(500).send({ message: 'Error updating profile.', error });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
