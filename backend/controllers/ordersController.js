import nedb from "nedb-promises";
import { v4 } from "uuid"

// Create user database 
const database = new nedb({ filename: "./data/orders.db", autoload: true });

// @desc GET all created orders in database 
// @route /orders
export const getOrders = async (req, res, next) => {
    try {
        if (global.currentUser.role !== "worker") {
            const err = new Error("Access denied")
            err.status = 400;
            return next(err)
        }

        const allOrders = await database.find({})

        res.status(200).send({
            success: true,
            status: 200,
            message: "Successfully got all orders",
            orders: allOrders
        })
    } catch (error) {
        next(error)
    }
}

// @desc POST create a new order in database 
// @route /orders
export const createOrder = async (req, res, next) => {
    try {
        const cart = req.body.cart
        const userid = !global.currentUser ? "guest" : global.currentUser.userid

        if (cart.length < 1) {
            const err = new Error("can't create an empty order")
            err.status = 400;
            return next(err)
        }

        const newOrder = {
            orderid: v4().slice(0, 8),
            orderCreated: new Date,
            orderDone: false,
            userid,
            order: cart,

        }

        database.insert(newOrder)

        res.status(200).send({
            success: true,
            status: 200,
            message: "Successfully created order",
            order: newOrder
        })

    } catch (error) {
        next(error)
    }
}

// @desc GET all orders in database connected to current user 
// @route /orders/user
export const getUserOrders = async (req, res, next) => {
    try {
        if (global.currentUser === null) {
            const err = new Error("You need to login to see your orders")
            err.status = 400;
            return next(err)
        }

        const userOrders = await database.find({ userid: global.currentUser.userid })

        res.status(200).send({
            success: true,
            status: 200,
            message: "Successfully got all the users orders",
            order: userOrders
        })
    } catch (error) {
        next(error)
    }
}

// @desc GET a specific oder if worker or user created order
// @route /orders/:id
export const getOrder = async (req, res, next) => {
    try {
        const id = req.params.id
        const order = await database.findOne({ orderid: id })

        if (global.currentUser === null) {

            if (order.userid !== "guest") {
                const err = new Error("You need to login to see your orders")
                err.status = 400;
                return next(err)
            }

            res.status(200).send({
                success: true,
                status: 200,
                message: "Successfully got specific Guest order",
                order: order
            })

        }


        if (global.currentUser.role !== "worker" && global.currentUser.role !== "customer") {
            const err = new Error("Access denied, you can't see this order")
            err.status = 400;
            return next(err)
        }

        if (!order) {
            const err = new Error("No order found with that id")
            err.status = 400;
            return next(err)
        }

        if (global.currentUser.userid !== order.userid) {
            const err = new Error("Access denied, you can't see this order")
            err.status = 400;
            return next(err)
        }

        res.status(200).send({
            success: true,
            status: 200,
            message: "Successfully got specific order",
            order: order
        })

    } catch (error) {
        next(error)
    }
}

// @desc POST Allows workers to change order to complete 
// @route /orders/:id
export const completeOrder = async (req, res, next) => {
    try {
        const id = req.params.id

        if (global.currentUser.role !== "worker") {
            const err = new Error("Access denied, you can't change orderstatus")
            err.status = 400;
            return next(err)
        }

        const order = await database.findOne({ orderid: id })
        console.log(order);
        if (!order) {
            const err = new Error("No order found with that id")
            err.status = 400;
            return next(err)
        }
        order.orderDone = true

        database.update({ orderid: order.orderid }, order)

        res.status(200).send({
            success: true,
            status: 200,
            message: "Successfully change an order to completed",
        })
    } catch (error) {
        next(error)
    }
}