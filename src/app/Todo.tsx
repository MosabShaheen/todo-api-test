"use client";
import { useState } from "react";
import { todoTable, db } from "@/lib/drizzle";
type todo = {
  title: string;
  description: string;
};

export default function TodoUI() {
  const [todo, setTodo] = useState<todo>({
    title: "",
    description: "",
  });
  const onChange = (e: any) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };
  const onClickAdd = async () => {
    const response = await fetch("/api/todo", {
      method: "POST",
      body: JSON.stringify(todo),
    });
  };
  return (
    <form className="flex flex-col justify-center py-2" onSubmit={onClickAdd}>
      <input
        className="p-3 mb-5"
        name="title"
        placeholder="Title"
        value={todo.title}
        required
        onChange={onChange}
      />
      <textarea
        className="p-3 mb-5"
        name="description"
        placeholder="Description"
        required
        value={todo.description}
        onChange={onChange}
      />
      <button type="submit" className="bg-green-700 rounded-full p-3">
        Add Todo
      </button>
    </form>
  );
}
