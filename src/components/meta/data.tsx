import React from "react";
import {
  faFileCode,
  faFilePdf,
  faFileVideo,
} from "@fortawesome/free-regular-svg-icons";
import {
  faPencilRuler,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Urls = {
  arxiv?: string;
  custom?: { name: string; url: string }[];
  doi?: string;
  mathrev?: string;
  notes?: string;
  pdf?: string;
  slides?: string;
  source?: string;
  video?: string;
  zbmath?: string;
};

type LinkDefinition = {
  link: string;
  label: string | ((id: string) => string);
  icon?: IconDefinition;
  urlBuilder?: (id: string) => string;
};
const linkDefinitions: LinkDefinition[] = [
  { link: "pdf", label: "PDF", icon: faFilePdf },
  { link: "slides", label: "Slides" },
  { link: "video", label: "Video", icon: faFileVideo },
  { link: "notes", label: "Notes", icon: faPencilRuler },
  {
    link: "doi",
    label: (id) => `DOI:${id}`,
    urlBuilder: (id) => `https://doi.org/${id}`,
  },
  {
    link: "arxiv",
    label: (id) => `arXiv:${id}`,
    urlBuilder: (id) => `https://arxiv.org/abs/${id}`,
  },
  {
    link: "mathrev",
    label: (id) => `MR:${id}`,
    urlBuilder: (id) => `http://www.ams.org/mathscinet-getitem?mr=${id}`,
  },
  {
    link: "zbmath",
    label: (id) => `zb:${id}`,
    urlBuilder: (id) => `https://zbmath.org/?q=an:${id}`,
  },
  { link: "source", label: "Source", icon: faFileCode },
];

const Link: React.FC<{ definition: LinkDefinition; url: string }> = ({
  url,
  definition,
}) => {
  if (!url) {
    return null;
  }
  const label =
    typeof definition.label === "string"
      ? definition.label
      : definition.label(url);
  const href = definition.urlBuilder ? definition.urlBuilder(url) : url;
  return (
    <a
      href={href}
      className="block bg-blue-200 text-black hover:bg-gray-100 hover:text-blue-900 hover:border-blue-900 border rounded-full px-2 py-0.5 text-sm"
    >
      {definition.icon ? (
        <FontAwesomeIcon icon={definition.icon} className="mr-1" />
      ) : null}
      {label}
    </a>
  );
};

const Links: React.FC<{ urls: Urls }> = ({ urls }) => {
  if (!urls) {
    return null;
  }
  return (
    <>
      {linkDefinitions.map((definition) =>
        urls[definition.link] ? (
          <Link definition={definition} url={urls[definition.link]}></Link>
        ) : null
      )}
    </>
  );
};

type MetaDataProps = {
  date: Date;
  lastMod: Date;
  tags: string[];
  urls: Urls;
};
const MetaData: React.FC<MetaDataProps> = ({ date, lastMod, tags, urls }) => {
  return (
    <div className="flex flex-wrap gap-2 content-center text-gray-600">
      <div>
        Published{" "}
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
      {tags && tags.map((t) => <div key={t}>#{t}</div>)}
    </div>
  );
};
export default MetaData;
