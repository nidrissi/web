import React from "react"
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

type PagerProps = {
  numPages: number;
  currentPage: number;
  type: string;
};
const Pager: React.FC<PagerProps> = ({ numPages, currentPage, type }) => {
  const buttonStyle = "border text-purple-700 border-purple-700 hover:bg-purple-700 hover:text-white px-2 py-1 rounded-md";

  const indexToLink: ((i: number) => string) = i => i === 1 ? `/${type}` : `/${type}/${i}`;

  return (
    <ul className="mt-8 flex flex-wrap gap-2 justify-center">
      <li>
        {currentPage > 1 && (
          <Link to={indexToLink(currentPage - 1)} className={buttonStyle}>
            <FontAwesomeIcon icon={faCaretLeft} title="Previous page." />
          </Link>
        )}
      </li>
      {Array.from({ length: numPages }, (_x, i) => (
        <li key={i}>
          <Link
            to={indexToLink(i + 1)}
            className={buttonStyle}
            activeClassName="font-bold border-2"
          >
            {i + 1}
          </Link>
        </li>
      ))}
      <li>
        {currentPage < numPages && (
          <Link to={indexToLink(currentPage + 1)} className={buttonStyle}>
            <FontAwesomeIcon icon={faCaretRight} title="Next page." />
          </Link>
        )}
      </li>
    </ul>
  )
};
export default Pager;
