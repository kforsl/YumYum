import {} from "dotenv/config";
import jwt from "jsonwebtoken";

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1];

    if (token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) {
            const err = new Error("validation fail");
            err.status = 400;
            return next(err);
        }

        req.user = user;
        next();
    });
};

export default authenticateToken;
