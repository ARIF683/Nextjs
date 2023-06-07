import Repo from "@/app/components/Repo";
import RepoDir from "@/app/components/RepoDir";
import React, { Suspense } from "react";

const page = ({ params: { name } }) => {
  return (
    <div>
      Repository Details
      <Repo name={name} />
      <Suspense fallback={<div>Loading...</div>}>
        <RepoDir name={name} />
      </Suspense>
    </div>
  );
};

export default page;
