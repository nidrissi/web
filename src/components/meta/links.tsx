import React from "react";
import { graphql } from "gatsby";
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
  titleBuilder?: (title: string) => string;
};
const linkDefinitions: LinkDefinition[] = [
  {
    link: "event",
    label: "Event",
    icon: faCalendarDay,
  },
  {
    link: "read",
    label: "Read",
    icon: faFileAlt,
    titleBuilder: title => `Read “${title}”.`,
  },
  {
    link: "slides",
    label: "Slides",
    icon: faDesktop,
    titleBuilder: title => `Slides for the talk ${title}.`,
  },
  {
    link: "video",
    label: "Video",
    icon: faVideo,
    titleBuilder: title => `Video(s) of ${title}.`,
  },
  {
    link: "notes",
    label: "Notes",
    icon: faBookOpen,
    titleBuilder: title => `Notes for ${title}.`,
  },
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
  {
    link: "source",
    label: "Source",
    icon: faCode,
    titleBuilder: title => `Source files of ${title}.`,
  },
];

const EntryLink: React.FC<{ definition: LinkDefinition; url: string | LocalFile; title: string }> = ({
  url,
  definition,
  title
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
      className="block border border-gray-200 text-black hover:bg-blue-800 hover:border-blue-800 hover:text-white hover:shadow-md rounded-md px-2 py-1 text-sm"
      target={href.startsWith("http") ? "_blank" : null}
      rel={href.startsWith("http") ? "noopener noreferrer" : null}
      title={definition.titleBuilder ? definition.titleBuilder(title) : null}
    >
      {definition.icon && <FontAwesomeIcon icon={definition.icon} className="mr-1" />}
      {label}
    </a>
  );
};

const Links: React.FC<{ urls: Urls; title: string }> = ({ urls, title }) => {
  if (!urls) {
    return null;
  }
  return (
    <div className="flex flex-wrap gap-x-2 gap-y-1 content-center">
      {linkDefinitions.map((definition) => {
        const url = urls[definition.link];
        return url && (
          <EntryLink
            key={url.publicURL || url}
            url={url}
            title={title}
            definition={definition}
          />
        );
      })}

      {urls.custom?.map(({ label, url }, index) => (
        <EntryLink
          key={`custom-${index}`}
          url={url}
          title={title}
          definition={{ label, link: "custom", icon: faLink }}
        />
      ))}

      {urls.customFile?.map(({ label, file: { publicURL: url } }, index) => (
        <EntryLink
          key={`customFile-${index}`}
          url={url}
          title={title}
          definition={{ label, link: "customFile", icon: faFile }}
        />
      ))}
    </div>
  );
};

export default Links;
