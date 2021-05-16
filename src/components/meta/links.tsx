import React from "react";
import {
  faBook,
  faCalendarDay,
  faCode,
  faFilePdf,
  faDesktop,
  faVideo,
  IconDefinition,
  faLink,
  faFile,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type LocalFile = {
  publicURL: string;
}
export type Urls = {
  arxiv: string;
  doi: string;
  mathrev: string;
  notes: LocalFile;
  pdf: LocalFile;
  slides: LocalFile;
  source: string;
  video: string;
  zbmath: string;
  custom: { name: string; url: string }[];
  customFile: { name: string; file: { publicURL: string } }[]
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
  { link: "slides", label: "Slides", icon: faDesktop },
  { link: "video", label: "Video", icon: faVideo },
  { link: "notes", label: "Notes", icon: faBook },
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
  { link: "source", label: "Source", icon: faCode },
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
    <div className="flex flex-row flex-wrap gap-1 content-center">
      {linkDefinitions.map((definition) => {
        const url = urls[definition.link];
        return url ? (
          <Link key={url} definition={definition} url={url}></Link>
        ) : null;
      }
      )}
      {urls.custom?.map(({ name, url }) => (
        <Link
          key={name}
          url={url}
          definition={{ label: name, link: "custom", icon: faLink }}
        />
      ))}
      {urls.customFile?.map(({ name, file: { publicURL } }) => (
        <Link
          key={name}
          url={publicURL}
          definition={{ label: name, link: "customFile", icon: faFile }}
        />
      ))}
    </div>
  );
};

export default Links;
