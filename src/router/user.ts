import { Router } from 'express';
import { deleteUser, getAllUser, loginUser, logout, postUser, updateUser } from '../Controller/User_controller';
import { protectRoute } from './Authenication';

const router = Router();

router.get("/",protectRoute, getAllUser); // Example of protected route
// router.get("/", getAllUser); // Example of protected route
router.post("/post", postUser);
router.post("/login", loginUser);
router.delete("/:id", deleteUser); // Example of protected route
router.put("/update", updateUser); // Example of protected route
router.post("/logout", logout)



router.get("/protected-route", (req, res) => {
    const token = req.cookies.token; // Retrieve the "token" cookie
    if (token) {
        res.status(200).send(`Token: ${token}`);
    } else {
        res.status(401).send("No token found");
    }
});
export default router;
