import type { NextAuthConfig } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { compare } from "bcryptjs"
import { LoginHotelSchema } from "./schemas/signin"
import Github from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import Facebook from "next-auth/providers/facebook"
import { getUserbyEmail } from "@/data/user"

export default {
    providers: [
      Github({
        clientId: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
      }),
      Google({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      }),
      Facebook({
        clientId: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET,      
      }),
      Credentials({
        async authorize(credentials) {
          const validatedFields = LoginHotelSchema.safeParse(credentials)
  
          if (validatedFields.success) {
            const { email, password } = validatedFields.data
  
            const user = await getUserbyEmail(email)
            if (!user || !user.password) return null
  
            const isPasswordValid = await compare(password, user.password)
  
            if (isPasswordValid) return user
          }
  
          return null
        } 
      })
    ]
  } satisfies NextAuthConfig