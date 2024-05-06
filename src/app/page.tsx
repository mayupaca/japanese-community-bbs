import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="grid lg:grid-cols-3 px-4 py-4 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>
            Deploy your new project in one-click.
          </CardDescription>
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
      <Card>
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>
            Deploy your new project in one-click.
          </CardDescription>
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
      <Card>
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>
            Deploy your new project in one-click.
          </CardDescription>
        </CardHeader>
        <CardContent>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit,
          recusandae adipisci alias debitis nisi enim deserunt sed vel quibusdam
          hic esse rerum sint sequi autem rem assumenda nobis! Soluta, quidem.
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link href={"/posts/1"}>Read more</Link>
        </CardFooter>
      </Card>
    </main>
  );
}
