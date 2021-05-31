import React from "react";
import {
  faCalendarDay,
  faCode,
  faDesktop,
  faVideo,
  IconDefinition,
  faLink,
  faFile,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { graphql } from "gatsby";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";

type LocalFile = {
  publicURL: string;
}
export type Urls = {
  arxiv: string;
  doi: string;
  mathrev: string;
  notes: LocalFile;
  read: LocalFile;
  slides: LocalFile;
  source: string;
  video: string;
  zbmath: string;
  event: string;
  custom: { label: string; url: string }[];
  customFile: { label: string; file: { publicURL: string } }[]
};
export const allUrlsFragment = graphql`
fragment allUrlsFragment on MdxFrontmatter {
urls {
  read {
    publicURL
  }
  slides {
    publicURL
  }
  notes {
    publicURL
  }
  event
  video
  source
  doi
  arxiv
  mathrev
  zbmath
  custom {
    label
    url
  }
  customFile {
    label
    file {
      publicURL
    }
  }
}
}
`;

type LinkDefinition = {
  link: string;
  label: string | ((id: string) => string);
  icon?: IconDefinition;
  urlBuilder?: (id: string) => string;
};
const linkDefinitions: LinkDefinition[] = [
  { link: "event", label: "Event", icon: faCalendarDay },
  { link: "read", label: "Read", icon: faFileAlt },
  { link: "slides", label: "Slides", icon: faDesktop },
  { link: "video", label: "Video", icon: faVideo },
  { link: "notes", label: "Notes", icon: faBookOpen },
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
    urlBuilder: (id) => `https://www.ams.org/mathscinet-getitem?mr=${id}`,
  },
  {
    link: "zbmath",
    label: (id) => `zb:${id}`,
    urlBuilder: (id) => `https://zbmath.org/?q=an:${id}`,
  },
  { link: "source", label: "Source", icon: faCode },
];

const EntryLink: React.FC<{ definition: LinkDefinition; url: string | LocalFile }> = ({
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
      className="block border border-gray-200 text-black hover:bg-blue-800 hover:border-blue-800 hover:text-white rounded-md px-2 py-1 text-sm"
      target={href.startsWith("http") ? "_blank" : null}
      rel={href.startsWith("http") ? "noopener noreferrer" : null}
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
    <div className="flex flex-wrap gap-x-2 gap-y-1 content-center">
      {linkDefinitions.map((definition) => {
        const url = urls[definition.link];
        return url ? (
          <EntryLink key={url.publicURL || url} definition={definition} url={url}></EntryLink>
        ) : null;
      })}

      {urls.custom?.map(({ label, url }, index) => (
        <EntryLink
          key={`custom-${index}`}
          url={url}
          definition={{ label, link: "custom", icon: faLink }}
        />
      ))}

      {urls.customFile?.map(({ label, file: { publicURL: url } }, index) => (
        <EntryLink
          key={`customFile-${index}`}
          url={url}
          definition={{ label, link: "customFile", icon: faFile }}
        />
      ))}
    </div>
  );
};

export default Links;
