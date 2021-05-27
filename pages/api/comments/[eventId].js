import {
  connectDatabase,
  getAllocuments,
  insertDocument,
} from "../../../helpers/db-util";

export default async function handler(req, res) {
  const { eventId } = req.query;
  let client;
  let collection = "comments";

  try {
    client = await connectDatabase();
  } catch (error) {
    res.status(500).json({
      message: "Connection to the database failed",
    });
    return;
  }

  if (req.method === "POST") {
    const { email, name, text } = req.body;

    if (
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      res.status(422).json({
        message: "Invalid Input",
      });
      await client.close();

      return;
    }

    let newComment = {
      email,
      name,
      text,
      eventId,
    };

    let result;

    try {
      result = await insertDocument(client, collection, newComment);
      newComment._id = result.insertedId;

      res.status(201).json({
        message: "Comment Added",
      });
    } catch (error) {
      res.status(500).json({
        message: "Failed to insert data into the database",
      });
      return;
    }
  }

  if (req.method === "GET") {
    try {
      const documents = await getAllocuments(
        client,
        collection,
        { eventId },
        {
          id: -1,
        }
      );
      res.status(200).json({
        comments: documents,
      });
    } catch (error) {
      res.status(500).json({
        message: "Error getting documents from the database",
      });
    }
  }
  await client.close();
}
