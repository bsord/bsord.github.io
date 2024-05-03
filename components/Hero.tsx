
import Link from 'next/link'
import { BsChatDots } from "@react-icons/all-files/bs/BsChatDots";


export default function Hero() {
  return (
    <div className="items-center justify-center flex flex-col text-center font-sans ">
        <span className="text-4xl block sm:inline mb-6">Hello 👋, </span>
        <h2 className="text-6xl tracking-tight">
          I&apos;m&nbsp;
          <span className="text-blue-500 font-semibold ">Brandon.</span>
        </h2>
        <p className="m-6 text-5xl font-light text-gray-300">I transform problems and ideas into solutions.</p>
        <Link href="https://www.linkedin.com/in/brandon-sorgdrager/" className='px-8 py-2 border m-4 rounded-full text-white border-yellow-500 bg-yellow-500 font-semibold text-4xl font-sans hover:bg-green-600 hover:border-green-600 items-center flex'>Let&apos;s Chat! <BsChatDots className="ml-4 inline"/></Link>
    </div>
  );
}