import React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const SeeMore: React.FC<{ to: string }> = ({ to, children }) => (
  <Link
    to={to}
    className="block text-center text-green-800 border border-green-700 hover:text-white hover:bg-green-700 hover:shadow-md py-1 rounded-md"
  >
    See more {children}&nbsp;<FontAwesomeIcon icon={faChevronRight} size="sm" />
  </Link>
);
export default SeeMore;
