import { Router } from "express";
import { registerUser, loginUser, logoutUser } from "../controllers/authController.js"

const router = Router();

// http://localhost:1337/auth/register
// Register new user
router.post('/register', registerUser);

// http://localhost:1337/auth/login
// Login user 
router.post('/login', loginUser);

// http://localhost:1337/auth/logout
// logout current user 
router.post('/logout', logoutUser);

export default router;