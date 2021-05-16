import React from "react";

import SEO, { SEOProps } from "./SEO";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout: React.FC<SEOProps> = ({ children, ...props }) => {
  return (
    <>
      <SEO {...props} />
      <Navbar />
      <main className="container mx-auto p-2">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
