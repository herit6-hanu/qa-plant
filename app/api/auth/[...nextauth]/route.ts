import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { pool } from "@/lib/db";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],

  callbacks: {
    async signIn({ user }) {
      try {
        const existingUser = await pool.query(
          "SELECT * FROM users WHERE email = $1",
          [user.email]
        );

        if (existingUser.rows.length === 0) {
          await pool.query(
            `
            INSERT INTO users(name,email,image)
            VALUES($1,$2,$3)
            `,
            [
              user.name,
              user.email,
              user.image,
            ]
          );
        }

        return true;
      } catch (error) {
        console.error(error);
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };