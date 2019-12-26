import React from "react";
import {Table} from "../utils/styles/components";

const SportsMenu =  ({sports}) => {
  return (
    <Table>
      <thead>
      <tr>
        <th>Ranking</th>
        <th>Sport</th>
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
    </Table>
  )
};

export default SportsMenu;
