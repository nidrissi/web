import React from "react";
import { Frontmatter } from ".";
import MetaData from "./data";

const MetaTalk: React.FC<{ frontmatter: Frontmatter }> = ({ frontmatter }) => {
  const { TBA, location } = frontmatter;

  return (
    <>
      <div>{TBA ? '?' : ''}{location}{TBA ? '?' : ''}</div>
      <MetaData frontmatter={frontmatter} />
    </>
  );
};
export default MetaTalk;
