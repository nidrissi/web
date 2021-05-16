import React from "react";
import { Link } from "gatsby";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const SeeMore: React.FC<{ to: string, style: string }> = ({ to, style }) => (
  <Link to={to} className={`block text-center ${style} py-1 rounded-md`}>
    See more <FontAwesomeIcon icon={faArrowRight} />
  </Link>
);
export default SeeMore;
