
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export function generateStaticParams() {
  const pages = ['draft', 'quill', 'slate-react', 'result'];
  return pages.map((page) => ({ name: page }));
}

export default function Blog() {
  return (
    <main
      className="flex min-h-screen flex-col"
    >
      <div className="flex items-center justify-center h-screen bg-gray-900">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-white">
          <h2 className="text-xl font-bold">Blog</h2>
        </div>
      </div>
    </main>
  );
}
