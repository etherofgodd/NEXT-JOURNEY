import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { compareHashPassword } from "../../../helpers/auth";
import { connectToDb } from "../../../helpers/dbconnect";

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    Providers.Credentials({
      async authorize(credentials) {
        const client = await connectToDb();

        const usersCollection = client.db().collection("users");

        const user = await usersCollection.findOne({
          email: credentials.email,
        });

        if (!user) {
          throw new Error("No User found");
        }

        const isValid = await compareHashPassword(
          credentials.password,
          user.password
        );

        if (isValid === false) {
          client.close();
          throw new Error(
            "Invalid Credentials Please cross check and try again"
          );
        }

        client.close();
        return {
          email: user.email,
          id: user._id,
        };
      },
    }),
  ],
});
