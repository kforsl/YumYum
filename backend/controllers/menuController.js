import nedb from "nedb-promises";
import menu from "../json/menu.json" assert { type: "json" };

// Create user database
const database = new nedb({ filename: "./data/menu.db", autoload: true });

// Fills the database with the menuitems if the database is empty
database
    .count({})
    .then((count) => {
        if (count === 0) {
            database.insert(menu);
        }
    })
    .catch((err) => {
        console.log(err);
    });

// @desc GET all the menuitems from the database
// @route /menu
export const getMenu = async (req, res, next) => {
    try {
        const menu = await database.find({});
        res.status(200).send({
            menu,
        });
    } catch (err) {
        next(err);
    }
};
