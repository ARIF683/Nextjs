import React from 'react'
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa';

async function repoList(name) {
    const res = await fetch(`https://api.github.com/repos/arif683/${name}`)
    return await res.json()
}

const Repo = async ({name}) => {
  const repo = await repoList(name);

  return (
    <div>
      <div>
        <h2>{repo.name}</h2>
        <h4>{repo.description}</h4>
      </div>
      <div>
        <span><FaStar />{repo.stargezers_count}</span>
        <span><FaCodeBranch />{repo.forks_count}</span>
        <span><FaEye />{repo.watchers_count}</span>
      </div>
    </div>
  )
}

export default Repo