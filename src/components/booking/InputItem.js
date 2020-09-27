import React from 'react';
import { Form } from 'react-bootstrap';

const InputItem = ({ name, label, value, onChangeHandler }) => {
  return (
    <Form.Group controlId={name}>
      <Form.Label className="form-title">{label}</Form.Label>
      <Form.Control required className="font-bold py-4" name={name} type="text" value={value} onChange={(e) => onChangeHandler(e)} placeholder="Origin" />
    </Form.Group>
  );
};

export default InputItem;