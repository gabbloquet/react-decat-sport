import React, {useState} from "react";
import {Cellule, LeftArrow, Menu, ReturnButton, RightArrow, SportLink, SportMiniature} from "../utils/styles/components";
import {loadSportInformation} from "../services/decathlon-sports-api"

const SportsMenu = ({sports}) => {
  const [selectedSport, setSelectedSport] = useState();

  function selectSport(sport) {
    sport.childrens.map(
      (associatedSport, key) => (
          loadSportInformation(associatedSport.data.id)
            .then(response =>
              sports.childrens[key].name = response["data"]["attributes"].name
            )
      )
    );
    console.log(sport)
    setSelectedSport(sport);
  }

  function deselectSport() {
    setSelectedSport(null);
  }

  return (
    !selectedSport ? (
      <Menu>
        {
          sports.map((sport, key) => (
              <Cellule key={key} onClick={() => selectSport(sport)}>
                <SportMiniature src={sport.icon}/>
                <SportLink>
                  {key + 1} : {sport.name}
                  <RightArrow/>
                </SportLink>
              </Cellule>
            )
          )
        }
      </Menu>
    ) : (
      <Menu>
        <ReturnButton onClick={deselectSport}>
          Retour
          <LeftArrow/>
        </ReturnButton>
        <h2>{selectedSport.name}</h2>
        <SportMiniature src={selectedSport.icon}/>
        <p>{selectedSport.description}</p>
        <h2>Sports associés</h2>
        {
          selectedSport.childrens.map((associatedSport, key) => (
              <p key={key} >{associatedSport.name}</p>
            )
          )
        }
      </Menu>
    )
  )
};

export default SportsMenu;
