import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import {
  createNewUser,
  checkIfEmailExists,
  getAccountDetails,
} from "../services/auth";

dotenv.config();

export async function register(req: Request, res: Response) {
  try {
    const { name, email, password } = req.body;

    // check if email already exists
    const user = await checkIfEmailExists(email);
    if (user) {
      res.status(400).json({ message: "Email already exists" });
    } else {
      // If not hash password and save user to database
      const hashedPw = await bcrypt.hash(password, 12);
      const savedUser = await createNewUser(name, email, hashedPw);
      res.status(201).json(savedUser._id);
    }
  } catch (error) {
    res.status(500).json({ message: "Error registering user" });
  }
}

export async function login(req: Request, res: Response) {
  try {
    const { email, password } = req.body;
    const user = await getAccountDetails(email);
    if (!user) {
      res.status(400).json({ message: "Account not found" });

      // check if account is banned
    } else if (user.banned) {
      res.status(403).json({ message: "Account is banned" });
    } else {
      // compare password
      const isPasswordCorrect = await bcrypt.compare(password, user.password);
      if (!isPasswordCorrect) {
        res.status(400).json({ message: "Incorrect password" });
      }
      if (isPasswordCorrect) {
        // create token
        const token = jwt.sign(
          { id: user._id, name: user.name, type: user.type },
          process.env.PRIVATE_KEY as string,
          { expiresIn: "1h" }
        );
        // send token in cookie
        res.cookie("token", token, {
          httpOnly: true,
          secure: false,
          maxAge: 3600000, // 1 hour in milliseconds
        });
        // send user data in response
        res
          .status(200)
          .json({ id: user._id, name: user.name, type: user.type });
      }
    }
  } catch (error) {
    res.status(500).json({ message: "Error logging in" });
  }
}
