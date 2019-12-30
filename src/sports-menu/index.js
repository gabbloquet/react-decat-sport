import React, {useState} from "react";
import {Cellule, LeftArrow, Menu, ReturnButton, RightArrow, SportLink, SportMiniature} from "../utils/styles/components";
import {loadSportInformation} from "../services/decathlon-sports-api"

const SportsMenu = ({sports}) => {
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
      <Menu>
        {
          sports.map((sport, key) => (
              <Cellule key={key} onClick={() => selectSport(sport)}>
                <SportMiniature
                  src={sport.icon ? sport.icon : 'https://toppng.com/uploads/preview/oint-interrogation-point-d-interrogation-115628635697ubaj1toa2.png'}/>
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
  )
};

export default SportsMenu;
