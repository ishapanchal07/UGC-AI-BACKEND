import express from 'express';
import { createProject, createVideo, deleteProject, getAllPublishProjects } from '../controllers/projectController.js';
import { protect } from '../middlewares/auth.js';

const projectRouter = express.Router()

projectRouter.post('/create', protect, createProject)
projectRouter.post('/video', protect, createVideo)
projectRouter.get('/published', getAllPublishProjects)
projectRouter.delete('/:projectId', protect, deleteProject)


export default projectRouter