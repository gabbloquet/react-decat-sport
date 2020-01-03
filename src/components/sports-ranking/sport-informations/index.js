import React from "react";
import {LeftArrow, Menu, ReturnButton, SportMiniature} from "../../../utils/styles/components";
import List from "../../../utils/components/list";

const SportInformations = ({children, deselectSport, relatedSports, sport}) => {
  return (
    <Menu>
      <ReturnButton onClick={deselectSport}>
        Retour
        <LeftArrow/>
      </ReturnButton>

      <h1>{sport.name}</h1>
      <SportMiniature
        src={ sport.icon ?
          sport.icon :
          'https://toppng.com/uploads/preview/oint-interrogation-point-d-interrogation-115628635697ubaj1toa2.png'}/>
      <p>{sport.description}</p>

      <h2>Sports associés</h2>
      <List elements={relatedSports}/>

      <h2>Sports enfants</h2>
      <List elements={children}/>
    </Menu>
  )
};

export default SportInformations;
