import { Request, Response } from "express";
import dotenv from "dotenv";
import {
  getAllUsers,
  banUserService,
  unBanUserService,
  deleteUserService,
  deletePostService,
} from "../services/admin";

dotenv.config();

export async function getAllUser(req: Request, res: Response) {
  try {
    const users = await getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    throw new Error(`Failed to get all users: ${error}`);
  }
}

// ban users
export async function banUser(req: Request, res: Response) {
  try {
    const { userId } = req.params;
    const user = await banUserService(userId);
    res.status(200).json(user);
  } catch (error) {
    throw new Error(`Failed to ban user: ${error}`);
  }
}

// unban users
export async function unBanUser(req: Request, res: Response) {
  try {
    const { userId } = req.params;
    const user = await unBanUserService(userId);
    res.status(200).json(user);
  } catch (error) {
    throw new Error(`Failed to unban user: ${error}`);
  }
}

// delete users
export async function deleteUser(req: Request, res: Response) {
  try {
    const { userId } = req.params;
    const user = await deleteUserService(userId);
    res.status(200).json(user);
  } catch (error) {
    throw new Error(`Failed to delete user: ${error}`);
  }
}

// delete posts
export async function deletePost(req: Request, res: Response) {
  try {
    const { postId } = req.params;
    const post = await deletePostService(postId);
    res.status(200).json(post);
  } catch (error) {
    throw new Error(`Failed to delete post: ${error}`);
  }
}
