"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const User_controller_1 = require("../Controller/User_controller");
const Authenication_1 = require("./Authenication");
const router = (0, express_1.Router)();
router.get("/", Authenication_1.protectRoute, User_controller_1.getAllUser); // Example of protected route
// router.get("/", getAllUser); // Example of protected route
router.post("/post", User_controller_1.postUser);
router.post("/login", User_controller_1.loginUser);
router.delete("/:id", User_controller_1.deleteUser); // Example of protected route
router.put("/update", User_controller_1.updateUser); // Example of protected route
router.post("/logout", User_controller_1.logout);
router.get("/protected-route", (req, res) => {
    const token = req.cookies.token; // Retrieve the "token" cookie
    if (token) {
        res.status(200).send(`Token: ${token}`);
    }
    else {
        res.status(401).send("No token found");
    }
});
exports.default = router;
//# sourceMappingURL=user.js.map