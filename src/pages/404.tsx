import React from "react";
import { Link, navigate } from "gatsby";
import { useLocation } from "@reach/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUndo } from "@fortawesome/free-solid-svg-icons";

import Layout from "../components/Layout";

const Error404: React.FC<{}> = () => {
  // redirect /en/* => *
  const { pathname } = useLocation();
  if (pathname.startsWith('/en/')) {
    navigate(pathname.replace(/^\/en/, ''), { replace: true })
    return <></>;
  }

  return (
    <Layout title="404 Not Found" description="Not Found">
      <div className="w-full h-48 rounded-xl bg-gray-300 flex">
        <div className="my-auto mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">404 Not Found</h1>
          <Link to="/" className="text-2xl text-blue-600 hover:underline">
            <FontAwesomeIcon icon={faUndo} className="mr-1" />
            Go back
          </Link>
        </div>
      </div>
    </Layout>
  );
}
export default Error404;
