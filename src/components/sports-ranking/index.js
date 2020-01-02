import React, {useState} from "react";
import {loadSportInformation} from "../../services/decathlon-sports-api"
import SportsMenu from "./sports-menu";
import SportInformations from "./sport-informations";

const SportsRanking = ({sports}) => {
  const [selectedSport, setSelectedSport] = useState();
  const [children, setChildren] = useState([]);

  function selectSport(sport) {
    if(sport.childrens.length > 0) {
      Promise.all(sport.childrens.map(child => loadSportInformation(child.data.id)))
        .then(responses => {
          setChildren(responses.map(({data: {attributes}}) => attributes));
          setSelectedSport(sport);
        });
    } else {
      setChildren([]);
      setSelectedSport(sport);
    }
  }

  function deselectSport() {
    setSelectedSport(null);
  }

  return (
    !selectedSport ? (
      <SportsMenu sports={sports} selectSport={selectSport}/>
    ) : (
      <SportInformations sport={selectedSport} deselectSport={deselectSport} children={children}/>
    )
  )
};

export default SportsRanking;
