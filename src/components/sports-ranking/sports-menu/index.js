import React from "react";
import {Menu, SportLink} from "../../../utils/styles/section";
import {Cellule, RightArrow} from "../../../utils/styles/button";
import {SportMiniature} from "../../../utils/styles/image";

const SportsMenu = ({sports, selectSport}) => {

  return (
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
  );
};

export default SportsMenu;
