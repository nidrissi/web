import React from "react"
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleLeft, faAngleDoubleRight, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

type PagerProps = {
  numPages: number;
  currentPage: number;
  type: string;
};
const Pager: React.FC<PagerProps> = ({ numPages, currentPage, type }) => {
  if (numPages === 1) {
    return null;
  }

  const buttonStyle = "block border text-purple-700 border-purple-700 hover:bg-purple-700 hover:text-white px-2 rounded-md";

  const indexToLink: ((i: number) => string) = i => i === 1 ? `/${type}` : `/${type}/${i}`;

  return (
    <nav className="mt-8 flex flex-wrap gap-2 justify-center">
      {currentPage > 1 && (
        <>
          <Link to={indexToLink(1)} className={buttonStyle}>
            <FontAwesomeIcon icon={faAngleDoubleLeft} title="First page" />
          </Link>
          <Link to={indexToLink(currentPage - 1)} className={buttonStyle}>
            <FontAwesomeIcon icon={faAngleLeft} title="Previous page." />
          </Link>
        </>
      )}
      {Array.from({ length: numPages }, (_x, i) => (
        <Link
          key={i}
          to={indexToLink(i + 1)}
          className={buttonStyle}
          activeClassName="font-bold border-2"
        >
          {i + 1}
        </Link>
      ))}
      {currentPage < numPages && (
        <>
          <Link to={indexToLink(currentPage + 1)} className={buttonStyle}>
            <FontAwesomeIcon icon={faAngleRight} title="Next page." />
          </Link>
          <Link to={indexToLink(numPages)} className={buttonStyle}>
            <FontAwesomeIcon icon={faAngleDoubleRight} title="Last page" />
          </Link>
        </>
      )}
    </nav>
  )
};
export default Pager;
