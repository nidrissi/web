import React from "react";
import MetaData from "./data";
import { Urls } from "./links";

type MetaClassProps = {
  date: Date;
  lastMod: Date;
  tags?: string[];
  urls: Urls;
  cursus: string;
  what: string;
  time: string;
};
const MetaClass: React.FC<MetaClassProps> = ({ date, lastMod, tags, urls, cursus, what, time }) => {
  return (
    <>
      <div>{cursus} &bull; {what} &bull; {time}.</div>
      <MetaData date={date} lastMod={lastMod} tags={tags} urls={urls} />
    </>
  );
};
export default MetaClass;
