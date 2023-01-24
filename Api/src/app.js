import express from "express";
import blogsRoutes from "./routes/index.js"

const app = express();

app.use(blogsRoutes)

export default app;
