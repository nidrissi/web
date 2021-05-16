import { faChalkboard, faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type CardProps = {
  number: number;
  date: string;
  blackboard: string;
  video: string;
}

const Card: React.FC<CardProps> = ({ number, date, children, blackboard, video }) => {
  return (
    <div className="flex flex-col border border-gray-400 rounded-md gap-2">
      <div className="p-1 bg-gray-200 rounded-t-md">
        <span className="font-semibold text-lg">Lecture {number}</span>
        {' · '}
        {date}
      </div>
      <div className="flex-grow p-1">{children}</div>
      <div className="flex flex-col gap-2 sm:flex-row sm:divide-x divide-gray-500 text-center bg-gray-100 rounded-b-md p-1">
        <a href={blackboard} className="block flex-grow"><FontAwesomeIcon icon={faChalkboard} />&nbsp;Blackboard</a>
        <a href={video} className="block flex-grow"><FontAwesomeIcon icon={faPlayCircle} />&nbsp;Video</a>
      </div>
    </div>
  )
}
export default Card;
