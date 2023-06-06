import React from "react";
import Link from "next/link";

async function repoDir(name) {
  const res = await fetch(
    `https://api.github.com/repos/arif683/${name}/contents`
  );
  const contents =  await res.json();
  return contents;
}

const RepoDir = async ({ name }) => {
  const contents = await repoDir(name);

  const dirs = contents.filter((content) => content.type === "dir");

  return (
    <div>
      <h3>Directories</h3>
      <ul>
        {dirs.map((dir) => (
          <li key={dir.path}>
            <Link href={`/code/repo/${name}/${dir.path}`}>{dir.path}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RepoDir;
