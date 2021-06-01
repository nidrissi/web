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
    <nav className="max-w-md my-2 rounded-md border border-blue-300 text-blue-800">
      <button
        className="block focus:outline-none w-full p-1 text-lg hover:bg-blue-800 hover:text-white"
        onClick={() => setShow(!show)}
      >
        <FontAwesomeIcon icon={faParagraph} className="mr-1" />
        Contents
        <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
      </button>
      {show ? (
        <ol
          id="toc-body"
          className="list-decimal list-inside text-lg border-t border-white mt-2 mb-1 px-1"
          aria-hidden={!show}
        >
          {items.map(({ url, title }) => (
            <li key={url}>
              <Link to={url} className="hover:underline">
                {title}
              </Link>
            </li>
          ))}
        </ol>
      ) : null
      }
    </nav>
  ) : null;
}
export default TOC;
