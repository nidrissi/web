import React, { useState } from 'react';

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import Entry from './Entry';

export default function DIY() {
  const [type, setType] = useState('Article');
  const [authors, setAuthors] = useState([]);
  const [year, setYear] = useState(0);
  const [journal, setJournal] = useState('');
  const [id, setId] = useState('');
  const [doi, setDoi] = useState('');

  const entry = {
    type,
    authors: authors.map(s => s.trim()),
    year: year || 0,
    journal: (type === 'Article') ? journal : null,
    id,
    doi
  };
  return (
    <>
      <h1>Do It Yourself</h1>
      <Form>
        <Form.Group as={Row}>
          <Form.Label
            column sm={2}
            htmlFor='type'
          >
            Type
          </Form.Label>
          <Col>
            <Form.Control
              id='type'
              as='select'
              value={type}
              onChange={e => setType(e.target.value)}
            >
              <option value='Article'>Journal article</option>
              <option value='Book'>Book</option>
              <option value='InProceedings'>Conference/Talk proceedings</option>
              <option value='Misc'>Other</option>
            </Form.Control>
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label
            column sm={2}
            htmlFor='authors'
          >
            Authors
          </Form.Label>
          <Col>
            <Form.Control
              id='authors'
              value={authors.join('&')}
              onChange={e => setAuthors(e.target.value.split(/&/))}
              placeholder='Author names separated by &'
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label
            column sm={2}
            htmlFor='year'
          >
            Year
          </Form.Label>
          <Col>
            <Form.Control
              id='year'
              type='number'
              value={year}
              onChange={e => setYear(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className={type !== 'Article' ? 'd-none' : ''}
        >
          <Form.Label
            column sm={2}
            htmlFor='journal'
          >
            Journal
          </Form.Label>
          <Col>
            <Form.Control
              id='journal'
              value={journal}
              onChange={e => setJournal(e.target.value)}
              disabled={type !== 'Article'}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label
            column sm={2}
            htmlFor='id'
          >
            ArXiv ID
          </Form.Label>
          <Col>
            <Form.Control
              id='id'
              value={id}
              onChange={e => setId(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label
            column sm={2}
            htmlFor='doi'
          >
            DOI
          </Form.Label>
          <Col>
            <Form.Control
              id='doi'
              value={doi}
              onChange={e => setDoi(e.target.value)}
            />
          </Col>
        </Form.Group>
      </Form>
      <Entry entry={entry} />
    </>
  );
}
