import React from "react";
import MetaClass from "./class";
import MetaData from "./data";
import Links, { Urls } from "./links";
import MetaResearch from "./research";
import MetaTalk from "./talk";

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
  // Event
  event: string;
  location: string;
  TBA: boolean;
};

const Meta: React.FC<{ frontmatter: Frontmatter, type: string }> = ({
  frontmatter,
  type
}) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex flex-row gap-x-2 gap-y-1 content-center text-gray-700">
        {
          type === 'research' ? (
            <MetaResearch frontmatter={frontmatter} />
          ) : type === 'class' ? (
            <MetaClass frontmatter={frontmatter} />
          ) : type === 'talk' ? (
            <MetaTalk frontmatter={frontmatter} />
          ) : (
            <MetaData frontmatter={frontmatter} />
          )
        }
      </div>
      <div className="flex flex-row gap-1 content-center">
        <Links urls={frontmatter.urls} />
      </div>
    </div>
  );
}

export default Meta
