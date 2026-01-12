import express from "express";
import cors from "cors";
import submitRoute from "./routes/submitRoute.js";
import { apiLimiter } from "./config/rateLimiter.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", apiLimiter);
app.use("/api", submitRoute);

app.listen(5000, () => {
  console.log("Server running on http://localhost:3000");
});
