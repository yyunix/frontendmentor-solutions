import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = await clientPromise;
  const db = client.db("entertainment-app");

  if (req.method === "PUT") {
    const body = JSON.parse(req.body);
    const { id, action } = body;
    try {
      // Adds values
      if (action === "push") {
        await db
          .collection("movies")
          .updateOne(
            { _id: new ObjectId(id) },
            { $set: { isBookmarked: true } }
          );
      }
      // Removes values
      else {
        await db
          .collection("movies")
          .updateOne(
            { _id: new ObjectId(id) },
            { $set: { isBookmarked: false } }
          );
      }
      res.status(201).json({
        success: true,
      });
    } catch (e) {
      console.error(e);
      res
        .status(400)
        .json({ success: false, message: "Something went wrong !" });
    }
  } else if (req.method === "GET") {
    try {
      const bookmarkedEntertainment = await db
        .collection("movies")
        .find({ isBookmarked: true })
        .toArray();

      res.status(200).json(bookmarkedEntertainment);
    } catch (error) {
      console.error(error);
      res
        .status(400)
        .json({ success: false, message: "Something went wrong !" });
    }
  }
}
