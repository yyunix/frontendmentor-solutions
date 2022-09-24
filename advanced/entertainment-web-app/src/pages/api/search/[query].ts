import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@/lib/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { query, category } = req.query;
  let searchResult = null;

  try {
    const client = await clientPromise;
    const db = client.db("entertainment-app");

    if (category === "all") {
      searchResult = await db
        .collection("movies")
        .find({
          title: { $regex: query, $options: "i" },
        })
        .toArray();
    } else if (category === "bookmarked") {
      searchResult = await db
        .collection("movies")
        .find({
          isBookmarked: true,
          title: { $regex: query, $options: "i" },
        })
        .toArray();
    } else {
      searchResult = await db
        .collection("movies")
        .find({
          category: category === "movie" ? "Movie" : "TV Series",
          title: { $regex: query, $options: "i" },
        })
        .toArray();
    }
    res.status(200).json({ success: true, data: searchResult });
  } catch (e) {
    res.status(404).json({ success: false, message: "Something went wrong" });
  }
}
