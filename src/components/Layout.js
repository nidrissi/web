import React from "react";

const Layout = ({ title, children }) => {
  return (
    <div className="container">
      <header>
        <h1>{title}</h1>
      </header>
      <main>{children}</main>
      <footer>Najib Idrissi</footer>
    </div>
  );
};

export default Layout;
