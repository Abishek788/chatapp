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

// No regex in routes — now fully Render/Node.js v22 safe
router.get("/users", protectRoute, getUsersForSidebar);
router.get("/:id", protectRoute, getMessages);
router.post("/send/:id", protectRoute, sendMessage);

export default router;
