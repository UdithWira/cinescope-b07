import { createAuthClient } from "better-auth/react"
export const { signIn, signOut, signUp ,getSession,useSession} = createAuthClient({
    baseURL: process.env.NEXT_PUBLIC_AUTH_URL || "http://localhost:3000"
})