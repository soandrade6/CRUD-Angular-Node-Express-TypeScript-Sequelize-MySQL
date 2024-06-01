import express from "express";
import productsRoutes from "./routes/products.routes.js";

const cors = require("cors");

const app = express();

// middlewares
app.use(express.json());

app.use(productsRoutes);
app.use(cors());

export default app;
