"use client";

import { useState } from "react";
import { useTodos } from "@/hooks/useTodos";

export default function TodoPage() {
    const { todos, addTodo, deleteTodo } = useTodos();
    const [text, setText] = useState("");

    return (
    <div className="p-4">
        <input className="border p-2 m-2" type="text" value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={() => addTodo(text)} className="bg-green-500 text-white p-2 rounded">追加</button>
        <ul>
        {todos.map((todo) => (
            <li key={todo.id} className="flex justify-between p-2 border-b">
            {todo.text}
            <button onClick={() => deleteTodo(todo.id)} className="bg-red-500 text-white p-1 rounded">削除</button>
            </li>
        ))}
        </ul>
    </div>
    );
}
