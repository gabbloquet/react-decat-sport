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
      <SportMiniature src={sport.icon}/>
      <p>{sport.description}</p>

      <h2>Sports associés</h2>
      <List elements={relatedSports} key={'slug'} field={'name'}/>

      <h2>Sports enfants</h2>
      <List elements={children} key={'slug'} field={'name'}/>
    </Menu>
  )
};

export default SportInformations;
