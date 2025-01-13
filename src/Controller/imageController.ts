// model Image {
//     id          Int      @id @default(autoincrement())
//     url         String // URL of the image
//     property_id Int
//     property    Property @relation(fields: [property_id], references: [id])
//   } image contoller.ts

import prisma from '../Config/dbconfig'
import {Request, Response} from 'express'

// add image
export const addImage = async (req: Request, res: Response) => {
    const { url, property_id } = req.body;
   
    // validation

    if( !url || !property_id){
        res.status(400).json({message : "all felid r required "})
        return
    }

    try {
        const image = await prisma.image.create({
            data: {
                url,
                property_id
            }
        });
        res.status(201).json(image);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// get all images
export const getImages = async (req: Request, res: Response) => {
    try {
        const images = await prisma.image.findMany();
        res.status(200).json(images);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}