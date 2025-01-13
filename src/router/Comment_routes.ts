import { Router } from "express";
import { addComment, getComments } from "../Controller/commentController";
const router = Router();


router.get("/", getComments)
router.post("/add_comment", addComment)

export default router;