"use client";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "./ui/select";
import { Button } from "./ui/button";
import { FormEvent, useContext, useState } from "react";
import { getTodo } from "@/actions/todos";
import Link from "next/link";
import TodoContext from "@/context/TodoContext";

const todosID = Array.from({ length: 10 }, (_, i) => i + 1);

export const FormTodo = () => {
  const [idTodo, setIdTodo] = useState<number>(1);
  const { todos, addTodo } = useContext(TodoContext);

  const handleLocalStorage = () => () => {
    if (idTodo && localStorage.getItem(`active-todo`) !== idTodo.toString()) {
      localStorage.removeItem(`active-todo`);
      localStorage.setItem(`active-todo`, idTodo.toString());
    }
  };

  const handleContext = async (e: FormEvent) => {
    e.preventDefault();
    const todo = await getTodo(idTodo);
    console.log(todo);
    if (!todos.find((t) => t.id === todo.id)) addTodo(todo);
  };

  return (
    <form>
      <Select
        name="id"
        onValueChange={(value) => setIdTodo(parseInt(value))}
        defaultValue="1"
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Selectionner la todo" />
        </SelectTrigger>
        <SelectContent>
          {todosID.map((id, i) => (
            <SelectItem key={i} value={id.toString()}>
              {id}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <div className="flex gap-2 items-center mt-8">
        <Button onClick={handleLocalStorage()}>Enregistrer LocalStorage</Button>
        <Button asChild disabled={!idTodo}>
          <Link href={`/todo/${idTodo}`}>Fetch server action</Link>
        </Button>
        <Button onClick={handleContext}>Fetch React context</Button>
      </div>
    </form>
  );
};

export default FormTodo;
