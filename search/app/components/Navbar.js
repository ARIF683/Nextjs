import Link from 'next/link'
import React from 'react'
import Search from './Search'


export default function Navbar() {
  return (
    <nav className = "bg-slate-900 flex md:flex-row flex-col  items-center justify-between  px-2 mx-auto py-4 ">
        <div className = "text-2xl text-white ">
        <Link href = "/">WikiRockets</Link>
        </div>
        <Search />
    </nav>
  )
}
