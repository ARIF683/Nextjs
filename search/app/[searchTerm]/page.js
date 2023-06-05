import React from "react";
import getWikiResults from "@/lib/getWikiResults";
import Item from "./components/Item";

export default async function page({ params: { searchTerm } }) {
  const data = await getWikiResults(searchTerm);
  const result = data?.query?.pages;

  const content = (
    <main>
      {result ? (
        Object.values(result).map((result) => {
          return <Item key={result.pageid} result={result} />;
        })
      ) : (
        <h2>{`${searchTerm} Not Found`}</h2>
      )}
    </main>
  );
  return content;
}
