import mongoose, { Schema, Document } from "mongoose";

export interface CommentDocument extends Document {
  content: string;
  author: mongoose.Types.ObjectId;
  post: mongoose.Types.ObjectId;
}

const CommentSchema = new Schema<CommentDocument>({
  content: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  post: { type: mongoose.Schema.Types.ObjectId, ref: "Post", required: true },
});

export const Comment = mongoose.model<CommentDocument>(
  "Comment",
  CommentSchema
);
