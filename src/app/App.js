import React, { useState, useEffect } from 'react';
import CoordinateSelector from '../CoordinateSelector';
import loadSportsInformations from '../services/sports-api-decathlon'

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
