import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { setQuery } from './searchFormSlice';
import { selectIsLoading } from '../Results/resultsSlice';

function splitter(current) {
  const rx = /\s*&\s*/;
  return current.split(rx).filter(s => s !== '');
}

function InputField({ value, setValue, label, placeholder, title }) {
  return (
    <Form.Group as={Row}>
      <Form.Label column sm="2">
        {label}
      </Form.Label>
      <Col sm={10}>
        <Form.Control
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder={placeholder}
          title={title}
        />
      </Col>
    </Form.Group>
  );
}

function SubmitButton({ isLoading }) {
  return (
    <Form.Group>
      <Button
        disabled={isLoading}
        type="submit"
        block
      >
        {isLoading ?
         <span><Spinner animation="border" size="sm" /> Loading...</span>
         : <span><FontAwesomeIcon icon="search" /> Search</span>}
      </Button>
    </Form.Group>
  );
}

export default function SearchForm() {
  const dispatch = useDispatch();
  const [currentIds, setCurrentIds] = useState('');
  const [currentAuthors, setCurrentAuthors] = useState('');
  const [currentTitles, setCurrentTitles] = useState('');

  const isLoading = useSelector(selectIsLoading);

  const handleSubmit = e => {
    e.preventDefault();
    e.stopPropagation();
    const query = {
      ids: splitter(currentIds),
      authors: splitter(currentAuthors),
      titles: splitter(currentTitles)
    };
    dispatch(setQuery(query));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputField
        value={currentIds}
        setValue={setCurrentIds}
        label="ID list"
        placeholder="ID1 & ID2 & ..."
        title="List of IDs, separated by '&'. Version will be stripped, e.g. 1911.12281v1 => 1911.12281."
      />
      <InputField
        value={currentAuthors}
        setValue={setCurrentAuthors}
        label="Authors"
        placeholder="Carl Gauß & David Hilbert & ..."
        title="Author(s) separated by '&'."
      />
      <InputField
        value={currentTitles}
        setValue={setCurrentTitles}
        label="Title"
        placeholder="Operad & Configuration spaces & ..."
        title="Words/sentences to search in the title separated by '&'."
      />
      <SubmitButton isLoading={isLoading} />
    </Form>
  );
}
