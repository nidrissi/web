import React from "react";
import { Frontmatter } from ".";
import DateTime from "./datetime";

const MetaTalk: React.FC<{ frontmatter: Frontmatter }> = ({ frontmatter }) => {
  const { TBA, title, date } = frontmatter;

  return (
    <>
      <DateTime date={date} label="On" TBA={TBA} />
      <div>Title: {title}.</div>
    </>
  );
};
export default MetaTalk;
