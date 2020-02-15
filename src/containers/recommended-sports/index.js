import React, { useState, useEffect } from 'react';
import LocationResearch from '../../components/location-research';
import {getRecommandedSports} from '../../services/sports'
import getCoordinates from "../../services/location";
import Leftbar from "../../components/leftbar";
import {Main, MainContent} from "../../utils/styles/section";
import RightBar from "../../components/rightbar";

const RecommendedSports = () => {
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState(false);
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });
  const [sports, setSports] = useState([]);
  const [location, setLocation] = useState("Lille");

  useEffect(()  => {
    setError(false);
    if(coordinates && (coordinates.lat !== 0 || coordinates.lng !== 0)) {
      setIsLoading(true);
      getRecommandedSports(coordinates)
        .then(researchSports => researchSports ? setSports(researchSports) : setError(true));
      setIsLoading(false);
    } else {
      setError(true);
    }
  }, [coordinates]);

  useEffect( () => {
    setIsLoading(true);
    setError(false);

    getCoordinates(location)
      .then( coords => setCoordinates(coords));
  },[location]);

  return (
    <Main>
      <Leftbar
        title='Recommended Sports Research'
        description="From the coordinates, it'll find the nearest city with valid contextual data and return the most popular sports for your desired application."/>

      <MainContent>
        <LocationResearch
          coordinates={coordinates}
          onCoordinatesChange={setCoordinates}
          location={location}
          onLocationChange={setLocation}/>
      </MainContent>

      <RightBar
        isLoading={isLoading}
        sports={sports}
        error={error}
      />
    </Main>
  );


};

export default RecommendedSports;
