"use strict";
// model Comment {
//     id          Int      @id @default(autoincrement())
//     text        String
//     user_id     Int
//     property_id Int
//     created_at  DateTime @default(now())
//     user        user     @relation(fields: [user_id], references: [id])
//     property    Property @relation(fields: [property_id], references: [id])
//   } commentController.ts
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
exports.getComments = exports.addComment = void 0;
const dbconfig_1 = __importDefault(require("../Config/dbconfig"));
// add comment
const addComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { text, user_id, property_id } = req.body;
    try {
        const comment = yield dbconfig_1.default.comment.create({
            data: {
                text,
                user_id,
                property_id
            }
        });
        res.status(201).json(comment);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.addComment = addComment;
// get all comments
const getComments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const comments = yield dbconfig_1.default.comment.findMany();
        res.status(200).json(comments);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.getComments = getComments;
//# sourceMappingURL=commentController.js.map