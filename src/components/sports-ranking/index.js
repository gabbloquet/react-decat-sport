import React, {useState} from "react";
import SportsMenu from "./sports-menu";
import SportInformations from "./sport-informations";
import {feedChildren, feedRelatedSports} from "./service";

const SportsRanking = ({sports}) => {
  const [selectedSport, setSelectedSport] = useState();
  const [children, setChildren] = useState([]);
  const [relatedSports, setRelatedSports] = useState([]);

  function selectSport(sport) {
    feedChildren(sport, setChildren);
    feedRelatedSports(sport, setRelatedSports);
    setSelectedSport(sport);
  }

  function deselectSport() {
    setSelectedSport(null);
  }

  return (
    !selectedSport ? (
      <SportsMenu sports={sports} selectSport={selectSport}/>
    ) : (
      <SportInformations
        sport={selectedSport}
        deselectSport={deselectSport}
        children={children}
        relatedSports={relatedSports}/>
    )
  )
};

export default SportsRanking;
