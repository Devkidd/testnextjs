"use server";

import { revalidatePath, revalidateTag } from "next/cache";

export const getTodos = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=10",
    {
      next: {
        tags: ["todos"],
      },
    }
  );

  if (!response.ok) {
    throw new Error("An error occurred while fetching the data");
  }

  return await response.json();
};

export const getTodo = async (id: number) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`,
    {
      next: {
        tags: [`todo-${id}`],
      },
    }
  );

  if (!response.ok) {
    throw new Error("An error occurred while fetching the data");
  }

  revalidatePath("/");
  return await response.json();
};

export const removeCache = async () => {
  revalidateTag("todos");
};
