import React, {useState} from "react";
import {Main, MainContent} from "../../utils/styles/section";
import Leftbar from "../../components/leftbar";
import LocationResearch from "../../components/location-research";
import RightBar from "../../components/rightbar";
import IntelligentSearchForm from "./form";
import {Title} from "../../utils/styles/title";

const IntelligentSearch = () => {
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState(false);
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });
  const [sports, setSports] = useState([]);
  const [location, setLocation] = useState("Lille");

  return (
    <Main>
      <Leftbar
        title='Intelligent Search'
        description="Given coordinates and a search query: it will show you with a list of relevant sports by searching through: synonyms, lexical champ, tags and descriptions."/>

      <MainContent>
        <IntelligentSearchForm
          setSports={setSports}/>
      </MainContent>

        <RightBar
          isLoading={isLoading}
          sports={sports}
          error={error}/>
    </Main>
  );
};

export default IntelligentSearch;
