"use strict";
// model Image {
//     id          Int      @id @default(autoincrement())
//     url         String // URL of the image
//     property_id Int
//     property    Property @relation(fields: [property_id], references: [id])
//   } image contoller.ts
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
exports.getImages = exports.addImage = void 0;
const dbconfig_1 = __importDefault(require("../Config/dbconfig"));
// add image
const addImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { url, property_id } = req.body;
    try {
        const image = yield dbconfig_1.default.image.create({
            data: {
                url,
                property_id
            }
        });
        res.status(201).json(image);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.addImage = addImage;
// get all images
const getImages = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const images = yield dbconfig_1.default.image.findMany();
        res.status(200).json(images);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.getImages = getImages;
//# sourceMappingURL=imageController.js.map