export const dynamic = "force-dynamic"; // 이거 없으면 static route돼서 같은 결과만 주구장창 나옴
export async function GET() {
  return Response.json({ timestamp: new Date().getTime() });
}
