import jwt, { JwtPayload } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { AuthenticatedRequest } from "../@types/express";
import dotenv from "dotenv";
dotenv.config();

// Middleware to verify JWT from cookies
export function verifyToken(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) {
  const token = req.cookies.token;

  if (!token) {
    res.status(401).json({ message: "Not authorized" });
  }

  try {
    // Verify the token using the secret key
    const decoded = jwt.verify(token, process.env.PRIVATE_KEY as string);
    const user = {
      id: (decoded as JwtPayload).id,
      type: (decoded as JwtPayload).type,
    };
    req.user = user; // Attach decoded token (user info) to the request object
    next(); // Continue to the next middleware or route handler
  } catch (error) {
    res.status(401).json({ message: "Token is invalid or expired" });
  }
}
