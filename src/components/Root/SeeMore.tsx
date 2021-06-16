import React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const SeeMore: React.FC<{ to: string }> = ({ to, children }) => (
  <Link
    to={to}
    className="block text-center text-green-800 dark:text-green-500 border border-green-800 dark:border-green-500 hover:text-white dark:hover:text-black hover:bg-green-700 dark:hover:bg-green-500 hover:shadow-md py-1 rounded-md"
  >
    See more {children}&nbsp;<FontAwesomeIcon icon={faChevronRight} size="sm" />
  </Link>
);
export default SeeMore;
