import { faCaretDown, faParagraph } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";
import React, { useState } from "react";

export type TableOfContents = {
  items: {
    url: string;
    title: string;
  }[];
}

const TOC: React.FC<{ toc: TableOfContents }> = ({ toc: { items } }) => {
  const [show, setShow] = useState(false);

  return items ? (
    <div className="float-right max-w-lg p-2 m-2 rounded-md bg-blue-800 text-white">
      <button className="block focus:outline-none w-full" onClick={() => setShow(!show)}>
        <FontAwesomeIcon icon={faParagraph} className="mr-1" />
        Contents
        <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
      </button>
      <ol className={`${show ? 'block' : 'hidden'} border-t border-white text-lg list-decimal mt-2 mb-1`}>
        {items.map(({ url, title }) => (
          <li key={url} className="mx-4">
            <Link to={url}>{title}</Link>
          </li>
        ))}
      </ol>
    </div>
  ) : null;
}
export default TOC;
