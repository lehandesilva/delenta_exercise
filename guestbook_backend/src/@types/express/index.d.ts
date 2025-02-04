import { JwtPayload } from "jsonwebtoken";
import { Request } from "express";

export interface AuthenticatedRequest extends Request {
  user?: { id: string; type: string } | JwtPayload;
}
