import React, {  useState } from 'react';
import Link from 'next/link';

const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className=' flex fixed w-full justify-between items-center px-8 md:px-20 h-20 bg-white'>
        <div className=' w-8 h-1'></div>
        <Link href="/" className=' text-lg font-bold'>
            ASM
        </Link>
        <div className={`absolute w-full h-screen transition-all left-0 ${open ? "top-[0px]" : "top-[-100vh]"} flex items-center flex-col bg-slate-800 text-white gap-14 font-semibold pt-40`}>
            <Link href="/skills">
              Skills
            </Link>
            <div>Work</div>
            <div>Contact</div>
        </div>
        <button className=' w-8 h-8 relative' onClick={()=> setOpen(!open)}>
          <span className={`w-full h-1 ${open ? " bg-white rotate-45 top-3" : "bg-black top-0"} absolute rounded-full transition-all`}></span>
          <span className={`w-full h-1 ${open ? " bg-white invisible" : "bg-black"} absolute top-3 rounded-full transition-all`}></span>
          <span className={`w-full h-1 ${open ? " bg-white rotate-[-45deg] top-3" : "bg-black top-6"} absolute  rounded-full transition-all`}></span>
        </button>
    </div>
  )
}

export default Navigation