import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

const secret = process.env.NEXTAUTH_SECRET
export async function middleware(req:NextRequest) {
   
//   const session = await getToken({ req, secret });
   const token = await getToken({ req, secret })
   console.log("JSON Web Token", token)

  // return NextResponse.redirect(new URL('/', req.url))
  return NextResponse.next();
  
  
}

export const config = {
  matcher:['/checkout/:path*', '/admin/:path*', '/((?!api\/)/admin/:path.*)']
}