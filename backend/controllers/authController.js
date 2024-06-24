import nedb from "nedb-promises";

// Create user database 
const database = new nedb({ filename: "./data/users.db", autoload: true });

// @desc POST Register a new user in user database 
// @route /auth/register
export const registerUser = async (req, res, next) => {
    try {

    } catch (error) {
        next(error)
    }
}

// @desc POST login a user from the user database  
// @route /auth/login
export const loginUser = async (req, res, next) => {
    try {

    } catch (error) {
        next(error)
    }
}

// @desc POST Logout the current user  
// @route /auth/register
export const logoutUser = async (req, res, next) => {
    try {

    } catch (error) {
        next(error)
    }
}