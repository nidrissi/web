import React from "react";

import SEO, { SEOProps } from "./SEO";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Cookie from "./Cookie";

const Layout: React.FC<SEOProps> = ({ children, ...props }) => {
  return (
    <>
      <SEO {...props} />
      <Navbar />
      <main className="container mx-auto p-2">{children}</main>
      <Footer />
      <Cookie />
    </>
  );
};

export default Layout;
