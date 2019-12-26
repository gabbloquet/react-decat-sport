import React, { useState, useEffect } from 'react';
import CoordinateSelector from '../CoordinateSelector';
import {feedSports} from '../services/sports-api-decathlon/index'
import {Main, Table, Title} from '../utils/styles/components';

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
    <Main>
      <Title>Decathlon Sport Location</Title>
      <CoordinateSelector value={coordinates} onChange={setCoordinates}/>
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
