import { Request, Response } from "express";
import { changeUserPassword, getUserPassword } from "../services/user";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import { AuthenticatedRequest } from "../@types/express";
import jwt from "jsonwebtoken";
import { User } from "../models/User";

dotenv.config();

// change password
export async function changePassword(req: AuthenticatedRequest, res: Response) {
  try {
    if (req.user) {
      const userId = req.user.id;
      const { oldPassword, newPassword } = req.body;
      const user = await getUserPassword(userId);
      if (!user) {
        res.status(400).json({ message: "User not found" });
      } else {
        const isPasswordCorrect = await bcrypt.compare(
          oldPassword,
          user.password
        );
        if (!isPasswordCorrect) {
          res.status(400).json({ message: "Incorrect password" });
        } else {
          const hashedPw = await bcrypt.hash(newPassword, 12);
          await changeUserPassword(userId, hashedPw);
          res.status(200);
        }
      }
    }
  } catch (error) {
    res.status(500).json(`Failed to change password: ${error}`);
  }
}

// forgot password
export const forgotPassword = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;

    //   check if a user with the provided email exists.
    const user = await User.findOne({ email });
    if (!user) {
      res.status(404).json({ message: "User with this email does not exist" });
      return;
    }

    // 2. Create a token with a short expiration (e.g., 15 minutes)
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_RESET_SECRET as string,
      { expiresIn: "15m" }
    );

    const resetLink = `http://localhost:4200/profile/reset-password?token=${token}`;

    // send the reset link via email (here its logged for demonstration)
    console.log(resetLink);

    res.status(200);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// reset password
export const resetPassword = async (req: Request, res: Response) => {
  try {
    const { token, newPassword } = req.body;

    //   check if token is valid
    if (token) {
      jwt.verify(
        token,
        process.env.JWT_RESET_SECRET as string,
        async (err: any, decoded: any) => {
          if (err) {
            res.status(403).json({ message: "Invalid or expired token" });
            return;
          }

          const user = await User.findById(decoded.id);
          if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
          }

          // hash the new password
          const hashedPw = await bcrypt.hash(newPassword, 12);

          // update the user's password
          await User.findByIdAndUpdate(user._id, { password: hashedPw });

          res.status(200);
        }
      );
    }
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// delete account
export const deleteAccount = async (req: Request, res: Response) => {
  try {
    const { userId } = req.body;

    //   delete the user
    await User.findByIdAndDelete(userId);
    res.status(200);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
// username change
export const changeUsername = async (req: Request, res: Response) => {
  try {
    const { userId, newUsername } = req.body;

    //   update the user's username
    await User.findByIdAndUpdate(userId, { username: newUsername });
    res.status(200);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
