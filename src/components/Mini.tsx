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
  index?: number;
}
const Mini: React.FC<MiniProps> = ({ frontmatter, slug, levelUp, excerpt, type, noLink, index }) => {
  const titleLabel = (
    <>
      {actualTitle(frontmatter, type)}
      {index ? <span className="tracking-wider text-sm"> [{index}]</span> : null}
    </>
  );

  const linkedTitle = noLink ? titleLabel : (
    <Link to={`/${type}/${slug}`} className="text-green-800 hover:underline">
      {titleLabel}
    </Link>
  )

  const header = levelUp ? (
    <h2 className="text-2xl font-semibold max-w-3xl">
      {linkedTitle}
    </h2>
  ) : (
    <h3 className="text-xl font-semibold max-w-3xl">
      {linkedTitle}
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
