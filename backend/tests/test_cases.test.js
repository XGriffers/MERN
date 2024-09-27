const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../server'); 
const Contact = require('../models/contact_model');
const Project = require('../models/project_model');

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI);
  jest.spyOn(console, 'log').mockImplementation(() => {});
});

afterAll(async () => {
  await mongoose.connection.close();
  console.log.mockRestore();
});

beforeEach(async () => {
  await Contact.deleteMany({});
});

describe('Contact Form Submission', () => {
  it('should create a new contact submission', async () => {
    const response = await supertest(app)
      .post('/api/contact')
      .send({
        name: 'John Doe',
        email: 'john@example.com',
        message: 'This is a test message'
      });

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Contact form submitted successfully');

    const contacts = await Contact.find();
    expect(contacts.length).toBe(1);
    expect(contacts[0].name).toBe('John Doe');
    expect(contacts[0].email).toBe('john@example.com');
    expect(contacts[0].message).toBe('This is a test message');
  });


  it('should return 400 for invalid input', async () => {
    const response = await supertest(app)
      .post('/api/contact')
      .send({
        name: '',
        email: 'invalid-email',
        message: ''
      });

    expect(response.status).toBe(400);
    expect(response.body.errors).toBeDefined();

    const contacts = await Contact.find();
    expect(contacts.length).toBe(0);
  });
});

describe('Project Model Tests', () => {
  beforeEach(async () => {
    await Project.deleteMany({});
  });

  it('should create & save a project successfully', async () => {
    const validProject = new Project({
      title: 'Test Project',
      description: 'This is a test project',
      imageUrl: 'http://test.com/image.jpg',
      projectUrl: 'http://test.com/project',
      technologies: ['Node.js', 'Express', 'MongoDB']
    });
    const savedProject = await validProject.save();
    
    expect(savedProject._id).toBeDefined();
    expect(savedProject.title).toBe(validProject.title);
    expect(savedProject.description).toBe(validProject.description);
  });

  it('should fail to save a project without required fields', async () => {
    const projectWithoutRequiredField = new Project({ title: 'Test Project' });
    let err;
    try {
      await projectWithoutRequiredField.save();
    } catch (error) {
      err = error;
    }
    expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
  });

  it('should retrieve a project', async () => {
    const project = new Project({
      title: 'Retrieve Test',
      description: 'This is a test for retrieval',
      technologies: ['Jest']
    });
    await project.save();

    const foundProject = await Project.findOne({ title: 'Retrieve Test' });
    expect(foundProject.title).toBe(project.title);
  });
});