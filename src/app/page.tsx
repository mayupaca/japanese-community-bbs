import ThreadList from "@/components/thread/ThreadList";
import { ThreadData } from "./types/types";

async function getAllThreadData() {
  const response = await fetch("http://localhost:3000/api/thread", {
    // SSR or SSG? SSR
    cache: "no-store",
  });
  const allThreadData: ThreadData[] = await response.json();

  return allThreadData;
}

export default async function Home() {
  const allThreadData = await getAllThreadData();
  return (
    <main>
      <ThreadList allThreadData={allThreadData} />
    </main>
  );
}
