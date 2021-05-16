import React from "react";
import {
  faFileCode,
  faFilePdf,
  faFileVideo,
} from "@fortawesome/free-regular-svg-icons";
import {
  faCalendarDay,
  faPencilRuler,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type LocalFile = {
  publicURL: string;
}
export type Urls = {
  arxiv?: string;
  custom?: { name: string; url: string }[];
  doi?: string;
  mathrev?: string;
  notes?: LocalFile;
  pdf?: LocalFile;
  slides?: LocalFile;
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
  { link: "event", label: "Event", icon: faCalendarDay },
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

const Link: React.FC<{ definition: LinkDefinition; url: string | LocalFile }> = ({
  url,
  definition,
}) => {
  if (!url) {
    return null;
  }

  const actualUrl: string = typeof url === 'string' ? url : url.publicURL;
  const label: string =
    typeof definition.label === "string"
      ? definition.label
      : definition.label(actualUrl);
  const href: string = definition.urlBuilder ? definition.urlBuilder(actualUrl) : actualUrl;

  return (
    <a
      href={href}
      className="block text-black hover:bg-blue-100 hover:border-blue-900 border rounded-sm px-2 py-0.5 text-sm"
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
          <Link key={definition.link} definition={definition} url={urls[definition.link]}></Link>
        ) : null
      )}
    </>
  );
};

export default Links;
