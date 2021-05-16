import React from "react";
import { Frontmatter } from ".";
import DateTime from "./datetime";
import Links from "./links";

const MetaData: React.FC<{ frontmatter: Frontmatter }> = ({
  frontmatter: { date, lastMod, tags, urls }
}) => {
  return (
    <>
      <div>
        Published{" "}
        <DateTime date={date} />
          .
      </div>
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
