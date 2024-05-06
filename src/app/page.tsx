import ThreadList from "@/components/thread/ThreadList";

export default async function Home() {
  const response = await fetch("http://localhost:3000/api/thread", {
    // SSR or SSG? SSR
    cache: "no-store",
  });

  const allThreadData = await response.json();
  console.log(allThreadData);

  return (
    <main>
      <ThreadList />
    </main>
  );
}
