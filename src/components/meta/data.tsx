import React from "react";
import { Frontmatter } from ".";
import DateTime from "./datetime";

const MetaData: React.FC<{ frontmatter: Frontmatter }> = ({
  frontmatter: { date, lastMod, tags }
}) => {
  return (
    <>
      <DateTime date={date} label="Published" />
      <DateTime date={lastMod} label="Updated" />
      {tags && tags.map((t) => <div key={t}>#{t}</div>)}
    </>
  );
};
export default MetaData;
