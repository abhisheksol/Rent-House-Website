"use strict";
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
exports.getPropertyById = exports.getAllProperty = exports.addproperty = void 0;
const dbconfig_1 = __importDefault(require("../Config/dbconfig"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// post all property controller
const addproperty = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { title, description, address, rent_price, room, city } = req.body;
    if (!title || !description || !address || !rent_price || !room || !city) {
        res.status(400).json({ message: "All fields are required" });
        return;
    }
    const token = req.cookies.token || ((_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1]);
    ; // Retrieve the "token" cookie
    if (!token) {
        res.status(401).send("No token found");
        return;
    }
    const decoded = jsonwebtoken_1.default.verify(token, "your-secret-key");
    console.log('============= testing =======================');
    console.log(decoded.id);
    console.log(decoded.email);
    console.log('====================================');
    try {
        const property = yield dbconfig_1.default.property.create({
            data: {
                title,
                description,
                address,
                rent_price,
                landlord_id: decoded.id,
                room,
                city
            }
        });
        res.status(200).json(property);
    }
    catch (error) {
        res.status(500).json({ message: error });
    }
});
exports.addproperty = addproperty;
// get all property controller
const getAllProperty = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const property_data = yield dbconfig_1.default.property.findMany({
            include: {
                images: true,
                bookings: true,
                comments: true
            }
        });
        const token = req.cookies.token || ((_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1]);
        ; // Retrieve the "token" cookie
        if (!token) {
            res.status(401).send("No token found");
            return;
        }
        const decoded = jsonwebtoken_1.default.verify(token, "your-secret-key");
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
    }
    catch (error) {
        res.status(500).json({ message: error });
    }
});
exports.getAllProperty = getAllProperty;
// get property by id controller
// get property by id controller
const getPropertyById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { tenant_id } = req.body; // Assuming you send tenant_id in the request
    try {
        const property = yield dbconfig_1.default.property.findUnique({
            where: {
                id: parseInt(id)
            },
            include: {
                images: true,
                bookings: true, // Include the bookings
                comments: true
            }
        });
        // Check if the tenant has already booked the property
        const isBooked = property === null || property === void 0 ? void 0 : property.bookings.some(booking => booking.tenant_id === tenant_id);
        res.status(200).json({ property, isBooked }); // Send the booking status
    }
    catch (error) {
        res.status(500).json({ message: error });
    }
});
exports.getPropertyById = getPropertyById;
//# sourceMappingURL=propertyController.js.map