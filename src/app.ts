import express from "express";
import User from "./router/user";
import propertys from "./router/property_routes";
import Booking from "./router/Booking_routes";
import Images from "./router/image_route";
import Comments from "./router/Comment_routes";
// adding cors to allow cross origin request
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
const port = 3000;

app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: 'http://localhost:3001', // Replace with your frontend URL
  credentials: true, // Include if your API uses cookies or auth headers
}));

// routes here
app.use("/user", User);
app.use("/property", propertys)
app.use("/booking", Booking)
app.use("/images", Images)
app.use("/Comment", Comments)


app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
