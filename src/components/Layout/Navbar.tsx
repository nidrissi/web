import React, { useState } from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faBoxOpen,
  faCaretDown,
  faCaretRight,
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
  partiallyActive?: boolean;
};
const navbarLinks: navbarLink[] = [
  { to: "/", icon: faHome, label: "Home" },
  { to: "/misc/cv", icon: faPortrait, label: "CV" },
  { to: "/research", icon: faFlask, label: "Research", partiallyActive: true },
  { to: "/talk", icon: faComments, label: "Talks", partiallyActive: true },
  { to: "/class", icon: faChalkboardTeacher, label: "Teaching", partiallyActive: true },
  { to: "/post", icon: faPencilAlt, label: "Blog", partiallyActive: true },
  { to: "/misc", icon: faBoxOpen, label: "Misc" },
];

const Navbar: React.FC<{}> = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <nav
      className={`sticky top-0 w-full ${expanded ? "grid grid-cols-1" : "flex"
        } items-center gap-4 mb-3 bg-green-900 text-white z-50`}
    >
      <div className="flex w-full md:hidden items-center justify-between">
        <Link to="/" className="block p-2 font-semibold text-xl">
          Najib Idrissi
        </Link>
        <button
          className="block cursor-pointer p-2 bg-green-800 rounded-sm"
          onClick={() => setExpanded(!expanded)}
          aria-controls="navbar-content"
          title="Expand the navbar"
        >
          <FontAwesomeIcon size="2x" fixedWidth icon={expanded ? faCaretDown : faCaretRight} />
        </button>
      </div>
      <div
        id="navbar-content"
        className={`grid grid-cols-1 md:flex gap-2 ${expanded ? "" : "hidden"}`}
      >
        {navbarLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="block p-2 text-lg"
            activeClassName="font-bold text-white"
            partiallyActive={link.partiallyActive}
          >
            <FontAwesomeIcon icon={link.icon} className="mr-1" />{link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
