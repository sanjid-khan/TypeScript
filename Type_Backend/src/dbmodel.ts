import mongoose, { Document, Schema } from "mongoose";

interface IUser extends Document {
  username: string;
  email: string;
  password: string;
}

const userSchema = new Schema<IUser>({
  username: String,
  email: String,
  password: String
});

export const User = mongoose.model<IUser>("User", userSchema);