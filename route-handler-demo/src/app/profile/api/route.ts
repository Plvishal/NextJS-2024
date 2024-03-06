import { type NextRequest } from 'next/server';
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('query');
  const requestHeader = new Headers(request.headers);
  console.log(requestHeader.get('Authorization'));
  console.log(query);
  return new Response('Profile API data');
}
