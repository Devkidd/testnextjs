"use client";

import TodoContext from "@/context/TodoContext";

import { useContext } from "react";
import { Button } from "./ui/button";
import Link from "next/link";

export const TodoFromContext = () => {
  const { todos, removeTodo } = useContext(TodoContext);

  console.log(todos, "todos from context");

  if (!todos) {
    return;
  }

  return (
    <div className="mt-8">
      {todos.map((todo) => (
        <div className="flex items-center justify-between mt-4" key={todo.id}>
          <h1 className="text-xl font-bold">{todo.title}</h1>
          <div className="flex gap-2">
            <Button asChild>
              <Link href={`/todo/${todo.id}`}>Voir</Link>
            </Button>
            <Button variant="destructive" onClick={() => removeTodo(todo.id)}>
              supprimer
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoFromContext;
