export default async function FromServer() {
  const data = await fetch("http://localhost:8001/", {
    cache: "no-store",
  });
  const { timestamp } = await data.json();
  return <div>{timestamp}</div>;
}
