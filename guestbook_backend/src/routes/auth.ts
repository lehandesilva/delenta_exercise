import { Router } from "express";
import { login, register } from "../controllers/auth";

const router = Router();

router.put("/register", register);

router.post("/login", login);

router.post("/logout", (req, res) => {
  res.clearCookie("token", { path: "/" });
  res.status(200).json({ message: "Logged out successfully" });
});

export default router;
