import React, { useState, useEffect } from 'react';
import CoordinateSelector from '../CoordinateSelector';
import urlConstructor from "../utils/helper";

// A mettre dans une partie "services"
const loadSportsInformations = coordinates => {
  const url = urlConstructor(
    {
      baseUrl : 'https://sports.api.decathlon.com',
      apiEndpoint : '/sports/recommendations/geolocation',
      queryParams : { coordinates: coordinates.x + ',' + coordinates.y }
    }
  );

  return fetch(url).then(response => response.json());
}

const App = () => {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  useEffect(() => {
    loadSportsInformations(coordinates)
      .then(data => console.log(data));
  }, [coordinates]);

  return (
    <React.Fragment>
      <h1>Arras Decathlon Sport</h1>
      <CoordinateSelector value={coordinates} onChange={setCoordinates}/>
    </React.Fragment>
  );


};

export default App;
