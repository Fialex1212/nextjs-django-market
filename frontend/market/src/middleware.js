import { NextResponse } from "next/server";

export async function middleware(req) {
  const token = req.cookies.get("accessToken");
  try {
    const response = await fetch(
      "http://localhost:8000/api/users/verify-token/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      }
    );
    if (!response.ok) {
      throw new Error("Invalid token");
    }
  } catch (error) {
    const url = req.nextUrl.clone();
    url.pathname = "/auth/login";
    console.log(error);
    NextResponse.redirect(url);
  }
}

export const config = {
    matcher: ['/profile/:path*'],
  }