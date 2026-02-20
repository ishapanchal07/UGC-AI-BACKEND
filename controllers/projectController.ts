import { Request, Response } from "express";
import * as Sentry from "@sentry/node";
import { prisma } from "../configs/prisma.js";
import {v2 as cloudinary } from 'cloudinary'
import { GenerateContentConfig } from "@google/genai";

export const createProject = async (req: Request, res: Response) =>{
    let temProjectId: string;
    const { userId } = req.auth();
    let isCreditDeducted = false;

    const {name = 'New Project', aspectRatio, userPrompt, productName, productDescription, targetLength = 5} = req.body;

    const images: any = req.files;

    if(images.length < 2 || !productName) {
        return res.status(400).json({message: 'Plase upload at least 2 images'})
    }


    const user = await prisma.user.findUnique({
        where: {id: userId}
    })

    if(!user || user.credits < 5){
        return res.status(401).json({message: 'Insufficient credits'})
    }else{
        // deduct credits for image generation
        await prisma.user.update({
            where: {id: userId},
            data: {credits: {decrement: 5}}
        }).then(()=>{isCreditDeducted = true});
    }


    try {
        
        let uploadedImages = await Promise.all(
            images.map(async(item: any)=>{
                let result = await cloudinary.uploader.upload(item.path,
                {resource_type: 'image'});
                return result.secure_url
            })
        )

        const project = await prisma.project.create({
            data: {
                name,
                userId,
                productName,
                productDescription,
                userPrompt,
                aspectRatio,
                targetLength: parseInt(targetLength),
                uploadedImages,
                isGenerating: true
            }
        })

        tempProjectId = project.id;

        const model = 'gemini-3-pro-image-preview';
        
        const generationConfig: GenerateContentConfig = {
            
        }


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