import React, {useState} from "react";
import {Main, MainContent} from "../../utils/styles/section";
import Leftbar from "../../components/leftbar";
import RightBar from "../../components/rightbar";
import IntelligentSearchForm from "./form";

const IntelligentSearch = () => {
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState(false);
  const [sports, setSports] = useState([]);

  return (
    <Main>
      <Leftbar
        title='Intelligent Search'
        description="Given coordinates and a search query: it will show you with a list of relevant sports by searching through: synonyms, lexical champ, tags and descriptions."/>

      <MainContent>
        <IntelligentSearchForm
          setIsLoading={setIsLoading}
          setSports={setSports}
          setError={setError}/>
      </MainContent>

      <RightBar
        isLoading={isLoading}
        sports={sports}
        error={error}/>
    </Main>
  );
};

export default IntelligentSearch;
