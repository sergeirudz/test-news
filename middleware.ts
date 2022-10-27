import { NextResponse, NextRequest } from 'next/server';

export default function middleware(req: NextRequest) {
  let verify = req.cookies.get('loggedIn');
  let url = req.url;

  if (!verify && url.includes('/profile')) {
    return NextResponse.redirect('http://localhost:3000/');
  }

  if (!verify && url.includes('/story')) {
    return NextResponse.redirect('http://localhost:3000/');
  }
}
