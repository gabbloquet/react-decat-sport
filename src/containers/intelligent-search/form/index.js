import React, {useState} from "react";
import LocationResearch from "../../../components/location-research";
import QueryResearch from "../../../components/query-research";
import {MainContent, Step} from "../../../utils/styles/section";
import {StepTitle} from "../../../utils/styles/title";

const IntelligentSearchForm = ({setSports}) => {
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState(false);
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });
  const [location, setLocation] = useState("Lille");
  const [query, setQuery] = useState("Run");

  return (
    <React.Fragment>
      <Step>
        <StepTitle>Step 1</StepTitle>
        <QueryResearch
          value={query}
          onChange={setQuery}/>
      </Step>

      <Step>
        <StepTitle>Step 2</StepTitle>
        <LocationResearch
          coordinates={coordinates}
          onCoordinatesChange={setCoordinates}
          location={location}
          onLocationChange={setLocation}/>
      </Step>
    </React.Fragment>
  );
};

export default IntelligentSearchForm;
