import React, { useState, useEffect } from 'react';
import LocationResearch from '../LocationResearch';
import {feedSports} from '../services/decathlon-sports-api'
import {loadLocationInformations, locationDataToCoodinates} from '../services/google-maps-api'
import {Main, Table, Title} from '../utils/styles/components';

const App = () => {
  const [isLoading, setIsLoading] = useState();
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });
  const [sports, setSports] = useState([]);
  const [location, setLocation] = useState("Lille");

  useEffect(()  => {
    if(coordinates && coordinates.lat !== 0 && coordinates.lng !== 0) {
      setIsLoading(true);
      feedSports(coordinates).then(sports => {
        setSports(sports);
        setIsLoading(false);
      });
    }
  }, [coordinates]);

  useEffect( () => {
    setIsLoading(true);
    loadLocationInformations(location)
      .then( locationData => {
          const coordinates = locationDataToCoodinates(locationData);
          feedSports(coordinates).then(sports => {
            setSports(sports);
            setIsLoading(false);
          });
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
      {!isLoading ? (<Table>
      <thead>
        <tr>
          <th>Ranking</th>
          <th> Sport </th>
        </tr>
      </thead>
      <tbody>
        {
          sports.map((sport, index) => (
              <tr key={sport.name}>
                <td>{index + 1}</td>
                <td>{sport.name}</td>
              </tr>
            )
          )
        }
      </tbody>
      </Table>) :
        'Loading...'
      }
    </Main>
  );


};

export default App;
