import { Request, Response } from "express";
import { Post } from "../models/Post";
import { User } from "../models/User";

export async function getAllPosts(req: Request, res: Response) {
  try {
    const posts = await Post.find().populate("author", "name email");
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
    if (author) {
      await User.findByIdAndUpdate(author, { $push: { posts: savedPost._id } });
    }

    res.status(201).json({ message: "Posted!" });
  } catch (error) {
    res.status(500).json({ message: "Error creating post", error });
  }
}

export async function getPostById(req: Request, res: Response) {
  try {
    const { id } = req.params;

    const post = await Post.findById(id).populate("author", "name");
    if (!post) {
      res.status(404).json({ message: "Invalid post id" });
      return;
    }
    res.status(200).json(post);
  } catch (error) {}
}
