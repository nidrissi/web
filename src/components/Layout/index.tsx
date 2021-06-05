import React from "react";

import SEO, { SEOProps } from "./SEO";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Cookie from "./Cookie";

const Layout: React.FC<SEOProps> = ({ children, ...props }) => {
  return (
    <div className="flex flex-col gap-y-4 h-screen">
      <SEO {...props} />
      <Cookie />
      <Navbar />
      <main className="container mx-auto p-2 flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
