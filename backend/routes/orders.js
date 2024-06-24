import { Router } from "express";
import { getOrders, createOrder, getUserOrders, getOrder, completeOrder } from "../controllers/ordersController.js"

const router = Router();

// http://localhost:1337/orders
// Get all orders sorted by creation time   
router.get('/', getOrders);

// http://localhost:1337/orders
// POST Create a new order
router.post('/', createOrder);

// http://localhost:1337/orders/user
// Get all current users created orders    
router.get('/', getUserOrders);

// http://localhost:1337/orders/:id
// Get a specifik order  
router.get('/', getOrder);

// http://localhost:1337/orders/:id
// POST Change a specifik order to complete   
router.post('/', completeOrder);

export default router;