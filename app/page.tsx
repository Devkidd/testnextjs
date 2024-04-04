import FormTodo from "@/components/FormTodo";
import TodoFromContext from "@/components/TodoFromContext";

export default function Home() {
  return (
    <main className="flex flex-col gap-4 h-screen w-full justify-center items-center">
      <h1 className="text-4xl font-bold">TODO LIST</h1>
      <div className="mt-12 ">
        <FormTodo />
        <TodoFromContext />
      </div>
    </main>
  );
}
