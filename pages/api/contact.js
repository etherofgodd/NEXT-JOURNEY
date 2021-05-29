import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({
        message: "Invalid input",
      });
      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };

    console.log(newMessage);
    let uri =
      "mongodb+srv://admin:YV6JllNGxoya4Jbl@cluster0.eg3qi.mongodb.net/EthersSpace?retryWrites=true&w=majority";

    let client;
    try {
      client = await MongoClient.connect(uri, {
        useUnifiedTopology: true,
      });
    } catch (error) {
      res.status(500).json({
        message: "Could not connect to Database",
      });
      return;
    }

    const db = client.db();

    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({
        message: "Error storing message",
      });
      return;
    }

    client.close();
    res.status(201).json({
      message: "Contact Stored",
    });

    return;
  }

  res.status(200).json({
    message: "Welcome",
  });
}
