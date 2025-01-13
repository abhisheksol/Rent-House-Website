"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const imageController_1 = require("../Controller/imageController");
const router = (0, express_1.Router)();
router.get('/', imageController_1.getImages);
router.post('/add_img', imageController_1.addImage);
exports.default = router;
//# sourceMappingURL=image_route.js.map