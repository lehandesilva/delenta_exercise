import { User } from "../models/User";
import { Post } from "../models/Post";

export async function getAllUsers() {
  try {
    const users = await User.find().select("id name email");
    return users;
  } catch (error) {
    throw new Error(`Failed to get all users: ${error}`);
  }
}

export async function banUserService(userId: string) {
  try {
    const user = await User.findById(userId);
    if (!user) {
      throw new Error("User not found");
    }
    user.banned = true;
    await user.save();
    return user;
  } catch (error) {
    throw new Error(`Failed to ban user: ${error}`);
  }
}
export async function unBanUserService(userId: string) {
  try {
    const user = await User.findById(userId);
    if (!user) {
      throw new Error("User not found");
    }
    user.banned = false;
    await user.save();
    return user;
  } catch (error) {
    throw new Error(`Failed to ban user: ${error}`);
  }
}

export async function deleteUserService(userId: string) {
  try {
    const user = await User.findByIdAndDelete(userId);
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  } catch (error) {
    throw new Error(`Failed to delete user: ${error}`);
  }
}

export async function deletePostService(postId: string) {
  try {
    const post = await Post.findByIdAndDelete(postId);
    if (!post) {
      throw new Error("Post not found");
    }
    return post;
  } catch (error) {
    throw new Error(`Failed to delete post: ${error}`);
  }
}
