import React, { useState } from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faBoxOpen,
  faBroadcastTower,
  faBullhorn,
  faChalkboardTeacher,
  faHome,
  faPenNib,
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
  { to: "/research", icon: faPenNib, label: "Research" },
  { to: "/talk", icon: faBullhorn, label: "Talks" },
  { to: "/class", icon: faChalkboardTeacher, label: "Teaching" },
  { to: "/post", icon: faBroadcastTower, label: "Blog" },
  { to: "/misc", icon: faBoxOpen, label: "Misc" },
];

const Navbar: React.FC<{}> = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div
      className={`sticky top-0 w-full ${expanded ? "grid grid-cols-1" : "flex"
        } items-center gap-4 mb-3 bg-white text-black z-50`}
    >
      <div className="flex ml-auto flex-none md:hidden justify-end">
        <button
          className="cursor-pointer p-3 text-xl bg-gray-100 rounded-md m-2"
          onClick={() => setExpanded(!expanded)}
          title="Expand the navbar"
        >
          <FontAwesomeIcon icon={faBars} />
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
            className="block p-3 text-lg"
            activeClassName="font-semibold"
          >
            <FontAwesomeIcon icon={l.icon} />
            &nbsp;{l.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
