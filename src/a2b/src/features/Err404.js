import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

/** A generic 404 error */
export default function Err404() {
  return (
    <Jumbotron>
      <h1 className="text-center">404 not found</h1>
    </Jumbotron>
  );
}
