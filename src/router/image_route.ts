import {Router} from 'express';
import { addImage, getImages } from '../Controller/imageController';
const router = Router();


router.get('/',getImages)
router.post('/add_img', addImage)


export default router;