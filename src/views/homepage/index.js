import React from 'react';
import {Main} from "../../utils/styles/section";
import {Title} from "../../utils/styles/title";
import {HomepageForm} from "../../containers/HomepageForm";

const Homepage = () => {
  return (
    <Main>
      <Title>Bienvenue dans le Front de consommation des APIs Decathlon</Title>
      <HomepageForm/>
    </Main>
  );
};

export default Homepage;
