import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@/lib/mongodb";

export default async function get_movies(
  _: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const client = await clientPromise;
    const db = client.db("entertainment-app");

    const movies = await db.collection("movies").find({}).toArray();

    res.status(200).json(movies);
  } catch (e) {
    console.error(e);
  }
}
