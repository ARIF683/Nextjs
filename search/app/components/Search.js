'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Search() {
    const router = useRouter();
    const [search, setSearch] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault()
      setSearch("")
      router.push(`/${search}/`);
    }
    
  return (
    <>
    <form className = "flex justify-between items-center" onSubmit ={handleSubmit}>
      <input className = "py-2 px-2 bg-white text-2xl rounded-xl " type= "text" value={search}
       placeholder= "Search" 
      onChange={(e) => setSearch(e.target.value)}
      />
      <button className = "bg-white rounded-xl  px-2 py-2 text-xl mx-1 ">🚀</button>
    </form>
    </>
  )
}
