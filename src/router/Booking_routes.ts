import {Router} from 'express';
import { addBooking, getBookings } from '../Controller/bookingController';
const router = Router();



router.get('/', getBookings)
router.post('/add_booking', addBooking)

export default router;