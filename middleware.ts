import NextAuth from "next-auth"


import authConfig from "./auth.config"
const{auth} = NextAuth(authConfig)

export default auth((req) => {
 const isLoggedIn = !!req.auth
 console.log("ROUTE: ",req.nextUrl.pathname)
 console.log("IS LOGGEDIN: ",isLoggedIn)
})

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}