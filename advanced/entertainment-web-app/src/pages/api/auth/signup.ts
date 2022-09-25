import { hashPassword } from "@/lib/auth";
import clientPromise from "@/lib/mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return;
  }

  const data = req.body;
  const { email, password } = JSON.parse(data);

  // Validate email and password
  if (
    !email ||
    !email.includes("@") ||
    !password ||
    password.trim().length < 7
  ) {
    res.status(422).json({ message: "Invalid input" });
    return;
  }

  const client = await clientPromise;
  const db = client.db("entertainment-app");

  // Check if user already exists in DB
  const existingUser = await db.collection("users").findOne({ email });

  if (existingUser) {
    res
      .status(422)
      .json({ message: "User is unavailable. Choose another email address" });
    return;
  }

  // Hash password and store new user in DB
  const hashedPassword = await hashPassword(password);

  await db.collection("users").insertOne({
    email,
    password: hashedPassword,
  });

  res.status(201).json({ message: "User successfully created." });
}
