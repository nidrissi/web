import React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";

type TagLinkProps = {
  tag: string;
  big?: boolean;
  count?: number;
};

const TagLink: React.FC<TagLinkProps> = ({ tag, big, count }) => {
  const extraStyle = big ? "font-semibold text-2xl py-2 px-3" : "text-sm px-1.5 py-0.5";

  return (
    <Link
      to={`/tag/${tag}`}
      className={`block text-indigo-800 border-indigo-100 hover:text-white hover:bg-indigo-800 rounded-md ${extraStyle}`}
    >
      <FontAwesomeIcon icon={faTag} size="sm" className="mr-1" />
      {tag}
      {count && <span className="text-lg"> [{count}]</span>}
    </Link>
  )
}

export default TagLink;
