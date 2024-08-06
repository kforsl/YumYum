import { Router } from "express";
import {
    getOrders,
    createOrder,
    getUserOrders,
    getOrder,
    completeOrder,
} from "../controllers/ordersController.js";
import authenticateToken from "../middlewares/authenticateToken.js";

const router = Router();

// http://localhost:8080/orders
// Get all orders sorted by creation time
router.get("/", authenticateToken, getOrders);

// http://localhost:8080/orders
// POST Create a new order
router.post("/", authenticateToken, createOrder);

// http://localhost:8080/orders/user
// Get all current users created orders
router.get("/user", authenticateToken, getUserOrders);

// http://localhost:8080/orders/:id
// Get a specifik order
router.get("/:id", authenticateToken, getOrder);

// http://localhost:8080/orders/:id
// POST Change a specifik order to complete
router.post("/:id", authenticateToken, completeOrder);

export default router;
