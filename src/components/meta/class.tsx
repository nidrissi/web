import React from "react";
import { Frontmatter } from ".";

const MetaClass: React.FC<{ frontmatter: Frontmatter }> = ({ frontmatter }) => {
  const { cursus, what, time } = frontmatter;

  return (
    <>
      <div>{cursus} &bull; {what} &bull; {time}.</div>
    </>
  );
};
export default MetaClass;
