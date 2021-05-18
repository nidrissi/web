import React from "react";

import { Frontmatter } from ".";
import DateTime from "./datetime";

import people from './people.json'

function formatAuthor(author: string): string | JSX.Element {
  const person = people[author];
  if (person) {
    return person.url ? (
      <a
        href={person.url}
        className="text-blue-700 hover:underline"
        target="_blank"
        rel="noopener nofollow noreferrer"
      >
        {person.name}
      </a>
    ) : person.name;
  } else {
    return author;
  }
}

const MetaResearch: React.FC<{ frontmatter: Frontmatter }> = ({ frontmatter: { date, lastMod, publication, authors } }) => {
  const displayedAuthors = authors.length > 1 ? (
    <div>
      {authors.map((a, i) => (
        <React.Fragment key={a}>
          {i > 0 && ', '}
          {formatAuthor(a)}
        </React.Fragment>
      ))}.
    </div>
  ) : null;

  return (
    <>
      {displayedAuthors}
      <div dangerouslySetInnerHTML={{ __html: publication }} />
      <DateTime date={date} label="Online" />
      <DateTime date={lastMod} label="Updated" />
    </>
  );
};
export default MetaResearch;
