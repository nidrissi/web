import React from "react";

type DateTimeProps = {
  label: string;
  TBA?: boolean
}

const DateTime: React.FC<DateTimeProps> = ({ label, children, TBA }) => {
  if (!children) {
    return null;
  }

  const date = new Date(children.toString())

  return (
    <div>
      {label}
      {' '}
      <time dateTime={date.toISOString()}>
        {TBA ? (
          <abbr title="The precise date is not yet known.">
            {date.toLocaleDateString()}?
          </abbr>
        ) : date.toLocaleDateString()}
      </time>
      .
    </div>
  )
}
export default DateTime;
