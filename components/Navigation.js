import React from 'react';
import Link from 'next/link';

const Navigation = () => {
  return (
    <div className=' flex justify-between items-center px-20 h-20 bg-white'>
        <Link href="/" className=' text-lg font-bold'>
            ASM
        </Link>
        <div className='hidden md:flex gap-14 font-semibold'>
            <Link href="/skills">
              Skills
            </Link>
            <div>Work</div>
            <div>Contact</div>
        </div>
    </div>
  )
}

export default Navigation