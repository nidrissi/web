import React from "react";
import Links, { Urls } from "./links";

type MetaDataProps = {
  date: Date;
  lastMod: Date;
  tags: string[];
  urls: Urls;
};
const MetaData: React.FC<MetaDataProps> = ({ date, lastMod, tags, urls }) => {
  return (
    <div className="flex flex-wrap gap-2 content-center text-gray-600">
      <div>
        Published{" "}
        <time dateTime={date.toISOString()}>
          {new Date(date).toLocaleDateString()}
        </time>
        .
      </div>
      {lastMod ? (
        <div>
          Updated{" "}
          <time dateTime={lastMod.toISOString()}>
            {lastMod.toLocaleDateString()}
          </time>
          .
        </div>
      ) : null}
      <Links urls={urls} />
      {tags && tags.map((t) => <div key={t}>#{t}</div>)}
    </div>
  );
};
export default MetaData;
