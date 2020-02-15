import React from 'react';
import {Description, Sidebar, Title} from "../../utils/styles/components";

const Leftbar = ({title, description}) => {
  return (
    <Sidebar>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Sidebar>
  );
};

export default Leftbar;
