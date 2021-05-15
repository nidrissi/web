import React from "react";
import MetaClass from "./class";
import MetaData from "./data";
import { Urls } from "./links";
import MetaResearch from "./research";

export type Frontmatter = {
  title: string;
  date: string;
  lastMod?: string;
  tags: string[];
  urls: Urls;
  // Research
  publication?: string;
  authors?: string[];
  // Class
  cursus?: string;
  what?: string;
  time?: string;
};

const Meta: React.FC<{ frontmatter: Frontmatter, type: string }> = ({
  frontmatter: { date, lastMod, tags, urls, publication, authors, cursus, what, time },
  type
}) => {
  return (
    <div className="flex flex-wrap gap-x-2 gap-y-1 content-center text-gray-600">
      {

        type === 'research' ? (
          <MetaResearch
            publication={publication}
            date={new Date(date)}
            lastMod={lastMod ? new Date(lastMod) : null}
            authors={authors}
            urls={urls}
          />
        ) : type === 'class' ? (
          <MetaClass
            date={new Date(date)}
            lastMod={lastMod ? new Date(lastMod) : null}
            tags={tags}
            urls={urls}
            cursus={cursus}
            what={what}
            time={time}
          />
        ) : (
          <MetaData
            date={new Date(date)}
            lastMod={lastMod ? new Date(lastMod) : null}
            tags={tags}
            urls={urls}
          />
        )
      }
    </div>
  );
}

export default Meta
