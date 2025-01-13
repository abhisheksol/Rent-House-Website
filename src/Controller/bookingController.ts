// model Booking {
//     id          Int      @id @default(autoincrement())
//     property_id Int
//     tenant_id   Int
//     start_date  DateTime
//     end_date    DateTime
//     status      String // pending, approved, rejected
//     created_at  DateTime @default(now())
//     property    Property @relation(fields: [property_id], references: [id])
//     tenant      user     @relation(fields: [tenant_id], references: [id])
//   }  bookingController.ts

import prisma from '../Config/dbconfig';
import { Request, Response } from 'express';

// add booking
export const addBooking = async (req: Request, res: Response) => {
    const { property_id, tenant_id, start_date, end_date, status } = req.body;
    try {
        const booking = await prisma.booking.create({
            data: {
                property_id,
                tenant_id,
                start_date,
                end_date,
                status
            }
        });
        res.status(201).json(booking);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// get all bookings
export const getBookings = async (req: Request, res: Response) => {
    try {
        const bookings = await prisma.booking.findMany();
        res.status(200).json(bookings);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}