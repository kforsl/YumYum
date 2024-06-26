import { Router } from "express";
import { getOrders, createOrder, getUserOrders, getOrder, completeOrder } from "../controllers/ordersController.js"

const router = Router();

// http://localhost:8080/orders
// Get all orders sorted by creation time   
router.get('/', getOrders);

// http://localhost:8080/orders
// POST Create a new order
router.post('/', createOrder);

// http://localhost:8080/orders/user
// Get all current users created orders    
router.get('/user', getUserOrders);

// http://localhost:8080/orders/:id
// Get a specifik order  
router.get('/:id', getOrder);

// http://localhost:8080/orders/:id
// POST Change a specifik order to complete   
router.post('/:id', completeOrder);

export default router;