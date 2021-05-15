import React from "react";
import MetaData from "./data";
import { Urls } from "./links";
import MetaResearch from "./research";

export type Frontmatter = {
  title: string;
  date: string;
  lastMod?: string;
  tags: string[];
  publication?: string;
  authors?: string[];
  urls: Urls;
};

const Meta: React.FC<{ frontmatter: Frontmatter, type: string }> = ({
  frontmatter: { title, date, lastMod, tags, urls, publication, authors },
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
