import { Link } from "gatsby";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { actualTitle } from "./Page";

export type NextPreviousProps = {
  slug: string;
  frontmatter: {
    title: string;
    event: string;
    location: string;
    year: string;
  };
}

export const NextPrevious: React.FC<{ previous: NextPreviousProps; next: NextPreviousProps; type: string; }> = ({
  next, previous, type
}) => {
  if (!next && !previous) {
    return null;
  }
  if (type === 'misc' || type === 'class') {
    return null;
  }

  const linkStyle = "p-1 text-sm text-green-700 border border-green-700 rounded-md hover:bg-green-700 hover:text-white";

  return (
    <div className="flex justify-between w-full mt-6">
      <div>

        {previous && (
          <Link
            to={`/${type}/${previous.slug}`}
            className={linkStyle}
          >
            <FontAwesomeIcon icon={faArrowLeft} className="mr-1" />
            {actualTitle(previous.frontmatter, type)}
          </Link>
        )}
      </div>
      <div>
        {next && (
          <Link
            to={`/${type}/${next.slug}`}
            className={linkStyle}
          >
            {actualTitle(next.frontmatter, type)}
            <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
          </Link>
        )}
      </div>
    </div>
  );
};
