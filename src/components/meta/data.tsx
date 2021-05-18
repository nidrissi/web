import { faTag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";
import React from "react";
import { Frontmatter } from ".";
import DateTime from "./datetime";

const MetaData: React.FC<{ frontmatter: Frontmatter }> = ({
  frontmatter: { date, lastMod, tags }
}) => {
  return (
    <>
      <DateTime date={date} label="Published" />
      <DateTime date={lastMod} label="Updated" />
      {tags && tags.map((tag) => (
        <Link
          key={tag}
          to={`/tag/${tag}`}
          className="block font-light text-indigo-800 px-1 border border-indigo-800 border-opacity-60 hover:text-white hover:bg-indigo-800 rounded-md"
        >
          <FontAwesomeIcon icon={faTag} className="mr-1 text-xs" />
          {tag}
        </Link>
      ))}
    </>
  );
};
export default MetaData;
