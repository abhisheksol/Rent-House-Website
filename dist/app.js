"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("./router/user"));
const property_routes_1 = __importDefault(require("./router/property_routes"));
const Booking_routes_1 = __importDefault(require("./router/Booking_routes"));
const image_route_1 = __importDefault(require("./router/image_route"));
const Comment_routes_1 = __importDefault(require("./router/Comment_routes"));
// adding cors to allow cross origin request
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const app = (0, express_1.default)();
const port = 3000;
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)({
    origin: 'http://localhost:3001', // Replace with your frontend URL
    credentials: true, // Include if your API uses cookies or auth headers
}));
// routes here
app.use("/user", user_1.default);
app.use("/property", property_routes_1.default);
app.use("/booking", Booking_routes_1.default);
app.use("/images", image_route_1.default);
app.use("/Comment", Comment_routes_1.default);
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map