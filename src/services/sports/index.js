import {loadSportInformation, loadRecommandedSports} from "./decathlon-sports-api";
import SportsMapper from './sportMapper';

const getRecommandedSports = coordinates => {
  return loadRecommandedSports(coordinates)
    .then(data => SportsMapper(data));
};

const getSport = sportId => {
  return loadSportInformation(sportId);
};

export {getSport, getRecommandedSports};
