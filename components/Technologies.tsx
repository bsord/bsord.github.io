


export default function Technologies({technologies}:any) {
    return (
        <span className="flex flex-row flex-wrap space-x-2 ">
            {technologies.map((technology: string, index:number)=>(
                <div key={index} className='border-2 border-zinc-300 font-sm text-zinc-400 rounded-full px-2 my-1'>
                    {technology}
                </div>
            ))}
        </span>
    );
}