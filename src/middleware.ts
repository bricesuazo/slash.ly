import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const shortUrl = req.nextUrl.pathname.split("/").pop();

  const shortUrlFetch = await fetch(
    `${req.nextUrl.origin}/api/link/${shortUrl}`
  );
  if (shortUrlFetch.status === 404) {
    return NextResponse.redirect(req.nextUrl.origin);
  }
  const data = await shortUrlFetch.json();

  if (data?.url) {
    return NextResponse.redirect(data.url);
  }
}

export const config = {
  matcher: "/((?!api|_next/static|favicon.ico).*)",
};