import { Router } from "express";
import { verifyToken } from "../middleware/jwt-auth";
import {
  changePassword,
  forgotPassword,
  resetPassword,
  changeUsername,
  deleteAccount,
} from "../controllers/user";

const router = Router();

router.put("/change-password", verifyToken, changePassword);
router.post("/forgot-password", forgotPassword);
router.put("/reset-password", resetPassword);
router.put("/change-username", verifyToken, changeUsername);
router.delete("/delete-account", verifyToken, deleteAccount);

export default router;
