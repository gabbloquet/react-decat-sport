import React from 'react';
import {Sidebar} from "../../utils/styles/section";
import {Title} from "../../utils/styles/title";
import {Description} from "../../utils/styles/paragraph";

const Leftbar = ({title, description}) => {
  return (
    <Sidebar>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Sidebar>
  );
};

export default Leftbar;
