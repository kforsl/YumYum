import { Router } from "express";
import { registerUser, loginUser, logoutUser } from "../controllers/authController.js"

const router = Router();

// http://localhost:1337/auth/register
// Register new user
router.post('/', registerUser);

// http://localhost:1337/auth/login
// Login user 
router.post('/', loginUser);

// http://localhost:1337/auth/logout
// logout current user 
router.post('/', logoutUser);

export default router;