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

const Thread = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit,
        recusandae adipisci alias debitis nisi enim deserunt sed vel quibusdam
        hic esse rerum sint sequi autem rem assumenda nobis! Soluta, quidem.
      </CardContent>
      <CardFooter className="flex justify-between">
        <Link href={"/posts/1"} className="text-green-500">
          Read more
        </Link>
      </CardFooter>
    </Card>
  );
};

export default Thread;
