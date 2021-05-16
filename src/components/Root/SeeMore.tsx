import React from "react";
import { Link } from "gatsby";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type SeeMoreProps = {
  to: string;
  style: string;
  label: string
}
const SeeMore: React.FC<SeeMoreProps> = ({ to, style, label }) => (
  <Link to={to} className={`block text-center ${style} py-1 rounded-md`}>
    See more {label} <FontAwesomeIcon icon={faArrowRight} />
  </Link>
);
export default SeeMore;
