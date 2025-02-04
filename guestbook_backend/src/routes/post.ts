import { Router, Request, Response } from "express";
import { Post } from "../models/Post";
import { User } from "../models/User";
import { Comment } from "../models/Comment";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const posts = await Post.find().populate("author", "name email");
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

router.post("/posts", async (req: Request, res: Response) => {
  try {
    const { title, content, author } = req.body;

    const newPost = new Post({
      title,
      content,
      author,
      noOfComments: 0,
      comments: [],
    });

    const savedPost = await newPost.save();

    await User.findByIdAndUpdate(author, { $push: { posts: savedPost._id } });

    res.status(201).json(savedPost);
  } catch (error) {
    res.status(500).json({ message: "Error creating post", error });
  }
});
