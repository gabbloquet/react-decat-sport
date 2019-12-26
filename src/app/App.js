import React, { useState, useEffect } from 'react';
import CoordinateSelector from '../CoordinateSelector';
import {feedSports} from '../services/sports-api-decathlon/index'

const App = () => {
  const [isLoading, setIsLoading] = useState();
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const [sports, setSports] = useState([]);

  useEffect(()  => {
    setIsLoading(true);
    feedSports(coordinates).then(sports => {
      setSports(sports);
      setIsLoading(false);
    });
  }, [coordinates]);

  return (
    <React.Fragment>
      <h1>Arras Decathlon Sport</h1>
      <CoordinateSelector value={coordinates} onChange={setCoordinates}/>
      {!isLoading ? (<table>
      <thead>
        <tr>

          <th> Sport </th>
        </tr>
      </thead>
        <tbody>
      {
        sports.map(sport => (
            <tr key={sport.name}>
              <td>{sport.name}</td>
            </tr>
          )
        )
      }
        </tbody>
      </table>) :
        'Loading...'
      }
    </React.Fragment>
  );


};

export default App;
