import { Router } from 'express'
import { addproperty, getAllProperty, getPropertyById } from '../Controller/propertyController';
import { protectRoute } from './Authenication';
const router = Router();
// const token = req.cookies.token || req.headers.authorization?.split(" ")[1];; // Retrieve the "token" cookie


router.get("/",protectRoute, getAllProperty)
router.post("/add_post", addproperty)
router.get("/:id", getPropertyById)

export default router;