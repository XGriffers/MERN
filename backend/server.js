const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// CORS options
const corsOptions = {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
 allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  optionsSuccessStatus: 200
};

// Middleware
app.use(cors(corsOptions)); 
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  serverSelectionTimeoutMS: 5000,
  dbName: process.env.DB_NAME,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

app.use((req, res, next) => {
  console.log(`Unhandled request: ${req.method} ${req.url}`);
  next();
});



const projectRoutes = require('./routes/project_route');
const contactRoutes = require('./routes/contact_route');


app.use('/api/projects', projectRoutes);
app.use('/api/contact', contactRoutes);

app.use((req, res, next) => {
  console.log(`Received request: ${req.method} ${req.url}`);
  next();
});



if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = app;