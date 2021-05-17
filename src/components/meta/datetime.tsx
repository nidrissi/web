import React from "react";

type DateTimeProps = {
  date: string;
  label: string;
  TBA?: boolean
}

const DateTime: React.FC<DateTimeProps> = ({ date, label, TBA }) => {
  if (!date) {
    return null;
  }

  const formattedDate = new Date(date).toLocaleDateString();

  return (
    <div>
      {label}
      {' '}
      <time dateTime={new Date(date).toISOString()}>
        {TBA ? (
          <abbr title="The precise date is not yet known.">
            {formattedDate}?
          </abbr>
        ) : formattedDate}
      </time>
      .
    </div>
  )
}
export default DateTime;
