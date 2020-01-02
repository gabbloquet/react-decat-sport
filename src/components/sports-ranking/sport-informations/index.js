import React from "react";
import {LeftArrow, Menu, ReturnButton, SportMiniature} from "../../../utils/styles/components";

const SportInformations = ({sport, deselectSport, children}) => {
  return (
    <Menu>
      <ReturnButton onClick={deselectSport}>
        Retour
        <LeftArrow/>
      </ReturnButton>
      <h2>{sport.name}</h2>
      <SportMiniature src={sport.icon}/>
      <p>{sport.description}</p>
      <h2>Sports enfants : </h2>
      <ul>
        {
          children.map(child => (
              <li key={child.slug}>{child.name}</li>
            )
          )
        }
      </ul>
    </Menu>
  )
};

export default SportInformations;
