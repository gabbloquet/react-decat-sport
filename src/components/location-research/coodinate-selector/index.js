import React, {useState} from "react";
import {Form, Input, Label} from "../../../utils/styles/form";
import {ButtonBlue} from "../../../utils/styles/button";

const Index = ({ value, onChange }) => {
  const [newValue, setNewValue] = useState(value);

  const handleSubmit = event => {
    onChange(newValue);
    event.preventDefault();
  };

  return (
    <React.Fragment>
      <Form onSubmit={handleSubmit}>
        <Label>
          X
          <Input type="text" value={newValue.lat} onChange={e => setNewValue({ ...newValue, lat: e.target.value })}/>
        </Label>
        <Label>
          Y
          <Input type="text" value={newValue.lng} onChange={e => setNewValue({ ...newValue, lng: e.target.value })} />
        </Label>
        <ButtonBlue type="submit">Submit</ButtonBlue>
      </Form>
    </React.Fragment>
  );
};

export default Index;
