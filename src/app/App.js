import React, { useState, useEffect } from 'react';
import LocationResearch from '../Location-research';
import {feedSports} from '../services/decathlon-sports-api'
import {loadLocationInformations, locationDataToCoodinates} from '../services/google-maps-api'
import SportsMenu from '../sports-menu'
import {Main, Title} from '../utils/styles/components';

const App = () => {
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState(false);
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });
  const [sports, setSports] = useState([]);
  const [location, setLocation] = useState("Lille");

  useEffect(()  => {
    if(coordinates && coordinates.lat !== 0 && coordinates.lng !== 0) {
      setIsLoading(true);
      feedSports(coordinates)
        .then(sports => {
          setSports(sports);
          setIsLoading(false);
        })
        .catch(
          setError(true)
        );
    }
  }, [coordinates]);

  useEffect( () => {
    setIsLoading(true);
    loadLocationInformations(location)
      .then( locationData => {
          if(locationData !== []) {
            const coordinates = locationDataToCoodinates(locationData);
            feedSports(coordinates).then(sports => {
              setSports(sports);
              setIsLoading(false);
            });
          } else {
            setError(true);
          }
        }
      )
  },[location]);

  return (
    <Main>
      <div>
        <img src="https://www.decathlon.fr/assets/images/decathlon-logo.svg" alt="Decathlon magasin de sport"/>
        <Title>Which sports could be worth to invest in my city ?</Title>
      </div>

      <LocationResearch
        coordinates={coordinates}
        onCoordinatesChange={setCoordinates}
        location={location}
        onLocationChange={setLocation}/>

      {!isLoading && !error ? (
        <SportsMenu sports={sports}/>
      ) : error ? 'Impossible to find informations for this location ' : 'Loading...'
      }
    </Main>
  );


};

export default App;
