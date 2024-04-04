"use server";

import { revalidatePath, revalidateTag } from "next/cache";

export const getTodos = async () => {
  const controller = new AbortController();
  const { signal } = controller;
  const timeoutPromise = new Promise((_, reject) => {
    const timeout = 5000;
    setTimeout(() => {
      reject(new Error("La requête a dépassé le temps d'attente"));
    }, timeout);
  });

  const fetchData = fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=10",
    {
      signal,
      next: {
        tags: ["todos"],
      },
    }
  );

  const response = (await Promise.race([
    timeoutPromise,
    fetchData,
  ])) as Response;

  controller.abort();

  if (!response.ok) {
    throw new Error("An error occurred while fetching the data");
  }

  return await response.json();
};

export const getTodo = async (id: number) => {
  const controller = new AbortController();
  const { signal } = controller;
  const timeoutPromise = new Promise((_, reject) => {
    const timeout = 5000;
    setTimeout(() => {
      reject(new Error("La requête a dépassé le temps d'attente"));
    }, timeout);
  });

  const fetchData = fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    signal,
    next: {
      tags: [`todo-${id}`],
    },
  });

  const response = (await Promise.race([
    timeoutPromise,
    fetchData,
  ])) as Response;

  controller.abort();

  if (!response.ok) {
    throw new Error("An error occurred while fetching the data");
  }

  revalidatePath("/");

  return await response.json();
};

export const removeCache = async () => {
  revalidateTag("todos");
};
