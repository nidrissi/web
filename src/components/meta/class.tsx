import React from "react";
import { Frontmatter } from ".";

const MetaClass: React.FC<{ frontmatter: Frontmatter }> = ({ frontmatter }) => {
  const { cursus, institution, courseType, courseHours } = frontmatter;

  const formattedData = [
    institution,
    cursus,
    courseType,
    // \xa0 = non-breaking space
    courseHours ? `${courseHours}\xa0h` : null,
  ]
    .filter(x => x) // remove empty values
    .join(' • ');

  return (
    <div>
      {formattedData}
      .
    </div>
  );
};
export default MetaClass;
