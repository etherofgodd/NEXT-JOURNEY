import { connectDatabase, insertDocument } from "../../helpers/db-util";

async function handler(req, res) {
  if (req.method == "POST") {
    const { email } = req.body;

    if (!email || !email.includes("@")) {
      res.status(422).json({
        message: "Invalid Email address",
      });
      return; // remember this
    }

    let client;
    try {
      client = await connectDatabase();
    } catch (error) {
      res.status(500).json({
        message: "Error connecting with the database",
      });
      return;
    }

    let collection = "newsletter";
    try {
      await insertDocument(client, collection, { email });
      await client.close();
    } catch (error) {
      res.status(500).json({
        message: "Failed to insert the data",
      });
      return;
    }

    res.status(201).json({
      message: "Email Added to the newsletter",
    });
  }
}

export default handler;
