import Head from "next/head"
import { useRef } from "react";
import { Parallax } from 'react-scroll-parallax';

import { FaArrowDown} from "@react-icons/all-files/fa/FaArrowDown";

import Hero from "@/components/Hero";
import HighlightedProjects from "@/components/HighlightedProjects";

import data from "@/data/database.json";

export default function Home({ projects }: any) {
  const aboutRef = useRef<HTMLDivElement>(null);
  const executeScroll = () => {
    if (aboutRef && aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
  return (
    <main
      className="flex min-h-screen flex-col"
    >
      <Head>
        <title>Brandon Sorgdrager</title>
        <meta name="description" content="AI Solutions Engineer" />
        <meta name="apple-mobile-web-app-capable" content="yes"></meta>
        <meta name="mobile-web-app-capable" content="yes"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, interactive-widget=resizes-content"
        />
      </Head>
      
      <div className="h-screen flex flex-col items-center justify-center bg-zinc-900 overflow-hidden ">
        <Parallax speed={-25} className="flex flex-col items-center justify-between h-full">
          <div className="flex flex-grow">
            <Hero />
          </div>
          
          <div onClick={executeScroll} className="p-2 border-2 rounded-full mb-4">
            <FaArrowDown />
          </div>
        </Parallax>
      </div>

      <div ref={aboutRef} className="h-screen flex items-center justify-center bg-fixed bg-gradient-to-t from-blue-600 to-green-600  overflow-hiddenp-4  overflow-hidden">
        <Parallax speed={-25} >
          <h2 className="text-4xl md:text-6xl tracking-tight"><span className="">About </span><span className="text-blue-200 font-semibold ">Me</span></h2>
          <div className="">Coming soon</div>
        </Parallax>
      </div>

      <div className="overflow-hidden items-center justify-center flex flex-col p-4 bg-zinc-900 ">
        <h2 className="text-4xl md:text-6xl tracking-tight m-4"><span className="">Recent </span><span className="text-green-200 font-semibold ">Work</span></h2>
 
        <HighlightedProjects highlightedProjects={projects} />
      </div>

      <div className="h-screen flex items-center justify-center bg-fixed bg-gradient-to-b from-pink-500 via-purple-500 to-indigo-500  overflow-hidden p-4">
        <Parallax speed={-25} >
          <h2 className="text-4xl md:text-6xl tracking-tight"><span className="">Special </span><span className="text-pink-200 font-semibold ">Thanks</span></h2>
          <div className="">Coming soon</div>
        </Parallax>
      </div>

      <div className="h-screen flex items-center justify-center bg-zinc-900  overflow-hidden p-4">
        <Parallax speed={-25} >
          <h2 className="text-4xl md:text-6xl tracking-tight"><span className="">Endorsements </span></h2>
          <div className="">Coming soon</div>
        </Parallax>
      </div>

    </main>
  );
}

export async function getStaticProps() {
  return {
    props: {
      projects: data.projects
    },
  }
}