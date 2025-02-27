import express, { Application } from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth";
import adminRouter from "./routes/admin";
import profileRouter from "./routes/user";
import postRouter from "./routes/post";

const app: Application = express();
const PORT = 5000;

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    // origin: "*", // Allow all origins
    origin: "http://localhost:4200", // Allow all origins
    credentials: true, // Allow credentials (cookies) to be sent
  })
);

// MongoDB connection
const mongoURI = "mongodb://admin:admin@localhost:27017/?authSource=admin";
mongoose
  .connect(mongoURI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.get("/", (req, res) => {
  res.send("Hello from server");
});
app.use("/auth", authRouter);
app.use("/admin", adminRouter);
app.use("/profile", profileRouter);
app.use("/post", postRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
