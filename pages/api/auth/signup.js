import { hashPassword } from "../../../helpers/auth";
import { connectToDb } from "../../../helpers/dbconnect";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    if (!email || !email.includes("@") || !password) {
      res.status(422).json({
        message: "Invalid Input or invalid crendential",
      });

      return;
    }
    if (password.trim().length < 7) {
      res.status(422).json({
        message: "Password must be more that 7 characters",
      });

      return;
    }

    const client = await connectToDb();
    const db = client.db();

    const userExist = await db.collection("users").findOne({ email });
    if (userExist) {
      res.status(401).json({
        message: "User already Exists",
      });

      await client.close();
      return;
    }
    const hashedPassword = await hashPassword(password);

    await db.collection("users").insertOne({
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "User created",
    });

    await client.close();

    return;
  }
}
