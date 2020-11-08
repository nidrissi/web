import React from 'react';

import { Formik, Form, useFormikContext } from 'formik';

import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import BForm from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import EntryCard from '../EntryCard';
import { GenericPreFields, GenericPostFields, SpecificFields, FormValues } from './data';

/** Takes values from the Formik context, creates an entry and formats it with `Entry`.
 */
const FormattedEntry: React.FC<{}> = () => {
  const { values }: { values: FormValues} = useFormikContext();
  // split on &, delete empty values, and trim
  const authors = values.authors.split('&').filter(s => s).map(s => s.trim());
  const entry = {
    ...values,
    volume: Number(values.volume),
    issue: Number(values.issue),
    authors,
    date: values.date || '0',     // date must not be empty
  }
  return <EntryCard entry={entry} />
}

const initialValues = {
  type: 'Article',
  authors: '',
  title: '',
  mainTitle: '',
  date: '',
  subTitle: '',
  journal: '',
  series: '',
  number: '',
  volume: '',
  publisher: '',
  location: '',
  ISBN: '',
  pageTotal: '',
  pubstate: '',
  id: '',
  doi: '',
  issue: '',
};

/** The body of the `DIY` component. This is _not_ a component, it is
 * a function to be used as the children of `Formik`.
 * @param values The values provided by Formik.
 */
function diyBody({ values }: { values: FormValues}): JSX.Element {
  return (
    <>
      <FormattedEntry />
      <br />
      <Form>
        <GenericPreFields />
        <SpecificFields type={values.type} />
        <GenericPostFields />
        <BForm.Group>
          <Button
            type="reset"
            variant="secondary"
            block
          >
            <FontAwesomeIcon icon="trash-alt" /> Clear
          </Button>
        </BForm.Group>
      </Form>
    </>
  )
}

/** The DIY component: turns values inputted in a form into a formatted entry.
 */
const DIY: React.FC<{}> = () => {
  return (
    <>
      <h1>Do It Yourself</h1>
      <Alert variant="warning">Not feature complete yet!</Alert>
      <Formik
        initialValues={initialValues}
        onSubmit={() => { return }}
      >
        {diyBody}
      </Formik>
    </>
  );
};
export default DIY;
