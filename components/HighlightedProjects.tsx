import Link from 'next/link';
import Technologies from './Technologies';
import { FaExternalLinkAlt} from "@react-icons/all-files/fa/FaExternalLinkAlt";

export default function HighlightedProjects({ highlightedProjects }: any) {
  return (

      <div className="w-full flex space-y-8 lg:space-y-12 flex-col items-center justify-center my-8">
        {highlightedProjects.map((project: any, index: number) => (
          <div key={index} className="container   rounded-xl p-4 lg:px-12">

            <div className={`flex flex-col lg:space-x-12 ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse lg:space-x-reverse"}  `}>

              <div className="w-full lg:w-2/5">
                  <img className="rounded-lg object-contain w-full" src={project.coverImage} alt="" />
              </div>

              <div className='flex flex-col w-full lg:w-3/5 justify-center'>
                <span className=" mt-4 lg:mt-0  text-zinc-200 rounded-lg font-bold text-3xl">
                  {project.title} ({project.client})
                </span>
                <span className="text-zinc-800 rounded-lg text-md">
                  
                </span>

                <Link href={project.url} className='font-semibold my-2 text-lg text-blue-300 flex items-center space-x-2 flex-row hover:text-green-300'><span>{project.url}</span><FaExternalLinkAlt className='text-md'/></Link>

                <span className="text-zinc-400 rounded-lg text-lg">
                  {project.description}
                </span>

                <div className='mt-4'>
                  <Technologies technologies={project.technologies}/>
                </div>
                

              </div>

             </div>

              
          </div>
          
        ))}
      </div>
  );
}


