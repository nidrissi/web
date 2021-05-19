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

type navbarLink = {
  icon: IconDefinition;
  label: string;
};
const navbarLinks: navbarLink[] = [
  { icon: faSearch, label: "Search" },
  { icon: faTools, label: "DIY" },
  { icon: faCog, label: "Settings" },
];

/** A react-router powered navigation bar. */
const Navbar: React.FC<{
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>
}> = ({ setCurrentPage }) => {
  return (
    <div>
      {navbarLinks.map((l) => (
        <button
          key={l.label}
          className="block p-3 text-lg"
          onClick={() => setCurrentPage(l.label)}
        >
          <FontAwesomeIcon icon={l.icon} />
            &nbsp;{l.label}
        </button>
      ))}
    </div>
  );
};

export default Navbar;
