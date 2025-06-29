import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
import { app, server } from "./lib/socket.js";
import { connectDB } from "./lib/db.js";

dotenv.config();

const PORT = process.env.PORT || 5001;
const __dirname = path.resolve();

// ✅ Explicitly define allowed origins
const allowedOrigins = [
  "http://localhost:5173", // for local dev
  "https://chatapp-7-cse0.onrender.com", // deployed frontend on Render
];

// ✅ CORS middleware with fixed config
app.use(
  cors({
    origin: allowedOrigins, // ✅ must be an array — not a function
    credentials: true, // ✅ allows cookies to be sent from browser
  })
);

// ✅ Middleware
app.use(express.json());
app.use(cookieParser());

// ✅ Debug logger
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  console.log("Cookies:", req.cookies);
  next();
});

// ✅ Routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// ✅ Start server
server.listen(PORT, () => {
  console.log(`🚀 Server running on PORT ${PORT}`);
  connectDB();
});
