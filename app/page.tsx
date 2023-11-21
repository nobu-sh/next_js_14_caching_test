import FromClient from "@/components/FromClient";
import FromServer from "@/components/FromServer";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        From Client: <FromClient />
      </div>
      <div>
        From Server: <FromServer />
      </div>
      <div>this is home page</div>
      <Link href="/hello">go to hello page</Link>
    </main>
  );
}
