import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa';
import React from 'react'
import Link from 'next/link';

async function repo(){
  const repos = await fetch("https://api.github.com/users/arif683/repos")
  return await repos.json()
}

const page = async () => {
  const reposs = await repo();

  return (
    <div className = "bg-white flex justify-between flex-col space-y-2 px-4 mx-auto py-5 ">
      {reposs.map(repo => {
        return (
          <Link className = "space-y-3 bg-black text-white   " href = {`/code/repo/${repo.name}`}>
            <div>
            <h1>{repo.name}</h1>
            <h3>{repo.description}</h3>
            </div>
            <div className = "flex items-center justify-between ">
              <span className = "flex items-center "><FaStar />{repo.stargazers_count}</span>
              <span className = "flex items-center "><FaCodeBranch />{repo.forks_count}</span>
              <span className = "flex items-center "><FaEye />{repo.watchers_count}</span>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default page