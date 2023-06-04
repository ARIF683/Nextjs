import React from "react";
import getAllUsers from "@/lib/getAllUsers";
import Link from "next/link";

export default async function page() {
  const users = getAllUsers();
  const user = await users;

  const Users = (
    <>
      <li>
        <Link href="/"> Back to Home</Link>
      </li>
      <div>
        {user.map((user) => {
          return (
            <>
              <p key={user.id}>
                <Link href={`/users/${user.id}`}>{user.name}</Link>
              </p>
              <br />
            </>
          );
        })}
      </div>
    </>
  );
  return Users;
}
