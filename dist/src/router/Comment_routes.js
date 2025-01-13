"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const commentController_1 = require("../Controller/commentController");
const router = (0, express_1.Router)();
router.get("/", commentController_1.getComments);
router.post("/add_comment", commentController_1.addComment);
exports.default = router;
//# sourceMappingURL=Comment_routes.js.map