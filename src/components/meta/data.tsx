import React from "react";

import { Frontmatter } from ".";
import DateTime from "./datetime";
import LDJSON from "./ld-json";
import TagLink from "./TagLink";

const MetaData: React.FC<{ frontmatter: Frontmatter }> = ({
  frontmatter: { title, date, lastMod, tags }
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "datePublished": new Date(date).toISOString(),
    "dateModified": new Date(lastMod || date).toISOString(),
  };

  return (
    <>
      <LDJSON data={structuredData} />
      <DateTime date={date} label="Published" />
      <DateTime date={lastMod} label="Updated" />
      {tags?.map((tag) => (
        <TagLink tag={tag} key={tag} />
      ))}
    </>
  );
};
export default MetaData;
