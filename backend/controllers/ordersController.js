import nedb from "nedb-promises";

// Create user database 
const database = new nedb({ filename: "./data/orders.db", autoload: true });

// @desc GET all created orders in database 
// @route /orders
export const getOrders = async (req, res, next) => {
    try {

    } catch (error) {
        next(error)
    }
}

// @desc POST create a new order in database 
// @route /orders
export const createOrder = async (req, res, next) => {
    try {

    } catch (error) {
        next(error)
    }
}

// @desc GET all orders in database connected to current user 
// @route /orders/user
export const getUserOrders = async (req, res, next) => {
    try {

    } catch (error) {
        next(error)
    }
}

// @desc GET a specific oder if worker or user created order
// @route /orders/:id
export const getOrder = async (req, res, next) => {
    try {

    } catch (error) {
        next(error)
    }
}

// @desc POST Allows workers to change order to complete 
// @route /orders/:id
export const completeOrder = async (req, res, next) => {
    try {

    } catch (error) {
        next(error)
    }
}