import React from "react";
import { Frontmatter } from ".";
import DateTime from "./datetime";

const MetaTalk: React.FC<{ frontmatter: Frontmatter }> = ({ frontmatter }) => {
  const { TBA, location, event, date } = frontmatter;

  return (
    <>
      <div>{event} @ {location}.</div>
      <div>{TBA ? '?' : ''}On <DateTime date={date} />{TBA ? '?' : ''}.</div>
    </>
  );
};
export default MetaTalk;
