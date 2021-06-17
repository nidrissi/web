import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faQuestion,
  faSearch,
  faTools,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "gatsby";

const links: {
  icon: IconDefinition;
  label: string;
}[] = [
    { icon: faSearch, label: "Search" },
    { icon: faTools, label: "DIY" },
    { icon: faCog, label: "Settings" },
  ];

const buttonStyle = "block p-2 text-lg border border-blue-800 hover:bg-blue-800 hover:text-white rounded-md"

/** A react-router powered navigation bar. */
const Navbar: React.FC<{
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>
}> = ({ setCurrentPage }) => {
  return (
    <div className="flex flex-wrap mb-3 items-center gap-x-3">
      <h1 className="text-3xl font-bold px-1 dark:text-gray-200">
        arXiv2BibLaTeX
      </h1>
      {links.map((l) => (
        <button
          key={l.label}
          className={buttonStyle}
          onClick={() => setCurrentPage(l.label)}
        >
          <FontAwesomeIcon icon={l.icon} className="mr-1" />
          {l.label}
        </button>
      ))}
      <Link to="/misc/a2b/help" className={buttonStyle}>
        <FontAwesomeIcon icon={faQuestion} className="mr-1" />
        Help
      </Link>
    </div>
  );
};

export default Navbar;
