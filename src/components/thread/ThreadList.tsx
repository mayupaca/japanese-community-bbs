import { ThreadData } from "@/app/types/types";
import Thread from "./Thread";

interface AllThreadDataProps {
  allThreadData: ThreadData[];
}

const ThreadList = ({ allThreadData }: AllThreadDataProps) => {
  return (
    <div className="grid lg:grid-cols-3 px-4 py-4 gap-4">
      {allThreadData.map((threadData: ThreadData) => (
        <Thread key={threadData.id} threadData={threadData} />
      ))}
    </div>
  );
};

export default ThreadList;
