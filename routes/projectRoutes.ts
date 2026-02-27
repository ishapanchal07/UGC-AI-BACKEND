import express from 'express';
import { createProject, createVideo, deleteProject, getAllPublishProjects } from '../controllers/projectController.js';
import upolad from '../configs/multer.js';

const projectRouter = express.Router()

projectRouter.post('/create', upolad.array('images', 2), createProject)
projectRouter.post('/video', createVideo)
projectRouter.get('/published', getAllPublishProjects)
projectRouter.delete('/:projectId', deleteProject)

export default projectRouter