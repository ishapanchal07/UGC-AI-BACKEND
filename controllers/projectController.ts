import { Request, Response } from "express";
import * as Sentry from "@sentry/node";

export const createProject = async (req: Request, res: Response) =>{
    let temProjectId: string;
    const { userId } = req.auth();
    let isCreditDeducted = false;

    const {name = 'New Project', aspectRatio, userPrompt, productName, productDescription, targetLength = 5} = req.body;

    const images: any = req.files;


    try {
        
    } catch (error: any) {
     Sentry.captureException(error);
     res.status(500).json({ message: error.message})   
    }
}

export const createVideo = async (req: Request, res: Response) =>{
    try {
        
    } catch (error: any) {
     Sentry.captureException(error);
     res.status(500).json({ message: error.message})   
    }
}

export const getAllPublishProjects = async (req: Request, res: Response) =>{
    try {
        
    } catch (error: any) {
     Sentry.captureException(error);
     res.status(500).json({ message: error.message})   
    }
}

export const deleteProject = async (req: Request, res: Response) =>{
    try {
        
    } catch (error: any) {
     Sentry.captureException(error);
     res.status(500).json({ message: error.message})   
    }
}