import React, {useState} from "react";
import {ButtonBlue, Form, Input, Label} from "../../../utils/styles/components";

const Index = ({value, onChange}) => {
  const [location, setLocation] = useState(value);

  const handleSubmit = event => {
    onChange(location);
    event.preventDefault();
  };

  return (
    <React.Fragment>
      <Form onSubmit={handleSubmit}>
        <Label>
          Location
          <Input type="text" value={location} onChange={e => setLocation(e.target.value )} />
        </Label>
        <ButtonBlue type="submit">Submit</ButtonBlue>
      </Form>
    </React.Fragment>
  );
};

export default Index;
