import React, {useState} from "react";
import {Button, Input, Form, Label} from './style';

const CoordinateSelector = ({ value, onChange }) => {
  const [newValue, setNewValue] = useState(value);

  const handleSubmit = event => {
    onChange(newValue);
    event.preventDefault();
  }

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
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default CoordinateSelector;
