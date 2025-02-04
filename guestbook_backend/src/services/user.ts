import { User } from "../models/User";

export async function getUserPassword(userId: string) {
  try {
    const user = await User.findById(userId).select("password");
    return user;
  } catch (error) {
    throw new Error(`Failed to get user password: ${error}`);
  }
}

export async function changeUserPassword(userId: string, newPassword: string) {
  try {
    await User.findByIdAndUpdate(userId, { password: newPassword });
  } catch (error) {
    throw new Error(`Failed to change user password: ${error}`);
  }
}
