import React from 'react';
import Navigation from './Navigation';

const Layout = ({children}) => {
  return (
    <div className=' bg-yellow-50 min-h-screen flex flex-col'>
        <Navigation />
        <main className=' flex-1'>
            {children}
        </main>
    </div>
  )
}

export default Layout