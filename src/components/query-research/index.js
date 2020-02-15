import React, {useState} from "react";
import {Form, Input, Label} from "../../utils/styles/form";
import {ButtonBlue} from "../../utils/styles/button";
import {SectionTitle} from "../../utils/styles/title";
import {LocationCard} from "../../utils/styles/section";

const QueryResearch = ({value, onChange}) => {
  const [query, setQuery] = useState(value);

  const handleSubmit = event => {
    onChange(query);
    event.preventDefault();
  };

  return (
    <React.Fragment>
      <LocationCard>
        <SectionTitle>Sports, Sports family, practices...</SectionTitle>
        <Form onSubmit={handleSubmit}>
          <Label>
            Query
            <Input type="text" value={query} onChange={e => setQuery( e.target.value )}/>
          </Label>
          <ButtonBlue type="submit">Submit</ButtonBlue>
        </Form>
      </LocationCard>
    </React.Fragment>
  );
};

export default QueryResearch;
