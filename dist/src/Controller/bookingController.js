"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBookings = exports.addBooking = void 0;
const dbconfig_1 = __importDefault(require("../Config/dbconfig"));
// add booking
const addBooking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { property_id, tenant_id, start_date, end_date, status } = req.body;
    try {
        const booking = yield dbconfig_1.default.booking.create({
            data: {
                property_id,
                tenant_id,
                start_date,
                end_date,
                status
            }
        });
        res.status(201).json(booking);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.addBooking = addBooking;
// get all bookings
const getBookings = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bookings = yield dbconfig_1.default.booking.findMany();
        res.status(200).json(bookings);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.getBookings = getBookings;
//# sourceMappingURL=bookingController.js.map