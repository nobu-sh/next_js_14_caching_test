import Link from "next/link";

export default function HelloPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>this is hello page</div>
      <Link href="/">go back to home page</Link>
    </main>
  );
}
