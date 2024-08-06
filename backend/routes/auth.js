import { Router } from "express";
import {
    registerUser,
    loginUser,
    logoutUser,
} from "../controllers/authController.js";
import authenticateToken from "../middlewares/authenticateToken.js";

const router = Router();

// http://localhost:8080/auth/register
// Register new user
router.post("/register", registerUser);

// http://localhost:8080/auth/login
// Login user
router.post("/login", loginUser);

// http://localhost:8080/auth/logout
// logout current user
router.post("/logout", authenticateToken, logoutUser);

export default router;
