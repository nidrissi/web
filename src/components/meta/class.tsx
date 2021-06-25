import React from "react";
import { Frontmatter } from ".";

function format(value: string): JSX.Element {
  return value ? (
    <div>{value}.</div>
  ) : null;
}

const courseTypeAssociation = {
  CM: {
    color: "border-indigo-300 dark:border-indigo-900",
    label: "Lectures",
  },
  TD: {
    color: "border-blue-300 dark:border-blue-900",
    label: "Exercise sessions",
  },
  TP: {
    color: "border-yellow-300 dark:border-yellow-900",
    label: "Practical work",
  },
  O: {
    color: "border-purple-300 dark:border-purple-900",
    label: "Organization"
  },
  Colles: {
    color: "border-pink-300 dark:border-pink-900",
    label: "Oral exams"
  },
  T: {
    color: "border-green-300 dark:border-green-900",
    label: "Tutoring"
  },
}

function formatCourseType(courseTypes: string[]): JSX.Element[] {
  if (!courseTypes) {
    return null;
  } else {
    return courseTypes.map(course => (
      <div key={course} className={`px-1 border border-opacity-50 rounded-md ${courseTypeAssociation[course]['color']}`}>
        {courseTypeAssociation[course]['label']}
      </div>
    ))
  }
}

const MetaClass: React.FC<{ frontmatter: Frontmatter }> = ({ frontmatter }) => {
  const { cursus, institution, courseTypes, courseHours } = frontmatter;

  return (
    <>
      {format(institution)}
      {format(cursus)}
      {formatCourseType(courseTypes)}
      {/* \xa0 = non-breaking space */}
      {format(courseHours ? `${courseHours}\xa0h` : null)}
    </>
  );
};
export default MetaClass;
