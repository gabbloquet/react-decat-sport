import React from 'react';
import {Main, MainContent} from "../../utils/styles/section";
import Leftbar from "../../components/leftbar";
import RightBar from "../../components/rightbar";

const Groups = () => {
  return (
    <Main>
      <Leftbar
        title='Groups'
        description="Retrieves all sport groups and allows users to have a bird's eye view on how our sports are organized and related to one another."/>

      <MainContent>
        <img src='https://www.lightingparis.fr/wp-content/uploads/2016/12/en-cours-de-construction.jpg' alt='Construction'/>
      </MainContent>

      <RightBar/>
    </Main>
  );
};

export default Groups;
