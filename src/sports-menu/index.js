import React from "react";
import {Cellule, SportLink, SportMiniature, Menu} from "../utils/styles/components";

const SportsMenu =  ({sports}) => {

  function handleOpen(event) {
    event.persist();
    console.log(event)
  }

  return (
    <Menu>
      {
        sports.map((sport, key) => (
              <Cellule key={key} value={sport} onClick={handleOpen}>
                <SportMiniature src={sport.icon}/>
                <SportLink value={sport} >{key + 1} : {sport.name}</SportLink>
              </Cellule>
          )
        )
      }
    </Menu>
  )
};

export default SportsMenu;
