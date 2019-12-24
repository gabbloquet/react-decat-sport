import React, { useState } from 'react';
import CoordinateSelector from '../CoordinateSelector';
import urlConstructor from "../utils/helper";

const App = () => {
  // const [sports, setSports] = useState([]);

  function loadSportInformations(coordinate){
    console.log(coordinate);
    const url = urlConstructor(
      {
        baseUrl : 'https://sports.api.decathlon.com',
        apiEndpoint : '/sports/recommendations/geolocation',
        queryParams : { coordinates: coordinate.x + ',' + coordinate.y }
      }
    );
    fetch(url)
      .then(response => response.json())
      .then(data =>  console.log(data));
  }

  return (
    <React.Fragment>
      <h1>Arras Decathlon Sport</h1>
      <CoordinateSelector onCoordinateSelection={ loadSportInformations }/>
    </React.Fragment>
  );


};

export default App;
