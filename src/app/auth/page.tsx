"use client";

import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";

export default function AuthPage() {
    const { user, login, logout, register } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    if (user) {
    return (
        <div className="p-4">
        <p>ログイン中: {user.email}</p>
        <button onClick={logout} className="bg-red-500 text-white p-2 rounded">ログアウト</button>
        </div>
    );
    }

    return (
    <div className="p-4">
        <input className="border p-2 m-2" type="email" placeholder="メール" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className="border p-2 m-2" type="password" placeholder="パスワード" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={() => login(email, password)} className="bg-blue-500 text-white p-2 rounded">ログイン</button>
        <button onClick={() => register(email, password)} className="bg-green-500 text-white p-2 rounded ml-2">登録</button>
    </div>
    );
}
