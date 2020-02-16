import React from 'react';
import {Main, MainContent} from "../../utils/styles/section";
import Leftbar from "../../components/leftbar";
import RightBar from "../../components/rightbar";

const Sports = () => {
  return (
    <Main>
      <Leftbar
        title='Sports'
        description='A detailled collection of all the sports in our database.'/>

      <MainContent>
        <img src='https://www.lightingparis.fr/wp-content/uploads/2016/12/en-cours-de-construction.jpg' alt='Construction'/>
      </MainContent>

      <RightBar/>
    </Main>
  );
};

export default Sports;
