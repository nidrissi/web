import { faPlayCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

type PeccotCardProps = {
  link: string;
  number: string;
  date: string;
  video: string
}

const PeccotCard: React.FC<PeccotCardProps> = ({ link, number, date, children }) => {
  return (
    <div className="border rounded-md flex flex-col gap-1 h-full">
      {/* Awful hack. tailwind-prose puts a margin on images and I couldn't find how to disable it. */}
      <div className="-mb-9"></div>
      <a
        className="block"
        href={link}
      >
        <img src={`/img/peccot/thumb${number}.jpg`} alt={`Photo of the lecture ${number}`} className="w-full rounded-t-md" />
      </a>
      <div className="-mt-3">
        <span className="font-bold text-xl">Lesson {number}</span>
        <br />
        <span className="text-gray-700 font-semibold">{date}</span>
      </div>
      <div className="flex-grow">
        {children}
      </div>
      <a className="block p-2 bg-gray-200 rounded-b-md text-center" href={link}>
        <FontAwesomeIcon icon={faPlayCircle} />
        &nbsp;Video
      </a>
    </div>
  )
}
export default PeccotCard
