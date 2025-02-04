import { User } from "../models/User";

export async function createNewUser(
  name: string,
  email: string,
  password: string
) {
  try {
    const newUser = new User({
      name,
      email,
      password,
      type: "user",
      banned: false,
      posts: [],
    });

    const savedUser = await newUser.save();
    return savedUser;
  } catch (error) {
    throw new Error(`Failed to create new user: ${error}`);
  }
}

export async function checkIfEmailExists(email: string): Promise<boolean> {
  try {
    const user = await User.findOne({ email });
    return user ? true : false;
  } catch (error) {
    throw new Error(`Failed to check email ${error}`);
  }
}

export async function getAccountDetails(email: string) {
  try {
    const user = await User.findOne({ email }).select(
      "name password banned type"
    );
    return user;
  } catch (error) {
    throw new Error(`Failed to check password ${error}`);
  }
}
