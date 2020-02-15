import React from 'react';
import {Main, MainContent} from "../../utils/styles/section";
import Leftbar from "../../components/leftbar";
import RightBar from "../../components/rightbar";

const SportPlaces = () => {
  return (
    <Main>
      <Leftbar
        title='Sport Places'
        description='Find all the sport places meeting specific criterias.'/>

      <MainContent>
        <img src='https://www.lightingparis.fr/wp-content/uploads/2016/12/en-cours-de-construction.jpg' alt='Construction'/>
      </MainContent>

      <RightBar/>
    </Main>
  );
};

export default SportPlaces;
