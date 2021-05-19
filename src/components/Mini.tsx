import React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretSquareRight } from "@fortawesome/free-solid-svg-icons";

import Meta, { Frontmatter } from "./meta";
import { actualTitle } from "./Page";

type MiniProps = {
  frontmatter: Frontmatter;
  type: string;
  slug: string;
  levelUp?: boolean;
  excerpt?: string;
  noLink?: boolean;
}
const Mini: React.FC<MiniProps> = ({ frontmatter, slug, levelUp, excerpt, type, noLink }) => {
  const title = noLink ? actualTitle(frontmatter, type) : (
    <Link to={`/${type}/${slug}`} className="text-green-800 hover:underline">
      {actualTitle(frontmatter, type)}
    </Link>
  )

  const header = levelUp ? (
    <h2 className="text-2xl font-semibold max-w-3xl">
      {title}
    </h2>
  ) : (
    <h3 className="text-xl font-semibold max-w-3xl">
      { title}
    </h3 >
  )

  const fullExcerpt = excerpt ? (
    <Link to={`/post/${slug}`} className="block text-sm hover:underline hover:text-blue-800 max-w-xl">
      {excerpt}
      {' '}
      <FontAwesomeIcon icon={faCaretSquareRight} />
    </Link>
  ) : null;

  return (
    <article>
      {header}
      <div className="mb-2">
        <Meta frontmatter={frontmatter} type={type} />
      </div>
      {fullExcerpt}
    </article>
  )
}
export default Mini;
