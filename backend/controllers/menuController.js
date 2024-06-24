import nedb from "nedb-promises";

// Create user database 
const database = new nedb({ filename: "./data/menu.db", autoload: true });

// Fills the database with the menuitems if the database is empty
database.count({})
    .then(count => {
        if (count === 0) {
            database, insert({
                "wontons": [
                    {
                        "name": "Karlstad",
                        "desc": "En god friterad wonton med smaker från de värmländska skogarna.",
                        "ingredients": [
                            "kantarell",
                            "scharlottenlök",
                            "morot",
                            "bladpersilja"
                        ],
                        "price": 9
                    },
                    {
                        "name": "Bangkok",
                        "desc": "En god friterad wonton med smaker från Bangkoks gator.",
                        "ingredients": [
                            "morot",
                            "salladslök",
                            "chili",
                            "kokos",
                            "lime",
                            "koriander"
                        ],
                        "price": 9
                    },
                    {
                        "name": "Ho Chi Minh",
                        "desc": "En god friterad wonton med smaker från vietnams matkultur.",
                        "ingredients": [
                            "kål",
                            "morot",
                            "salladslök",
                            "chili",
                            "vitlök",
                            "ingefära",
                            "tofu"
                        ],
                        "price": 9
                    },
                    {
                        "name": "Paris",
                        "desc": "En god friterad wonton med smaker från det franska köket.",
                        "ingredients": [
                            "kål",
                            "honung",
                            "chevré",
                            "basilika",
                            "valnötspasta"
                        ],
                        "price": 9
                    },
                    {
                        "name": "Oaxaca",
                        "desc": "En god friterad wonton med smaker från mexicos kryddiga matkultur.",
                        "ingredients": [
                            "majs",
                            "tomat",
                            "rostade ärtor",
                            "vitlök",
                            "lime"
                        ],
                        "price": 9
                    }
                ],
                "dip": [
                    {
                        "name": "Sweet Chili",
                        "desc": "Stark och söt dip från Thailänska höglandet.",
                        "price": 19
                    },
                    {
                        "name": "Sweet n Sour",
                        "desc": "Klassiska sötsura dipsåsen från Kina.",
                        "price": 19
                    },
                    {
                        "name": "Guacamole",
                        "desc": "Avocado, tomat och kryddor i optimal kombination.",
                        "price": 19
                    },
                    {
                        "name": "Wonton Standard",
                        "desc": "Smaksatt olja med soya, chili, vitlök & ingefära.",
                        "price": 19
                    },
                    {
                        "name": "Hot Mango",
                        "desc": "Kryddstark och söt chunky mangodip.",
                        "price": 19
                    },
                    {
                        "name": "Chili Mayo",
                        "desc": "Egengjord majonäs smaksatt med chili.",
                        "price": 19
                    }
                ]
            })
        }
    })
    .catch(err => {
        next(err);
    });

// @desc GET all the menuitems from the database 
// @route /menu
export const getMenu = async (req, res, next) => {
    try {

    } catch (error) {
        next(error)
    }
}