"use strict";
// defining user routes in ts
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const User_controller_1 = require("../Controller/User_controller");
const router = (0, express_1.Router)();
router.get("/", User_controller_1.getAllUser);
router.post("/post", User_controller_1.postUser);
router.delete("/:id", User_controller_1.deleteUser);
router.put("/update", User_controller_1.updateUser);
exports.default = router;
//# sourceMappingURL=user.js.map