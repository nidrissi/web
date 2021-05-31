import React from "react";

import { Frontmatter } from ".";
import DateTime from "./datetime";
import LdJSON from "./ld-json";
import TagLink from "./TagLink";

const MetaData: React.FC<{ frontmatter: Frontmatter }> = ({
  frontmatter: { title, date, lastMod, tags }
}) => {
  return (
    <>
      <LdJSON>
        {{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": title,
          "datePublished": new Date(date).toISOString(),
          "dateModified": lastMod ? new Date(lastMod).toISOString() : null,
        }}
      </LdJSON>
      <DateTime date={date} label="Published" />
      <DateTime date={lastMod} label="Updated" />
      {tags?.sort().map((tag) => (
        <TagLink tag={tag} key={tag} />
      ))}
    </>
  );
};
export default MetaData;
