
import data from "@/data/database.json";
import { Key } from "react";

export default function Projects({projects}:any) {
  return (
    <main
      className="flex min-h-screen flex-col"
    >
      <div className="flex items-center justify-center h-screen bg-gray-900">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-white">
          <h2 className="text-xl font-bold">Projects</h2>
          <ul>
            {projects.map((project:any, key: Key) => (
              <li key={key}>{project.title}</li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}

export async function getStaticProps() {
  return {
    props: {
      projects: data.projects,
    },
  }
}
