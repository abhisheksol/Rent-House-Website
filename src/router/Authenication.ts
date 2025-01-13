import jwt from 'jsonwebtoken';

import { Request, Response, NextFunction } from 'express';
import prisma from '../Config/dbconfig';


export const protectRoute = async(req: Request, res: Response, next: NextFunction) => {

    try {
        const token = req.cookies.token || req.headers.authorization?.split(" ")[1];; // Retrieve the "token" cookie
      
        if (!token) { 
             res.status(401).send("No token found"); 
             return;
        }

        const decoded = jwt.verify(token, "your-secret-key");

        console.log('====================================');
        console.log(decoded.id);
        console.log(decoded.email); 
        console.log('====================================');

        if(!decoded){
            res.status(401).json({ message: "Unauthorized" });
        }

        const user= await prisma.user.findUnique({
            where:{
                id:decoded.id
            }
        });
 
        if(!user){
            res.status(401).json({ message: "Unauthorized" });
        }

        console.log('====================================');
        console.log(user);
        console.log('====================================');
        next()

    } catch (error) {
        res.status(401).json({ message: "Unauthorized", error });
    }
}