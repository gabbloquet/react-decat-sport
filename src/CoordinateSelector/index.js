import React from "react";
import {Button, Input, Form, Label} from './style';

const CoordinateSelector = (onCoordinateSelection) => {




  return (
    <Form onSubmit={ event => onCoordinateSelection(event) }>
      <Label>
        X:
        <Input type="text" name="x" />
      </Label>
      <Label>
        Y:
        <Input type="text" name="y" />
      </Label>
      <Button type="submit">Submit</Button>
    </Form>
  );

};

export default CoordinateSelector;
