
import data from "@/data/database.json";

export default function Blog({project}:any) {

    console.log(project)
  return (
    <main
      className="flex min-h-screen flex-col"
    >
      <div className="flex items-center justify-center h-screen bg-gray-900">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-white">
          <h2 className="text-xl font-bold">{project.title}</h2>
        </div>
      </div>
    </main>
  );
}


export async function getStaticPaths() {

  const projects = data.projects
 
  // Get the paths we want to pre-render based on projects
  const paths = projects.map((project) => ({
    params: { slug: project.slug },
  }))
  console.log('paths', paths)
 
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

export async function getStaticProps({ params }:any) {
  // params contains the project `id`.
  // If the route is like /projects/1, then params.id is 1
  const projects = data.projects
  var project = projects.filter(project => {
    return project.slug === params.slug
    })[0]
    console.log('project', project)
  // Pass project data to the page via props
  return { props: { project } }
}
