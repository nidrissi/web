import React from "react";
import { Frontmatter } from ".";

const MetaClass: React.FC<{ frontmatter: Frontmatter }> = ({ frontmatter }) => {
  const { cursus, courseType, courseHours } = frontmatter;

  return (
    <>
      <div>{cursus} &bull; {courseType} &bull; {courseHours}&nbsp;h.</div>
    </>
  );
};
export default MetaClass;
