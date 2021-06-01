import { getSession } from "next-auth/client";
import { compareHashPassword, hashPassword } from "../../../helpers/auth";
import { connectToDb } from "../../../helpers/dbconnect";

export default async function handler(req, res) {
  if (req.method !== "PATCH") {
    return;
  }

  const session = await getSession({
    req,
  });

  if (!session) {
    res.status(401).json({
      message: "Not Authenticated",
    });
    return;
  }

  const userEmail = session.user.email;
  const oldPassword = req.body.oldPassword;
  const newPassword = req.body.newPassword;

  const client = await connectToDb();

  const userCollection = client.db().collection("users");

  const user = await userCollection.findOne({ email: userEmail });
  if (!user) {
    res.status(404).json({
      message: "User not found",
    });
    client.close();
    return;
  }

  const currentPassword = user.password;

  const passwordCheck = await compareHashPassword(oldPassword, currentPassword);

  if (!passwordCheck) {
    res.status(403).json({
      message: "No Permission to change the password",
    });
    client.close();
    return;
  }

  const hashedPassword = await hashPassword(newPassword);
  await userCollection.updateOne(
    { email: userEmail },
    { $set: { password: hashedPassword } }
  );

  client.close();
  res.status(200).json({
    message: "Password Updated",
  });
}
