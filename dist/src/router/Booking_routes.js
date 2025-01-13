"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bookingController_1 = require("../Controller/bookingController");
const router = (0, express_1.Router)();
router.get('/', bookingController_1.getBookings);
router.post('/add_booking', bookingController_1.addBooking);
exports.default = router;
//# sourceMappingURL=Booking_routes.js.map