import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import {
  selectId,
  setId,
} from './searchFormSlice';

export default function SearchForm() {
  const dispatch = useDispatch();
  const id = useSelector(selectId);

  return (
    <Form>
      <Form.Group as={Row} controlId="id">
        <Form.Label column sm="2">ID</Form.Label>
        <Col sm={10}>
          <Form.Control
            value={id}
            onChange={e => dispatch(setId(e.target.value))}
          />
        </Col>
      </Form.Group>
    </Form>
  );
}
