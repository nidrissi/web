import React from "react";

import { Frontmatter } from ".";
import DateTime from "./datetime";
import Links from "./links";

import people from './people.json'

function formatAuthor(author: string): string | JSX.Element {
  const person = people.find(p => (p.id === author));
  if (person) {
    if (person.url) {
      return (
        <a href={person.url} className="text-blue-700 hover:underline">
          {person.name}
        </a>
      )
    } else {
      return person.name
    }
  } else {
    return author
  }
}

const MetaResearch: React.FC<{ frontmatter: Frontmatter }> = ({ frontmatter: { date, lastMod, urls, publication, authors } }) => {
  const displayedAuthors = authors.length > 1 ? (
    <div>
      {authors.map((a, i) => <React.Fragment key={a}>
        {i > 0 && ', '}
        {formatAuthor(a)}
      </React.Fragment>)}.
    </div>
  ) : null;

  return (
    <>
      {displayedAuthors}
      <div>
        {publication}
      </div>
      <div>
        Online{" "}
        <DateTime date={date} />
        .
      </div>
      {lastMod ? (
        <div>
          Updated{" "}
          <DateTime date={lastMod} />
          .
        </div>
      ) : null}
      <Links urls={urls} />
    </>
  );
};
export default MetaResearch;
