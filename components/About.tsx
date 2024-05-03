
import Link from 'next/link'
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { MdEmail } from "@react-icons/all-files/md/MdEmail";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaDocker } from "@react-icons/all-files/fa/FaDocker";
import Skills from './Skills';


export default function About() {
  return (
    <div className=" py-8 md:py-16 items-center justify-center flex flex-col font-sans ">

        <h2 className="text-4xl md:text-6xl tracking-tight mb-6 md:mb-12">
            <span className="">AI Solution </span>
            <span className="text-blue-300 font-semibold ">Engineer</span>
        </h2>

        <div className="container mx-auto p-4 flex flex-col">
            
            <div className="flex items-center justify-center mt-6 md:mt-12">
                <div className="max-w-[48rem] bg-white rounded-lg shadow-lg transform duration-200 easy-in-out">
                    
                    <div className="flex justify-center px-5  -mt-12">
                        <img className="h-32 w-32 bg-white p-2 rounded-full   " src="/avatar.png" alt="" />
                    </div>

                    <div className=" ">
                        <div className="text-center px-6">
                            <h2 className="text-slate-700 text-3xl font-bold">Brandon Sorgdrager</h2>
                            <p className="mt-2 text-slate-600 text-md">Fully committed to the philosophy of life-long learning, I&apos;m an engineer who wears many hats with a deep passion for AI, Machine learning, and all things process automation. The unique combination of creativity, many years of infrastructure experience, and love for development, drives my passion for solving problems. When I&apos;m not at my computer I like to mod RC cars, design and print 3d models, and occasionally adventure outdoors.</p>
                        </div>
                        <hr className="mt-6" />
                        <div className="flex items-center justify-center text-slate-500 text-4xl p-4 space-x-4 md:space-x-8">
                            <Link href="https://www.linkedin.com/in/brandon-sorgdrager/" className='hover:text-blue-600'><FaGithub/></Link>
                            <Link href="https://www.linkedin.com/in/brandon-sorgdrager/" className='hover:text-blue-600'><FaLinkedin/></Link>
                            <Link href="https://www.linkedin.com/in/brandon-sorgdrager/" className='hover:text-blue-600'><FaTwitter/></Link>
                            <Link href="https://www.linkedin.com/in/brandon-sorgdrager/" className='hover:text-blue-600'><FaDocker/></Link>
                            <Link href="https://www.linkedin.com/in/brandon-sorgdrager/" className='hover:text-blue-600'><MdEmail/></Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-8">
                <Skills/>
                
            </div>
            </div>
    </div>
  );
}