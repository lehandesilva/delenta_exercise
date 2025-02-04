import mongoose, { Schema, Document } from "mongoose";
import { CommentDocument } from "./Comment";

export interface PostDocument extends Document {
  title: string;
  content: string;
  author: mongoose.Types.ObjectId | null;
  noOfComments: number;
  comments: mongoose.Types.ObjectId[];
}

const PostSchema = new Schema<PostDocument>({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null },
  noOfComments: { type: Number, default: 0 },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
});

export const Post = mongoose.model<PostDocument>("Post", PostSchema);
