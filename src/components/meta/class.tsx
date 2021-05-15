import React from "react";
import { Frontmatter } from ".";
import MetaData from "./data";

const MetaClass: React.FC<{ frontmatter: Frontmatter }> = ({ frontmatter }) => {
  const { cursus, what, time } = frontmatter;

  return (
    <>
      <div>{cursus} &bull; {what} &bull; {time}.</div>
      <MetaData frontmatter={frontmatter} />
    </>
  );
};
export default MetaClass;
