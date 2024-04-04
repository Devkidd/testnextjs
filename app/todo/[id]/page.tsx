import { getTodo } from "@/actions/todos";
import { Todo } from "@/components/Todo";
import { Suspense } from "react";

const Page = async ({ params }: { params: { id: number } }) => {
  const todo = await getTodo(params.id);
  return (
    <div className="h-full justify-center items-center">
      <Suspense fallback={<div>Loading...</div>}>
        <Todo todo={todo} />
      </Suspense>
    </div>
  );
};

export default Page;
