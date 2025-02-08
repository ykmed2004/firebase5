import { useState, useEffect } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc, deleteDoc, doc, onSnapshot } from "firebase/firestore";

export function useTodos() {
    const [todos, setTodos] = useState<{ id: string; text: string }[]>([]);

    useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "todos"), (snapshot) => {
        setTodos(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as { id: string; text: string })));
    });
    return () => unsubscribe();
    }, []);

    const addTodo = async (text: string) => {
    await addDoc(collection(db, "todos"), { text });
    };

    const deleteTodo = async (id: string) => {
    await deleteDoc(doc(db, "todos", id));
    };

    return { todos, addTodo, deleteTodo };
}
