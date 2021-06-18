import React from "react";
import { Frontmatter } from ".";

const MetaClass: React.FC<{ frontmatter: Frontmatter }> = ({ frontmatter }) => {
  const { cursus, institution, courseType, courseHours } = frontmatter;

  const format = (value: string) => value ? <div>{value}.</div> : null;

  return (
    <>
      {format(institution)}
      {format(cursus)}
      {format(courseType)}
      {/* \xa0 = non-breaking space */}
      {format(courseHours ? `${courseHours}\xa0h` : null)}
    </>
  );
};
export default MetaClass;
