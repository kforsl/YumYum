import express from "express";
import cors from "cors";

// import Routes
import authRouter from "./routes/auth.js";
import menuRouter from "./routes/menu.js";
import ordersRouter from "./routes/orders.js";

// import Middleware
import notFound from "./middlewares/notFound.js";
import errorHandler from "./middlewares/errorHandler.js";

const app = express();
const PORT = 8080;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/auth", authRouter);
app.use("/menu", menuRouter);
app.use("/orders", ordersRouter);

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));

// ERROR handeling Middleware
app.use(notFound); // Creates an Error if the URL is not found
app.use(errorHandler); // Handle Errors
