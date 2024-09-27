const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); 
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  serverSelectionTimeoutMS: 5000,
  dbName: process.env.DB_NAME,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Routes
const projectRoutes = require('./routes/project_route');
const contactRoutes = require('./routes/contact_route');

app.use('/api/projects', projectRoutes);
app.use('/api/contact', contactRoutes);

if (process.env.NODE_ENV !== 'test') {
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = app;
