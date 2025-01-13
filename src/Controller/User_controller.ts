// defining user controller here in typescript

import { Request, Response } from "express";
import prisma from '../Config/dbconfig';


// add jwt authentication here
import jwt from 'jsonwebtoken';
// import cookieParser from 'cookie-parser';
// get all user controller

interface User {

    id: number;
    name: string;
    email: string;
    password: string;
    role: string;
    created_at: Date;
    token?: string;
}
export const getAllUser = async (req: Request, res: Response) => {
    try {

        const user = await prisma.user.findMany({
            include: {
                properties: true,
                bookings: true
            }
        });
        res.status(200).json(user);

    } catch (error) {

        console.log(error);
        res.status(500).json({ message: error });

    }
};

// Signup User controller

export const postUser = async (req: Request, res: Response) => {
    const { name, email, password, role } = req.body;
    // add validation 
    if (!name || !email || !password || !role) {
        res.status(400).json({ message: "All fields are required" });
    }
    try {

        const user = await prisma.user.create({
            data: {
                name,
                email,
                password,
                role
            }
        }) as User
        const token = jwt.sign({ id: user.id, email: user.email }, "secretkey",
            {
                expiresIn: "2h"
            }
        )
        console.log(token);
        user.token = token;

        res.status(200).json(user);

    }
    catch (error) {

        console.log(error);
        res.status(500).json({ message: error });

    }
}
// login user controller

export const loginUser = async (req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400).json({ message: "All fields are required" });
        return;
    }

    try {
        const user = await prisma.user.findFirst({
            where: {
                email,
                password, // Note: Plain-text password is insecure; use hashing (e.g., bcrypt).
            },
        });

        if (!user) {
            res.status(400).json({ message: "Invalid credentials" });
            return;
        }

        const token = jwt.sign({ id: user.id ,email: user.email}, "your-secret-key", {
            expiresIn: "2h",
        });

        res.cookie("token", token, { httpOnly: true, secure: false, sameSite: "none" });
        res.status(200).json({ ...user, token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something went wrong" });
    }
};


// logout user controller

export const logout = async (req: Request, res: Response) => {
    res.clearCookie("token");
    res.status(200).json({ message: "Logged out" });
}
// update user controller

export const updateUser = async (req: Request, res: Response) => {
    const { id, name, email, password } = req.body;
    try {
        const user = await prisma.user.update({
            where: {
                id: id
            },
            data: {
                name,
                email,
                password
            }
        })
        res.status(200).json(user);
    }
    catch (error) {

        console.log(error);
        res.status(500).json({ message: error });

    }
}

// delete user controller

export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    console.log('====================================');
    console.log(id);
    console.log('====================================');
    try {
        const data = await prisma.user.delete({
            where: {
                id: parseInt(id)
            }
        })
        res.status(200).json({ message: "User deleted successfully", data });
    } catch (error) {
        res.status(500).json({ message: error });
    }
}
