"use strict";
// defining user controller here in typescript
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
exports.deleteUser = exports.updateUser = exports.logout = exports.loginUser = exports.postUser = exports.getAllUser = void 0;
const dbconfig_1 = __importDefault(require("../Config/dbconfig"));
// add jwt authentication here
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const getAllUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield dbconfig_1.default.user.findMany({
            include: {
                properties: true,
                bookings: true
            }
        });
        res.status(200).json(user);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
    }
});
exports.getAllUser = getAllUser;
// Signup User controller
const postUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password, role } = req.body;
    // add validation 
    if (!name || !email || !password || !role) {
        res.status(400).json({ message: "All fields are required" });
    }
    try {
        const user = yield dbconfig_1.default.user.create({
            data: {
                name,
                email,
                password,
                role
            }
        });
        const token = jsonwebtoken_1.default.sign({ id: user.id, email: user.email }, "secretkey", {
            expiresIn: "2h"
        });
        console.log(token);
        user.token = token;
        res.status(200).json(user);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
    }
});
exports.postUser = postUser;
// login user controller
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400).json({ message: "All fields are required" });
        return;
    }
    try {
        const user = yield dbconfig_1.default.user.findFirst({
            where: {
                email,
                password, // Note: Plain-text password is insecure; use hashing (e.g., bcrypt).
            },
        });
        if (!user) {
            res.status(400).json({ message: "Invalid credentials" });
            return;
        }
        const token = jsonwebtoken_1.default.sign({ id: user.id, email: user.email }, "your-secret-key", {
            expiresIn: "2h",
        });
        res.cookie("token", token, { httpOnly: true, secure: false, sameSite: "none" });
        res.status(200).json(Object.assign(Object.assign({}, user), { token }));
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something went wrong" });
    }
});
exports.loginUser = loginUser;
// logout user controller
const logout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.clearCookie("token");
    res.status(200).json({ message: "Logged out" });
});
exports.logout = logout;
// update user controller
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, name, email, password } = req.body;
    try {
        const user = yield dbconfig_1.default.user.update({
            where: {
                id: id
            },
            data: {
                name,
                email,
                password
            }
        });
        res.status(200).json(user);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
    }
});
exports.updateUser = updateUser;
// delete user controller
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    console.log('====================================');
    console.log(id);
    console.log('====================================');
    try {
        const data = yield dbconfig_1.default.user.delete({
            where: {
                id: parseInt(id)
            }
        });
        res.status(200).json({ message: "User deleted successfully", data });
    }
    catch (error) {
        res.status(500).json({ message: error });
    }
});
exports.deleteUser = deleteUser;
//# sourceMappingURL=User_controller.js.map