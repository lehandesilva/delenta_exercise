import mongoose, { Schema, Document } from "mongoose";
import { PostDocument } from "./Post";

export interface UserDocument extends Document {
  name: string;
  email: string;
  password: string;
  type: string;
  posts: mongoose.Types.ObjectId[]; // References Post
  banned: boolean;
}

const UserSchema = new Schema<UserDocument>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  type: { type: String, enum: ["admin", "user"], required: true },
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
  banned: { type: Boolean, default: false },
});

export const User = mongoose.model<UserDocument>("User", UserSchema);
