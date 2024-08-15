import { Router } from "express";
import { registerUser, loginUser } from "../controllers/authController.js";

const router = Router();

// http://localhost:8080/auth/register
// POST Register new user
router.post("/register", registerUser);

// http://localhost:8080/auth/login
// POST Login user
router.post("/login", loginUser);

export default router;
