import { getData } from "@/actions/todo-actions";
import Todos from "@/components/todos";
import Image from "next/image";

export default async function Home() {
  const data = await getData();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Garden</h1>
      <Todos todos={data} />
    </main>
  );
}
