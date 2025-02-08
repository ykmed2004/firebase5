import Link from "next/link";

export default function Home() {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Firebase5 アプリへようこそ！</h1>
      <p className="mb-4">以下のリンクから各機能にアクセスできます。</p>
      <div className="space-y-4">
        <Link href="/auth">
          <a className="block bg-blue-500 text-white p-4 rounded text-center">認証ページ</a>
        </Link>
        <Link href="/todo">
          <a className="block bg-green-500 text-white p-4 rounded text-center">Todo リストページ</a>
        </Link>
      </div>
    </main>
  );
}

