import { NextResponse } from "next/server"

// O middleware ficou configurado para que no momento em que tentar acessar a pasta BackendParams ele é redirecionado para a pasta login

export function middleware(request: any) {
  /* if (request.nextUrl.pathname !== "/BackendParams/login") {
    return NextResponse.redirect(new URL("/BackendParams/login", request.url))
  }*/

  // return NextResponse.json({ success: "success" })

  return NextResponse.redirect(new URL("/BackendParams/login", request.url))
}

export const config = {
  matcher: ["/BackendParams/userlist/:path*"],
}
