import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

import faq from "./faq.md";

/** The full `Help` component. Contains a table of contents and the entries from `faq`. */
const Help: React.FC<{}> = () => {
  const [content, setContent] = useState("");
  useEffect(() => {
    fetch(faq)
      .then((res) => res.text())
      .then((md) => {
        setContent(md);
      });
  }, []);

  return (
    <div className="prose prose-indigo max-w-none">
      <ReactMarkdown children={content} />
    </div>
  );
};
export default Help;
