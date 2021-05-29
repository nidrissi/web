import React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

type SeeMoreProps = {
  to: string;
  label: string
}
const SeeMore: React.FC<SeeMoreProps> = ({ to, label }) => (
  <Link to={to} className={`block text-center text-green-800 border border-green-700 hover:text-white hover:bg-green-700 py-1 rounded-md`}>
    See more {label} <FontAwesomeIcon icon={faChevronRight} size="sm" />
  </Link>
);
export default SeeMore;
