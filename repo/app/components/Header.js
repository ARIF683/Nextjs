import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="bg-slate-900 flex items-center justify-between text-xl text-indigo-600 font-bold px-2 mx-auto py-4 ">
      <div>Repo</div>
      <div className="flex justify-between space-x-3  ">
        <li>
          {" "}
          <Link href="/">Home</Link>
        </li>
        <li>
          {" "}
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/code/repo">Code</Link>
        </li>
      </div>
    </div>
  );
};

export default Header;
