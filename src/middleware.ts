import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request:NextRequest) {
    const path = request.nextUrl.pathname;
    const isPublicPath = path === '/' || path === '/sign-up' || path === '/about' || path === '/home' || path === '/contact'|| path === '/stories'|| path === '/work'|| path === '/contact';
    const token = request.cookies.get('token')?.value||"";

    if(isPublicPath && token) {
        return NextResponse.redirect(new URL('/settings', request.nextUrl));
    }
    
    if(!isPublicPath && !token) {
        return NextResponse.redirect(new URL('/sign-up', request.nextUrl));
    }
}

export const config = {
    matcher: [        
        '/settings',            
    ]
}