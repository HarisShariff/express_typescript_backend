import express, { Application } from "express";
import dotenv from "dotenv";
dotenv.config();
import exampleRoute from "./routes/exampleRoute";

const app: Application = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api", exampleRoute);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
