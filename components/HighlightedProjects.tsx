

import { Key } from "react";
import { Parallax } from 'react-scroll-parallax';

export default function HighlightedProjects({ highlightedProjects }: any) {

  return (

      <div className="w-full flex space-y-8 flex-col items-center justify-center p-4 ">
        {highlightedProjects.map((project: any, key: Key) => (
          <div key={key} className="container  bg-fixed bg-gradient-to-t from-blue-600 to-green-600 rounded-xl p-1 h-96">
            <span className="flex w-full h-full bg-gray-900 text-white rounded-lg p-2">
            {project.title}
     </span>
              
            </div>
          
        ))}
      </div>
  );
}


