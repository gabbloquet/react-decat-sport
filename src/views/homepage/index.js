import React, { useState, useEffect } from 'react';
import LocationResearch from '../../components/location-research';
import {feedSports} from '../../services/decathlon-sports-api'
import {loadLocationInformations, locationDataToCoodinates} from '../../services/google-maps-api'
import SportsMenu from '../../components/sports-menu'
import {Main, SportMiniature, Title} from '../../utils/styles/components';

const Homepage = () => {
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState(false);
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });
  const [sports, setSports] = useState([]);
  const [location, setLocation] = useState("Lille");

  useEffect(()  => {
    setError(false);
    if(coordinates && coordinates.lat !== 0 && coordinates.lng !== 0) {
      setIsLoading(true);
      feedSports(coordinates)
        .then(sports => {
          setSports(sports);
          setIsLoading(false);
        })
    }
  }, [coordinates]);

  useEffect( () => {
    setIsLoading(true);
    setError(false);
    loadLocationInformations(location)
      .then( locationData => {
          if(locationData !== []) {
            const coordinates = locationDataToCoodinates(locationData);
            feedSports(coordinates)
              .then(sports => {
                if(sports && sports.length > 0)
                  setSports(sports);
                else
                  setError(true);
                setIsLoading(false);
              })
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
      ) : error ?
      (
        <div>
          <SportMiniature src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Warning_icon.svg/420px-Warning_icon.svg.png"/>
          <p>Unable to find information from this sport for this location</p>
        </div>
      )
      : 'Loading...'
      }
    </Main>
  );


};

export default Homepage;
