import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";
import { Frontmatter } from ".";

function format(value: string): JSX.Element {
  return value ? (
    <div>{value}.</div>
  ) : null;
}

const courseTypeAssociation: {
  [key: string]: {
    color: string;
    label: string;
    title?: string;
  }
} = {
  CM: {
    color: "border-indigo-300 dark:border-indigo-900",
    label: "Lectures",
  },
  TD: {
    color: "border-blue-300 dark:border-blue-900",
    label: "Exercise sessions",
    title: "Directed exercise sessions where students work on their own before the solution to each exercise is given to the whole group."
  },
  TP: {
    color: "border-yellow-300 dark:border-yellow-900",
    label: "Practical work",
    title: "Supervised programming exercises on computers."
  },
  O: {
    color: "border-purple-300 dark:border-purple-900",
    label: "Organization",
    title: "Organization of the overall course, including exams, and coordination between the different exercise groups."
  },
  Colles: {
    color: "border-pink-300 dark:border-pink-900",
    label: "Oral exams",
    title: "Graded weekly oral exams."
  },
  T: {
    color: "border-green-300 dark:border-green-900",
    label: "Tutoring",
    title: "Weekly sessions where students can ask questions and work out exercises seen before."
  },
}

const CourseTypeBlock: React.FC<{ type: string }> = ({ type }) => {
  const [expanded, setExpanded] = useState(false)

  const { color, label, title } = courseTypeAssociation[type];
  return (
    <div
      className={`block px-1 border border-opacity-50 rounded-md ${color} ${title ? 'cursor-pointer' : ''}`}
      onClick={() => title && setExpanded(e => !e)}
      onBlur={() => setExpanded(false)}
      title={title && "Click for more details."}
      tabIndex={title ? 0 : -1}
    >
      {!expanded && label}
      {title && (
        expanded ? (
          `[${title}]`
        ) : (
          <FontAwesomeIcon icon={faQuestionCircle} size="xs" className="ml-1" />
        ))}
    </div>
  );
}

function formatCourseType(courseTypes: string[]): JSX.Element[] {
  if (!courseTypes) {
    return null;
  } else {
    return courseTypes.map(type => (
      <CourseTypeBlock key={type} type={type} />
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
