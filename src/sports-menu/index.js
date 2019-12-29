import React, {useState} from "react";
import {Cellule, LeftArrow, Menu, ReturnButton, RightArrow, SportLink, SportMiniature} from "../utils/styles/components";
import {loadSportInformation} from "../services/decathlon-sports-api"

const SportsMenu = ({sports}) => {
  const [selectedSport, setSelectedSport] = useState();

  function selectSport(sport) {
    if(sport.childrens.length > 0) {

      var tmpAssociatedSports = [];

      sport.childrens.map(
        (associatedSport, key) => (
            loadSportInformation(associatedSport.data.id)
              .then(response =>
                sport.childrens[key].data.name = response["data"]["attributes"].name
              )
        )
      );

      sport.associatedSports = tmpAssociatedSports;

    } else {
      sport.associatedSports = [];
    }

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
        <ul>
        {
          selectedSport.childrens.map((associatedSport, key) => (
              console.log(associatedSport)
              // console.log(associatedSport.data.name)
              // <li key={key}>{associatedSport.data.name}</li>
            )
          )
        }
        </ul>
      </Menu>
    )
  )
};

export default SportsMenu;
