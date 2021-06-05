import React, { useEffect, useState } from "react";

const Cookie: React.FC<{}> = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (
      !document.cookie
        .split("; ")
        .find((row) => row.startsWith("cookieToastShown="))
    ) {
      setShow(true);
      setInterval(() => { setShow(false) }, 5000);
      document.cookie = "cookieToastShown=true; expires=Fri, 31 Dec 9999 23:59:59 GMT";
    }
  }, []);

  if (!show) {
    return null;
  } else {
    return (
      <aside className="fixed bottom-0 left-0 w-screen bg-gray-200 border-t border-black p-3 text-center content-center text-lg">
        <p>
          I use cookies to analyze traffic. To opt out, you can
          {' '}
          <a
            href="https://tools.google.com/dlpage/gaoptout/"
            className="text-blue-700 hover:underline"
          >install the Google Analytics opt-out add-on</a>.
        </p>
      </aside>
    );
  }
};
export default Cookie;
