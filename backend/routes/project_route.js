const express = require('express');
const router = express.Router();
const Project = require('../models/project_model');

// Error handling middleware
const asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

// Get all projects
router.get('/', asyncHandler(async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
}));

// Create a new project
router.post('/', async (req, res) => {
    try {
      const newProject = new Project(req.body);
      await newProject.save();
      res.status(201).json(newProject);
    } catch (error) {
      if (error.name === 'ValidationError') {
        return res.status(400).json({ message: 'Validation Error', errors: error.errors });
      }
      res.status(500).json({ message: 'Server Error', error: error.message });
    }
  });

// Get a specific project
router.get('/:id', asyncHandler(async (req, res) => {
  const project = await Project.findById(req.params.id);
  if (!project) {
    res.status(404);
    throw new Error('Project not found');
  }
  res.json(project);
}));

// Update a project
router.put('/:id', asyncHandler(async (req, res) => {
  const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
  if (!project) {
    res.status(404);
    throw new Error('Project not found');
  }
  res.json(project);
}));

// Delete a project
router.delete('/:id', asyncHandler(async (req, res) => {
  const project = await Project.findByIdAndDelete(req.params.id);
  if (!project) {
    res.status(404);
    throw new Error('Project not found');
  }
  res.json({ message: 'Project deleted successfully' });
}));

// Error handling middleware
router.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(res.statusCode || 500).json({
    message: err.message,
    errors
  });
});

module.exports = router;