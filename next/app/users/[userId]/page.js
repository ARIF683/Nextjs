import React, { Suspense } from 'react'
import getUser from '@/lib/getUser';
import getUserPosts from '@/lib/getUserPosts';
import UserPosts from './components/UserPosts';

export default async function page({params: {userId}}) {

  const user = await getUser(userId);
  const userPosts = await getUserPosts(userId);

  return (
    <>
    <div>
      <h1>{user.name}</h1>
      <br/>
      <p>
        <Suspense fallback="loading...">
        <UserPosts promise = {userPosts}/>
        </Suspense>
        </p>
    </div>
    </>
  )
}
