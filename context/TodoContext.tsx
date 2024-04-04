'use client'

import { PropsWithChildren, createContext, useState } from "react";

export type TodoType = {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
  };

type TodoContextType = {
	todos: TodoType[];
	addTodo: (todo: TodoType) => void;
	removeTodo: (id: number) => void;
  };
  

const TodoContext = createContext<TodoContextType>({
	todos: [],
	addTodo: () => {},
	removeTodo: () => {},
  });
  
  export const TodoProvider = ({ children }: PropsWithChildren) => {
	const [todos, setTodos] = useState<TodoType[]>([]);

	const addTodo = (todo: TodoType) => {
		setTodos([...todos, todo]);
	};  

	const removeTodo = (id: number) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};
	return (
	  <TodoContext.Provider value={{ todos, addTodo, removeTodo }}>
		{children}
	  </TodoContext.Provider>
	);
  };
  
  export default TodoContext;