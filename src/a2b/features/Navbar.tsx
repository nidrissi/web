import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCog,
  faQuestion,
  faSearch,
  faTools,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "gatsby";

type navbarLink = {
  icon: IconDefinition;
  label: string;
};
const navbarLinks: navbarLink[] = [
  { icon: faSearch, label: "Search" },
  { icon: faTools, label: "DIY" },
  { icon: faCog, label: "Settings" },
];

const buttonStyle = "block p-3 text-lg"

/** A react-router powered navigation bar. */
const Navbar: React.FC<{
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>
}> = ({ setCurrentPage }) => {
  return (
    <div className="flex bg-blue-800 text-white mb-3">
      {navbarLinks.map((l) => (
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
