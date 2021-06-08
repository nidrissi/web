import React from "react";
import { ImageDataLike } from "gatsby-plugin-image";

import MetaClass from "./class";
import MetaData from "./data";
import { actualTitle } from "../Page"
import Links, { Urls } from "./links";
import MetaResearch from "./research";
import MetaTalk from "./talk";

export type LocalImage = {
  childImageSharp: {
    gatsbyImageData: ImageDataLike;
    original: {
      src: string;
    };
  };
};

export type Frontmatter = {
  title: string;
  date: string;
  lastMod?: string;
  tags?: string[];
  urls?: Urls;
  localImages?: LocalImage[];
  // Research
  accepted?: string;
  publication?: string;
  status?: string;
  authors?: string[];
  // Class
  cursus?: string;
  courseType?: string;
  courseHours?: string;
  year?: string;
  // Event
  event?: string;
  location?: string;
  TBA?: boolean;
};

const Meta: React.FC<{ frontmatter: Frontmatter, type: string }> = ({
  frontmatter,
  type
}) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex flex-row flex-wrap gap-x-2 gap-y-1 content-center text-gray-700">
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
      <Links urls={frontmatter.urls} title={actualTitle(frontmatter, type)} />
    </div>
  );
}

export default Meta
