import {loadSportInformation, loadSportsInformations} from "./decathlon-sports-api";
import SportsMapper from './mapper';

const getSports = coordinates => {
  return loadSportsInformations(coordinates)
    .then(data => SportsMapper(data));
};

const getSport = sportId => {
  return loadSportInformation(sportId);
};

export {getSport, getSports};
