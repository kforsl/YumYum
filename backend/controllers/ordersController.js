import nedb from "nedb-promises";
import { v4 } from "uuid";

// Create user database
const database = new nedb({ filename: "./data/orders.db", autoload: true });

// @desc GET all created orders in database
// @route /orders
export const getOrders = async (req, res, next) => {
    try {
        const allOrders = await database
            .find({})
            .sort({ orderCreated: 1 })
            .exec();

        res.status(202).send({
            success: true,
            status: 202,
            message: "Successfully got all orders",
            orders: allOrders,
        });
    } catch (error) {
        next(error);
    }
};

// @desc POST create a new order in database
// @route /orders
export const createOrder = async (req, res, next) => {
    try {
        const cart = req.body.cart;
        const user = req.user;

        const userid = user.userid;
        let totalPrice = 0;

        if (cart.length < 1) {
            const err = new Error("can't create an empty order");
            err.status = 403;
            return next(err);
        }

        cart.forEach((item) => {
            totalPrice += item.price * item.inCart;
        });

        let waitTime = 6;
        const waitingOrders = await database.find({ orderDone: false });

        waitingOrders.forEach((order) => {
            waitTime += 2;
        });

        const newOrder = {
            orderid: v4().slice(0, 8).toUpperCase(),
            orderCreated: new Date(),
            orderDone: false,
            userid,
            order: cart,
            est: waitTime,
            totalPrice,
        };

        database.insert(newOrder);

        res.status(201).send({
            success: true,
            status: 201,
            message: "Successfully created order",
            order: newOrder,
        });
    } catch (error) {
        next(error);
    }
};

// @desc GET all orders in database connected to current user
// @route /orders/user
export const getUserOrders = async (req, res, next) => {
    try {
        const userOrders = await database.find({
            userid: "userid",
        });

        res.status(202).send({
            success: true,
            status: 202,
            message: "Successfully got all the users orders",
            order: userOrders,
        });
    } catch (error) {
        next(error);
    }
};

// @desc GET a specific oder if worker or user created order
// @route /orders/:id
export const getOrder = async (req, res, next) => {
    try {
        const user = req.user;
        const id = req.params.id;

        const order = await database.findOne({ orderid: id });

        if (!order) {
            const err = new Error("No order found with that id");
            err.status = 404;
            return next(err);
        }

        if (user.userid !== order.userid) {
            const err = new Error("Access denied, you can't see this order");
            err.status = 401;
            return next(err);
        }

        res.status(202).send({
            success: true,
            status: 202,
            message: "Successfully got specific order",
            order: order,
        });
    } catch (error) {
        next(error);
    }
};

// @desc POST Allows workers to change order to complete
// @route /orders/:id
export const completeOrder = async (req, res, next) => {
    try {
        const id = req.params.id;
        const updatedOrder = req.body.order;

        const order = await database.findOne({ orderid: id });

        if (!order) {
            const err = new Error("No order found with that id");
            err.status = 404;
            return next(err);
        }

        database.update({ orderid: order.orderid }, updatedOrder);

        res.status(200).send({
            success: true,
            status: 200,
            message: "Successfully change an order to completed",
            order: updatedOrder,
        });
    } catch (error) {
        next(error);
    }
};
