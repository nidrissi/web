import React from "react";
import { Frontmatter } from ".";
import DateTime from "./datetime";

const MetaTalk: React.FC<{ frontmatter: Frontmatter }> = ({ frontmatter }) => {
  const { TBA, title, date } = frontmatter;

  return (
    <>
      <div>{TBA ? '?' : ''}On <DateTime date={date} />{TBA ? '?' : ''}.</div>
      <div>Title: {title}.</div>
    </>
  );
};
export default MetaTalk;
