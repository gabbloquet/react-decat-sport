import React, {useEffect, useState} from "react";
import LocationResearch from "../../../components/location-research";
import QueryResearch from "../../../components/query-research";
import {Step} from "../../../utils/styles/section";
import getCoordinates from "../../../services/location";
import {getSportsWithIntelligentSearch} from "../../../services/sports";

const IntelligentSearchForm = ({setSports, setIsLoading, setError}) => {
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });
  const [location, setLocation] = useState("Lille");
  const [query, setQuery] = useState("Water");

  useEffect( () => {
    setIsLoading(true);
    setError(false);

    getCoordinates(location)
      .then( coords => setCoordinates(coords));
  },[location]);

  useEffect(()  => {
    setError(false);
    if(coordinates && (coordinates.lat !== 0 || coordinates.lng !== 0)) {
      setIsLoading(true);
      getSportsWithIntelligentSearch(query, coordinates)
        .then(researchSports => researchSports ? setSports(researchSports) : setError(true));
      setIsLoading(false);
    } else {
      setError(true);
    }
  }, [coordinates, query]);

  return (
    <React.Fragment>
      <Step>
        <QueryResearch
          value={query}
          onChange={setQuery}/>
      </Step>

      <Step>
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
