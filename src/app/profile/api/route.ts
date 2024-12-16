import { NextRequest } from "next/server";
import { headers, cookies } from "next/headers";

export async function GET(request: NextRequest) {
    const requestHeaders = new Headers(request.headers);
    const headerList = headers();

    (await cookies()).set("token", "123abc");

    const theme = request.cookies.get("theme");
    const token = (await cookies()).get("token");

    console.log(requestHeaders.get("Authorization"));
    console.log((await headerList).get("Authorization"));
    console.log(theme);
    console.log(token);

    return new Response("<h1>profile route</h1>", {
        headers: {
            "Content-Type": "text-html",
            "Set-Cookie": "theme=dark"
        }
    });
}
