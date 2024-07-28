import nedb from "nedb-promises";
import { v4 } from "uuid"

// Create user database 
const database = new nedb({ filename: "./data/users.db", autoload: true });

// @desc POST Register a new user in user database 
// @route /auth/register
export const registerUser = async (req, res, next) => {
    try {
        if (global.currentUser !== null) {
            const err = new Error("You are already logged in. No need for you to create a new user")
            err.status = 400;
            return next(err)
        }
        const username = req.body.username;
        const email = req.body.email

        const foundUsername = await database.findOne({ username })
        const foundEmail = await database.findOne({ email })

        if (foundUsername) {
            const err = new Error("Username is already in used try another one")
            err.status = 400;
            return next(err)
        }
        if (foundEmail) {
            const err = new Error("Email is already in used try another one")
            err.status = 400;
            return next(err)
        }

        let generatedID = v4().slice(0, 6).toUpperCase()
        let foundUserid = await database.findOne({ userid: generatedID })
        while (foundUserid) {
            generatedID = v4().slice(0, 6).toUpperCase()
            foundUserid = await database.findOne({ userid: generatedID })
        }

        const userInformation = {
            userid: generatedID,
            username,
            email,
            password: req.body.password,
            role: "customer"
        }

        database.insert(userInformation)
        global.currentUser = userInformation
        res.status(200).send({
            success: true,
            status: 200,
            message: "User Successfully created, Welcome to Yum Yum.",
        })
    } catch (error) {
        next(error)
    }
}

// @desc POST login a user from the user database  
// @route /auth/login
export const loginUser = async (req, res, next) => {
    try {
        if (global.currentUser !== null) {
            const err = new Error("You are currently logged in")
            err.status = 400;
            return next(err)
        }
        const foundUser = await database.findOne({ username: req.body.username, password: req.body.password })
        if (!foundUser) {
            const err = new Error("validation fail try again")
            err.status = 400;
            return next(err)
        }
        global.currentUser = foundUser
        res.status(200).send({
            success: true,
            status: 200,
            message: "Welcome back to Yum Yum, you are now logged in."
        })
    } catch (error) {
        next(error)
    }
}

// @desc POST Logout the current user  
// @route /auth/logout
export const logoutUser = async (req, res, next) => {
    try {
        if (global.currentUser === null) {
            const err = new Error("No user logged in to logout")
            err.status = 400;
            return next(err)
        }
        global.currentUser = null
        res.status(200).send({
            success: true,
            status: 200,
            message: "You successfuly logged out. Come back soon"
        })
    } catch (error) {
        next(error)
    }
}