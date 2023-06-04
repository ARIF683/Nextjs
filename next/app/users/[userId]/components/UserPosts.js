import React from "react";

export default async function UserPosts({ promise }) {
  const post = await promise;

  const postss = post.map((user) => {
    return (
      <>
        <h4>{user.title}</h4>
        <p>{user.body}</p>
      </>
    );
  });

  return postss;
}
