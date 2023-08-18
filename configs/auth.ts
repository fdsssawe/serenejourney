import prisma from '../lib/prismadb'
import { PrismaAdapter } from "@auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
//@ts-ignore
import { compare } from "bcrypt";
import type {AuthOptions} from "next-auth"

export const authConfig : AuthOptions = {
  //@ts-ignore
  adapter: PrismaAdapter(prisma),
  providers: [
      GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID as string,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      }),
      CredentialsProvider({
          name: "credentials",
          credentials: {
              name: { label: "Name", type: "text", placeholder: "John Smith" },
              surname: { label: "Surname", type: "text", placeholder: "John Smith" },
              email: { label: "Email", type: "text", placeholder: "jsmith" },
              password: { label: "Password", type: "password" },
          },
          async authorize(credentials : any) {
            
              // check to see if email and password is there
              if(!credentials.email || !credentials.password) {
                  throw new Error('Please enter an email and password')
              }

              // check to see if user exists
              const user = await prisma.user.findUnique({
                  where: {
                      email: credentials.email
                  }
              });

              // if no user was found 
              if (!user || !user?.hashedPassword) {
                  throw new Error('No user found')
              }

              // check to see if password matches
              const passwordMatch = await compare(credentials.password, user.hashedPassword)

              // if password does not match
              if (!passwordMatch) {
                  throw new Error('Incorrect password')
              }

              return user;
          },
      }),  
  ],
  secret: process.env.SECRET,
  session: {
      strategy: "jwt",
  },
  debug: process.env.NODE_ENV === "development",
//   pages: {
//     signIn : "/login",
//   }
}
