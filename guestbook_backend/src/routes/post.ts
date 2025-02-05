import { Router } from "express";
import { createPost, getAllPosts, getPostById } from "../controllers/posts";

const router = Router();

router.get("/", getAllPosts);
router.post("/new-post", createPost);
router.get("/post/:id", getPostById);

export default router;
