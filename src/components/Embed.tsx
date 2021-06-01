import React from "react";
import { Link } from "gatsby";

const Embed: React.FC<{ url: string, alt: string }> = ({ url, alt }) => {
  const content = url.endsWith(".pdf") ? (
    <div className="aspect-w-16 aspect-h-9">
      <object type="application/pdf" data={url} title={alt} className="block w-full max-h-full" />
    </div>
  ) : (
    <Link to={url}>
      <img src={url} alt={alt} className="max-w-3xl" />
    </Link>
  );

  return (
    <div className="mx-auto my-4">
      {content}
    </div>
  )
}
export default Embed;
