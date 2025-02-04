import { Request, Response, NextFunction } from "express";
import { AuthenticatedRequest } from "../@types/express";

// Middleware to verify JWT from cookies
export function adminCheck(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) {
  const user = req.user;

  if (user?.type !== "admin") {
    res.status(403).json({ message: "Not an admin" });
  } else {
    next();
  }
}
