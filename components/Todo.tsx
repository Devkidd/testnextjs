import { TodoType } from "@/context/TodoContext";
import { Check, CircleX, MoveLeft } from "lucide-react";
import Link from "next/link";

export const Todo = ({ todo }: { todo: TodoType }) => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex gap-2 flex-col">
        <div className="flex gap-2 items-center">
          <Link
            href="/"
            className="flex gap-1 hover:-translate-x-3 transition-transform"
          >
            <MoveLeft />
          </Link>

          <h2 className="text-lg text-slate-500 font-bold">Todo {todo.id}</h2>
        </div>
        <h1 className="text-xl font-bold">{todo.title}</h1>
        <div className="flex gap-2">
          <p className="text-lg font-bold">tâche complète :</p>
          {todo.completed ? <Check /> : <CircleX />}
        </div>
      </div>
    </div>
  );
};
