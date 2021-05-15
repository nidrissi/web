import React from "react";
import MetaClass from "./class";
import MetaData from "./data";
import { Urls } from "./links";
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
    <div className="flex flex-wrap gap-x-2 gap-y-1 content-center text-gray-600">
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
  );
}

export default Meta
