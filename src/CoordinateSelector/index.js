import React, {useState} from "react";
import {ButtonYellow, Input, Form, Label} from '../utils/components';

const CoordinateSelector = ({ value, onChange }) => {
  const [newValue, setNewValue] = useState(value);

  const handleSubmit = event => {
    onChange(newValue);
    event.preventDefault();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        X:
        <Input type="text" value={newValue.x} onChange={e => setNewValue({ ...newValue, x: e.target.value })}/>
      </Label>
      <Label>
        Y:
        <Input type="text" value={newValue.y} onChange={e => setNewValue({ ...newValue, y: e.target.value })} />
      </Label>
      <ButtonYellow type="submit">Submit</ButtonYellow>
    </Form>
  );
};

export default CoordinateSelector;
