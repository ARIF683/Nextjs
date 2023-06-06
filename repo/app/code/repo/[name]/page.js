import Repo from '@/app/components/Repo'
import RepoDir from '@/app/components/RepoDir'
import React from 'react'

const page = ({params: {name}}) => {
  return (
    <div>
      Repository Details
      <Repo name={name}/>
      <RepoDir name = {name} />
    </div>
  )
}

export default page