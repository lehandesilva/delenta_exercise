import { Request, Response } from "express";
import { Post } from "../models/Post";
import { User } from "../models/User";

export async function getAllPosts(req: Request, res: Response) {
  try {
    const posts = await Post.find().populate("author name email");
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
}

export async function createPost(req: Request, res: Response) {
  try {
    const { title, content, author } = req.body;

    const newPost = new Post({
      title,
      content,
      author,
    });

    const savedPost = await newPost.save();

    await User.findByIdAndUpdate(author, { $push: { posts: savedPost._id } });

    res.status(201).json(savedPost);
  } catch (error) {
    res.status(500).json({ message: "Error creating post", error });
  }
}
