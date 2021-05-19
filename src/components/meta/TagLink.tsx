import React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";

type TagLinkProps = {
  tag: string;
  big?: boolean;
};

const TagLink: React.FC<TagLinkProps> = ({ tag, big }) => {
  const extraStyle = big ? "font-semibold text-2xl p-2" : "font-light text-sm px-1";

  return (
    <Link
      to={`/tag/${tag}`}
      className={`block text-indigo-800 border border-indigo-800 border-opacity-60 hover:text-white hover:bg-indigo-800 rounded-md ${extraStyle}`}
    >
      <FontAwesomeIcon icon={faTag} size="sm" className="mr-1" />
      {tag}
    </Link>
  )
}

export default TagLink;
