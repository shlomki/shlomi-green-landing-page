export function onRequest({ request }) {
  const country = request.cf?.country || null;
  const acceptLanguage = request.headers.get('Accept-Language') || '';
  return Response.json({ country, acceptLanguage }, {
    headers: { 'Cache-Control': 'no-store' }
  });
}
