import React from "react";
import { Frontmatter } from ".";
import DateTime from "./datetime";

const MetaData: React.FC<{ frontmatter: Frontmatter }> = ({
  frontmatter: { date, lastMod, tags, urls }
}) => {
  return (
    <>
      {date ? (
        <div>
          Published{" "}
          <DateTime date={date} />
          .
        </div>
      ) : null}
      {lastMod ? (
        <div>
          Updated{" "}
          <DateTime date={lastMod} />
          .
        </div>
      ) : null}
      {tags && tags.map((t) => <div key={t}>#{t}</div>)}
    </>
  );
};
export default MetaData;
