// import express from "express";
// import { protectRoute } from "../middleware/auth.middleware.js";
// import {
//   getUsersForSidebar,
//   getMessages,
//   sendMessage,
// } from "../controllers/message.controller.js";

// const router = express.Router();

// router.get("/users", protectRoute, getUsersForSidebar);
// // router.get("/:id", protectRoute, getMessages);

// // router.post("/send/:id", protectRoute, sendMessage);
// router.get("/:id", protectRoute, getMessages);
// router.post("/send/:id", protectRoute, sendMessage);

// export default router;
import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import {
  getUsersForSidebar,
  getMessages,
  sendMessage,
} from "../controllers/message.controller.js";

console.log("✅ message.route.js loaded");

const router = express.Router();

// Get users for the sidebar
router.get("/users", protectRoute, getUsersForSidebar);

// Get messages by ID (only allow alphanumeric IDs)
router.get("/:id([a-zA-Z0-9]+)", protectRoute, getMessages);

// Send a message to a specific ID
router.post("/send/:id([a-zA-Z0-9]+)", protectRoute, sendMessage);

// Optional: catch-all route to handle undefined paths under /api/messages
router.all("*", (req, res) => {
  console.error("❌ Invalid message route accessed:", req.path);
  res.status(404).json({ error: "Route not found in /api/messages" });
});

export default router;

