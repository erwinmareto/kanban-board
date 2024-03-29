import { NextResponse } from "next/server";

export function middleware(request) {
    if(request.nextUrl.pathname === '/auth/login'){
        return NextResponse.next()
    }

    const token = request.cookies.get('token')

    if (!token) {
        return NextResponse.redirect(new URL("/auth/login", request.url))
    }
    return NextResponse.next()
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}