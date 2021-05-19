import { faTag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";
import React from "react";
import { Frontmatter } from ".";
import DateTime from "./datetime";
import TagLink from "./TagLink";

const MetaData: React.FC<{ frontmatter: Frontmatter }> = ({
  frontmatter: { date, lastMod, tags }
}) => {
  return (
    <>
      <DateTime date={date} label="Published" />
      <DateTime date={lastMod} label="Updated" />
      {tags && tags.map((tag) => (
        <TagLink tag={tag} key={tag} />
      ))}
    </>
  );
};
export default MetaData;
