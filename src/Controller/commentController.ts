// model Comment {
//     id          Int      @id @default(autoincrement())
//     text        String
//     user_id     Int
//     property_id Int
//     created_at  DateTime @default(now())
//     user        user     @relation(fields: [user_id], references: [id])
//     property    Property @relation(fields: [property_id], references: [id])
//   } commentController.ts

import prisma from '../Config/dbconfig';
import { Request, Response } from 'express';

// add comment
export const addComment = async (req: Request, res: Response) => {
    const { text, user_id, property_id ,email } = req.body;
    try {
        const comment = await prisma.comment.create({
            data: {
                text,
                user_id,
                property_id,
                email
            }
        });
        res.status(201).json(comment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// get all comments
export const getComments = async (req: Request, res: Response) => {
    try {
        const comments = await prisma.comment.findMany();
        res.status(200).json(comments);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}