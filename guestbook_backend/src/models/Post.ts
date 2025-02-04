import mongoose, { Schema, Document } from "mongoose";

export interface PostDocument extends Document {
  title: string;
  content: string;
  author: mongoose.Types.ObjectId | null;
}

const PostSchema = new Schema<PostDocument>({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null },
});

export const Post = mongoose.model<PostDocument>("Post", PostSchema);
