import prisma from '../Config/dbconfig';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';


// post all property controller
export const addproperty = async (req: Request, res: Response) => {

    const { title, description, address, rent_price, room, city } = req.body;

    if (!title || !description || !address || !rent_price || !room || !city) {
        res.status(400).json({ message: "All fields are required" });
        return;
    }

    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];; // Retrieve the "token" cookie

    if (!token) {
        res.status(401).send("No token found");
        return;
    }

    const decoded = jwt.verify(token, "your-secret-key");

    console.log('============= testing =======================');
    console.log(decoded.id);
    console.log(decoded.email);
    console.log('====================================');
    try {
        const property = await prisma.property.create({
            data: {
                title,
                description,
                address,
                rent_price,
                landlord_id: decoded.id,
                room,
                city

            }
        })
        res.status(200).json(property);

    } catch (error) {
        res.status(500).json({ message: error });
    }

}


// get all property controller

export const getAllProperty = async (req: Request, res: Response) => {
    try {
        const property_data = await prisma.property.findMany({
            include: {
                images: true,
                bookings: true,
                comments: true
            }
        })

        const token = req.cookies.token || req.headers.authorization?.split(" ")[1];; // Retrieve the "token" cookie

        if (!token) {
            res.status(401).send("No token found");
            return;
        }

        const decoded = jwt.verify(token, "your-secret-key");

        console.log('============= testing =======================');
        console.log(decoded.id);
        console.log(decoded.email);
        console.log('====================================');


        res.status(200).json({
            message: "Properties fetched successfully",
            data: property_data,
            user: {
                id: decoded.id,
                email: decoded.email,
            },
        });
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

// get property by id controller

// get property by id controller
export const getPropertyById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const tenant_id = req.query.tenant_id;



    try {
        const property = await prisma.property.findUnique({
            where: {
                id: parseInt(id)
            },
            include: {
                images: true,
                bookings: true,   // Include the bookings
                comments: true
            }
        });

        // Safely convert tenant_id to a number for comparison
        const tenantIdNumber = tenant_id ? parseInt(tenant_id as string, 10) : null;

        // Check if the tenant has already booked the property
        const isBooked = tenantIdNumber
            ? property?.bookings.some(booking => booking.tenant_id === tenantIdNumber)
            : false;
        console.log(isBooked, {});


        res.status(200).json({ property , isBooked});  // Send the booking status

    } catch (error) {
        res.status(500).json({ message: error });
    }
};
