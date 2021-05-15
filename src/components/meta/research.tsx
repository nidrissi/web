import React from "react";

import Links, { Urls } from "./links";
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

type MetaResearchProps = {
  date: Date;
  lastMod?: Date;
  authors: string[];
  publication: string;
  urls: Urls;
};
const MetaResearch: React.FC<MetaResearchProps> = ({ date, lastMod, urls, publication, authors }) => {
  const displayedAuthors = authors.length > 1 ? (
    <div>
      {authors.map((a, i) => <>
        {i > 0 && ', '}
        {formatAuthor(a)}
      </>)}.
    </div>
  ) : null;

  return (
    <div className="flex flex-wrap gap-2 content-center text-gray-600">
      {displayedAuthors}
      <div>
        {publication}
      </div>
      <div>
        Online{" "}
        <time dateTime={date.toISOString()}>
          {new Date(date).toLocaleDateString()}
        </time>
        .
      </div>
      {lastMod ? (
        <div>
          Updated{" "}
          <time dateTime={lastMod.toISOString()}>
            {lastMod.toLocaleDateString()}
          </time>
          .
        </div>
      ) : null}
      <Links urls={urls} />
    </div>
  );
};
export default MetaResearch;
