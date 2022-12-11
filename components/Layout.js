import React from 'react';
import Navigation from './Navigation';

const Layout = ({children}) => {
  return (
    <div className=' bg-yellow-50 min-h-screen flex flex-col'>
        <Navigation />
        <div className=' h-20 w-full'></div>
        <main className=' flex-1'>
            {children}
        </main>
    </div>
  )
}

export default Layout