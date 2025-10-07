export async function POST(req) {
  const body = await req.json();

  const res = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + "/api/ads", {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-admin-token": process.env.ADMIN_TOKEN },
    body: JSON.stringify(body),
  });

  const data = await res.json();
  return Response.json(data);
}
