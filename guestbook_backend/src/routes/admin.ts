import { Router } from "express";
import { verifyToken } from "../middleware/jwt-auth";
import { adminCheck } from "../middleware/admin-check";
import {
  getAllUser,
  banUser,
  unBanUser,
  deleteUser,
  deletePost,
} from "../controllers/admin";

const router = Router();

router.get("/", verifyToken, adminCheck, getAllUser);
router.put("/ban/:userId", verifyToken, adminCheck, banUser);
router.put("/unban/:userId", verifyToken, adminCheck, unBanUser);
router.delete("/delete/:userId", verifyToken, adminCheck, deleteUser);
router.delete("/delete-post/:postId", verifyToken, adminCheck, deletePost);

export default router;
