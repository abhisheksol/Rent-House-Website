"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const propertyController_1 = require("../Controller/propertyController");
const Authenication_1 = require("./Authenication");
const router = (0, express_1.Router)();
// const token = req.cookies.token || req.headers.authorization?.split(" ")[1];; // Retrieve the "token" cookie
router.get("/", Authenication_1.protectRoute, propertyController_1.getAllProperty);
router.post("/add_post", propertyController_1.addproperty);
exports.default = router;
//# sourceMappingURL=property_routes.js.map