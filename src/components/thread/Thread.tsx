import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { ThreadData } from "@/app/types/types";

interface ThreadDataProps {
  threadData: ThreadData;
}

const Thread = ({ threadData }: ThreadDataProps) => {
  const { id, title, content, createdAt, username } = threadData;

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{username}</CardDescription>
      </CardHeader>
      <CardContent>{content}</CardContent>
      <CardFooter className="flex justify-between">
        <Link href={`/thread/${id}`} className="text-green-500">
          Read more
        </Link>
      </CardFooter>
    </Card>
  );
};

export default Thread;
