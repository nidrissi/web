import React from "react";
import { Frontmatter } from ".";
import DateTime from "./datetime";

const MetaTalk: React.FC<{ frontmatter: Frontmatter }> = ({ frontmatter }) => {
  const { TBA, title, date } = frontmatter;

  return (
    <>
      <DateTime label="On" TBA={TBA}>{date}</DateTime>
      <div>Title: {title}.</div>
    </>
  );
};
export default MetaTalk;
