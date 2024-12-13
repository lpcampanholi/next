import { NextRequest } from "next/server";
import { headers, cookies } from "next/headers";

export async function GET(request: NextRequest) {
    const requestHeaders = new Headers(request.headers);
    const headerList = headers();

    const theme = request.cookies.get("theme");

    console.log(requestHeaders.get("Authorization"));
    console.log((await headerList).get("Authorization"));

    return new Response("<h1>profile route</h1>", {
        headers: {
            "Content-Type": "text-html",
            "Set-Cookie": "theme=dark"
        }
    });
}
