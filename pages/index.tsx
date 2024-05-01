
import { Inter } from "next/font/google";


export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col"
    >
      <div className="flex items-center justify-center h-screen bg-gray-900">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-white">
          <img
            src="/avatar.png"
            alt="Avatar"
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h2 className="text-xl font-bold mb-2">Brandon Sorgdrager</h2>
          <p className="text-sm">AI developer and systems engineer</p>
        </div>
      </div>
    </main>
  );
}
