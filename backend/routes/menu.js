import { Router } from "express";
import { getMenu } from "../controllers/menuController.js"

const router = Router();

// http://localhost:8080/menu
// Get items in menu 
router.get('/', getMenu);

export default router;