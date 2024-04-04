import { TodoType } from "@/context/TodoContext";

import { Button } from "./ui/button";
import Link from "next/link";
import { getTodos } from "@/actions/todos";
import { Todo } from "./Todo";

export const TodoList = async () => {
  const todos = await getTodos();
  return (
    <>
      {todos.map((todo: TodoType) => (
        <div className="flex items-center justify-between mt-4" key={todo.id}>
          <Todo todo={todo} key={todo.id} />
          <div className="flex gap-2">
            <Button asChild>
              <Link href={`/todo/${todo.id}`}>Voir</Link>
            </Button>
          </div>
        </div>
      ))}
    </>
  );
};
