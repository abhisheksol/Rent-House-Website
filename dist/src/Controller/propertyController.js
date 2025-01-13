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
exports.getAllProperty = exports.addproperty = void 0;
const dbconfig_1 = __importDefault(require("../Config/dbconfig"));
// post all property controller
const addproperty = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description, address, rent_price, landlord_id, room, city } = req.body;
    try {
        const property = yield dbconfig_1.default.property.create({
            data: {
                title,
                description,
                address,
                rent_price,
                landlord_id,
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
    try {
        const property_data = yield dbconfig_1.default.property.findMany({
            include: {
                images: true,
                bookings: true,
                comments: true
            }
        });
        res.status(200).json(property_data);
    }
    catch (error) {
        res.status(500).json({ message: error });
    }
});
exports.getAllProperty = getAllProperty;
//# sourceMappingURL=propertyController.js.map