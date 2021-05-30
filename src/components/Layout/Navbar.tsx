import React, { useState } from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faBoxOpen,
  faCaretDown,
  faChalkboardTeacher,
  faComments,
  faFlask,
  faHome,
  faPencilAlt,
  faPortrait,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type navbarLink = {
  to: string;
  icon: IconDefinition;
  label: string;
};
const navbarLinks: navbarLink[] = [
  { to: "/", icon: faHome, label: "Home" },
  { to: "/misc/cv", icon: faPortrait, label: "CV" },
  { to: "/research", icon: faFlask, label: "Research" },
  { to: "/talk", icon: faComments, label: "Talks" },
  { to: "/class", icon: faChalkboardTeacher, label: "Teaching" },
  { to: "/post", icon: faPencilAlt, label: "Blog" },
  { to: "/misc", icon: faBoxOpen, label: "Misc" },
];

const Navbar: React.FC<{}> = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <nav
      className={`sticky top-0 w-full ${expanded ? "grid grid-cols-1" : "flex"
        } items-center gap-4 mb-3 bg-green-800 text-gray-200 z-50`}
    >
      <div className="flex w-full md:hidden items-center justify-between">
        <Link to="/" className="block p-2 font-semibold text-xl">
          Najib Idrissi
        </Link>
        <button
          className="block cursor-pointer py-2 px-4 text-2xl bg-green-600 rounded-sm"
          onClick={() => setExpanded(!expanded)}
          aria-controls="#navbar-content"
          title="Expand the navbar"
        >
          <FontAwesomeIcon icon={faCaretDown} />
        </button>
      </div>
      <div
        id="navbar-content"
        className={`grid grid-cols-1 md:flex gap-2 ${expanded ? "" : "hidden"}`}
      >
        {navbarLinks.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            className="block p-2 text-lg"
            activeClassName="font-bold text-white"
          >
            <FontAwesomeIcon icon={l.icon} />
            &nbsp;{l.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
