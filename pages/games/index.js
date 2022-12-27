import React from 'react'
import Layout from '../../components/Layout'
import Head from "next/head";
import Link from 'next/link';

const index = () => {
  return (
    <Layout>
        <Head>
            <title>asmeydan - games</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <div className='min-height-screen grid grid-cols-1 md:grid-cols-2 place-items-center gap-4 pt-20 px-8 md:px-20'>
            <Link href="/games/snake-game" className=' bg-yellow-300 rounded-xl w-52 h-20 flex justify-center items-center'>Snake Game</Link>

            <div className=' bg-red-500 w-52 h-20 rounded-xl'></div>
            <div className=' bg-sky-500 w-52 h-20 rounded-xl'></div>
            <div className=' bg-emerald-700 w-52 h-20 rounded-xl'></div>
        </div>
    </Layout>
  )
}

export default index