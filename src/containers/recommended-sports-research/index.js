import React, { useState, useEffect } from 'react';
import LocationResearch from '../../components/location-research';
import {getRecommandedSports} from '../../services/sports'
import SportsRanking from '../../components/sports-ranking'
import getCoordinates from "../../services/location";
import Leftbar from "../../components/leftbar";
import {SportMiniature} from "../../utils/styles/image";
import {Loader} from "../../utils/styles/loader";
import {Main} from "../../utils/styles/section";

const RecommendedSportsResearch = () => {
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

      <LocationResearch
        coordinates={coordinates}
        onCoordinatesChange={setCoordinates}
        location={location}
        onLocationChange={setLocation}/>

      {!isLoading && !error && sports && sports.length > 0 ? (
        <SportsRanking sports={sports}/>
      ) : error ?
      (
        <div>
          <SportMiniature src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Warning_icon.svg/420px-Warning_icon.svg.png"/>
          <p>Unable to find sports information for this location</p>
        </div>
      ) :
        <div>
          <Loader/>
        </div>
      }
    </Main>
  );


};

export default RecommendedSportsResearch;
