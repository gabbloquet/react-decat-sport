import React, { useState, useEffect } from 'react';
import LocationResearch from '../../components/location-research';
import {getSports} from '../../services/sports'
import SportsRanking from '../../components/sports-ranking'
import {Loader, Main, SportMiniature, Title} from '../../utils/styles/components';
import getCoordinates from "../../services/location";

const Homepage = () => {
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState(false);
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });
  const [sports, setSports] = useState([]);
  const [location, setLocation] = useState("Lille");

  useEffect(()  => {
    setError(false);
    if(coordinates && (coordinates.lat !== 0 || coordinates.lng !== 0)) {
      setIsLoading(true);
      getSports(coordinates)
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
      <div>
        <img src="https://www.decathlon.fr/assets/images/decathlon-logo.svg" alt="Decathlon magasin de sport"/>
        <Title>What sports to invest in ?</Title>
      </div>

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

export default Homepage;
